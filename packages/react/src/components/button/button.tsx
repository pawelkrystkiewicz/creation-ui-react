import {
  InteractiveContainer,
  Loader,
  LoadingOverlay,
  Show,
  ShowFirstMatching,
} from '@components'
import { useId } from '@hooks'
import { useTheme } from '@theme'
import React, { useMemo } from 'react'
import type { ButtonProps } from './button.types'
import { buttonClasses } from './classes'
import { getLoaderColor } from './utils'
import { useDetectDarkMode } from '@root/hooks/use-detect-dark-mode'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      loading,
      iconLeft,
      iconRight,
      className,
      id,
      loaderInheritsColor = true,
      ...props
    },
    ref
  ) => {
    const componentId = useId(id)
    const { styles, ...theme } = useTheme()

    const {
      circle,
      size = theme.size,
      variant = 'contained',
      color = 'primary',
      fullWidth,
      uppercase,
      ...rest
    } = props
    const isDarkMode = useDetectDarkMode()
    const themeClasses = useMemo(() => buttonClasses(styles), [styles])

    const disabled = loading || props.disabled

    const loaderColor = !loading
      ? 'white'
      : getLoaderColor(variant, color, loaderInheritsColor, isDarkMode)

    const classes = themeClasses({
      size,
      color,
      circle,
      disabled,
      uppercase,
      variant,
      fullWidth,
      className,
    })

    const centerSpinner: boolean = Boolean(loading && circle)
    const leftSpinner: boolean = Boolean(loading && !circle)

    return (
      <InteractiveContainer
        disabled={disabled}
        className={className}
        fullWidth={fullWidth}
      >
        <button
          id={componentId}
          ref={ref}
          disabled={Boolean(disabled)}
          aria-disabled={Boolean(disabled)}
          type='button'
          {...rest}
          className={classes}
        >
          <ShowFirstMatching>
            <Show when={leftSpinner}>
              <Loader size={size} color={loaderColor} />
            </Show>
            <Show when={centerSpinner}>
              <LoadingOverlay active loaderColor={loaderColor} />
            </Show>
          </ShowFirstMatching>
          <>{iconLeft}</>
          <span>{children}</span>
          <>{iconRight}</>
        </button>
      </InteractiveContainer>
    )
  }
)

Button.displayName = 'Button'

export default Button
