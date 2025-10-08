import { RadioGroup } from '@headlessui/react'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { toggleGroupContainerStyles } from './classes'
import { ToggleOption } from './ToggleOption'
import type { ToggleGroupProps } from './types'

// TODO: make it modular like select:
/**
 *
 * <ToggleGroup>
 *  <ToggleOption>
 *  <ToggleOption>
 *  <ToggleOption>
 *  <ToggleOption>
 * </ToggleGroup>
 */
export const ToggleGroup = ({
  className,
  options,
  onChange,
  value,
  disabled,
  ...props
}: ToggleGroupProps) => {
  const containerClasses = useMemo(
    () => twMerge(toggleGroupContainerStyles({ disabled }), className),
    [disabled, className],
  )
  return (
    <RadioGroup
      data-slot='control'
      {...props}
      className={containerClasses}
      disabled={disabled}
      value={value}
      onChange={onChange}
      value={value}
    >
      {options?.map((option, index, array) => (
        <ToggleOption
          key={option.value}
          option={option}
          array={array}
          index={index}
        />
      ))}
    </RadioGroup>
  )
}
