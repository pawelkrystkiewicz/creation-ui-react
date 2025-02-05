import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { Icon } from '../icon'
import { inputBorderStyles, inputStyles } from './classes'
import { dateTypes } from './constants'
import type { InputProps } from './types'
import { twMerge } from 'tailwind-merge'

export const Input = forwardRef(function Input(
  { className, onClear, startAdornment, endAdornment, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const isDateType = Boolean(props.type && dateTypes.includes(props.type))
  const hasValue = Boolean(props.value)
  const isDisabled = Boolean(props.disabled || props.readOnly)
  const clearable = Boolean(
    !isDisabled && typeof onClear === 'function' && hasValue,
  )
  const adornments = Boolean(startAdornment && endAdornment)
    ? 'both'
    : !!startAdornment
      ? 'start'
      : !!endAdornment
        ? 'end'
        : false

  return (
    <>
      <span
        data-slot='control'
        className={twMerge(inputBorderStyles, className)}
      >
        {startAdornment && (
          <span
            className={
              'absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2'
            }
          >
            {startAdornment}
          </span>
        )}
        <Headless.Input
          ref={ref}
          {...props}
          className={inputStyles({
            isDateType,
            adornments,
            clearable: clearable,
          })}
        />
        {endAdornment && (
          <span
            className={
              'absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2'
            }
          >
            {endAdornment}
          </span>
        )}
        {clearable && (
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
