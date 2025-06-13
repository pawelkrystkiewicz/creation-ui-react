import { describe, it, expect } from 'vitest'
import { _isOptionEqualToValue } from '../is-equal-to-value'

describe('_isOptionEqualToValue', () => {
  ;[
    {
      description: 'should return true for primitive equality',
      input: ['a', 'a'],
      expected: true,
    },
    {
      description: 'should return true for number equality',
      input: [1, 1],
      expected: true,
    },
    {
      description: 'should return false for different primitives',
      input: ['a', 'b'],
      expected: false,
    },
    {
      description: 'should return true if option is in value array',
      input: ['a', ['b', 'a', 'c']],
      expected: true,
    },
    {
      description: 'should return false if option is not in value array',
      input: ['x', ['y', 'z']],
      expected: false,
    },
    {
      description: 'should return false for null value',
      input: ['a', null],
      expected: false,
    },
    {
      description: 'should return false for undefined value',
      input: ['a', undefined],
      expected: false,
    },
    {
      description: 'should return true for same object reference',
      input: (() => {
        const obj = { id: 1 }
        return [obj, obj]
      })(),
      expected: true,
    },
    {
      description: 'should return false for different object references',
      input: [{ id: 1 }, { id: 1 }],
      expected: false,
    },
    {
      description: 'should return true if object is in value array by reference',
      input: (() => {
        const obj = { id: 1 }
        return [obj, [{ id: 1 }, obj]]
      })(),
      expected: true,
    },
  ].forEach(({ description, input, expected }) => {
    it(description, () => {
      // @ts-ignore
      expect(_isOptionEqualToValue(...input)).toStrictEqual(expected)
    })
  })
})