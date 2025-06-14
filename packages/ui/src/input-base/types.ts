import type { ReactNode } from 'react'
import type { HTMLInputType, InputVariant } from '../types'
import type { InputBaseStylesType } from './classes'

export interface InputBaseProps extends InputBaseStylesType {
  children?: ReactNode
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  onClear?: () => void
  variant?: InputVariant
  type?: HTMLInputType
  cx?: {
    container?: string
    input?: string
  }
}
