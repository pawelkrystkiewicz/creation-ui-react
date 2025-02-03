import React, { FC } from 'react'
import { FieldProps } from './types'
import * as Headless from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { fieldStyles } from './classes'

export const Field: FC<FieldProps> = ({
  className,
  type = 'column',
  ...props
}) => {
  return (
    <Headless.Field {...props} className={fieldStyles({ className, type })} />
  )
}

export const FieldGroup = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      data-slot='control'
      {...props}
      className={twMerge(className, 'space-y-8')}
    />
  )
}
