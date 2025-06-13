import { describe, it, expect } from 'vitest'
import { getTop, stripDiacritics, createFilterOptions } from '../utils'

describe('getTop', () => {
  ;[
    {
      description: 'should return 4 for top',
      input: { placement: 'top', y: 10 },
      expected: 4,
    },
    {
      description: 'should return 16 for bottom',
      input: { placement: 'bottom', y: 10 },
      expected: 16,
    },
  ].forEach(({ description, input, expected }) => {
    it(description, () => {
      expect(getTop(input)).toStrictEqual(expected)
    })
  })
})

describe('stripDiacritics', () => {
  ;[
    {
      input: 'café',
      expected: 'cafe',
    },
    {
      input: 'żółć',
      expected: 'zołc',
    },
    {
      input: 'łódź',
      expected: 'łodz',
    },
    {
      input: 'zażółć gęślą jaźń',
      expected: 'zazołc gesla jazn',
    },
  ].forEach(({ input, expected }) => {
    it('should remove accents from string', () => {
      expect(stripDiacritics(input)).toStrictEqual(expected)
    })
  })
  it('returns original if normalize not available', () => {
    const orig = String.prototype.normalize
    // @ts-ignore
    String.prototype.normalize = undefined
    expect(stripDiacritics('café')).toBe('café')
    String.prototype.normalize = orig
  })
})

describe('createFilterOptions', () => {
  const options = ['Apple', 'Banana', 'Cherry']
  const getOptionLabel = (o: unknown) => o as string

  ;[
    {
      description: 'should filter by query (case-insensitive, default)',
      filter: createFilterOptions<string>({ matchFrom: 'any' }),
      options,
      query: 'a',
      expected: ['Apple', 'Banana'],
    },
    {
      description: 'should filter by query (case-sensitive)',
      filter: createFilterOptions<string>({
        ignoreCase: false,
        matchFrom: 'any',
      }),
      options,
      query: 'A',
      expected: ['Apple'],
    },
    {
      description: 'should filter by query (ignoreAccents)',
      filter: createFilterOptions<string>({ matchFrom: 'any' }),
      options: ['café', 'cafe'],
      query: 'cafe',
      expected: ['café', 'cafe'],
    },
    {
      description: 'should limit results',
      filter: createFilterOptions<string>({ limit: 1, matchFrom: 'any' }),
      options,
      query: 'a',
      expected: ['Apple'],
    },
    {
      description: 'should matchFrom start',
      filter: createFilterOptions<string>({ matchFrom: 'start' }),
      options,
      query: 'B',
      expected: ['Banana'],
    },
    {
      description: 'should trim query if trim=true',
      filter: createFilterOptions<string>({ trim: true, matchFrom: 'any' }),
      options,
      query: '  Apple  ',
      expected: ['Apple'],
    },
    {
      description: 'should use stringify if provided',
      filter: createFilterOptions<string>({
        stringify: o => (o as string) + '!',
        matchFrom: 'any',
      }),
      options: ['foo'],
      query: '!',
      expected: ['foo'],
    },
  ].forEach(({ description, filter, options, query, expected }) => {
    it(description, () => {
      expect(filter(options, { query, getOptionLabel })).toStrictEqual(expected)
    })
  })
})
