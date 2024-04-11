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
          'bg-primary-500',
          'hover:bg-primary-600',
          'focus:bg-primary-600',
          'active:bg-primary-700',
        ],
      },
      {
        variant: 'outlined',
        status: 'primary',
        className: [
          'border',
          'border-primary-500',
          'text-primary-500',
          'hover:bg-primary-50',
          'active:bg-primary-100',
        ],
      },
      {
        variant: 'text',
        status: 'primary',
        className: [
          'bg-transparent',
          'text-primary-500',
          'focus:text-primary-600',
          'hover:text-primary-600',
          'hover:bg-primary-50/50',
          'active:text-primary-500',
        ],
      },
      {
        variant: 'contained',
        status: 'success',
        className: [
          'text-white',
          'bg-success-500',
          'hover:bg-success-600',
          'focus:bg-success-600',
          'active:bg-success-700',
        ],
      },
      {
        variant: 'outlined',
        status: 'success',
        className: [
          'border',
          'border-success-500',
          'text-success-500',
          'hover:bg-success-50',
          'active:bg-success-100',
        ],
      },
      {
        variant: 'text',
        status: 'success',
        className: [
          'bg-transparent',
          'text-success-500',
          'focus:text-success-600',
          'hover:text-success-600',
          'hover:bg-success-50/50',
          'active:text-success-500',
        ],
      },
      {
        variant: 'contained',
        status: 'warning',
        className: [
          'text-white',
          'bg-warning-500',
          'hover:bg-warning-600',
          'focus:bg-warning-600',
          'active:bg-warning-700',
        ],
      },
      {
        variant: 'outlined',
        status: 'warning',
        className: [
          'border',
          'border-warning-500',
          'text-warning-500',
          'hover:bg-warning-50',
          'active:bg-warning-100',
        ],
      },
      {
        variant: 'text',
        status: 'warning',
        className: [
          'bg-transparent',
          'text-warning-500',
          'focus:text-warning-600',
          'hover:text-warning-600',
          'hover:bg-warning-50/50',
          'active:text-warning-500',
        ],
      },
      {
        variant: 'contained',
        status: 'error',
        className: [
          'text-white',
          'bg-error-500',
          'hover:bg-error-600',
          'focus:bg-error-600',
          'active:bg-error-700',
        ],
      },
      {
        variant: 'outlined',
        status: 'error',
        className: [
          'border',
          'border-error-500',
          'text-error-500',
          'hover:bg-error-50',
          'active:bg-error-100',
        ],
      },
      {
        variant: 'text',
        status: 'error',
        className: [
          'bg-transparent',
          'text-error-500',
          'focus:text-error-600',
          'hover:text-error-600',
          'hover:bg-error-50/50',
          'active:text-error-500',
        ],
      },
      // INFO
      {
        variant: 'contained',
        status: 'info',
        className: [
          'text-white',
          'bg-info-500',
          'hover:bg-info-600',
          'focus:bg-info-600',
          'active:bg-info-700',
        ],
      },
      {
        variant: 'outlined',
        status: 'info',
        className: [
          'border',
          'border-info-500',
          'text-info-500',
          'hover:bg-info-50',
          'active:bg-info-100',
        ],
      },
      {
        variant: 'text',
        status: 'info',
        className: [
          'bg-transparent',
          'text-info-700',
          'focus:text-info-900',
          'hover:text-info-800',
          'hover:bg-info-50',
          'active:text-info-900',
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
