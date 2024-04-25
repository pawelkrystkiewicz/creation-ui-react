import { useTheme } from '@root/theme'
import { useEffect, useMemo, useRef } from 'react'
import { useInputBase } from '../input-base/input-base.context'
import { CheckboxProps } from './checkbox.types'
import { checkboxClasses } from './classes'

export const CheckboxView = ({
  className,
  indeterminate,
  ...props
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const { componentId, error, readOnly, disabled } = useInputBase()
  const { styles, size: defaultSize } = useTheme()

  const { size = defaultSize, ...rest } = props

  const withThemeClasses = useMemo(() => checkboxClasses(styles), [styles])

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
      {...rest}
      onChange={_onChange}
      disabled={disabled}
      readOnly={readOnly}
      id={componentId}
      type='checkbox'
      className={withThemeClasses({
        className,
        size,
        error: !!error,
        readOnly,
      })}
    />
  )
}
