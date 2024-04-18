import { ForwardedRef, forwardRef, useMemo } from 'react'
import { useInputBase } from '../input-base/input-base.context'
import { radio } from './classes'
import type { RadioProps } from './types'
import { useTheme } from '@root/theme'

export const RadioView = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    const { componentId, readOnly, disabled, classes } = useInputBase()
    const { styles, size: defaultSize } = useTheme()

    const { size = defaultSize, ...rest } = props

    const computed = useMemo(
      () => radio(styles)({ size, className }),
      [styles, size, className]
    )

    return (
      <div className={classes.container}>
        <input
          ref={ref}
          className={computed}
          type='radio'
          name={componentId}
          id={componentId}
          disabled={disabled}
          readOnly={readOnly}
          {...rest}
        />
      </div>
    )
  }
)
