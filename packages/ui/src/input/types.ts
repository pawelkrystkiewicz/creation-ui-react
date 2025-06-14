import type { InputProps as HeadlessInputProps } from '@headlessui/react'
import { ElementType, ReactNode } from 'react'
import { HTMLInputType, InputVariant } from '../types'
import { InputContainerProps } from '../input-container'

export type InputProps = Omit<HeadlessInputProps, 'as'> & {
  as?: ElementType
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  onClear?: () => void
  variant?: InputVariant
  type?: HTMLInputType
  cx?: {
    container?: string
    input?: string
  }
} & Omit<InputContainerProps, 'className' | 'clearable'>
