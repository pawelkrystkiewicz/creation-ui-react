import React from 'react'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import type { ButtonProps } from './button.types'
import { button } from './classes'
import { text } from '../../classes'
import { InteractiveContainer } from '../interactive-container'
import { LoadingOverlay } from '../loading-overlay/LoadingOverlay'
import { Loader } from '../loader'
import { twMerge } from 'tailwind-merge'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, loading, iconLeft, iconRight, className, id, ...props },
    ref,
  ) => {
    const componentId = useId(id)
    const theme = useTheme()

    const {
      circle,
      size = theme.size,
      variant = 'contained',
      status = 'primary',
      uppercase,
    } = props

    const isLoaderWhite = variant === 'contained'
    const disabled = loading || props.disabled

    const classes = twMerge(
      button({
        size,
        status,
        circle,
        variant,
        disabled,
        uppercase,
        className: [theme.roundness, className, text({ size })],
      }),
    )

    const centerSpinner: boolean = Boolean(loading && circle)
    const leftSpinner: boolean = Boolean(loading && !circle)

    return (
      <InteractiveContainer disabled={disabled} className={className}>
        <button
          id={componentId}
          ref={ref}
          disabled={Boolean(disabled)}
          aria-disabled={Boolean(disabled)}
          type='button'
          {...props}
          className={classes}
        >
          {leftSpinner && (
            <Loader size={'sm'} active={leftSpinner} white={isLoaderWhite} />
          )}
          <LoadingOverlay active={centerSpinner} white={isLoaderWhite} />
          <>{iconLeft}</>
          <span>{children}</span>
          <>{iconRight}</>
        </button>
      </InteractiveContainer>
    )
  },
)

Button.displayName = 'Button'

export default Button
