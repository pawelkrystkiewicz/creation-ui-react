import { UIElement } from '@root/types'
import clsx from 'clsx'
import { FC } from 'react'

const classes = ['border-border', 'border-t']

export const ModalFooter: FC<UIElement> = ({
  children,
  className,
  ...props
}) => (
  <div {...props} className={clsx(classes, className)}>
    {children}
  </div>
)
