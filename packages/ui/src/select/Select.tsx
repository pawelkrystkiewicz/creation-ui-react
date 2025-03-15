import * as Headless from '@headlessui/react'
import { ForwardedRef, forwardRef } from 'react'
import { InputBase } from '../input-base'
import { inputStyles } from '../input/classes'
import { SelectProps } from './types'

export const Select = forwardRef(function Select(
  {
    cx,
    multiple,
    startAdornment,
    endAdornment,
    onClear,
    ...props
  }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>,
) {
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
    <InputBase
      className={cx?.container}
      endAdornment={endAdornment}
      startAdornment={startAdornment}
      onClear={onClear}
    >
      <Headless.Select
        ref={ref}
        multiple={multiple}
        {...props}
        className={inputStyles({
          adornments,
          clearable,
          className: [
            // Basic layout
            'relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)]',
            // Horizontal padding
            multiple
              ? 'px-[calc(--spacing(3.5)-1px)] sm:px-[calc(--spacing(3)-1px)]'
              : 'pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)]',
            // Options (multi-select)
            '[&_optgroup]:font-semibold',
          ],
        })}
      />
      {!multiple && (
        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
          <svg
            className='size-5 stroke-zinc-500 group-has-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]'
            viewBox='0 0 16 16'
            aria-hidden='true'
            fill='none'
          >
            <path
              d='M5.75 10.75L8 13L10.25 10.75'
              strokeWidth={1.5}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M10.25 5.25L8 3L5.75 5.25'
              strokeWidth={1.5}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </span>
      )}
    </InputBase>
  )
})
