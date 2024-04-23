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

export type ThemeProps = {
  helpers: ThemeHelpers
  size: ElementSize
  variant: ElementVariant
  zIndex: ThemeZIndex
  styles: ThemeStyles
  texts: ThemeTexts
}

export type ThemeStyles = {
  animations: {
    microInteractionsAll: string[]
    microInteractionsColor: string[]
  }
  focusable: string[]
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
