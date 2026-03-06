import { Select as BaseSelect } from '@base-ui/react/select'
import React, { ReactNode, useState } from 'react'
import { InputContainer } from '../input-container/InputContainer'
import { isNonNulish } from '../utils'
import { SelectContext } from './SelectContext'
import { SelectProps } from './types'

interface SelectComponentProps<T = string> extends SelectProps<T> {
  children: ReactNode
  onClear?: () => void
  ref?: React.Ref<HTMLDivElement>
}

export const Select = <T = string,>({
  ref,
  startAdornment,
  endAdornment,
  children,
  cx,
  onClear,
  horizontal,
  invalid,
  name,
  refName,
  ...selectProps
}: SelectComponentProps<T>) => {
    const { value, onChange, disabled } = selectProps
    const [isOpen, setIsOpen] = useState(false)

    return (
      <BaseSelect.Root
        value={value ?? undefined}
        onValueChange={
          onChange
            ? (newValue: T | null) => {
                if (newValue !== null && newValue !== undefined)
                  onChange(newValue)
              }
            : undefined
        }
        disabled={disabled}
        open={isOpen}
        onOpenChange={setIsOpen}
        name={name}
      >
        <InputContainer
          className={cx?.container}
          endAdornment={endAdornment}
          startAdornment={startAdornment}
          hasValue={isNonNulish(selectProps?.value)}
          disabled={selectProps?.disabled}
          readOnly={selectProps?.readOnly}
          border={selectProps?.border}
          background={selectProps?.background}
          data-horizontal={horizontal}
          data-invalid={invalid}
          data-name={name}
          data-ref-name={refName}
        >
          <SelectContext
            value={{
              open: isOpen,
              disabled: disabled || false,
              invalid: invalid || false,
              value,
              onClear,
            }}
          >
            <div ref={ref} className='relative'>
              {children}
            </div>
          </SelectContext>
        </InputContainer>
      </BaseSelect.Root>
    )
  }
