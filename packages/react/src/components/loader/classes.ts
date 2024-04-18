import { cva } from 'class-variance-authority'
import clsx from 'clsx'

export const loaderClasses = clsx(
  'flex',
  'justify-center',
  'items-center',
  'select-none'
)

export const loaderIconClasses = cva(['animate-spin', 'text-info/25'], {
  variants: {
    white: {
      false: ['fill-primary'],
      true: ['fill-white'],
    },
  },
  defaultVariants: {
    white: false,
  },
})
