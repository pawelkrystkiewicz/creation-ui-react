import { Listbox } from '@headlessui/react'
import React, { forwardRef, ReactNode } from 'react'
import { InputContainer } from '../input-container/InputContainer'
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
      ...props
    }: SelectComponentProps<T>,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const { value, onChange, disabled, horizontal, invalid, name, refName } =
      props
    return (
      <InputContainer
        className={cx?.container}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        hasValue={!!props?.value}
        disabled={props?.disabled}
        readOnly={props?.readOnly}
        border={props?.border}
        background={props?.background}
      >
        <Listbox
          ref={ref}
          // @ts-expect-error -- listbox doesn't support generics
          value={value ?? undefined}
          onChange={onChange}
          disabled={disabled}
          horizontal={horizontal}
          invalid={invalid}
          name={name}
          refName={refName}
        >
          {({ open, disabled, invalid, value }) => {
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
