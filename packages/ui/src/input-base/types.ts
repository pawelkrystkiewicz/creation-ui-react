import type { ReactNode } from 'react'

export interface InputBaseProps {
  children?: ReactNode
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  onClear?: () => void
  clearable?: boolean
  loading?: boolean
  className?: string
  cx?: {
    outer?: string
    inner?: string
  }
}
