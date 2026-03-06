import type { ElementType, ReactNode } from 'react'
import type { HTMLInputType } from '../types'
import type { InputContainerProps } from '../input-container'

export type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  as?: ElementType
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  onClear?: () => void
  type?: HTMLInputType
  cx?: {
    container?: string
    input?: string
  }
} & Omit<InputContainerProps, 'className' | 'clearable'>
