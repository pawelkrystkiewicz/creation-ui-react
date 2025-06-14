import { cva, VariantProps } from 'class-variance-authority'

export const inputBaseClasses = cva(
  [
    'relative',
    'block',
    'w-full',
    'h-[var(--ui-height)]',
    'appearance-none',
    // Typography
    'text-base/6',
    'placeholder:text-neutral-500',
    'sm:text-sm/6',
    'text-text-primary',
    // Hide default focus styles
    'focus:outline-hidden',
    // Border
    'border-border',
    'data-hover:border-border/50',
    // Invalid state
    'data-invalid:border-error',
    'data-invalid:data-hover:border-error',
    'dark:data-invalid:border-error',
    'dark:data-invalid:data-hover:border-error',
    // Disabled state
    'data-disabled:border-neutral-950/20',
    'dark:data-disabled:border-white/15',
    'dark:data-disabled:bg-white/[2.5%]',
    'dark:data-hover:data-disabled:border-white/15',
    'dark:[color-scheme:dark]',
  ],
  {
    variants: {
      border: {
        full: ['border', 'rounded-md'],
        bottom: ['border-b'],
        none: ['border-none'],
      },
      background: {
        true: ['bg-background-secondary/50', 'dark:bg-background-secondary/20'],
        false: ['bg-transparent'],
      },
    },
    defaultVariants: {
      border: 'none',
      background: false,
    },
  },
)
export type InputBaseStylesType = VariantProps<typeof inputBaseClasses>
