import * as Headless from '@headlessui/react'
import { cva } from 'class-variance-authority'
import React, { forwardRef, ReactNode } from 'react'
import { Link } from './link'
import { TouchTarget } from './TouchTarget'
import type { ElementColor, ElementVariant } from './types'

const styles = cva(
  [
    // Base
    'relative',
    // 'micro-interactions',
    'transition-all duration-300 ease-fluid',
    'isolate',
    'cursor-pointer',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-x-2',
    'rounded-md',
    'font-medium',
    // Sizing
    'px-[calc(theme(spacing[3.5])-1px)]',
    'py-[calc(theme(spacing[2.5])-1px)]',
    'sm:px-[calc(theme(spacing.3)-1px)]',
    'sm:py-[calc(theme(spacing[1.5])-1px)]',
    // Focus
    'focus:outline-none',
    'data-focus:outline',
    'data-focus:outline-2',
    'data-focus:outline-offset-2',
    'data-focus:outline-primary',
    // Disabled
    'data-disabled:opacity-50',
    'data-disabled:pointer-events-none',
    'data-active:scale-95',
  ],
  {
    variants: {
      variant: {
        contained: [
          // Optical border, implemented as the button background to avoid corner artifacts
          'text-[var(--btn-color-contrast)]',
          'bg-[var(--btn-color)]',
          'data-active:bg-[var(--btn-color)]/[85%]',
          'data-hover:bg-[var(--btn-color)]/90',
        ],
        outlined: [
          // Base
          'border',
          '!border-[var(--btn-color)]',
          'text-[var(--btn-color)]',
          'bg-transparent',
          'data-active:bg-[var(--btn-color)]/20',
          'data-hover:bg-[var(--btn-color)]/10',
          // Dark mode
          'dark:data-active:bg-[var(--btn-color)]/30',
          'dark:data-hover:bg-[var(--btn-color)]/25',
        ],
        text: [
          // Base
          'border-transparent',
          'text-[var(--btn-color)]',
          'bg-transparent',
          'data-active:bg-[var(--btn-color)]/20',
          'data-hover:bg-[var(--btn-color)]/10',
          // Dark mode
          'dark:data-active:bg-[var(--btn-color)]/30',
          'dark:data-hover:bg-[var(--btn-color)]/25',
        ],
      },
      color: {
        primary: [
          '[--btn-color:theme(colors.primary)]',
          '[--btn-color-contrast:theme(colors.white)]',
          // '[--btn-bg:transparent]',
          // '[--btn-text:theme(colors.primary.500)]',
          // '[--btn-border:theme(colors.primary.500)]',
          // '[--btn-hover-overlay:theme(colors.neutral.950/2.5%)]',
          // Dark mode
          // 'dark:[--btn-hover-overlay:theme(colors.white/5%)]',
          // 'dark:[--btn-bg:theme(colors.neutral.800)]',
        ],
        success: ['[--btn-color:theme(colors.success)]', '[--btn-color-contrast:theme(colors.white)]'],
        warning: ['[--btn-color:theme(colors.warning)]', '[--btn-color-contrast:theme(colors.black)]'],
        error: ['[--btn-color:theme(colors.error)]', '[--btn-color-contrast:theme(colors.white)]'],
        mono: [
          //

          '[--btn-color:theme(colors.black)]',
          'dark:[--btn-color:theme(colors.white)]',
          '[--btn-color-contrast:theme(colors.white)]',
          'dark:[--btn-color-contrast:theme(colors.black)]',
        ],
        unstyled: [],
      },
    },
    defaultVariants: {
      color: 'primary',
      variant: 'outlined',
    },
  },



)

export type ButtonProps = {
  color?: ElementColor | 'unstyled'
  variant?: ElementVariant
  className?: string
  children?: ReactNode
} & (Omit<Headless.ButtonProps, 'className'> | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>)

export const Button = forwardRef(function (
  { color, variant, className, children, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classes = styles({
    color,
    variant,

    className,
  })

  return 'href' in props ? (
    <Link {...props} className={classes} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <Headless.Button {...props} className={classes} ref={ref}>
      <TouchTarget>{children}</TouchTarget>
    </Headless.Button>
  )
})
