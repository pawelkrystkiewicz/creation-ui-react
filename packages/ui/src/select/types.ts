import type { SelectProps as HeadlessSelectProps } from '@headlessui/react'
import type { InputContainerProps, InputProps } from '../'

export type SelectProps = Omit<HeadlessSelectProps, 'as' | 'className'> &
  Omit<InputContainerProps, 'className'> &
  Pick<InputProps, 'cx'> & {
    multiple?: boolean
    readOnly?: boolean
  }
