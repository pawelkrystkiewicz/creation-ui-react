import type { ListboxProps } from '@headlessui/react'
import type { InputContainerProps, InputProps } from '../'

export type SelectProps<T = string> = Omit<
  ListboxProps,
  'as' | 'className' | 'multiple' | 'value'
> &
  Omit<InputContainerProps, 'className' | 'onClear'> &
  Pick<InputProps, 'cx'> & {
    readOnly?: boolean
    value?: T | null
  }

export type SelectHOC<T> = {
  open: boolean
  disabled: boolean
  invalid: boolean
  value: T | null
}
