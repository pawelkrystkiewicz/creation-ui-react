import * as Headless from '@headlessui/react'
import { cva } from 'class-variance-authority'
import React, { forwardRef, ReactNode } from 'react'
import { Link } from './Link'
import { Loader } from './loader'
import { TouchTarget } from './TouchTarget'
import type {
  ElementColor,
  ElementPlacementHorizontal,
  ElementVariant,
} from './types'
import { InteractiveContainer } from './InteractiveContainer'

const styles = cva(
  [
    // Base
    'relative',
    // 'micro-interactions',
    'transition-all duration-300 ease-in-out',
    'isolate',
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
    'h-[var(--ui-size)]',
  ],
  {
    variants: {
      disabled: {
        true: 'pointer-events-none opacity-50',
      },
      uppercase: {
        true: 'uppercase',
      },
      fullWidth: {
        true: 'w-full',
      },
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
        success: [
          '[--btn-color:theme(colors.success)]',
          '[--btn-color-contrast:theme(colors.white)]',
        ],
        warning: [
          '[--btn-color:theme(colors.warning)]',
          '[--btn-color-contrast:theme(colors.black)]',
        ],
        error: [
          '[--btn-color:theme(colors.error)]',
          '[--btn-color-contrast:theme(colors.white)]',
        ],
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
  loading?: boolean
  disabled?: boolean
  uppercase?: boolean
  fullWidth?: boolean
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  spinnerPosition?: ElementPlacementHorizontal
} & (
  | Omit<Headless.ButtonProps, 'className'>
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>
)

export const Button = forwardRef(function (
  {
    color,
    variant,
    className,
    children,
    loading,
    fullWidth,
    disabled,
    startAdornment,
    endAdornment,
    uppercase,
    spinnerPosition = 'left',
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const isDisabled = Boolean(disabled || loading)
  const classes = styles({
    color,
    variant,
    className,
    uppercase,
    fullWidth,
    disabled: isDisabled,
  })
  // TODO: types
  const spinner = <Loader color={color as any} />
  const leftSpinner: boolean = Boolean(loading && spinnerPosition === 'left')
  const rightSpinner: boolean = Boolean(loading && spinnerPosition === 'right')

  const inner = (
    <TouchTarget disabled={isDisabled}>
      {leftSpinner && spinner}
      {startAdornment}
      {children}
      {endAdornment}
      {rightSpinner && spinner}
    </TouchTarget>
  )

  return 'href' in props ? (
    <Link
      {...props}
      className={classes}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      {inner}
    </Link>
  ) : (
    <Headless.Button {...props} className={classes} ref={ref}>
      {inner}
    </Headless.Button>
  )
})
