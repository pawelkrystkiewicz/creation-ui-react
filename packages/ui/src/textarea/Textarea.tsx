import clsx from 'clsx'
import React, { forwardRef } from 'react'
import type { TextareaProps } from './types'
import { containerClasses } from './classes'

export const Textarea = function Textarea(
  { ref, className, resizable = true, invalid, ...props },
) {
  return (
    <span data-slot='control' className={clsx([className, containerClasses])}>
      <textarea
        ref={ref}
        {...props}
        data-invalid={invalid || undefined}
        aria-invalid={invalid || undefined}
        className={clsx([
          // Basic layout
          'relative',
          'block',
          'h-full',
          'w-full',
          'appearance-none',
          'rounded-lg',
          'px-[calc(--spacing(3.5)-1px)]',
          'py-[calc(--spacing(2.5)-1px)]',
          'sm:px-[calc(--spacing(3)-1px)]',
          'sm:py-[calc(--spacing(1.5)-1px)]',
          // Typography
          'text-base/6',
          'text-neutral-950',
          'placeholder:text-neutral-500',
          'sm:text-sm/6',
          'dark:text-white',
          // Border
          'border',
          'border-neutral-950/10',
          'hover:border-neutral-950/20',
          'dark:border-white/10',
          'dark:hover:border-white/20',
          // Background color
          'bg-transparent',
          'dark:bg-white/5',
          // Hide default focus styles
          'focus:outline-hidden',
          // Invalid state
          'data-invalid:border-red-500',
          'data-invalid:hover:border-red-500',
          'dark:data-invalid:border-destructive dark:data-invalid:hover:border-destructive',
          // Disabled state
          'disabled:border-neutral-950/20',
          'dark:disabled:border-white/15',
          'dark:disabled:bg-white/[2.5%]',
          'dark:hover:disabled:border-white/15',
          // Resizable
          resizable ? 'resize-y' : 'resize-none',
        ])}
      />
    </span>
  )
}
