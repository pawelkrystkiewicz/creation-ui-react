import type { ListboxProps } from '@headlessui/react'
import type { InputContainerProps, InputProps } from '../'

export type SelectProps = Omit<ListboxProps, 'as' | 'className' | 'multiple'> &
  Omit<InputContainerProps, 'className' | 'onClear'> &
  Pick<InputProps, 'cx'> & {
    readOnly?: boolean
  }

export type SelectHOC<T> = {
  open: boolean
  disabled: boolean
  invalid: boolean
  value: T
}
