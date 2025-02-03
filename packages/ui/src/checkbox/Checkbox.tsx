import React, { FC } from 'react'
import { CheckboxProps } from './types'
import * as Headless from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { checkboxStyles } from './classes'
import clsx from 'clsx'

export function CheckboxGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot='control'
      {...props}
      className={twMerge(
        className,
        // Basic groups
        'space-y-3',
        // With descriptions
        'has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium',
      )}
    />
  )
}

export function CheckboxField({
  className,
  ...props
}: { className?: string } & Omit<Headless.FieldProps, 'as' | 'className'>) {
  return (
    <Headless.Field
      data-slot='field'
      {...props}
      className={twMerge(
        className,
        // Base layout
        'grid grid-cols-[1.125rem_1fr] items-center gap-x-2 gap-y-1 sm:grid-cols-[1rem_1fr]',
        // Control layout
        '*:data-[slot=control]:col-start-1 *:data-[slot=control]:row-start-1 *:data-[slot=control]:justify-self-center',
        // Label layout
        '*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1 *:data-[slot=label]:justify-self-start',
        // Description layout
        '*:data-[slot=description]:col-start-2 *:data-[slot=description]:row-start-2',
        // With description
        'has-data-[slot=description]:**:data-[slot=label]:font-medium',
      )}
    />
  )
}

export const Checkbox: FC<CheckboxProps> = ({
  className,
  disabled,
  loading,
  readOnly,
  ...props
}) => {

  const isDisabled = loading || disabled || readOnly

  return (
    <Headless.Checkbox
      data-slot='control'
      disabled={isDisabled}
      {...props}
      className={twMerge(className, 'group inline-flex focus:outline-hidden')}
    >
      <span className={checkboxStyles({ className, readOnly })}>
        <svg
          className={clsx(
            //
            'size-4',
            'stroke-[var(--checkbox-check)]',
            'opacity-0',
            'group-data-checked:opacity-100',
            'micro-interaction',
            'sm:h-3.5',
            'sm:w-3.5',
          )}
          viewBox='0 0 14 14'
          fill='none'
        >
          {/* Checkmark icon */}
          <path
            className='opacity-100 group-data-indeterminate:opacity-0 micro-interaction'
            d='M3 8L6 11L11 3.5'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          {/* Indeterminate icon */}
          <path
            className='opacity-0 group-data-indeterminate:opacity-100 micro-interaction'
            d='M3 7H11'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </span>
    </Headless.Checkbox>
  )
}
