import type { InputProps as HeadlessInputProps } from '@headlessui/react'
import { ElementType, ReactNode } from 'react'
import { HTMLInputType, InputVariant } from '../types'
import { InputStylesType } from './classes'

export interface InputProps extends Omit<HeadlessInputProps, 'as'> {
  as?: ElementType
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  onClear?: () => void
  variant?: InputVariant
  type?: HTMLInputType
  border?: InputStylesType['border']
  background?: InputStylesType['background']
  containerHeight?: InputStylesType['containerHeight']
  cx?: {
    container?: string
    input?: string
  }
}
