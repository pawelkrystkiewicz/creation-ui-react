import { Description, InteractiveContainer } from '@components'
import { inputContainer } from '@root/classes'
import { useTheme } from '@theme'
import { InputBaseProps } from '@types'
import clsx from 'clsx'
import { forwardRef, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { useId } from '../../hooks'
import { ClearButton } from '../clear-button'
import { Label } from '../label'
import { Loader } from '../loader'
import { Show, ShowFirstMatching } from '../show'
import { Adornment } from './adornment'
import { inputClasses, inputIcon } from './classes'
import { UNSTYLED_TYPES } from './constants'
import { InputBaseContainerInner } from './input-base.container-inner'
import { InputBaseContext } from './input-base.context'

const InputBase = forwardRef<HTMLDivElement, InputBaseProps>((props, ref) => {
  const {
    size: defaultSize,
    variant: defaultVariant = 'outlined',
    styles,
  } = useTheme()
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
    resize,
    onClear,
  } = props
  const componentId = useId(id)

  const disabled = props.disabled
  const readOnly = props.readOnly || loading
  const disableInteractions = disabled || readOnly || loading

  const withTheme = useMemo(
    () => ({
      container: inputContainer(styles),
      input: inputClasses(styles),
    }),
    [styles]
  )

  const isUnstyled = UNSTYLED_TYPES.includes(type)
  const hasError = Boolean(error)
  const hasStartAdornment = Boolean(startAdornment)
  const hasEndAdornment = Boolean(endAdornment)
  const finalVariant = isUnstyled ? 'unstyled' : variant

  const container = twMerge(
    withTheme.container({ disabled, error: !!error, layout, size }),
    cx?.container?.outer
  )

  const input = withTheme.input({
    size,
    variant: finalVariant,
    startAdornment: hasStartAdornment,
    endAdornment: hasEndAdornment,
    clearable,
    error: hasError,
    interactionsDisabled,
    className: cx?.input,
    resize,
    // @ts-ignore
    type,
  })

  return (
    <InteractiveContainer disabled={disabled}>
      <InputBaseContext.Provider
        value={{
          componentId,
          classes: { input, container },
          disabled,
          readOnly,
          error: !!error,
          type,
        }}
      >
        <div className={container}>
          <Label
            htmlFor={componentId}
            className={cx?.label}
            required={props.required}
            aria-label={props.label?.toString()}
            size={size}
          >
            {props.label}
          </Label>
          <InputBaseContainerInner className={cx?.container?.inner} ref={ref}>
            <Adornment position='left' type={type} adornment={startAdornment} />
            {children}
            <ShowFirstMatching>
              <Show when={loading}>
                <Loader
                  cx={{
                    outer: inputIcon({
                      position: 'right',
                      type: type as any,
                      className: [styles.animations.microInteractionsAll],
                    }),
                  }}
                  size={size === 'lg' ? 'md' : 'sm'}
                />
              </Show>
              <Show when={true}>
                <Adornment
                  position='right'
                  type={type}
                  adornment={
                    <>
                      <Show when={clearable && !disableInteractions}>
                        <ClearButton onClick={onClear} size='sm' />
                      </Show>
                      {endAdornment}
                    </>
                  }
                />
              </Show>
            </ShowFirstMatching>
          </InputBaseContainerInner>
          <Description
            size={size}
            error={hasError}
            className={clsx(hasError && styles.error.text)}
          >
            {error || helperText}
          </Description>
        </div>
      </InputBaseContext.Provider>
    </InteractiveContainer>
  )
})

export default InputBase
