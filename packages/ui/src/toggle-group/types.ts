import type { ReactNode } from 'react'
import type { RadioGroupProps } from '../radio'

export type ToggleGroupValue = string

export type ToggleGroupOption = {
  label: string | ReactNode
  value: ToggleGroupValue
  disabled?: boolean
}

export type ToggleGroupProps = Omit<
  RadioGroupProps,
  'readOnly' | 'onChange' | 'value'
> & {
  options: ToggleGroupOption[]
  value?: ToggleGroupValue
  onChange?: (value: ToggleGroupValue) => void
}
