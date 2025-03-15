import type { InputProps as HeadlessInputProps } from '@headlessui/react'
import { InputBaseProps } from '../input-base'
import { HTMLInputType } from '../types'
import { InputStylesType } from './classes'

export type InputProps = {
  type?: HTMLInputType
  border?: InputStylesType['border']
  background?: InputStylesType['background']
} & Omit<HeadlessInputProps, 'as' | 'className'> &
  InputBaseProps
