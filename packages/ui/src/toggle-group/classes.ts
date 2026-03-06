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
    // Checked state (via Base UI data attributes)
    'data-checked:bg-primary',
    'data-checked:hover:bg-primary/75',
    'data-checked:text-white',
    'data-checked:font-bold',
    // Unchecked state
    'data-unchecked:hover:bg-primary/20',
    'data-unchecked:text-foreground',
    // Focus ring
    'data-[focused]:outline',
    'data-[focused]:outline-2',
    'data-[focused]:outline-offset-2',
    'data-[focused]:outline-ring',
    // Disabled state
    'data-disabled:opacity-50',
    'data-disabled:pointer-events-none',
  ],
  {
    variants: {
      element: groupPositionClasses,
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
