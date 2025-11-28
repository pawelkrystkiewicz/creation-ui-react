import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { checkboxStyles } from './classes'
import type { CheckboxProps } from './types'

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
            'stroke-(--checkbox-check)',
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
