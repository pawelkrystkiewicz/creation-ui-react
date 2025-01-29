import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef, ReactNode } from 'react'
import { Icon } from './Icon'

export function InputGroup({
  children,
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      data-slot='control'
      className={clsx(
        'relative isolate block',
        'has-[[data-slot=icon]:first-child]:[&_input]:pl-10 has-[[data-slot=icon]:last-child]:[&_input]:pr-10 sm:has-[[data-slot=icon]:first-child]:[&_input]:pl-8 sm:has-[[data-slot=icon]:last-child]:[&_input]:pr-8',
        '*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:z-10 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:top-2.5 sm:*:data-[slot=icon]:size-4',
        '[&>[data-slot=icon]:first-child]:left-3 sm:[&>[data-slot=icon]:first-child]:left-2.5 [&>[data-slot=icon]:last-child]:right-3 sm:[&>[data-slot=icon]:last-child]:right-2.5',
        '*:data-[slot=icon]:text-zinc-500 dark:*:data-[slot=icon]:text-zinc-400',
      )}
    >
      {children}
    </span>
  )
}
const padding = {
  x: ['px-[calc(--spacing(3.5)-1px)]', 'sm:px-[calc(--spacing(3)-1px)]'],
  y: ['py-[calc(--spacing(2.5)-1px)]', 'sm:py-[calc(--spacing(1.5)-1px)]'],
}
const dateTypes = ['date', 'datetime-local', 'month', 'time', 'week']
type DateType = (typeof dateTypes)[number]

export type InputProps = {
  endAdornment?: ReactNode
  startAdornment?: ReactNode
  className?: string
  onClear?: () => void
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | DateType
} & Omit<Headless.InputProps, 'as' | 'className'>

export const Input = forwardRef(function Input(
  { className, onClear, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const isDateType = props.type && dateTypes.includes(props.type)
  const hasValue = Boolean(props.value)
  const isDisabled = Boolean(props.disabled || props.readOnly)
  const showClear = Boolean(
    !isDisabled && typeof onClear === 'function' && hasValue,
  )

  return (
    <>
      <span
        data-slot='control'
        className={clsx([
          className,
          // Basic layout
          'relative',
          'block',
          'w-full',
          // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
          'before:absolute',
          'before:inset-px',
          'before:rounded-[calc(var(--radius-lg)-1px)]',
          'before:bg-white',
          // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
          'dark:before:hidden',
          // Focus ring
          'after:pointer-events-none',
          'after:absolute',
          'after:inset-0',
          'after:rounded-lg',
          'after:ring-transparent',
          'after:ring-inset',
          'sm:focus-within:after:ring-2',
          'sm:focus-within:after:ring-primary',
          // Disabled state
          'has-data-disabled:opacity-50',
          'has-data-disabled:before:bg-neutral-950/5',
          // Invalid state
          'has-data-invalid:before:border-error',
        ])}
      >
        <Headless.Input
          ref={ref}
          {...props}
          className={clsx([
            // Date classes
            isDateType && [
              '[&::-webkit-datetime-edit-fields-wrapper]:p-0',
              '[&::-webkit-date-and-time-value]:min-h-[1.5em]',
              '[&::-webkit-datetime-edit]:inline-flex',
              '[&::-webkit-datetime-edit]:p-0',
              '[&::-webkit-datetime-edit-year-field]:p-0',
              '[&::-webkit-datetime-edit-month-field]:p-0',
              '[&::-webkit-datetime-edit-day-field]:p-0',
              '[&::-webkit-datetime-edit-hour-field]:p-0',
              '[&::-webkit-datetime-edit-minute-field]:p-0',
              '[&::-webkit-datetime-edit-second-field]:p-0',
              '[&::-webkit-datetime-edit-millisecond-field]:p-0',
              '[&::-webkit-datetime-edit-meridiem-field]:p-0',
            ],
            // Basic layout
            'relative',
            'block',
            'w-full',
            'h-[var(--ui-height)]',
            'appearance-none',
            'rounded-md',
            padding.x,
            padding.y,
            // Typography
            'text-base/6',
            'text-zinc-950',
            'placeholder:text-zinc-500',
            'sm:text-sm/6',
            'dark:text-white',
            // Border
            'border',
            'border-zinc-950/10',
            'data-hover:border-zinc-950/20',
            'dark:border-white/10',
            'dark:data-hover:border-white/20',
            // Background color
            'bg-transparent',
            'dark:bg-white/5',
            // Hide default focus styles
            'focus:outline-hidden',
            // Invalid state
            'data-invalid:border-error',
            'data-invalid:data-hover:border-error',
            'dark:data-invalid:border-error',
            'dark:data-invalid:data-hover:border-error',
            // Disabled state
            'data-disabled:border-zinc-950/20',
            'dark:data-disabled:border-white/15',
            'dark:data-disabled:bg-white/[2.5%]',
            'dark:data-hover:data-disabled:border-white/15',
            // System icons
            'dark:[color-scheme:dark]',
          ])}
        />
        {showClear && (
          <Icon
            icon={'close'}
            onClick={onClear}
            className={clsx(
              'cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2',
            )}
          />
        )}
      </span>
    </>
  )
})
