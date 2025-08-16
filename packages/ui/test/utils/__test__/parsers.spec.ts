import { parseColorString, type ColorType } from '../parsers'

describe('parseColorString', () => {
  describe('valid color formats', () => {
    ;[
      {
        description: 'should parse oklch color with opacity',
        input: 'oklch(0.6048 0.1479 264.05/0.8)',
        expected: {
          type: 'oklch',
          values: [0.6048, 0.1479, 264.05],
          opacity: 0.8,
        },
      },
      {
        description: 'should parse oklch color without opacity',
        input: 'oklch(0.6048 0.1479 264.05)',
        expected: {
          type: 'oklch',
          values: [0.6048, 0.1479, 264.05],
          opacity: 1,
        },
      },
      {
        description: 'should parse oklab color with opacity',
        input: 'oklab(0.6048 -0.0479284 -0.211128/0.1)',
        expected: {
          type: 'oklab',
          values: [0.6048, -0.0479284, -0.211128],
          opacity: 0.1,
        },
      },
      {
        description: 'should parse oklab color without opacity',
        input: 'oklab(0.6048 -0.0479284 -0.211128)',
        expected: {
          type: 'oklab',
          values: [0.6048, -0.0479284, -0.211128],
          opacity: 1,
        },
      },
      {
        description: 'should parse rgb color with opacity',
        input: 'rgb(255 128 0/0.5)',
        expected: {
          type: 'rgb',
          values: [255, 128, 0],
          opacity: 0.5,
        },
      },
      {
        description: 'should parse rgb color without opacity',
        input: 'rgb(255 128 0)',
        expected: {
          type: 'rgb',
          values: [255, 128, 0],
          opacity: 1,
        },
      },
      {
        description: 'should parse rgba color',
        input: 'rgba(255 128 0 0.75)',
        expected: {
          type: 'rgba',
          values: [255, 128, 0],
          opacity: 0.75,
        },
      },
      {
        description: 'should parse rgba color with zero opacity',
        input: 'rgba(0 0 0 0)',
        expected: {
          type: 'rgba',
          values: [0, 0, 0],
          opacity: 0,
        },
      },
      {
        description: 'should parse rgba color with full opacity',
        input: 'rgba(255 255 255 1)',
        expected: {
          type: 'rgba',
          values: [255, 255, 255],
          opacity: 1,
        },
      },
    ].forEach(({ description, input, expected }) => {
      it(description, () => {
        const result = parseColorString(input)
        expect(result).toStrictEqual(expected)
      })
    })
  })

  describe('edge cases', () => {
    it('should handle colors with opacity directly attached', () => {
      const result = parseColorString('oklch(0.6048 0.1479 264.05/0.5)')
      expect(result).toStrictEqual({
        type: 'oklch',
        values: [0.6048, 0.1479, 264.05],
        opacity: 0.5,
      })
    })

    it('should handle decimal values correctly', () => {
      const result = parseColorString('rgb(255.5 128.75 0.25)')
      expect(result).toStrictEqual({
        type: 'rgb',
        values: [255.5, 128.75, 0.25],
        opacity: 1,
      })
    })

    it('should handle negative values in oklab', () => {
      const result = parseColorString('oklab(-0.1 -0.5 -0.25)')
      expect(result).toStrictEqual({
        type: 'oklab',
        values: [-0.1, -0.5, -0.25],
        opacity: 1,
      })
    })

    it('should handle negative values with opacity in oklab', () => {
      const result = parseColorString('oklab(-0.1 -0.5 -0.25/0.3)')
      expect(result).toStrictEqual({
        type: 'oklab',
        values: [-0.1, -0.5, -0.25],
        opacity: 0.3,
      })
    })

    it('should handle scientific notation values', () => {
      const result = parseColorString('rgb(1e2 2.5e1 3e0)')
      expect(result).toStrictEqual({
        type: 'rgb',
        values: [100, 25, 3],
        opacity: 1,
      })
    })
  })

  describe('error cases', () => {
    it('should throw error when color is not provided', () => {
      expect(() => parseColorString()).toThrow('Color not provided')
    })

    it('should throw error when color is empty string', () => {
      expect(() => parseColorString('')).toThrow('Color not provided')
    })

    it('should throw error when color is null', () => {
      expect(() => parseColorString(null as any)).toThrow('Color not provided')
    })

    it('should throw error when color is undefined', () => {
      expect(() => parseColorString(undefined)).toThrow('Color not provided')
    })

    it('should throw error for invalid color type', () => {
      expect(() => parseColorString('hsl(360 100% 50%)')).toThrow(
        'Invalid color type: hsl'
      )
    })

    it('should throw error for invalid color type - hex', () => {
      expect(() => parseColorString('#ff0000')).toThrow(
        'Invalid color type: #ff0000'
      )
    })

    it('should throw error for malformed color string', () => {
      expect(() => parseColorString('rgb')).toThrow()
    })

    it('should throw error for color type not in parentheses', () => {
      expect(() => parseColorString('rgb255 128 0')).toThrow(
        'Invalid color type: rgb255 128 0'
      )
    })

    it('should throw error for empty parentheses', () => {
      expect(() => parseColorString('rgb()')).toThrow()
    })

    it('should throw error for incomplete color values', () => {
      expect(() => parseColorString('rgb(255 128)')).toThrow()
    })

    it('should handle non-numeric values as NaN', () => {
      const result = parseColorString('rgb(red green blue)')
      expect(result).toStrictEqual({
        type: 'rgb',
        values: [NaN, NaN, NaN],
        opacity: 1,
      })
    })
  })

  describe('boundary values', () => {
    it('should handle zero values', () => {
      const result = parseColorString('rgb(0 0 0)')
      expect(result).toStrictEqual({
        type: 'rgb',
        values: [0, 0, 0],
        opacity: 1,
      })
    })

    it('should handle maximum RGB values', () => {
      const result = parseColorString('rgb(255 255 255)')
      expect(result).toStrictEqual({
        type: 'rgb',
        values: [255, 255, 255],
        opacity: 1,
      })
    })

    it('should handle very small decimal values', () => {
      const result = parseColorString('oklch(0.001 0.002 0.003)')
      expect(result).toStrictEqual({
        type: 'oklch',
        values: [0.001, 0.002, 0.003],
        opacity: 1,
      })
    })

    it('should handle large angle values in oklch', () => {
      const result = parseColorString('oklch(0.5 0.1 359.99)')
      expect(result).toStrictEqual({
        type: 'oklch',
        values: [0.5, 0.1, 359.99],
        opacity: 1,
      })
    })
  })

  describe('type validation', () => {
    const validColorTypes: ColorType[] = ['oklch', 'oklab', 'rgb', 'rgba']

    validColorTypes.forEach(type => {
      it(`should accept ${type} as valid color type`, () => {
        const colorString = `${type}(0.5 0.1 0.2)`
        const result = parseColorString(colorString)
        expect(result.type).toBe(type)
      })
    })
  })
})
