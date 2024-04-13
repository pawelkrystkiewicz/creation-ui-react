import { cva } from 'class-variance-authority'

export const button = cva(
  [
    'text-size', 'size',
    'gap-2',
    'inline-flex',
    'flex-nowrap',
    'rounded-md',
    'items-center',
    'cursor-pointer',
    'select-none',
    'justify-center',
    'overflow-hidden',
    'cui-element'
  ],
  {
    variants: {
      disabled: { true: 'cui-disabled' },
      uppercase: {
        true: ['uppercase'],
        false: null
      },
      size: {
        sm: ['px-3'],
        md: ['px-5'],
        lg: ['px-6']
      },
      variant: {
        contained: ['border'],
        outlined: ['border'],
        text: ['border-transparent']
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
