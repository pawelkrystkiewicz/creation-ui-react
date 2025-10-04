import { clsx } from 'clsx'
import { forwardRef, memo, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { ClearButton } from '../clear-button/ClearButton'
import { cuiInputContainer } from './classess'
import { EndAdornment } from './EndAdornment'
import { StartAdornment } from './StartAdornment'
import { InputContainerProps } from './types'

const _InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(
  (
    {
      children,
      className,
      isDateType,
      inputType,
      border,
      background,
      containerHeight,
      hasValue,
      endAdornment,
      startAdornment,
      onClear,
      ...props
    },
    ref,
  ) => {
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

    const isDisabled = useMemo(
      () => Boolean(props?.disabled || props?.readOnly),
      [props?.disabled, props?.readOnly],
    )

    const clearable = useMemo(
      () => Boolean(!isDisabled && typeof onClear === 'function' && hasValue),
      [isDisabled, hasValue],
    )

    const classes = useMemo(() => {
      return twMerge(
        cuiInputContainer({
          adornments,
          isDateType,
          inputType,
          border,
          background,
          containerHeight,
          clearable,
        }),
        className,
      )
    }, [
      adornments,
      isDateType,
      inputType,
      border,
      background,
      containerHeight,
      className,
      clearable,
    ])

    return (
      <div data-slot='control' ref={ref} className={classes} {...props}>
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
            data-testid='input-clear-button'
          />
        )}
        {endAdornment && <EndAdornment>{endAdornment}</EndAdornment>}
      </div>
    )
  },
)

export const InputContainer = memo(_InputContainer)
