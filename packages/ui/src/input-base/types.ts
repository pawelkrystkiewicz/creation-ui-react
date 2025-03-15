import type { ReactNode } from 'react'
import type { HTMLInputType, InputVariant } from '../types'

export interface InputBaseProps {
  children?: ReactNode
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  onClear?: () => void
  clearable?: boolean
  variant?: InputVariant
  type?: HTMLInputType
  cx?: {
    container?: string
    input?: string
  }
}
