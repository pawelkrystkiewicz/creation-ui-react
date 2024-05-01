import { cva } from 'class-variance-authority'

export const container = cva([
  'w-full',
  'rounded-full',
  'relative',
  'bg-background-input',
])

export const progressValue = cva(
  [
    'absolute',
    'top-1/2',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    '-translate-y-1/2',
  ],
  {
    variants: {
      size: {
        sm: ['!top-0', '!-translate-y-full', 'pb-2', 'text-sm'],
        md: ['text-sm'],
        lg: ['text-base'],
      },
      invert: {
        true: ['!text-white'],
      },
      mono: {
        true: null,
      },
    },
    compoundVariants: [
      {
        invert: true,
        mono: true,
        class: 'dark:invert',
      },
    ],
  }
)

export const progressBar = cva(
  [
    'text-center',
    'leading-none',
    'rounded-full',
    'transition-all',
    'duration-500',
    'ease-in-out',
  ],
  {
    variants: {
      size: {
        sm: ['p-1'],
        md: ['p-2'],
        lg: ['p-3'],
      },
      value: {
        false: ['!bg-transparent'],
      },
      color: {
        primary: ['bg-primary'],
        success: ['bg-success'],
        warning: ['bg-warning'],
        error: ['bg-error'],
        info: ['bg-info'],
        mono: ['bg-black', 'dark:bg-white'],
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  }
)
