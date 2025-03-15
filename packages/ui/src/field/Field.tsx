import * as Headless from '@headlessui/react'
import { type FC } from 'react'
import { fieldStyles } from './classes'
import type { FieldProps } from './types'

export const Field: FC<FieldProps> = ({
  className,
  layout = 'column',
  ...props
}) => {
  return (
    <Headless.Field {...props} className={fieldStyles({ className, layout })} />
  )
}
