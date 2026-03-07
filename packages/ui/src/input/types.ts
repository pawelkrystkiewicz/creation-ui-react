import type { ElementType, ReactNode } from 'react'
import type { HTMLInputType } from '../types'
import type { InputContainerProps } from '../input-container'

export interface InputProps
  extends React.ComponentPropsWithoutRef<'input'>,
    Omit<InputContainerProps, 'className' | 'clearable' | 'onClick' | 'children' | 'style'> {
  as?: ElementType
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  onClear?: () => void
  type?: HTMLInputType
  cx?: {
    container?: string
    input?: string
  }
}
