import { ForwardedRef, forwardRef } from 'react'
import { useTheme } from '../../theme'
import { InputBaseInline } from '../input-base'
import { RadioView } from './radio.view'
import type { RadioProps } from './types'

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const { size: defaultSize } = useTheme()
    const { size = defaultSize, ...rest } = props

    return (
      <InputBaseInline {...rest} size={size} layout='row'>
        <RadioView {...rest} size={size} ref={ref} />
      </InputBaseInline>
    )
  },
)

Radio.displayName = 'Radio'

export default Radio
