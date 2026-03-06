import type { ReactNode } from 'react'

export interface LabelProps
  extends Omit<React.ComponentPropsWithoutRef<'label'>, 'className'> {
  children?: ReactNode
  className?: string
  required?: boolean
}
