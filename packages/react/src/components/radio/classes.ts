import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { classes } from '../../classes'

export const radio = cva(
  [twMerge([classes.input, classes.checkable, 'rounded-full'])],
  {
    variants: {
      size: {
        sm: ['h-4', 'w-4'],
        md: ['h-5', 'w-5'],
        lg: ['h-6', 'w-6'],
      },
    },
  }
)
