import type { ReactNode } from 'react'

export interface RadioProps {
  value: string
  disabled?: boolean
  className?: string
}

export interface RadioGroupProps {
  value?: string
  onChange?: (value: string) => void
  defaultValue?: string
  disabled?: boolean
  readOnly?: boolean
  name?: string
  className?: string
  children?: ReactNode
}
