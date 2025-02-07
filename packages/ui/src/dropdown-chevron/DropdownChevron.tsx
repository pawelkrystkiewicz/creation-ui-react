import { cva } from 'class-variance-authority'
import { Icon } from '../icon'
import type { DropdownChevronProps } from './types'

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

const DropdownChevron = ({
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

export default DropdownChevron
