import type { ReactNode } from 'react'
import { ElementVariant } from '../types'
import { HTMLInputType } from '../input'

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
