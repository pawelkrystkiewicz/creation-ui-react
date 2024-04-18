import { useTheme } from '@theme'
import { InputBaseInline } from '@components'
import type { SwitchProps } from './switch.types'
import { SwitchView } from './switch.view'

const Switch = (props: SwitchProps) => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize, ...rest } = props

  return (
    <InputBaseInline {...rest} size={size} layout='row'>
      <SwitchView {...rest} size={size} />
    </InputBaseInline>
  )
}
Switch.displayName = '_Switch'

export default Switch
