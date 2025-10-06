import { Listbox } from '@headlessui/react'
import { ForwardedRef, forwardRef, ReactNode } from 'react'
import { InputContainer } from '../input-container/InputContainer'
import { SelectProps } from './types'
import { SelectContext } from './SelectContext'

interface SelectComponentProps<T = string> extends SelectProps<T> {
  children: ReactNode
  /**
   * Callback when clear button is clicked
   */
  onClear?: () => void
}

export const Select = forwardRef<HTMLDivElement, SelectComponentProps>(
  ({ startAdornment, endAdornment, children, cx, onClear, ...props }, ref) => {
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

/**
 *
 * <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
 */
