import type { InputProps as HeadlessInputProps } from '@headlessui/react'
import { InputBaseProps } from '../input-base'
import { dateTypes } from './constants'

export type DateType = (typeof dateTypes)[number]

export type InputProps = {
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | DateType
} & Omit<HeadlessInputProps, 'as' | 'className'> &
  InputBaseProps
