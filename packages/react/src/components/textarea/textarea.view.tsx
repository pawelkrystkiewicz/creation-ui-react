import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { useInputBase } from '../input-base/input-base.context'
import type { TextAreaProps } from './textarea.types'

export const TextAreaView = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const {
      //
      componentId,
      classes,
      readOnly,
      error,
      type,
      disabled,
    } = useInputBase()

    return (
      <textarea
        ref={ref}
        id={componentId}
        className={clsx(classes.input, 'resize')}
        disabled={disabled}
        aria-invalid={error}
        aria-readonly={readOnly}
        readOnly={readOnly}
        {...props}
      />
    )
  },
)
