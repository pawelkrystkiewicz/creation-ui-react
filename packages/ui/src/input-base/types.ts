import type { ReactNode } from 'react'
import type { HTMLInputType, ElementVariant } from '../types'

export interface InputBaseProps {
  children?: ReactNode
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  onClear?: () => void
  clearable?: boolean
  loading?: boolean
  className?: string
  variant?: ElementVariant
  type?: HTMLInputType
  cx?: {
    outer?: string
    inner?: string
  }
}
