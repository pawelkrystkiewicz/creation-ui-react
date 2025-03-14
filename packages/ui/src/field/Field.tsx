import * as Headless from '@headlessui/react'
import { type FC } from 'react'
import { fieldStyles } from './classes'
import type { FieldProps } from './types'

export const Field: FC<FieldProps> = ({
  className,
  type = 'column',
  children,
  disabled,
  ...props
}) => {
  return (
    <Headless.Field
      {...props}
      className={fieldStyles({ className, type })}
      disabled={disabled}
    >
      {children}
    </Headless.Field>
  )
}
