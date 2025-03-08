import * as Headless from '@headlessui/react'
import React, { forwardRef } from 'react'
import { InputBase } from '../input-base'
import { inputStyles } from './classes'
import { DATE_TYPES } from './constants'
import type { InputProps } from './types'

export const Input = forwardRef(function Input(
  {
    className,
    onClear,
    startAdornment,
    endAdornment,
    loading,
    cx,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const isDateType = Boolean(
    props?.type && DATE_TYPES.includes(props?.type as any),
  )
  const isTypeStyle = Boolean(
    props?.type && ['color', 'file'].includes(props?.type as any),
  )
  const hasValue = Boolean(props?.value)
  const isDisabled = Boolean(props?.disabled || props?.readOnly || loading)
  const clearable = Boolean(
    !isDisabled && typeof onClear === 'function' && hasValue,
  )
  const adornments = Boolean(startAdornment && (endAdornment || loading))
    ? 'both'
    : !!startAdornment
      ? 'start'
      : !!endAdornment || loading
        ? 'end'
        : false

  return (
    <InputBase
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      clearable={clearable}
      onClear={onClear}
      loading={loading}
      className={cx?.outer}
      type={props.type}
    >
      <Headless.Input
        ref={ref}
        {...props}
        className={inputStyles({
          isDateType,
          adornments,
          clearable,
          className: cx?.inner,
          type: isTypeStyle ? (props.type as any) : 'default',
        })}
      />
    </InputBase>
  )
})
