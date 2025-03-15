import { cva } from 'class-variance-authority'

export const labelStyles = cva(
  [
    'text-base/6',
    'text-neutral-950',
    'select-none',
    'data-disabled:opacity-50',
    'sm:text-sm/6',
    'dark:text-white',
  ],
  {
    variants: {
      required: {
        true: ["after:content-['*']", 'after:ml-0.5', 'after:text-error'],
      },
    },
  },
)
