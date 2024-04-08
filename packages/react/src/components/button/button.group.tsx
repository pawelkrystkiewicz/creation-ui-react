import { twMerge } from 'tailwind-merge'
import { getElementPosition } from '../../utils'
import { toggleGroup } from '../toggle-group/classes'
import type { ButtonGroupProps } from './button.types'

const ButtonGroup = ({ options, size = 'md', className }: ButtonGroupProps) => (
  <div className={twMerge(toggleGroup.container, className)}>
    {options.map((button, index) => (
      <button
        key={index}
        className={twMerge(
          toggleGroup.button({
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

export default ButtonGroup
