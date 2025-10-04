import type { ListboxProps } from '@headlessui/react'
import type { InputContainerProps, InputProps } from '../'

export type SelectProps = Omit<ListboxProps, 'as' | 'className'> &
  Omit<InputContainerProps, 'className'> &
  Pick<InputProps, 'cx'> & {
    multiple?: boolean
    readOnly?: boolean
  }
