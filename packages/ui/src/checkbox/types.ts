import * as Headless from '@headlessui/react'
import type { ReactNode } from 'react'

export interface CheckboxProps
  extends Omit<Headless.CheckboxProps, 'as' | 'className'> {
  children?: ReactNode
  className?: string
  readOnly?: boolean
  loading?: boolean
}
