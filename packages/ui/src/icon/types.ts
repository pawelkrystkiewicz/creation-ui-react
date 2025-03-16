import type { ClassName } from '../types'
import type { SVGProps } from 'react'

export const icons = [
  'check',
  'chevron_down',
  'chevron_left',
  'chevron_right',
  'close',
  // 'dot',
  'home',
  // 'readonly',
  'slash',
  // 'straight',
  'plus',
  'minus',
]
export type IconType = (typeof icons)[number]

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'className' | 'children'> {
  /**
   * Icon name from Material Icons collection
   */
  icon: IconType
  /**
   * Additional class names
   */
  className?: ClassName
  /**
   * Title for the icon
   */
  title?: string
}
