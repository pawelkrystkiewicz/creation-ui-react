import type { ReactNode } from 'react'
import type { FieldLayout } from './classes'

export interface FieldProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
  children?: ReactNode
  className?: string
  disabled?: boolean
  layout?: FieldLayout
}
