import { describe, it, expect } from 'vitest'
import { isEmpty } from '../isEmpty'

describe('isEmpty', () => {
  ;[
    {
      description: 'should return true for [null]',
      input: null,
      expected: true,
    },
    {
      description: 'should return true for [undefined]',
      input: undefined,
      expected: true,
    },
    {
      description: 'should return true for [empty array]',
      input: [],
      expected: true,
    },
    {
      description: 'should return false for [non-empty array]',
      input: [1, 2, 3],
      expected: false,
    },
    {
      description: 'should return true for [empty object]',
      input: {},
      expected: true,
    },
    {
      description: 'should return false for [non-empty object]',
      input: { key: 'value' },
      expected: false,
    },
    {
      description: 'should return true for [empty string]',
      input: '',
      expected: true,
    },
    {
      description: 'should return true for [empty string with whitespace]',
      input: '   ',
      expected: true,
    },
    {
      description: 'should return false for [non-empty string]',
      input: 'test',
      expected: false,
    },
    {
      description: 'should return true for [zero]',
      input: 0,
      expected: false,
    },
    {
      description: 'should return false for [non-zero number]',
      input: 1,
      expected: false,
    },
    {
      description: 'should return true for [false]',
      input: false,
      expected: false,
    },
    {
      description: 'should return false for [true]',
      input: true,
      expected: false,
    },
    {
      description: 'should return true for [NaN]',
      input: NaN,
      expected: false,
    },
  ].forEach(({ description, input, expected }) => {
    it(description, () => {
      expect(isEmpty(input)).toStrictEqual(expected)
    })
  })
})
