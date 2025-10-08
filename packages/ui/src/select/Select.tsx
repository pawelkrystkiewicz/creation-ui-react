import { Listbox } from '@headlessui/react'
import React, { forwardRef, ReactNode } from 'react'
import { InputContainer } from '../input-container/InputContainer'
import { isNonNulish } from '../utils'
import { SelectContext } from './SelectContext'
import { SelectProps } from './types'

interface SelectComponentProps<T = string> extends SelectProps<T> {
  /**
   * Children to render
   */
  children: ReactNode
  /**
   * Callback when clear button is clicked
   */
  onClear?: () => void
}

export const Select = forwardRef(
  <T = string,>(
    {
      startAdornment,
      endAdornment,
      children,
      cx,
      onClear,
      horizontal,
      invalid,
      name,
      refName,
      ...listboxProps
    }: SelectComponentProps<T>,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const { value, onChange, disabled } = listboxProps
    return (
      <InputContainer
        className={cx?.container}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        hasValue={isNonNulish(listboxProps?.value)}
        disabled={listboxProps?.disabled}
        readOnly={listboxProps?.readOnly}
        border={listboxProps?.border}
        background={listboxProps?.background}
        data-horizontal={horizontal}
        data-invalid={invalid}
        data-name={name}
        data-ref-name={refName}
      >
        <Listbox
          ref={ref}
          // @ts-expect-error -- listbox doesn't support generics
          value={value ?? undefined}
          onChange={onChange}
          disabled={disabled}
          className='relative'
        >
          {({ open, disabled, value }) => {
            const contextValue = {
              open,
              disabled: disabled || false,
              invalid: invalid || false,
              value,
              onClear,
            }

            return (
              <SelectContext.Provider value={contextValue}>
                {children}
              </SelectContext.Provider>
            )
          }}
        </Listbox>
      </InputContainer>
    )
  },
)
