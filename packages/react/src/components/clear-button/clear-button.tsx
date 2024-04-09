import { ElementSize } from '../../types'
import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import type { IconProps } from '../icon'
import { Icon } from '../icon'

const classes = cva(['hover:fill-error', 'cursor-pointer', 'select-none'])

export interface ClearButtonProps extends Omit<IconProps, 'icon' | 'size'> {
  size?: ElementSize
}

const ClearButton = forwardRef<any, ClearButtonProps>(
  ({ onClick, className, size, ...props }, ref) => (
    <Icon
      ref={ref}
      icon='close'
      size={size}
      onClick={onClick}
      className={twMerge(classes(), className)}
      aria-hidden='true'
      {...props}
    />
  ),
)

ClearButton.displayName = 'ClearButton'

export default ClearButton
