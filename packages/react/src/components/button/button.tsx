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
import { CONTRASTING_VARIANT, loaderColorClasses } from './constants'

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
      status = 'primary',
      fullWidth,
      uppercase,
      ...rest
    } = props

    const themeClasses = useMemo(() => buttonClasses(styles), [styles])

    const isContrastReq = CONTRASTING_VARIANT.includes(variant)
    const disabled = loading || props.disabled
    const loaderClasses =
      !isContrastReq && loaderInheritsColor
        ? loaderColorClasses[status]
        : undefined

    const classes = themeClasses({
      size,
      status,
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
              <Loader
                size={size}
                white={isContrastReq}
                className={loaderClasses}
              />
            </Show>
            <Show when={centerSpinner}>
              <LoadingOverlay
                active
                white={isContrastReq}
                cx={{
                  loader: loaderClasses,
                }}
              />
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
