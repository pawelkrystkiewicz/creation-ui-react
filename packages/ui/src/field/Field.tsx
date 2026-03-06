import clsx from 'clsx'
import { type FC } from 'react'
import { fieldStyles } from './classes'
import type { FieldProps } from './types'

export const Field: FC<FieldProps> = ({
  className,
  layout = 'column',
  disabled,
  ...props
}) => {
  return (
    <div
      {...props}
      data-disabled={disabled || undefined}
      className={fieldStyles({ className: clsx('group', className), layout })}
    />
  )
}
