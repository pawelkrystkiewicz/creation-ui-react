import { ForwardedRef, forwardRef } from 'react'
import { useInputBase } from '../input-base/input-base.context'
import { radio } from './classes'
import type { RadioProps } from './types'

export const RadioView = forwardRef<HTMLInputElement, RadioProps>(
  ({ size, className, ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
    const { componentId, readOnly, disabled, classes } = useInputBase()

    return (
      <>
        <div className={classes.container}>
          <input
            ref={ref}
            className={radio({ size, className })}
            type='radio'
            name={componentId}
            id={componentId}
            disabled={disabled}
            readOnly={readOnly}
            {...rest}
          />
        </div>
      </>
    )
  },
)
