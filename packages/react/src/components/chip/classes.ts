import { ThemePreloadedClasses } from '@root/theme'
import { cva } from 'class-variance-authority'

export const chipClasses = ({ animations, triggers }: ThemePreloadedClasses) =>
  cva(
    [
      animations.microInteractionsAll,
      'inline-flex',
      'leading-5',
      'rounded-full',
      'font-medium',
      'w-fit',
      'select-none',
      'justify-center',
      'items-center',
      'flex-row',
      'gap-1',
      'py-0.5',
    ],
    {
      variants: {
        status: {
          primary: ['text-primary', 'bg-primary', 'border-primary'],
          success: ['text-success', 'bg-success', 'border-success'],
          error: ['text-error', 'bg-error', 'border-error'],
          warning: ['text-warning', 'bg-warning', 'border-warning'],
          info: ['text-info', 'bg-info', 'border-info'],
          undefined: [
            'bg-text-primary',
            'text-text-primary',
            'border-text-primary',
          ],
        },
        size: {
          sm: ['!text-xs', 'px-1.5'],
          md: ['!text-sm', 'px-1.5'],
          lg: ['px-2'],
        },
        variant: {
          contained: [...triggers.contained, 'border-none'],
          outlined: [...triggers.outlined, 'border', '!bg-none'],
          text: [...triggers.text],
        },
        uppercase: { true: 'uppercase' },
        interactive: {
          true: ['pointer-events-auto'],
          false: ['pointer-events-none'],
        },
      },
      defaultVariants: {
        size: 'md',
        variant: 'contained',
        uppercase: false,
        interactive: false,
      },
    }
  )
