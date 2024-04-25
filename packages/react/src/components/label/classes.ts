import { cva } from 'class-variance-authority'

export const label = cva(['select-none', 'block', 'font-medium'], {
  variants: {
    required: {
      true: ["after:content-['*']", 'after:ml-0.5', 'after:text-error'],
    },
    size: {
      sm: ['!text-xs'],
      md: ['!text-sm'],
      lg: ['!text-base'],
    },
    for: {
      checkbox: ['inline-flex', 'items-center', 'cursor-pointer'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
