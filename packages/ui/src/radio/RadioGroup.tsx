import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group'
import type { FC } from 'react'
import type { RadioGroupProps } from './types'
import { radioGroupStyles } from './classes'

export const RadioGroup: FC<RadioGroupProps> = ({
  className,
  onChange,
  ...props
}) => {
  return (
    <BaseRadioGroup
      data-slot='control'
      {...props}
      onValueChange={onChange}
      className={radioGroupStyles({ className })}
    />
  )
}
