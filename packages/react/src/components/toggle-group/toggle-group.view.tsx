import { RadioGroup } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { getElementPosition } from '../../utils'
import { useInputBase } from '../input-base/input-base.context'
import { toggleGroup } from './classes'
import type { ToggleGroupOption, ToggleGroupProps } from './toggle-group.types'

export const ToggleGroupView = ({
  size,
  className,
  options,
  ...rest
}: ToggleGroupProps) => {
  const { componentId, readOnly, disabled } = useInputBase()

  return (
    <RadioGroup
      {...rest}
      id={componentId}
      className={twMerge(toggleGroup.container, className)}
      disabled={disabled || readOnly}
    >
      {options.map(
        ({ label, value, disabled }: ToggleGroupOption, index, array) => (
          <RadioGroup.Option
            key={value}
            value={value}
            title={value}
            disabled={disabled}
            className={({ checked, disabled }) =>
              toggleGroup.button({
                checked,
                // @ts-ignore
                disabled,
                size,
                element: getElementPosition(array, index),
              })
            }
          >
            <RadioGroup.Label as='span'>{label}</RadioGroup.Label>
          </RadioGroup.Option>
        )
      )}
    </RadioGroup>
  )
}
