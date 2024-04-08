import React from 'react'
import type { ElementTypography } from '../../types'
import { useTheme } from '../../theme'
import { useTypography } from './use-typography'
import type { TypographyProps } from './types'

export const createTypographyComponent = (variant: ElementTypography) => {
  return React.forwardRef<HTMLElement, TypographyProps>((props, ref) => {
    const { typography, size: defaultSize } = useTheme()
    const {
      as,
      config,
      className,
      children,
      size = defaultSize,
      error,
      ...rest
    } = props

    const { classes, Component } = useTypography({
      as,
      config,
      className,
      typography,
      variant,
    })

    return (
      <Component {...rest} ref={ref} className={classes({ size })}>
        {children}
      </Component>
    )
  })
}
