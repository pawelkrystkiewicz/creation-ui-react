import { ThemePreloadedClasses } from '@root/theme'
import { cva } from 'class-variance-authority'

export const buttonClasses = ({
  disabled,
  focusable,
  size,
  triggers,
  animations,
}: ThemePreloadedClasses) =>
  cva(
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
      'relative',
      focusable,
      animations.microInteractionsAll,
    ],
    {
      variants: {
        disabled: { true: disabled },
        uppercase: { true: 'uppercase' },
        size: {
          sm: ['px-3', size.sm.height, size.sm.fontSize],
          md: ['px-5', size.md.height, size.md.fontSize],
          lg: ['px-6', size.lg.height, size.lg.fontSize],
        },
        variant: triggers,
        status: {
          primary: ['bg-primary', 'text-primary', 'border-primary'],
          success: ['bg-success', 'text-success', 'border-success'],
          warning: ['bg-warning', 'text-warning', 'border-warning'],
          error: ['bg-error', 'text-error', 'border-error'],
          info: ['bg-info', 'text-info', 'border-info'],
          mono: [
            'bg-black',
            'dark:bg-white',
            'border-black',
            'dark:border-white',
          ],
        },
        circle: { true: null, false: null },
        fullWidth: { true: '!w-full' },
      },
      defaultVariants: {
        status: 'primary',
        size: 'md',
        circle: false,
      },
      compoundVariants: [
        // CIRCLE
        {
          size: 'sm',
          circle: true,
          className: ['!px-1', '!size-12', '!rounded-full'],
        },
        {
          size: 'md',
          circle: true,
          className: ['!px-1', '!size-16', '!rounded-full'],
        },
        {
          size: 'lg',
          circle: true,
          className: ['!px-1', '!size-20', '!rounded-full'],
        },
        {
          status: 'mono',
          variant: 'contained',
          className: ['dark:text-black', 'text-white'],
        },
      ],
    }
  )
