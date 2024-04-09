import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useInputBase } from '../input-base/input-base.context'
import { InputProps } from './input.types'

export const InputView = forwardRef<HTMLInputElement, Omit<InputProps, 'size'>>(
  (props, ref) => {
    const { componentId, classes, readOnly, error, type, disabled } =
      useInputBase()

    return (
      <input
        ref={ref}
        id={componentId}
        className={twMerge(classes.input)}
        type={type}
        disabled={disabled}
        aria-invalid={error}
        aria-readonly={readOnly}
        readOnly={readOnly}
        {...props}
      />
    )
  },
)
