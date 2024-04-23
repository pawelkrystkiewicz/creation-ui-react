import { ForwardedRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useInputBase } from '../input-base/input-base.context'
import type { TextAreaProps } from './textarea.types'

export const TextAreaView = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ size, ...props }, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { componentId, classes, readOnly, error, disabled } = useInputBase()

    return (
      <textarea
        ref={ref}
        id={componentId}
        className={twMerge('appearance-none', 'outline-none', classes.input)}
        disabled={disabled}
        aria-invalid={error}
        aria-readonly={readOnly}
        readOnly={readOnly}
        {...props}
      />
    )
  }
)
