import { cva } from 'class-variance-authority'

export const drawerChildClasses = [
  'w-full',
  'overflow-hidden',
  'text-left',
  'shadow-xl',
  'bg-background',
]

export const drawerStyles = cva(
  [
    'fixed',
    'overflow-hidden',
    'w-full',
    'h-full',
    'z-(--ui-z-drawers)',
    'transition-transform',
    'micro-interactions',
  ],
  {
    variants: {
      position: {
        bottom: [
          'inset-x-0',
          'bottom-0',
          'data-starting-style:translate-y-full',
          'data-ending-style:translate-y-full',
        ],
        top: [
          'inset-x-0',
          'top-0',
          'data-starting-style:-translate-y-full',
          'data-ending-style:-translate-y-full',
        ],
        right: [
          'inset-y-0',
          'right-0',
          'data-starting-style:translate-x-full',
          'data-ending-style:translate-x-full',
        ],
        left: [
          'inset-y-0',
          'left-0',
          'data-starting-style:-translate-x-full',
          'data-ending-style:-translate-x-full',
        ],
      },
    },
    defaultVariants: {
      position: 'right',
    },
  },
)
