import { classes, sharedReadOnlyCVA } from '@root/classes'
import { cva } from 'class-variance-authority'

export const switchClasses = cva(
  [
    ...classes.input,
    'micro-interactions',
    'checked:border-transparent',
    'dark:checked:bg-primary',
    'cursor-pointer',
    'peer',
    'relative',
    'inline-flex',
    'shrink-0',
    'border-2',
    '!bg-info',
    '!dark:bg-info',
    '!rounded-full',
    'h-fit',
  ],
  {
    variants: {
      size: {
        sm: ['w-8', 'p-0'],
        md: ['w-12', 'p-0.5'],
        lg: ['w-14', 'p-0.5'],
      },
      checked: {
        true: ['!bg-primary', '!border-primary'],
        false: ['!border-transparent'],
      },
      readOnly: sharedReadOnlyCVA,
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
export const switchCircle = cva(
  [
    'micro-interactions',
    'transform',
    'transition-all',
    'rounded-full',
    'bg-white',
    'shadow-lg',
    'ring-0',
  ],
  {
    variants: {
      size: {
        sm: ['h-3', 'w-3'],
        md: ['h-4', 'w-4'],
        lg: ['h-5', 'w-5'],
      },
      checked: {
        true: null,
        false: ['translate-x-0'],
      },
    },
    compoundVariants: [
      {
        checked: true,
        size: 'sm',
        className: ['translate-x-4'],
      },
      {
        checked: true,
        size: 'md',
        className: ['translate-x-6'],
      },
      {
        checked: true,
        size: 'lg',
        className: ['translate-x-7'],
      },
    ],
  }
)
