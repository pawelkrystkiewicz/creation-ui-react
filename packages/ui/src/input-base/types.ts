import type { ReactNode } from 'react'
import { ElementVariant } from '../types'

export interface InputBaseProps {
  children?: ReactNode
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  onClear?: () => void
  clearable?: boolean
  loading?: boolean
  className?: string
  variant?: ElementVariant
  cx?: {
    outer?: string
    inner?: string
  }
}
