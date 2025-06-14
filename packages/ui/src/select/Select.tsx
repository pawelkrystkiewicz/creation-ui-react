import { Select as HeadlessSelect } from '@headlessui/react'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { InputContainer } from '../input-container/InputContainer'
import { SelectProps } from './types'

export const Select = forwardRef(function Select(
  {
    multiple,
    startAdornment,
    endAdornment,
    onClear,
    children,
    cx,
    ...props
  }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  return (
    <InputContainer
      className={cx?.container}
      endAdornment={endAdornment}
      startAdornment={startAdornment}
      hasValue={!!props?.value}
      disabled={props?.disabled}
      readOnly={props?.readOnly}
      onClear={onClear}
      containerHeight={multiple ? 'auto' : 'fixed'}
      border={props?.border}
      background={props?.background}
    >
      <>
        <HeadlessSelect
          ref={ref}
          multiple={multiple}
          {...props}
          className={clsx(
            // Basic layout
            'relative block w-full appearance-none rounded-lg',
            // Horizontal padding
            'focus:outline-none',
            cx?.input,
            multiple
              ? 'px-[calc(--spacing(3.5)-1px)] sm:px-[calc(--spacing(3)-1px)]'
              : 'pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] sm:pr-[calc(--spacing(9)-1px)] sm:pl-[calc(--spacing(3)-1px)]',
            // Options (multi-select)
            '[&_optgroup]:font-semibold',
          )}
        >
          {children}
        </HeadlessSelect>
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
      </>
    </InputContainer>
  )
})
