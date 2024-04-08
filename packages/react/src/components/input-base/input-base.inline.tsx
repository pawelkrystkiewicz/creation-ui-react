import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  errorClasses,
  inputClassesCVA,
  inputContainer,
  label,
  text,
} from '@creation-ui/react'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { InputBaseProps } from '@creation-ui/react'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'
import { Description } from '../typography'
import { InputBaseContext } from './input-base.context'

const InputBaseInline: FC<InputBaseProps> = props => {
  const { size: defaultSize } = useTheme()
  const {
    loading,
    helperText,
    error,
    size = defaultSize,
    type = 'text',
    cx,
    id,
    children,
    variant,
    layout = 'row',
    // onClear,
  } = props
  const componentId = useId(id)

  const disabled = props.disabled
  const readOnly = props.readOnly || loading

  const outerContainerClasses = twMerge(
    inputContainer({ disabled, error: !!error, layout }),
    text({ size }),
    cx?.container?.inner
  )

  const inputClasses = twMerge(
    inputClassesCVA({
      size,
      variant,
      // @ts-ignore
      className: cx?.input,
      error: !!error,
    })
  )

  return (
    <InteractiveContainer disabled={disabled}>
      <InputBaseContext.Provider
        value={{
          componentId,
          classes: {
            input: inputClasses,
            container: outerContainerClasses,
          },
          disabled,
          readOnly,
          error: !!error,
          type,
        }}
      >
        <div className={cx?.container?.outer}>
          <div className={outerContainerClasses}>
            {children}
            <label
              htmlFor={componentId}
              className={label({
                size,
                required: props.required,
                className: cx?.label,
              })}
              children={props.label}
              aria-label={props.label?.toString()}
            />
            {loading && <Loader size={size === 'lg' ? 'md' : 'sm'} />}
          </div>
          <Description
            size={size}
            error={!!error}
            className={error ? errorClasses.text : ''}
          >
            {error || helperText}
          </Description>
        </div>
      </InputBaseContext.Provider>
    </InteractiveContainer>
  )
}

export default InputBaseInline
