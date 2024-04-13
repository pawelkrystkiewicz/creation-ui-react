import { cva } from 'class-variance-authority'

export const chipClasses = cva(
  [
    'inline-flex',
    'leading-5',
    'rounded-full',
    'font-semibold',
    'w-fit',
    'select-none',
    'justify-center',
    'items-center',
    'flex-row',
    'gap-1',
    'py-0.5',
    'cui-element',
    'text-size'
  ],
  {
    variants: {
      status: {
        primary: ['text-primary', 'bg-primary', 'border-primary'],
        success: ['text-success', 'bg-success', 'border-success'],
        error: ['text-error', 'bg-error', 'border-error'],
        warning: ['text-warning', 'bg-warning', 'border-warning'],
        info: ['text-info', 'bg-info', 'border-info']
      },
      size: {
        sm: ['!text-xs', 'px-1.5'],
        md: ['!text-sm', 'px-1.5'],
        lg: ['!text-base', 'px-2']
      },
      variant: {
        contained: ['border-none'],
        outlined: ['border', '!bg-none']
      },
      uppercase: {
        true: ['uppercase'],
        false: []
      },
      interactive: {
        true: ['pointer-events-auto'],
        false: ['pointer-events-none']
      }
    },
    defaultVariants: {
      size: 'md',
      variant: 'contained',
      uppercase: false,
      interactive: false
    }

  }
)
