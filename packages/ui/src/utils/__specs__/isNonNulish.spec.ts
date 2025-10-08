import { describe, it, expect } from 'vitest'
import { isNonNulish } from '../isNonNulish'

describe('isNonNulish', () => {
  describe('should return false for nullish values', () => {
    const nullishTestCases = [
      {
        description: 'should return false for null',
        input: null,
        expected: false,
      },
      {
        description: 'should return false for undefined',
        input: undefined,
        expected: false,
      },
    ]

    nullishTestCases.forEach(({ description, input, expected }) => {
      it(description, () => {
        expect(isNonNulish(input)).toBe(expected)
      })
    })
  })

  describe('should return true for all non-nullish values (including falsy ones)', () => {
    const truthyTestCases = [
      // Falsy but valid values
      {
        description: 'should return true for zero (0)',
        input: 0,
        expected: true,
      },
      {
        description: 'should return true for negative zero (-0)',
        input: -0,
        expected: true,
      },
      {
        description: 'should return true for empty string ("")',
        input: '',
        expected: true,
      },
      {
        description: 'should return true for false',
        input: false,
        expected: true,
      },
      {
        description: 'should return true for NaN',
        input: NaN,
        expected: true,
      },
      // Truthy values
      {
        description: 'should return true for positive number',
        input: 42,
        expected: true,
      },
      {
        description: 'should return true for negative number',
        input: -1,
        expected: true,
      },
      {
        description: 'should return true for non-empty string',
        input: 'hello',
        expected: true,
      },
      {
        description: 'should return true for whitespace-only string',
        input: '   ',
        expected: true,
      },
      {
        description: 'should return true for true',
        input: true,
        expected: true,
      },
      {
        description: 'should return true for empty array',
        input: [],
        expected: true,
      },
      {
        description: 'should return true for non-empty array',
        input: [1, 2, 3],
        expected: true,
      },
      {
        description: 'should return true for empty object',
        input: {},
        expected: true,
      },
      {
        description: 'should return true for non-empty object',
        input: { key: 'value' },
        expected: true,
      },
      {
        description: 'should return true for function',
        input: () => {},
        expected: true,
      },
      {
        description: 'should return true for Symbol',
        input: Symbol('test'),
        expected: true,
      },
      {
        description: 'should return true for BigInt zero',
        input: BigInt(0),
        expected: true,
      },
      {
        description: 'should return true for BigInt positive',
        input: BigInt(123),
        expected: true,
      },
    ]

    truthyTestCases.forEach(({ description, input, expected }) => {
      it(description, () => {
        expect(isNonNulish(input)).toBe(expected)
      })
    })
  })

  describe('type guard functionality', () => {
    it('should act as a type guard to narrow types', () => {
      const value: string | null | undefined = Math.random() > 0.5 ? 'test' : null

      if (isNonNulish(value)) {
        // TypeScript should now know that value is string, not string | null | undefined
        expect(typeof value).toBe('string')
        // This line should not cause TypeScript errors if type guard works correctly
        expect(value.length).toBeGreaterThanOrEqual(0)
      }
    })

    it('should work with union types', () => {
      const mixedValues: (string | number | boolean | null | undefined)[] = [
        'hello',
        42,
        true,
        false,
        0,
        '',
        null,
        undefined,
      ]

      const nonNullishValues = mixedValues.filter(isNonNulish)

      // Should filter out null and undefined, keeping everything else
      expect(nonNullishValues).toEqual(['hello', 42, true, false, 0, ''])
      expect(nonNullishValues).toHaveLength(6)
    })
  })

  describe('edge cases and special values', () => {
    it('should handle Infinity', () => {
      expect(isNonNulish(Infinity)).toBe(true)
      expect(isNonNulish(-Infinity)).toBe(true)
    })

    it('should handle Date objects', () => {
      expect(isNonNulish(new Date())).toBe(true)
      expect(isNonNulish(new Date('invalid'))).toBe(true) // Invalid date is still a Date object
    })

    it('should handle RegExp objects', () => {
      expect(isNonNulish(/test/)).toBe(true)
      expect(isNonNulish(new RegExp('test'))).toBe(true)
    })

    it('should handle class instances', () => {
      class TestClass {}
      expect(isNonNulish(new TestClass())).toBe(true)
    })
  })
})