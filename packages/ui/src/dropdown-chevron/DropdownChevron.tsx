import { cva } from 'class-variance-authority'
import type { DropdownChevronProps } from './types'
import { Icon } from '../icon'

const chevron = cva(
  [
    'text-info',
    'ease-in-out',
    'duration-300',
    'hover:text-info',
    'cursor-pointer',
  ],
  {
    variants: {
      open: {
        true: ['rotate-180'],
      },
    },
  },
)

export const DropdownChevron = ({
  open,
  className,
  ...props
}: DropdownChevronProps) => (
  <Icon
    icon='chevron_down'
    className={chevron({ open, className })}
    aria-hidden='true'
    {...props}
  />
)
