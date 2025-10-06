import { Listbox } from '@headlessui/react'
import { ForwardedRef, forwardRef, ReactNode } from 'react'
import { InputContainer } from '../input-container/InputContainer'
import { SelectProps } from './types'
import { SelectContext } from './SelectContext'

interface SelectComponentProps extends SelectProps {
  children: ReactNode
  onClear?: () => void
}

export const Select = forwardRef<HTMLDivElement, SelectComponentProps>(
  ({ startAdornment, endAdornment, children, cx, onClear, ...props }, ref) => {
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
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          horizontal={props.horizontal}
          invalid={props.invalid}
          name={props.name}
          refName={props.refName}
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
