import { Radio } from '@base-ui/react/radio'
import { type FC, useMemo } from 'react'
import { getElementPosition } from '../utils/get-element-position'
import { toggleGroupButtonStyles } from './classes'
import type { ToggleGroupOption } from './types'

interface ToggleOptionProps {
  option: ToggleGroupOption
  array: ToggleGroupOption[]
  index: number
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

  const classes = useMemo(
    () =>
      toggleGroupButtonStyles({
        element: elementPosition,
      }),
    [elementPosition],
  )

  const title = useMemo(
    () => (typeof label === 'string' ? label : value),
    [label, value],
  )

  return (
    <Radio.Root
      value={value}
      title={title}
      disabled={disabled}
      className={classes}
    >
      <span>{label}</span>
    </Radio.Root>
  )
}
