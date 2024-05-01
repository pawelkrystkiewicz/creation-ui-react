import { ElementColor, ElementVariant } from '@root/types'
import { getLoaderColor } from '../utils'
import { LoaderColor } from '@root/components/loader'

const lightModeInherit: Record<
  ElementColor,
  Record<ElementVariant, LoaderColor>
> = {
  primary: { contained: 'white', outlined: 'primary', text: 'primary' },
  success: { contained: 'white', outlined: 'success', text: 'success' },
  error: { contained: 'white', outlined: 'error', text: 'error' },
  warning: { contained: 'white', outlined: 'warning', text: 'warning' },
  info: { contained: 'white', outlined: 'info', text: 'info' },
  mono: { contained: 'white', outlined: 'black', text: 'black' },
}

const lightModeNoInherit: Record<
  ElementColor,
  Record<ElementVariant, LoaderColor>
> = {
  primary: { contained: 'white', outlined: 'primary', text: 'primary' },
  success: { contained: 'white', outlined: 'primary', text: 'primary' },
  error: { contained: 'white', outlined: 'primary', text: 'primary' },
  warning: { contained: 'white', outlined: 'primary', text: 'primary' },
  info: { contained: 'white', outlined: 'primary', text: 'primary' },
  mono: { contained: 'white', outlined: 'primary', text: 'primary' },
}

const darkModeInherit: Record<
  ElementColor,
  Record<ElementVariant, LoaderColor>
> = {
  ...lightModeInherit,
  mono: { contained: 'black', outlined: 'white', text: 'white' },
}

const darkModeNoInherit: Record<
  ElementColor,
  Record<ElementVariant, LoaderColor>
> = {
  ...lightModeNoInherit,
  mono: { contained: 'black', outlined: 'primary', text: 'primary' },
}

describe('getLoaderColor', () => {
  describe('Light mode', () => {
    describe('inherit color', () => {
      Object.keys(lightModeInherit).forEach((color: ElementColor) => {
        Object.keys(lightModeInherit[color]).forEach(
          (variant: ElementVariant) => {
            const expected = lightModeInherit[color][variant]
            it(`when button is [${color}] and [${variant}] loader should be [${expected}]`, () => {
              const result = getLoaderColor(variant, color, true, false)
              expect(result).toEqual(expected)
            })
          }
        )
      })
    })
    describe('no inherit color', () => {
      Object.keys(lightModeNoInherit).forEach((color: ElementColor) => {
        Object.keys(lightModeNoInherit[color]).forEach(
          (variant: ElementVariant) => {
            const expected = lightModeNoInherit[color][variant]
            it(`when button is [${color}] and [${variant}] loader should be [${expected}]`, () => {
              const result = getLoaderColor(variant, color, false, false)
              expect(result).toEqual(expected)
            })
          }
        )
      })
    })
  })
  describe('Dark mode', () => {
    describe('inherit color', () => {
      Object.keys(darkModeInherit).forEach((color: ElementColor) => {
        Object.keys(darkModeInherit[color]).forEach(
          (variant: ElementVariant) => {
            const expected = darkModeInherit[color][variant]
            it(`when button is [${color}] and [${variant}] loader should be [${expected}]`, () => {
              const result = getLoaderColor(variant, color, true, true)
              expect(result).toEqual(expected)
            })
          }
        )
      })
    })
    describe('no inherit color', () => {
      Object.keys(darkModeNoInherit).forEach((color: ElementColor) => {
        Object.keys(darkModeNoInherit[color]).forEach(
          (variant: ElementVariant) => {
            const expected = darkModeNoInherit[color][variant]
            it(`when button is [${color}] and [${variant}] loader should be [${expected}]`, () => {
              const result = getLoaderColor(variant, color, false, true)
              expect(result).toEqual(expected)
            })
          }
        )
      })
    })
  })
})
