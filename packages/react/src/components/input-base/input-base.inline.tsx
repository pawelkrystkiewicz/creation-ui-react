import { Description, InteractiveContainer, Loader, Show } from '@components'
import { inputContainer } from '@root/classes'
import { getBaseFromTheme } from '@root/theme/utils'
import { useTheme } from '@theme'
import { InputBaseProps } from '@types'
import { useMemo, type FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { useId } from '../../hooks'
import { Label } from '../label'
import { inputClasses } from './classes'
import { InputBaseContext } from './input-base.context'

const InputBaseInline: FC<InputBaseProps> = props => {
  const { size: defaultSize, styles } = useTheme()
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

  const withTheme = useMemo(
    () => ({
      container: inputContainer(styles),
      input: inputClasses(styles),
    }),
    [styles]
  )

  const outerContainerClasses = twMerge(
    withTheme.container({ disabled, error: !!error, layout }),
    cx?.container?.inner
  )

  const withThemeClasses = withTheme.input({
    size,
    variant,
    className: cx?.input,
    error: !!error,
  })

  return (
    <InteractiveContainer disabled={disabled}>
      <InputBaseContext.Provider
        value={{
          componentId,
          classes: {
            input: withThemeClasses,
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
            <Label
              htmlFor={componentId}
              className={cx?.label}
              required={props.required}
              aria-label={props.label?.toString()}
            >
              {props.label}
            </Label>
            <Show when={loading}>
              <Loader size={size === 'lg' ? 'md' : 'sm'} />
            </Show>
          </div>
          <Description
            size={size}
            error={!!error}
            className={error && styles.error.text}
          >
            {error || helperText}
          </Description>
        </div>
      </InputBaseContext.Provider>
    </InteractiveContainer>
  )
}

export default InputBaseInline
