import { Switch as HSwitch } from '@headlessui/react'
import { useInputBase } from '../input-base/input-base.context'
import { switchCircle, switchClasses } from './classes'
import type { SwitchProps } from './switch.types'

export const SwitchView = ({
  checked,
  size,
  required,
  ...props
}: SwitchProps) => {
  const { componentId, readOnly, disabled, classes } = useInputBase()

  return (
    <div className={classes.container}>
      <HSwitch
        {...props}
        id={componentId}
        disabled={disabled}
        aria-required={required}
        className={switchClasses({ size, checked, readOnly, className:[size] })}
      >
        <span aria-hidden='true' className={switchCircle({ size, checked })} />
      </HSwitch>
    </div>
  )
}
