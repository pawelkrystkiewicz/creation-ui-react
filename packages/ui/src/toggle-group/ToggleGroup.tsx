import { getElementPosition } from '../utils/get-element-position'
import { RadioGroup } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { toggleGroupButtonStyles } from './classes'
import type { ToggleGroupOption, ToggleGroupProps } from './types'

export const ToggleGroup = ({
  className,
  options,
  onChange,
  value,
  disabled,
  ...props
}: ToggleGroupProps) => {
  return (
    <RadioGroup
      data-slot='control'
      {...props}
      className={twMerge(
        'relative',
        'inline-flex',
        'rounded-md',
        'h-[var(--ui-height)]',
        'max-h-[var(--ui-height)]',
        className,
      )}
      disabled={disabled}
      onChange={onChange}
    >
      {options?.map(
        (
          { label, value: optionValue, disabled }: ToggleGroupOption,
          index,
          array,
        ) => (
          <RadioGroup.Option
            key={optionValue}
            value={optionValue}
            title={optionValue}
            disabled={disabled}
            className={({ checked, disabled }) =>
              toggleGroupButtonStyles({
                disabled,
                checked,
                element: getElementPosition(array, index),
              })
            }
          >
            <RadioGroup.Label as='span'>{label}</RadioGroup.Label>
          </RadioGroup.Option>
        ),
      )}
    </RadioGroup>
  )
}
