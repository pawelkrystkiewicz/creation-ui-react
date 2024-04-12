import { sharedReadOnlyCVA } from '../../classes'
import { cva } from 'class-variance-authority'

export const switchClasses = cva(
  [
    'micro-interactions',
    'cursor-pointer',
    'peer',
    'relative',
    'inline-flex',
    'shrink-0',
    '!rounded-full',
    'h-fit',
    'border',
    // 'bg-background-primary',
  ],
  {
    variants: {
      size: {
        sm: ['w-[35px]', 'p-0.5'],
        md: ['w-[47px]', 'p-0.5'],
        lg: ['w-[55px]', 'p-0.5'],
      },
      checked: {
        true: ['bg-primary'],
        false: [],
      },
      readOnly: sharedReadOnlyCVA,
    },
    defaultVariants: {
      size: 'md',
    },
  },
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
        sm: ['size-3'],
        md: ['size-4'],
        lg: ['size-5'],
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
  },
)
