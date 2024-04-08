import { ElementTheme } from '../../types'

export interface Circle {
  r: number
}

export interface Mask {
  cx: string
  cy: string
}

export interface Svg {
  transform: string
}

export interface Lines {
  opacity: number
}

export interface Dark {
  circle: Circle
  mask: Mask
  svg: Svg
  lines: Lines
}

export interface Circle2 {
  r: number
}

export interface Mask2 {
  cx: string
  cy: string
}

export interface Svg2 {
  transform: string
}

export interface Lines2 {
  opacity: number
}

export interface Light {
  circle: Circle2
  mask: Mask2
  svg: Svg2
  lines: Lines2
}

export interface SpringConfig {
  mass: number
  tension: number
  friction: number
}

export interface AnimationProperties {
  dark: Dark
  light: Light
  springConfig: SpringConfig
}

export type SVGProps = Omit<React.HTMLAttributes<HTMLOrSVGElement>, 'onChange'>

export interface DarkModeToggleProps extends SVGProps {
  onModeChange?: (theme: ElementTheme) => void
  theme?: ElementTheme
  style?: React.CSSProperties
  size?: number | string
  animationProperties?: AnimationProperties
  moonColor?: string
  sunColor?: string
  defaultTheme?: ElementTheme
  localStorageKey?: string
}
