import { describe, it, expect } from 'vitest'
import { calculateSurplus } from '../utils'

describe('calculateSurplus', () => {
  ;[
    // Both total and limit provided
    {
      description: 'returns total - limit when both are provided',
      input: { count: 5, limit: 3, total: 10 },
      expected: 7,
    },
    {
      description: 'handles total === 0 with limit',
      input: { count: 5, limit: 3, total: 0 },
      expected: 0,
    },
    {
      description: 'handles limit === 0 with total',
      input: { count: 5, limit: 0, total: 10 },
      expected: 10,
    },
    {
      description: 'clamps negative result to 0 when total < limit',
      input: { count: 5, limit: 10, total: 5 },
      expected: 0,
    },

    // Only limit provided
    {
      description: 'returns count - limit when only limit is provided',
      input: { count: 10, limit: 3, total: undefined },
      expected: 7,
    },
    {
      description: 'handles limit === 0 (shows all as surplus)',
      input: { count: 5, limit: 0, total: undefined },
      expected: 5,
    },
    {
      description: 'clamps negative result to 0 when count < limit',
      input: { count: 3, limit: 10, total: undefined },
      expected: 0,
    },

    // Only total provided
    {
      description: 'returns total - count when only total is provided',
      input: { count: 3, limit: undefined, total: 10 },
      expected: 7,
    },
    {
      description: 'handles total === 0 (no surplus)',
      input: { count: 5, limit: undefined, total: 0 },
      expected: 0,
    },
    {
      description: 'clamps negative result to 0 when total < count',
      input: { count: 10, limit: undefined, total: 5 },
      expected: 0,
    },

    // Neither total nor limit provided
    {
      description: 'returns 0 when neither total nor limit is provided',
      input: { count: 5, limit: undefined, total: undefined },
      expected: 0,
    },
    {
      description: 'returns 0 with count === 0 and no total/limit',
      input: { count: 0, limit: undefined, total: undefined },
      expected: 0,
    },

    // Edge cases
    {
      description: 'handles all zeros',
      input: { count: 0, limit: 0, total: 0 },
      expected: 0,
    },
    {
      description: 'handles large numbers',
      input: { count: 1000, limit: 5, total: 10000 },
      expected: 9995,
    },
  ].forEach(({ description, input, expected }) => {
    it(description, () => {
      expect(calculateSurplus(input.count, input.limit, input.total)).toBe(
        expected,
      )
    })
  })
})
