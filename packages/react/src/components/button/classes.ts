import { cva } from 'class-variance-authority'
import { sharedDisabledCVA, sharedSizeClassesCVA } from '@root/classes'

export const button = cva(
  [
    'gap-2',
    'inline-flex',
    'flex-nowrap',
    'rounded-md',
    'items-center',
    'cursor-pointer',
    'select-none',
    'justify-center',
    'overflow-hidden',
    'micro-interactions'
  ],
  {
    variants: {
      disabled: sharedDisabledCVA,
      uppercase: {
        true: ['uppercase'],
        false: null
      },
      size: {
        sm: [...sharedSizeClassesCVA.sm, 'px-3'],
        md: [...sharedSizeClassesCVA.md, 'px-5'],
        lg: [...sharedSizeClassesCVA.lg, 'px-6']
      },
      variant: {
        contained: ['hover:bg-opacity-75', 'bg-opacity-100', '!text-white'],
        outlined: ['hover:bg-opacity-10', 'bg-opacity-0', 'border'],
        text: ['hover:text-text-primary', 'bg-opacity-0', 'border-transparent']
      },
      status: {
        primary: [
          'bg-primary',
          'text-primary',
          '!focus-visible:outline-primary',
          'border-primary'
        ],
        success: [
          'bg-success',
          'text-success',
          '!focus-visible:outline-success',
          'border-success'
        ],
        warning: [
          'bg-warning',
          'text-warning',
          '!focus-visible:outline-warning',
          'border-warning'
        ],
        error: [
          'bg-error',
          'text-error',
          '!focus-visible:outline-error',
          'border-error'
        ],
        info: [
          'bg-info',
          'text-info',
          '!focus-visible:outline-info',
          'border-info'
        ]
      },
      circle: { true: null, false: null }
    },
    defaultVariants: {
      status: 'primary',
      variant: 'contained',
      size: 'md',
      circle: false
    },
    compoundVariants: [
      // CIRCLE
      {
        size: 'sm',
        circle: true,
        className: ['px-1', 'size-12', '!rounded-full']
      },
      {
        size: 'md',
        circle: true,
        className: ['px-1', 'size-16', '!rounded-full']
      },
      {
        size: 'lg',
        circle: true,
        className: ['px-1', 'size-20', '!rounded-full']
      }
    ]
  }
)
