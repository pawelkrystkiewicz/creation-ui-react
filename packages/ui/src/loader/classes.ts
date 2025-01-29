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
    'fill-[var(--loader-color)]',
  ],
  {
    variants: {
      color: {
        error: '[--loader-color:fill-error-500]',
        primary: '[--loader-color:fill-primary-500]',
        success: '[--loader-color:fill-success-500]',
        warning: '[--loader-color:fill-warning-500]',
        white: '[--loader-color:fill-white]',
        black: '[--loader-color:fill-black]',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
)
