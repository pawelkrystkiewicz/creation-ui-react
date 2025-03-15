import type { ReactNode } from 'react'
import type { HTMLInputType, ElementVariant } from '../types'

export interface InputBaseProps {
  children?: ReactNode
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  onClear?: () => void
  clearable?: boolean
  variant?: ElementVariant
  type?: HTMLInputType
  cx?: {
    container?: string
    input?: string
  }
}
