import clsx from 'clsx'
import React, { type FC, type ReactNode } from 'react'

interface ContainerProps {
  children?: ReactNode
  className?: string
  variant?: ContainerVariants
}

export type ContainerVariants = 'row' | 'column'

const classes: Record<ContainerVariants | 'base' | 'centered', string[]> = {
  base: ['flex', 'my-10'],
  column: ['flex-col', 'items-center', 'gap-10'],
  row: ['place-items-center', 'gap-5', 'justify-center'],
  centered: ['justify-center', 'place-items-center', 'gap-5'],
}

export const Container: FC<ContainerProps> = ({ children, className, variant = 'row', ...props }) => (
  <div className={clsx(classes.base, classes[variant], className)} {...props}>
    {children}
  </div>
)
