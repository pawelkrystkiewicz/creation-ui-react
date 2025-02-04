import { cva } from 'class-variance-authority'
import { disabled, groupPositionClasses } from '../classes'

export const toggleGroupButtonStyles = cva(
  [
    'data-hover:border-zinc-950/20',
    'dark:border-white/10',
    'border-y',
    'cursor-pointer',
    'focus:z-10',
    'font-medium',
    'hover:bg-primary/10',
    'inline-flex',
    'items-center',
    'relative',
    'z-0',
    'px-3',
    'text-neutral-900',
    'dark:text-white',
  ],
  {
    variants: {
      element: groupPositionClasses,
      checked: {
        true: ['bg-primary', 'hover:bg-primary/75', 'text-white', 'font-bold'],
        false: ['hover:bg-primary/20'],
      },
      disabled: {
        true: disabled,
      },
    },
  },
)
