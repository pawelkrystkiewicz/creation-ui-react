import type { ReactNode } from 'react'

export interface CheckboxProps {
  checked?: boolean
  children?: ReactNode
  className?: string
  defaultChecked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  loading?: boolean
  name?: string
  onChange?: (checked: boolean) => void
  readOnly?: boolean
  value?: string
}
