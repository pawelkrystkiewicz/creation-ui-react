import type { ReactNode } from 'react'

export interface DescriptionProps
  extends Omit<React.ComponentPropsWithoutRef<'p'>, 'className'> {
  children?: ReactNode
  className?: string
}
