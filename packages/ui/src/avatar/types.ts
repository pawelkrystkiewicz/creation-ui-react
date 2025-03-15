import type React from 'react'
import { ReactNode } from 'react'

export const AVATAR_VARIANTS = ['circle', 'rounded', 'square'] as const

export type AvatarVariant = (typeof AVATAR_VARIANTS)[number]

type AvatarProps = Omit<React.ComponentProps<'img'>, 'size'> & {
  /**
   * How large should the Avatar be?
   */
  size?: number
  /**
   * Class name
   */
  className?: string
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

export interface AvatarGroupProps
  extends Pick<AvatarProps, 'size' | 'variant'> {
  /**
   * Total number of avatars to show in counter
   */
  total?: number
  /**
   * Maximum number of avatars to show
   */
  limit?: number
  /**
   * Children of AvatarGroup - other `Avatar`s
   */
  children?: ReactNode
  /**
   * Controls the offset of `Avatar`s components.
   * Default -3.5% which translates directly to margin-left:-3.5%.
   */
  stackingOffsetPercent?: number
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
