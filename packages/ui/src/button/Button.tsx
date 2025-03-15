import * as Headless from '@headlessui/react'
import { cva } from 'class-variance-authority'
import React, { forwardRef, type ReactNode } from 'react'
import { Link } from '../link'
import { Loader } from '../loader'
import { TouchTarget } from '../touch-target'
import type {
  ElementColor,
  ElementPlacementHorizontal,
  ElementVariant,
} from '../types'
import { triggerVariants } from '../classes'

const styles = cva(
  [
    // Base
    'relative',
    'micro-interactions',
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
    'h-[var(--ui-height)]',
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
      ...triggerVariants,
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
  loaderColor?: string
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
    loaderColor,
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

  const spinner = <Loader color={loaderColor ?? color} />
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
