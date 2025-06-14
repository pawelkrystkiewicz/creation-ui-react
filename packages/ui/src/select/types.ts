import type { SelectProps as HeadlessSelectProps } from '@headlessui/react'
import type { InputContainerProps } from '../'

export type SelectProps = Omit<HeadlessSelectProps, 'as' | 'className'> &
  Omit<InputContainerProps, 'className'> & {
    multiple?: boolean
    readOnly?: boolean
  }
