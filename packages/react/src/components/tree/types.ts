import { ElementSize } from '@creation-ui/react'

export type RawElement = {
  id: number | string
  name: string
  parentId?: number | string
}

export type BranchType = {
  id: number | string
  name: string
  parentId?: number | string | null
  children?: BranchType[]
}

export type TreeType = BranchType[]

export interface BranchProps {
  branch: BranchType
  level?: number
  onLeafClick?: (leaf: BranchType) => void
  onBranchClick?: (branch: BranchType) => void
  getItemOffset?: (level: number) => number
  getItemLabel?: (branch: BranchType) => string
}

export type TreeProps = {
  tree?: TreeType
  value?: BranchType | null
  placeholder?: string
  size?: ElementSize
  cx?: {
    placeholder?: string
    value?: string
    container?: { inner?: string; outer?: string }
  }
  onClear?: () => void
  disabled?: boolean
  readOnly?: boolean
  loading?: boolean
  /**
   * z-index configuration
   */
  zIndex?: { list?: number }
} & Pick<
  BranchProps,
  'onBranchClick' | 'onLeafClick' | 'getItemOffset' | 'getItemLabel'
>
