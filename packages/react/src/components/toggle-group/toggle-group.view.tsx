import { RadioGroup } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { getElementPosition } from '@utils'
import { useInputBase } from '@components'
import { toggleGroupButton, toggleGroupContainer } from './classes'
import type { ToggleGroupOption, ToggleGroupProps } from './toggle-group.types'
import { useTheme } from '@root/theme'
import { useMemo } from 'react'

export const ToggleGroupView = ({
  className,
  options,
  ...props
}: ToggleGroupProps) => {
  const { componentId, readOnly, disabled } = useInputBase()
  const { styles, size: defaultSize } = useTheme()
  const { size = defaultSize, ...rest } = props
  const withThemeButton = useMemo(() => toggleGroupButton(styles), [styles])

  return (
    <RadioGroup
      {...rest}
      id={componentId}
      className={twMerge(toggleGroupContainer, className)}
      disabled={disabled || readOnly}
    >
      {options?.map(
        ({ label, value, disabled }: ToggleGroupOption, index, array) => (
          <RadioGroup.Option
            key={value}
            value={value}
            title={value}
            disabled={disabled}
            className={({ checked, disabled }) =>
              withThemeButton({
                size,
                checked,
                disabled,
                element: getElementPosition(array, index),
                className: [size],
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
