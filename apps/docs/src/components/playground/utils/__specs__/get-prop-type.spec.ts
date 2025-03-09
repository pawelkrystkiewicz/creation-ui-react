import { describe, expect, it } from 'vitest'
import { getPropType } from '../get-prop-type'

describe('detectValueType', () => {
  ;[
    [20, 'number'],
    ['20', 'number'],
    ['3.14', 'number'],
    ['test', 'string'],
    [true, 'boolean'],
    [false, 'boolean'],
    ['true', 'boolean'],
    ['false', 'boolean'],
    [{ a: 1, b: '3' }, 'object'],
    [[1, 2, 3], 'array'],
  ].forEach(([value, expected]) =>
    it(`should return ${expected} for ${value}`, () => {
      expect(getPropType(value as any)).toEqual(expected)
    }),
  )
})
