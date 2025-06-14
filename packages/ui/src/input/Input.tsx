import { Input as HeadlessInput } from '@headlessui/react'
import React, { forwardRef, memo, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { InputContainer } from '../input-container'
import { DATE_TYPES } from '../types'
import type { InputProps } from './types'

const _Input = forwardRef(function Input(
  {
    onClear,
    startAdornment,
    endAdornment,
    cx,
    border,
    background,
    children,
    as,
    containerHeight,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const isDateType = useMemo(
    () => Boolean(props?.type && DATE_TYPES.includes(props?.type as any)),
    [props?.type],
  )
  const isTypeStyle = useMemo(
    () =>
      Boolean(props?.type && ['color', 'file'].includes(props?.type as any)),
    [props?.type],
  )

  return (
    <InputContainer
      className={cx?.container}
      endAdornment={endAdornment}
      startAdornment={startAdornment}
      onClear={onClear}
      border={border}
      background={background}
      containerHeight={containerHeight}
      hasValue={Boolean(props?.value)}
      readOnly={props?.readOnly}
      disabled={props?.disabled}
      inputType={isTypeStyle ? (props?.type as any) : 'default'}
      isDateType={isDateType}
    >
      <HeadlessInput
        ref={ref}
        as={as}
        {...props}
        className={twMerge('appearance-none focus:outline-none', cx?.input)}
      />
    </InputContainer>
  )
})

_Input.displayName = 'Input'

export const Input = memo(_Input)
