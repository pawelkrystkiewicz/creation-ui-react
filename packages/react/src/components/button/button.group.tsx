import { twMerge } from 'tailwind-merge'
import { getElementPosition } from '@utils'
import {
  toggleGroupContainer,
  toggleGroupButton,
} from '../toggle-group/classes'
import type { ButtonGroupProps } from './button.types'
import { useTheme } from '@root/theme'
import { useMemo } from 'react'

const ButtonGroup = ({ options, status, className, ...props }: ButtonGroupProps) => {
  const { styles, size: defaultSize } = useTheme()
  const { size = defaultSize, ...rest } = props
  const withThemeButton = useMemo(() => toggleGroupButton(styles), [styles])

  return (
    <div
      className={twMerge(
        toggleGroupContainer,
        styles.animations.microInteractions,
        className
      )}
    >
      {options?.map((button, index) => (
        <button
          key={index}
          className={twMerge(
            withThemeButton({
              size,
              disabled: button.disabled,
              element: getElementPosition(options, index),
            }),
            button.className
          )}
          onClick={button.onClick}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default ButtonGroup
