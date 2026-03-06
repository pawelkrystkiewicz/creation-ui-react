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
          'translate-y-full',
          'data-open:translate-y-0',
        ],
        top: [
          'inset-x-0',
          'top-0',
          '-translate-y-full',
          'data-open:translate-y-0',
        ],
        right: [
          'inset-y-0',
          'right-0',
          'translate-x-full',
          'data-open:translate-x-0',
        ],
        left: [
          'inset-y-0',
          'left-0',
          '-translate-x-full',
          'data-open:translate-x-0',
        ],
      },
    },
    defaultVariants: {
      position: 'right',
    },
  },
)
