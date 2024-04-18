import { OptionProps } from '@types'
import React, { forwardRef } from 'react'

export const Option = forwardRef<
  HTMLLIElement,
  OptionProps & React.HTMLProps<HTMLLIElement>
>(
  (
    { option, multiple, active, selected, size, children, className, ...rest },
    ref
  ) => {
    const { label } = option
    return (
      <li
        className={className}
        ref={ref}
        role='option'
        aria-selected={selected}
        {...rest}
      >
        {children ? children : label}
      </li>
    )
  }
)
