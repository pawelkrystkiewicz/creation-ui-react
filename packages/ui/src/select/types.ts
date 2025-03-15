import type { SelectProps as HeadlessSelectProps } from '@headlessui/react'
import type { InputBaseProps } from '../input-base'

export type SelectProps = Omit<HeadlessSelectProps, 'as' | 'className'> &
  Omit<InputBaseProps, 'className'> & {
    multiple?: boolean
    readOnly?: boolean
  }
