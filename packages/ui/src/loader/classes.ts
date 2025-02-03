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
    'fill-(--loader-color)',
  ],
  {
    variants: {
      color: {
        error: '[--loader-color:fill-error]',
        primary: '[--loader-color:fill-primary]',
        success: '[--loader-color:fill-success]',
        warning: '[--loader-color:fill-warning]',
        white: '[--loader-color:fill-white]',
        black: '[--loader-color:fill-black]',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
)
