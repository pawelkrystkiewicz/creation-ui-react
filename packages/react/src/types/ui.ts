export const ELEMENT_STATUS = [
  'primary',
  'error',
  'warning',
  'success',
  'info',
] as const

export const ELEMENT_SIZES = ['sm', 'md', 'lg'] as const
export const ELEMENT_THEMES = ['dark', 'light'] as const
export const ELEMENT_BASE_VARIANTS = ['contained', 'outlined'] as const
export const ELEMENT_VARIANTS = [...ELEMENT_BASE_VARIANTS, 'text'] as const
export const ELEMENT_ORIENTATION = ['vertical', 'horizontal'] as const
export const ELEMENT_PLACEMENT_VERTICAL = ['top', 'bottom'] as const
export const ELEMENT_PLACEMENT_HORIZONTAL = ['right', 'left'] as const
export const ELEMENT_POSITION = ['top', 'bottom', 'right', 'left'] as const
export const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl', 'xl2'] as const
export const TYPOGRAPHY = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'content',
  'description',
] as const
export const TAILWIND_SHADES = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
] as const
export const ELEMENT_STATES = [
  'hover',
  'focus',
  'active',
  'disabled',
  'default',
] as const

export type HTMLInputType = string

export type Breakpoints = (typeof BREAKPOINTS)[number]
export type ElementStatus = (typeof ELEMENT_STATUS)[number]
export type ElementState = (typeof ELEMENT_STATES)[number]
export type ElementSize = (typeof ELEMENT_SIZES)[number]
export type ElementOrientation = (typeof ELEMENT_ORIENTATION)[number]
export type ElementTheme = (typeof ELEMENT_THEMES)[number]
export type ElementVariant = (typeof ELEMENT_VARIANTS)[number]
export type ElementBaseVariant = (typeof ELEMENT_BASE_VARIANTS)[number]
export type ElementPlacementHorizontal =
  (typeof ELEMENT_PLACEMENT_HORIZONTAL)[number]
export type ElementPlacementVertical =
  (typeof ELEMENT_PLACEMENT_VERTICAL)[number]
export type ElementPosition = (typeof ELEMENT_POSITION)[number]
export type ElementTypography = (typeof TYPOGRAPHY)[number]
export type ElementPlacement = {
  horizontal: ElementPlacementHorizontal
  vertical: ElementPlacementVertical
}
export type TailwindShades = (typeof TAILWIND_SHADES)[number]
export type TailwindColorSet = Record<TailwindShades, string>

export const icons = [
  'check',
  'chevron_down',
  'chevron_left',
  'chevron_right',
  'close',
  'dot',
  'home',
  'readonly',
  'slash',
  'straight',
] as const

export type IconType = (typeof icons)[number]
