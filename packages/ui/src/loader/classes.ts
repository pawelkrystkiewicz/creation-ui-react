import { cva } from 'class-variance-authority'
import clsx from 'clsx'

export const loaderClasses = clsx(
  'flex',
  'justify-center',
  'items-center',
  'select-none',
)

export const loaderIconClasses = cva(
  [
    'animate-spin',
    'text-info/25',
    'size-[var(--ui-icon-height)]',
  ],
  {
    variants: {
      color: {
        error: 'fill-error',
        primary: 'fill-primary',
        success: 'fill-success',
        warning: 'fill-warning',
        white: 'fill-white',
        black: 'fill-black',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
)
