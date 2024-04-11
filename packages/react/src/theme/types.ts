import type {
  ElementPosition,
  ElementSize,
  ElementTheme,
  ElementTypography,
  ElementVariant,
  JSXNode,
  TailwindColorSet,
} from '../types'

type ThemeColors = {
  inherit: string
  current: string
  transparent: string
  black: string
  white: string
  primary: TailwindColorSet | string
  success: TailwindColorSet | string
  warning: TailwindColorSet | string
  error: TailwindColorSet | string
}

type ThemeDrawers = {
  /**
   * The height classNames of the `top` and `bottom` drawers. This being a class name allows to use Tailwind's responsive breakpoints.
   */
  heightClassNames: string
  /**
   * The width classNames of the `right` and `left` drawers. This being a class name allows to use Tailwind's responsive breakpoints.
   */
  widthClassNames: string
  /**
   * The position of the drawer.
   * `right` | `left` | `top` | `bottom`
   */
  position: ElementPosition
}

type ThemeFont = {
  leading: string
  fontFamily: string
  fontFamilyMonospace: string
}

export type TypographyConfig = {
  color?: string
  display: string
  fontFamily: string
  fontSize: Record<ElementSize, string>
  fontWeight: string
  lineHeight: string
}

export type ThemeTypography = Record<ElementTypography, TypographyConfig>

type ThemeTexts = {
  invalidInput: string
}

type ThemeZIndex = {
  base: string
  dropdowns: string
  tooltips: string
  overlays: string
  modals: string
  notifications: string
}

type ThemeHelpers = {
  getLimitText: (more: number) => string
}

type ThemeDisplayDirection = 'ltr' | 'rtl'

export type ThemeProps = {
  dir: ThemeDisplayDirection
  drawers: ThemeDrawers
  focusRing: boolean
  font: ThemeFont
  typography: ThemeTypography
  helpers: ThemeHelpers
  respectReducedMotion: boolean
  roundness: string
  size: ElementSize
  variant: ElementVariant
  texts: ThemeTexts
  theme: ElementTheme
  zIndex: ThemeZIndex
}

export interface ThemeProviderProps {
  children?: JSXNode
  theme?: Partial<ThemeProps>
}
