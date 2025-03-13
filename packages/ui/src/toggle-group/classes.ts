import { cva } from 'class-variance-authority'
import { disabled, groupPositionClasses } from '../classes'

export const toggleGroupButtonStyles = cva(
  [
    'border-y',
    'border-border',
    'cursor-pointer',
    'focus:z-10',
    'font-medium',
    'hover:bg-primary/10',
    'flex',
    'items-center',
    'justify-center',
    'relative',
    'z-0',
    'h-(--ui-height)',
    'min-w-(--ui-height)',
  ],
  {
    variants: {
      element: groupPositionClasses,
      checked: {
        true: ['bg-primary', 'hover:bg-primary/75', 'text-white', 'font-bold'],
        false: ['hover:bg-primary/20', 'text-text-primary'],
      },
      disabled: {
        true: disabled,
      },
    },
  },
)
