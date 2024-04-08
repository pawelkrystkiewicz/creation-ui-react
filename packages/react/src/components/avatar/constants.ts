import { ElementSize } from '../../types'
import { CSSProperties } from 'react'

export const AVATAR_SIZE_MAP: Record<ElementSize, number> = {
  sm: 40,
  md: 60,
  lg: 80,
}

export const AVATAR_CONTAINER_PROPS: (keyof CSSProperties)[] = [
  'background',
  'backgroundColor',
  'opacity',
  'border',
  'borderRadius',
  'boxShadow',
  'margin',
  'padding',
]

export const AVATAR_GROUP_OFFSET_MOD = -0.3
