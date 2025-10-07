import { cva } from 'class-variance-authority'
import type { DropdownChevronProps } from './types'
import { Icon } from '../icon'

const chevron = cva([], {
  variants: {
    open: {
      true: ['rotate-180'],
    },
    disabled: {
      true: ['opacity-50', 'pointer-events-none'],
      false: [
        'cursor-pointer',
        'text-info',
        'ease-in-out',
        'duration-300',
        'hover:text-info',
      ],
    },
  },
})

export const DropdownChevron = ({
  open,
  className,
  disabled,
  ...props
}: DropdownChevronProps) => (
  <Icon
    icon='chevron_down'
    className={chevron({ open, className, disabled })}
    aria-hidden='true'
    {...props}
  />
)
