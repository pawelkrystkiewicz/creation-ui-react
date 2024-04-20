import type {
  ElementPosition,
  ElementSize,
  ElementTheme,
  ElementTypography,
  ElementVariant,
  JSXNode,
} from '../types'

type ThemeDrawers = {
  /**
   * The height classNames of the `top` and `bottom` drawers. This being a class name allows to use Tailwind's responsive breakpoints.
   */
  height: string
  /**
   * The width classNames of the `right` and `left` drawers. This being a class name allows to use Tailwind's responsive breakpoints.
   */
  width: string
  /**
   * The position of the drawer.
   * `right` | `left` | `top` | `bottom`
   */
  position: ElementPosition
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
  helpers: ThemeHelpers
  size: ElementSize
  variant: ElementVariant
  theme: ElementTheme
  zIndex: ThemeZIndex
  styles: ThemeStyles
  // TODO:
  texts: ThemeTexts
  respectReducedMotion: boolean
  dir: ThemeDisplayDirection
}

export type ThemeStyles = {
  animations: { microInteractions: string[] }
  selected: string[]
  disabled: string[]
  invalid: StyleTextBorder
  error: StyleTextBorder
  readOnly: string[]
  triggers: Record<ElementVariant, string[]>
  inputs: ThemeStyleInputs
  size: Record<ElementSize, ThemeSize>
  drawers: ThemeDrawers
  typography: ThemeTypography
}

type ThemeSize = {
  minHeight: string
  height: string
  width: string
  square: string
  padding: string
  fontSize: string
}

type StyleTextBorder = {
  border: string[]
  text: string[]
}

type ThemeStyleInputs = {
  base: string[]
  checkable: string[]
  variants: Record<ElementVariant | 'unstyled', string[]>
}

export interface ThemeProviderProps {
  children?: JSXNode
  theme?: Partial<ThemeProps>
}

export interface ThemePreloadedClasses extends ThemeStyles {
  base?: string[] | string
}
