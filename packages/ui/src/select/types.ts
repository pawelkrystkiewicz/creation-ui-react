import type { InputContainerProps, InputProps } from '../'

export type SelectProps<T = string> = Omit<
  InputContainerProps,
  'className' | 'onClear'
> &
  Pick<InputProps, 'cx'> & {
    readOnly?: boolean
    value?: T | null
    onChange?: (value: T) => void
    disabled?: boolean
    name?: string
    horizontal?: boolean
    invalid?: boolean
    refName?: string
  }

export type SelectHOC<T> = {
  open: boolean
  disabled: boolean
  invalid: boolean
  value: T | null
}
