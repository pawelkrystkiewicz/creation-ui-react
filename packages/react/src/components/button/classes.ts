import { cva } from 'class-variance-authority'
import { sharedDisabledCVA, sharedSizeClassesCVA } from '@creation-ui/core'

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
  ],
  {
    variants: {
      disabled: sharedDisabledCVA,
      uppercase: {
        //
        true: ['uppercase'],
        false: null,
      },
      size: {
        sm: [...sharedSizeClassesCVA.sm, 'px-4'],
        md: [...sharedSizeClassesCVA.md, 'px-5'],
        lg: [...sharedSizeClassesCVA.lg, 'px-6'],
      },
      variant: {
        contained: null,
        outlined: null,
        text: null,
      },
      status: {
        primary: null,
        success: null,
        warning: null,
        error: null,
        info: null,
      },
      circle: { true: null, false: null },
    },
    defaultVariants: {
      status: 'primary',
      variant: 'contained',
      size: 'md',
      circle: false,
    },
    compoundVariants: [
      {
        variant: 'contained',
        status: 'primary',
        className: [
          'text-white',
          'bg-primary',
          'hover:bg-primary/50',
          'focus:bg-primary/50',
          'active:bg-primary/10',
        ],
      },
      {
        variant: 'outlined',
        status: 'primary',
        className: [
          'border',
          'border-primary',
          'text-primary',
          'hover:bg-primary',
          'active:bg-primary',
        ],
      },
      {
        variant: 'text',
        status: 'primary',
        className: [
          'bg-transparent',
          'text-primary',
          'focus:text-primary',
          'hover:text-primary',
          'hover:bg-primary/50',
          'active:text-primary',
        ],
      },
      {
        variant: 'contained',
        status: 'success',
        className: [
          'text-white',
          'bg-success',
          'hover:bg-success',
          'focus:bg-success',
          'active:bg-success',
        ],
      },
      {
        variant: 'outlined',
        status: 'success',
        className: [
          'border',
          'border-success',
          'text-success',
          'hover:bg-success',
          'active:bg-success',
        ],
      },
      {
        variant: 'text',
        status: 'success',
        className: [
          'bg-transparent',
          'text-success',
          'focus:text-success',
          'hover:text-success',
          'hover:bg-success/50',
          'active:text-success',
        ],
      },
      {
        variant: 'contained',
        status: 'warning',
        className: [
          'text-white',
          'bg-warning',
          'hover:bg-warning',
          'focus:bg-warning',
          'active:bg-warning',
        ],
      },
      {
        variant: 'outlined',
        status: 'warning',
        className: [
          'border',
          'border-warning',
          'text-warning',
          'hover:bg-warning/50',
          'active:bg-warning',
        ],
      },
      {
        variant: 'text',
        status: 'warning',
        className: [
          'bg-transparent',
          'text-warning',
          'focus:text-warning',
          'hover:text-warning',
          'hover:bg-warning/50',
          'active:text-warning',
        ],
      },
      {
        variant: 'contained',
        status: 'error',
        className: [
          'text-white',
          'bg-error',
          'hover:bg-error',
          'focus:bg-error',
          'active:bg-error',
        ],
      },
      {
        variant: 'outlined',
        status: 'error',
        className: [
          'border',
          'border-error',
          'text-error',
          'hover:bg-error',
          'active:bg-error',
        ],
      },
      {
        variant: 'text',
        status: 'error',
        className: [
          'bg-transparent',
          'text-error',
          'focus:text-error',
          'hover:text-error',
          'hover:bg-error/50',
          'active:text-error',
        ],
      },
      // INFO
      {
        variant: 'contained',
        status: 'info',
        className: [
          'text-white',
          'bg-info',
          'hover:bg-info',
          'focus:bg-info',
          'active:bg-info',
        ],
      },
      {
        variant: 'outlined',
        status: 'info',
        className: [
          'border',
          'border-info',
          'text-info',
          'hover:bg-info-50',
          'active:bg-info-100',
        ],
      },
      {
        variant: 'text',
        status: 'info',
        className: [
          'bg-transparent',
          'text-info',
          'focus:text-info',
          // 'hover:text-info-800',
          '!hover:font-medium',
          'active:text-info',
        ],
      },
      {
        size: 'sm',
        circle: true,
        className: ['px-1', 'h-12', 'w-12', '!rounded-full'],
      },
      {
        size: 'md',
        circle: true,
        className: ['px-1', 'h-16', 'w-16', '!rounded-full'],
      },
      {
        size: 'lg',
        circle: true,
        className: ['px-1', 'h-20', 'w-20', '!rounded-full'],
      },
    ],
  }
)
