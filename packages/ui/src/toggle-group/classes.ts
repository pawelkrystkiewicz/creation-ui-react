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
    'micro-interactions',
  ],
  {
    variants: {
      element: groupPositionClasses,
      checked: {
        true: ['bg-primary', 'hover:bg-primary/75', 'text-white', 'font-bold'],
        false: ['hover:bg-primary/20', 'text-foreground'],
      },
      disabled: {
        true: disabled,
        false: [],
      },
      // not used but available in healdessui API
      autofocus: {
        true: [],
        false: [],
      },
      focus: {
        true: [],
        false: [],
      },
      hover: {
        true: [],
        false: [],
      },
    },
  },
)

export const toggleGroupContainerStyles = cva(
  [
    'relative',
    'inline-flex',
    'rounded-md',
    'h-[var(--ui-height)]',
    'max-h-[var(--ui-height)]',
  ],
  {
    variants: {
      disabled: {
        true: disabled,
      },
    },
  },
)
