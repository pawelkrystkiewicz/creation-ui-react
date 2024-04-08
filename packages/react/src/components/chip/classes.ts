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
    '!bg-opacity-10',
    '!hover:bg-opacity-15',
    '!focus:bg-opacity-5',
    'micro-interactions',
  ],
  {
    variants: {
      status: {
        primary: ['text-primary'],
        success: ['text-success'],
        error: ['text-error'],
        warning: ['text-warning'],
        info: ['text-text-primary'],
      },
      size: {
        sm: ['!text-xs', 'px-2'],
        md: ['!text-sm', 'px-2.5'],
        lg: ['!text-base', 'px-3'],
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
        className: ['border-primary'],
      },
      {
        status: 'success',
        variant: 'outlined',
        className: ['border-success'],
      },
      {
        status: 'warning',
        variant: 'outlined',
        className: ['border-warning'],
      },
      {
        status: 'error',
        variant: 'outlined',
        className: ['border-error'],
      },
      {
        status: 'info',
        variant: 'outlined',
        className: ['border-info'],
      },
      // CONTAINED
      {
        status: 'primary',
        variant: 'contained',
        className: ['bg-primary'],
      },
      {
        status: 'success',
        variant: 'contained',
        className: ['bg-success'],
      },
      {
        status: 'warning',
        variant: 'contained',
        className: ['bg-warning'],
      },
      {
        status: 'error',
        variant: 'contained',
        className: ['bg-error'],
      },
      {
        status: 'info',
        variant: 'contained',
        className: ['bg-info'],
      },
    ],
  }
)
