import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon, type IconProps } from '../icon'

const classes = cva([
  'hover:fill-error',
  'dark:hover:fill-error',
  'cursor-pointer',
  'select-none',
])

export interface ClearButtonProps extends Omit<IconProps, 'icon'> {}

export const ClearButton = forwardRef<any, ClearButtonProps>(
  ({ onClick, className, ...props }, ref) => (
    <Icon
      ref={ref}
      icon='close'
      onClick={onClick}
      className={twMerge(classes(), className)}
      aria-hidden='true'
      {...props}
    />
  ),
)
