import { cva } from 'class-variance-authority'

const size = {
  sm: ['size-4'],
  md: ['size-6'],
  lg: ['size-8'],
}

export const loaderClasses = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'select-none',
    'micro-interactions',
  ],
  {
    variants: {
      size,
      active: {
        true: 'visible',
        false: 'hidden',
      },
    },
    defaultVariants: {
      size: 'md',
      active: true,
    },
  }
)
export const loaderIconClasses = cva(['animate-spin'], {
  variants: {
    size,
    white: {
      true: ['text-white/20', 'fill-white'],
      false: ['text-primary/20', 'fill-primary'],
    },
  },
  defaultVariants: {
    white: false,
  },
})
