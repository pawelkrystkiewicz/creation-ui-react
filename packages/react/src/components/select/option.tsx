import React, { forwardRef } from 'react'
import { OptionProps } from '@creation-ui/react'
import { selectOptionClasses } from '@creation-ui/react'

export const Option = forwardRef<
  HTMLLIElement,
  OptionProps & React.HTMLProps<HTMLLIElement>
>(
  (
    { option, multiple, active, selected, size, children, className, ...rest },
    ref
  ) => {
    return (
      <li
        className={selectOptionClasses({
          active,
          selected,
          multiple,
          size,
          className,
        })}
        ref={ref}
        role='option'
        aria-selected={selected}
        {...rest}
      >
        {children ? children : option.label}
      </li>
    )
  }
)
