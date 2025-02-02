import type { ReactNode } from 'react'
import * as Headless from '@headlessui/react'


export interface DescriptionProps extends Omit<Headless.DescriptionProps, 'as' | 'className'> {
  children?: ReactNode
  className?: string
}
