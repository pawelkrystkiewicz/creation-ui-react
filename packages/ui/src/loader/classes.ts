import { cva } from 'class-variance-authority'
import clsx from 'clsx'

export const loaderClasses = clsx(
  'flex',
  'justify-center',
  'items-center',
  'select-none',
)

export const loaderIconClasses = cva(
  ['size-[var(--ui-icon-size)]', 'animate-spin', 'text-info/25'],
  {
    variants: {
      color: {
        error: 'fill-error',
        info: 'fill-info',
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
