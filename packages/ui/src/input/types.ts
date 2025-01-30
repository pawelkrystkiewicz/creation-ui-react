import type { InputProps as HeadlessInputProps } from '@headlessui/react'
import type { ReactNode } from 'react'
import { dateTypes } from './constants'


export type DateType = (typeof dateTypes)[number]

export type InputProps = {
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  className?: string
  onClear?: () => void
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | DateType
} & Omit<HeadlessInputProps, 'as' | 'className'>
