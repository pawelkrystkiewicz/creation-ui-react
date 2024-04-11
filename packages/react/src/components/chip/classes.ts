import { cva } from 'class-variance-authority'

export const chipClasses = cva(
  [
    'inline-flex',
    'text-xs',
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
    'micro-interactions',
  ],
  {
    variants: {
      status: {
        primary: ['text-primary', 'dark:text-primary'],
        success: ['text-success', 'dark:text-success'],
        error: ['text-error', 'dark:text-error'],
        warning: ['text-warning', 'dark:text-warning'],
        info: ['text-info', 'dark:text-info'],
      },
      size: {
        sm: ['!text-xs', 'px-1'],
        md: ['!text-sm', 'px-1.5'],
        lg: ['!text-base', 'px-2'],
      },
      variant: {
        contained: ['border-none'],
        outlined: ['border', '!bg-none'],
      },
      uppercase: {
        true: ['uppercase'],
        false: [],
      },
      interactive: {
        true: ['!cursor-pointer'],
        false: ['!cursor-default'],
      },
    },
    defaultVariants: {
      size: 'md',
      // status: 'info',
      variant: 'contained',
      uppercase: false,
      interactive: false,
    },
    compoundVariants: [
      // OUTLINED
      {
        status: 'primary',
        variant: 'outlined',
        className: [
          'border-primary',
          'dark:border-primary',
          'dark:hover:bg-primary/50',
          'hover:bg-primary/10',
        ],
      },
      {
        status: 'success',
        variant: 'outlined',
        className: [
          'border-success',
          'dark:border-success',
          'dark:hover:bg-success/50',
          'hover:bg-success/10',
        ],
      },
      {
        status: 'warning',
        variant: 'outlined',
        className: [
          'border-warning',
          'dark:border-warning',
          'dark:hover:bg-warning/50',
          'hover:bg-warning/10',
        ],
      },
      {
        status: 'error',
        variant: 'outlined',
        className: [
          'border-error',
          'dark:border-error',
          'dark:hover:bg-error/50',
          'hover:bg-error/10',
        ],
      },
      {
        status: 'info',
        variant: 'outlined',
        className: [
          'border-info',
          'dark:border-info',
          'dark:hover:bg-info/50',
          'hover:bg-info/10',
        ],
      },
      // CONTAINED
      {
        status: 'primary',
        variant: 'contained',
        className: [
          'bg-primary-50/50',
          'dark:bg-primary',
          '!dark:text-primary-50',
          'dark:hover:bg-primary',
        ],
      },
      {
        status: 'success',
        variant: 'contained',
        className: [
          'bg-success-50/50',
          'dark:bg-success',
          'hover:bg-success/50',
          'dark:hover:bg-success',
          'dark:text-success-50',
        ],
      },
      {
        status: 'warning',
        variant: 'contained',
        className: [
          'bg-warning',
          'dark:bg-warning',
          'hover:bg-warning/50',
          'dark:text-warning-50',
          'dark:hover:bg-warning',
        ],
      },
      {
        status: 'error',
        variant: 'contained',
        className: [
          'bg-error',
          'dark:bg-error',
          'hover:bg-error/50',
          'dark:text-error-50',
          'dark:hover:bg-error',
        ],
      },
      {
        status: 'info',
        variant: 'contained',
        className: [
          'bg-info',
          'dark:bg-info',
          'hover:bg-info/50',
          'dark:text-info-50',
          'dark:hover:bg-info',
        ],
      },
    ],
  }
)
