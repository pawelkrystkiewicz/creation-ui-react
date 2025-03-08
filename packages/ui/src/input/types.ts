import type { InputProps as HeadlessInputProps } from '@headlessui/react'
import { InputBaseProps } from '../input-base'
import { HTMLInputType } from '../types'



export type InputProps = {
  type?: HTMLInputType
} & Omit<HeadlessInputProps, 'as' | 'className'> &
  InputBaseProps
