import {
  errorClasses,
  inputContainer,
  inputIcon,
  label
} from '@root/classes'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useId } from '../../hooks'
import { useTheme } from '@theme'
import { ClearButton } from '../clear-button'
import { InteractiveContainer } from '@components'
import { Loader } from '../loader'
import { Show } from '../show'
import { Description } from '@components'
import { Adornment } from './adornment'
import { UNSTYLED_TYPES } from './constants'
import { InputBaseContainerInner } from './input-base.container-inner'
import { InputBaseContext } from './input-base.context'
import { InputBaseProps } from '@types'
import { inputClassesCVA } from './classes'

const InputBase = forwardRef<HTMLDivElement, InputBaseProps>((props, ref) => {
  const { size: defaultSize, variant: defaultVariant = 'outlined' } = useTheme()
  const {
    loading,
    helperText,
    error,
    size = defaultSize,
    type = 'text',
    cx,
    id,
    children,
    startAdornment,
    endAdornment,
    clearable,
    variant = defaultVariant,
    layout = 'column',
    interactionsDisabled,
    onClear
  } = props
  const componentId = useId(id)

  const disabled = props.disabled
  const readOnly = props.readOnly || loading
  const disableInteractions = disabled || readOnly || loading

  const outerContainerClasses = twMerge(
    inputContainer({ disabled, error: !!error, layout }),
    `text-size-${size}`,
    cx?.container?.outer
  )

  const isUnstyled = UNSTYLED_TYPES.includes(type)
  const hasError = Boolean(error)
  const hasStartAdornment = Boolean(startAdornment)
  const hasEndAdornment = Boolean(endAdornment)
  const finalVariant = isUnstyled ? 'unstyled' : variant

  const inputClasses = twMerge(
    inputClassesCVA({
      size,
      variant: finalVariant,
      startAdornment: hasStartAdornment,
      endAdornment: hasEndAdornment,
      clearable,
      error: hasError,
      interactionsDisabled,
      // @ts-ignore
      className: cx?.input,
      // @ts-expect-error
      type
    }), size
  )

  return (
    <InteractiveContainer disabled={disabled}>
      <InputBaseContext.Provider
        value={{
          componentId,
          classes: { input: inputClasses, container: outerContainerClasses },
          disabled,
          readOnly,
          error: !!error,
          type
        }}
      >
        <div className={outerContainerClasses}>
          <label
            htmlFor={componentId}
            className={label({
              size,
              required: props.required,
              className: cx?.label
            })}
            aria-label={props.label?.toString()}
          >
            {props.label}
          </label>
          <InputBaseContainerInner className={cx?.container?.inner} ref={ref}>
            <Adornment position="left" type={type} adornment={startAdornment} />
            {children}
            {loading ? (
              <Loader
                className={inputIcon({ position: 'right', type: type as any })}
                size={size === 'lg' ? 'md' : 'sm'}
              />
            ) : (
              <Adornment
                position="right"
                type={type}
                adornment={
                  <>
                    <Show when={clearable && !disableInteractions}>
                      <ClearButton onClick={onClear} />
                    </Show>
                    {endAdornment}
                  </>
                }
              />
            )}
          </InputBaseContainerInner>
          <Description
            size={size}
            error={hasError}
            className={clsx(hasError && errorClasses.text)}
          >
            {error || helperText}
          </Description>
        </div>
      </InputBaseContext.Provider>
    </InteractiveContainer>
  )
})

export default InputBase
