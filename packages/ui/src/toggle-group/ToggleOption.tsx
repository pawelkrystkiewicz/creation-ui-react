import { Radio } from '@headlessui/react'
import { FC, useCallback, useMemo } from 'react'
import { getElementPosition } from '../utils/get-element-position'
import { toggleGroupButtonStyles } from './classes'
import type { ToggleGroupOption } from './types'

interface ToggleOptionProps {
  option: ToggleGroupOption
  array: ToggleGroupOption[]
  index: number
}

type RadioOptionClassArgs = {
  checked: boolean
  disabled: boolean
  autofocus: boolean
  focus: boolean
  hover: boolean
}

export const ToggleOption: FC<ToggleOptionProps> = ({
  option: { label, value, disabled },
  array,
  index,
}) => {
  const elementPosition = useMemo(
    () => getElementPosition(array, index),
    [array, index],
  )

  const optionClasses = useCallback(
    ({ checked, disabled, autofocus, focus, hover }: RadioOptionClassArgs) =>
      toggleGroupButtonStyles({
        disabled,
        checked,
        autofocus,
        focus,
        hover,
        element: elementPosition,
      }),
    [elementPosition],
  )

  const title = useMemo(
    () => (typeof label === 'string' ? label : value),
    [label, value],
  )

  return (
    <Radio
      value={value}
      title={title}
      disabled={disabled}
      className={optionClasses}
    >
      <span>{label}</span>
    </Radio>
  )
}
