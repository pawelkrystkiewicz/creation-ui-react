import { describe, expect, test } from 'vitest'
import { getTimeInputHandler } from '../handle-time-input'

describe('handleTimeInput', () => {
  const handler = getTimeInputHandler(24)
  ;[
    {
      description: 'Increment hours in 24-hour format',
      input: { key: 'ArrowUp', cursorPosition: 1, hours: 23, minutes: 30 },
      expected: { hours: 0, minutes: 30 },
    },
    {
      description: 'Increment minutes in 24-hour format',
      input: { key: 'ArrowUp', cursorPosition: 3, hours: 10, minutes: 59 },
      expected: { hours: 10, minutes: 0 },
    },
    {
      description: 'Decrement hours in 24-hour format',
      input: { key: 'ArrowDown', cursorPosition: 1, hours: 0, minutes: 45 },
      expected: { hours: 23, minutes: 45 },
    },
    {
      description: 'No change for unsupported key',
      input: { key: 'Enter', cursorPosition: 1, hours: 12, minutes: 30 },
      expected: undefined,
    },
    // {
    //   description: 'Handle manual number input',
    //   input: { key: '1', cursorPosition: 1, hours: 1, minutes: 30 },
    //   expected: { hours: 1, minutes: 30 },
    // },
  ].forEach(({ description, input, expected }) => {
    test(description, () => {
      expect(handler(input)).toEqual(expected)
    })
  })
})
