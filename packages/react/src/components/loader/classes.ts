import { cva } from 'class-variance-authority'
import { microInteractions } from '@creation-ui/core'

const size = {
  sm: ['w-4', 'h-4'],
  md: ['w-6', 'h-6'],
  lg: ['w-8', 'h-8'],
}

export const loaderClasses = cva(
  ['flex', 'justify-center', 'items-center', 'select-none', microInteractions],
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
