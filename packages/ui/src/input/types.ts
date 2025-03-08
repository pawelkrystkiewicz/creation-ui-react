import type { InputProps as HeadlessInputProps } from '@headlessui/react'
import { InputBaseProps } from '../input-base'
import { DateType, INPUT_TYPES, InputType } from './constants'

export type HTMLInputType = InputType | DateType

export type InputProps = {
  type?: HTMLInputType
} & Omit<HeadlessInputProps, 'as' | 'className'> &
  InputBaseProps
