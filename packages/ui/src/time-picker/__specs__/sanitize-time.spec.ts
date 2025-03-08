import { describe, expect, test } from 'vitest'
import { sanitizeTimeString } from '../sanitize-time'

describe('sanitizeTimeString', () => {
  describe('formatting behaviour [24]', () => {
    ;[
      {
        description: 'Converts formatted time to number',
        input: '13:34',
        expected: { hours: 13, minutes: 34 },
      },
      {
        description: 'Converts formatted time to number',
        input: '01:01',
        expected: { hours: 1, minutes: 1 },
      },
      {
        description: 'Converts formatted time to number',
        input: '12:--',
        expected: { hours: 12, minutes: 0 },
      },
      {
        description: 'Converts formatted time to number',
        input: '8:59',
        expected: { hours: 8, minutes: 59 },
      },
      {
        description: 'Converts formatted time to number',
        input: '--:17',
        expected: { hours: 0, minutes: 17 },
      },
      {
        description:
          'Resets hours to 0 when minutes or hours are beyond limits',
        input: '3127836923:2721559',
        expected: { hours: 0, minutes: 0 },
      },
    ].forEach(({ description, input, expected }) => {
      test(`${description}: ${input} -> ${expected.hours}h ${expected.minutes}m`, () => {
        expect(sanitizeTimeString(24)(input)).toEqual(expected)
      })
    })
  })
  describe('formatting behaviour [12]', () => {
    ;[
      {
        description: 'Converts formatted time to number',
        input: '13:34',
        expected: { hours: 1, minutes: 34 },
      },
      {
        description: 'Converts formatted time to number',
        input: '01:01',
        expected: { hours: 1, minutes: 1 },
      },
      {
        description: 'Converts formatted time to number',
        input: '12:--',
        expected: { hours: 12, minutes: 0 },
      },
      {
        description: 'Converts formatted time to number',
        input: '8:59',
        expected: { hours: 8, minutes: 59 },
      },
      {
        description:
          'Resets hours to 0 when minutes or hours are beyond limits',
        input: '3127836923:2721559',
        expected: { hours: 0, minutes: 0 },
      },
    ].forEach(({ description, input, expected }) => {
      test(`${description}: ${input} -> ${expected.hours}h ${expected.minutes}m`, () => {
        expect(sanitizeTimeString(12)(input)).toEqual(expected)
      })
    })
  })

  describe('general behaviour', () => {
    ;[
      {
        description: 'Returns null for empty string',
        input: '',
        expected: null,
      },
    ].forEach(({ description, input, expected }) => {
      test(description, () => {
        expect(sanitizeTimeString(24)(input)).toEqual(expected)
      })
    })
  })
})
