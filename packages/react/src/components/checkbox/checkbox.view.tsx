import { useEffect, useRef } from 'react'
import { useInputBase } from '../input-base/input-base.context'
import { CheckboxProps } from './checkbox.types'
import { checkboxClasses } from './classes'

export const CheckboxView = ({
  size,
  className,
  indeterminate,
  ...props
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const { componentId, error, readOnly, disabled } = useInputBase()
  const checkboxClassNames = checkboxClasses({
    className: [className, size],
    error: !!error,
    readOnly,
  })

  useEffect(() => {
    if (indeterminate && ref.current) {
      ;(ref.current as any).indeterminate = true
    }
  }, [indeterminate])

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly || disabled) {
      e.preventDefault()
      return
    }

    props.onChange?.(e)
  }

  return (
    <input
      ref={ref}
      {...props}
      onChange={_onChange}
      disabled={disabled}
      readOnly={readOnly}
      id={componentId}
      type='checkbox'
      className={checkboxClassNames}
    />
  )
}
