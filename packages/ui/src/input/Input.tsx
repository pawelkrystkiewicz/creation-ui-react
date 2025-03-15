import * as Headless from '@headlessui/react'
import React, { forwardRef } from 'react'
import { DATE_TYPES } from '../types'
import { InputBase } from '../input-base'
import { inputStyles } from './classes'
import type { InputProps } from './types'

export const Input = forwardRef(function Input(
  { onClear, startAdornment, endAdornment, cx, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const isDateType = Boolean(
    props?.type && DATE_TYPES.includes(props?.type as any),
  )
  const isTypeStyle = Boolean(
    props?.type && ['color', 'file'].includes(props?.type as any),
  )
  const hasValue = Boolean(props?.value)
  const isDisabled = Boolean(props?.disabled || props?.readOnly)
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
    <InputBase
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      clearable={clearable}
      onClear={onClear}
      className={cx?.container}
      type={props.type}
    >
      <Headless.Input
        ref={ref}
        {...props}
        className={inputStyles({
          isDateType,
          adornments,
          clearable,
          className: cx?.input,
          type: isTypeStyle ? (props.type as any) : 'default',
        })}
      />
    </InputBase>
  )
})
