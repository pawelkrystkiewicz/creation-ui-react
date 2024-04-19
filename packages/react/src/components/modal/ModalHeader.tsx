import { UIElement } from '@root/types'
import clsx from 'clsx'
import { FC } from 'react'
import { MODAL_PADDING } from './classes'

const classes = ['border-border', 'border-b']

export const ModalHeader: FC<UIElement> = ({
  children,
  className,
  ...props
}) => (
  <div {...props} className={clsx(classes, MODAL_PADDING, className)}>
    {children}
  </div>
)
