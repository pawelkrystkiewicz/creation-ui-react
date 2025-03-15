import type { ReactNode } from 'react'
import * as Headless from '@headlessui/react'
import type { FieldLayout } from './classes'

export interface FieldProps
  extends Omit<Headless.FieldProps, 'as' | 'className'> {
  children?: ReactNode
  className?: string
  layout?: FieldLayout
}
