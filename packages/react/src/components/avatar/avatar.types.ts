import type { ClassName, ElementSize } from '../../types'
import type React from 'react'
import { ReactNode } from 'react'

export const AVATAR_VARIANTS = ['circle', 'rounded', 'square'] as const

export type AvatarVariant = (typeof AVATAR_VARIANTS)[number]

type AvatarProps = Omit<React.ComponentProps<'img'>, 'size'> & {
  /**
   * How large should the Avatar be?
   */
  size?: ElementSize | number
  /**
   * Class name
   */
  className?: ClassName
  /**
   * Variant of Avatar
   */
  variant?: AvatarVariant
  /**
   * Children of Avatar
   */
  children?: ReactNode
}

export default AvatarProps

export interface AvatarGroupProps {
  /**
   * Total number of avatars to show in counter
   */
  total?: number
  /**
   * Maximum number of avatars to show
   */
  max?: number
  /**
   * Children of AvatarGroup - other `Avatar`s
   */
  children?: ReactNode
  /**
   * How large should the Avatar be?
   */
  size?: AvatarProps['size']
  /**
   * Controls the offset of `Avatar`s components.
   * Default -0.3 Which means Avatars will overlap by 30% of their size.
   */
  offsetMultiplier?: number
  /**
   * Class name
   */
  className?: string
  /**
   * `className` for surplus `Avatar` component.
   */
  surplusClassName?: string
  /**
   * Custom render function for surplus `Avatar` component.
   * @param surplusCount
   * @returns ReactNode
   */
  renderSurplus?: (surplusCount: number) => ReactNode
}
