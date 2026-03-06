import type { ReactNode } from 'react'

export interface ErrorProps
  extends Omit<React.ComponentPropsWithoutRef<'p'>, 'className'> {
  children?: ReactNode
  className?: string
}
