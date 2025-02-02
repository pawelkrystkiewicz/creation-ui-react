import type { ReactNode } from 'react'
import * as Headless from '@headlessui/react'

export interface LabelProps extends Omit<Headless.LabelProps, 'as' | 'className'> {
  children?: ReactNode
  className?: string
}
