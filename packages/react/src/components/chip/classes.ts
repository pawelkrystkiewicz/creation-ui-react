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
        primary: ['text-primary-500', 'dark:text-primary-200'],
        success: ['text-success-600', 'dark:text-success-200'],
        error: ['text-error-500', 'dark:text-error-200'],
        warning: ['text-warning-600', 'dark:text-warning-200'],
        info: ['text-info-800', 'dark:text-info-200'],
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
          'border-primary-200',
          'dark:border-primary-500',
          'dark:hover:bg-primary-600/50',
          'hover:bg-primary-500/10',
        ],
      },
      {
        status: 'success',
        variant: 'outlined',
        className: [
          'border-success-200',
          'dark:border-success-500',
          'dark:hover:bg-success-800/50',
          'hover:bg-success-500/10',
        ],
      },
      {
        status: 'warning',
        variant: 'outlined',
        className: [
          'border-warning-200',
          'dark:border-warning-500',
          'dark:hover:bg-warning-800/50',
          'hover:bg-warning-500/10',
        ],
      },
      {
        status: 'error',
        variant: 'outlined',
        className: [
          'border-error-200',
          'dark:border-error-500',
          'dark:hover:bg-error-800/50',
          'hover:bg-error-500/10',
        ],
      },
      {
        status: 'info',
        variant: 'outlined',
        className: [
          'border-info-200',
          'dark:border-info-500',
          'dark:hover:bg-info-600/50',
          'hover:bg-info-500/10',
        ],
      },
      // CONTAINED
      {
        status: 'primary',
        variant: 'contained',
        className: [
          'bg-primary-50/50',
          'dark:bg-primary-500',
          '!dark:text-primary-50',
          'dark:hover:bg-primary-400',
        ],
      },
      {
        status: 'success',
        variant: 'contained',
        className: [
          'bg-success-50/50',
          'dark:bg-success-500',
          'hover:bg-success-500/50',
          'dark:hover:bg-success-400',
          'dark:text-success-50',
        ],
      },
      {
        status: 'warning',
        variant: 'contained',
        className: [
          'bg-warning-100',
          'dark:bg-warning-500',
          'hover:bg-warning-500/50',
          'dark:text-warning-50',
          'dark:hover:bg-warning-400',
        ],
      },
      {
        status: 'error',
        variant: 'contained',
        className: [
          'bg-error-100',
          'dark:bg-error-500',
          'hover:bg-error-500/50',
          'dark:text-error-50',
          'dark:hover:bg-error-400',
        ],
      },
      {
        status: 'info',
        variant: 'contained',
        className: [
          'bg-info-100',
          'dark:bg-info-500',
          'hover:bg-info-500/50',
          'dark:text-info-50',
          'dark:hover:bg-info-400',
        ],
      },
    ],
  }
)
