import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  Fragment,
  useMemo,
} from 'react'
import { ClearButton } from '../clear-button'
import { DATE_TYPES } from '../types'
import { inputStyles } from './classes'
import { EndAdornment } from './EndAdornment'
import { StartAdornment } from './StartAdornment'
import type { InputProps } from './types'

export const Input = forwardRef(function Input(
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
  const hasValue = useMemo(() => Boolean(props?.value), [props?.value])
  const isDisabled = useMemo(
    () => Boolean(props?.disabled || props?.readOnly),
    [props?.disabled, props?.readOnly],
  )
  const clearable = useMemo(
    () => Boolean(!isDisabled && typeof onClear === 'function' && hasValue),
    [isDisabled, hasValue],
  )

  const adornments = useMemo(
    () =>
      Boolean(startAdornment && endAdornment)
        ? 'both'
        : !!startAdornment
          ? 'start'
          : !!endAdornment
            ? 'end'
            : false,
    [startAdornment, endAdornment],
  )

  const classes = inputStyles({
    isDateType,
    adornments,
    clearable,
    className: cx?.input,
    type: isTypeStyle ? (props.type as any) : 'default',
    border: border,
    background: background,
    containerHeight,
  })

  const InnerWrapper = ({
    children,
  }: ComponentPropsWithoutRef<typeof Fragment>) => {
    return (
      <>
        {startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
        {children}
        {clearable && (
          <ClearButton
            onClick={onClear}
            className={clsx(
              'cursor-pointer',
              'absolute',
              '-translate-y-1/2',
              '-translate-x-1/2',
              'top-1/2',
              endAdornment ? 'right-6' : 'right-0',
            )}
            role='button'
            data-testid='clear-button'
          />
        )}
        {endAdornment && <EndAdornment>{endAdornment}</EndAdornment>}
      </>
    )
  }

  // Render prop pattern
  if (typeof children === 'function') {
    return (
      <span data-slot='control' className='relative'>
        <Headless.Input ref={ref} as={as} {...props} className={classes}>
          {bag => <InnerWrapper>{children(bag)}</InnerWrapper>}
        </Headless.Input>
      </span>
    )
  }

  // Default pattern
  return (
    <span data-slot='control' className={'relative'}>
      <InnerWrapper>
        <Headless.Input ref={ref} as={as} {...props} className={classes} />
      </InnerWrapper>
    </span>
  )
})

Input.displayName = 'Input'
