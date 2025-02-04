import type { RadioGroupProps } from '../radio'
import type { RadioGroup } from '@headlessui/react'

export type GetComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never

export type HeadlessRadioGroupOptionProps = GetComponentProps<
  typeof RadioGroup.Option
>
export type HeadlessRadioGroupProps = GetComponentProps<typeof RadioGroup>

export type ToggleGroupValue = string
export type ToggleGroupOption = HeadlessRadioGroupOptionProps & {
  label: string | React.ReactNode
  value: ToggleGroupValue
  disabled?: boolean
}

export type ToggleGroupProps = Omit<
  RadioGroupProps,
  'readonly' | 'label' | 'required' | 'onChange' | 'value'
> & {
  options: ToggleGroupOption[]
  value?: ToggleGroupValue
  onChange?: (value: ToggleGroupValue) => void
}
