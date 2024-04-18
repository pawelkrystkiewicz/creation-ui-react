import { Switch as HSwitch } from '@headlessui/react'
import { useInputBase } from '@components'
import { switchCircle, switchClasses } from './classes'
import type { SwitchProps } from '@components'
import { useTheme } from '@root/theme'

export const SwitchView = ({ checked, required, ...props }: SwitchProps) => {
  const { componentId, readOnly, disabled, classes } = useInputBase()
  const { styles, size: defaultSize } = useTheme()
  const { size = defaultSize, ...rest } = props

  return (
    <div className={classes.container}>
      <HSwitch
        {...rest}
        id={componentId}
        disabled={disabled}
        aria-required={required}
        className={switchClasses(styles)({
          size,
          checked,
          readOnly,
          className: [size],
        })}
      >
        <span
          aria-hidden='true'
          className={switchCircle({
            size,
            checked,
            className: [styles.animations.microInteractions],
          })}
        />
      </HSwitch>
    </div>
  )
}
