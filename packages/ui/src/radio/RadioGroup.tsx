import * as Headless from '@headlessui/react'
import { FC } from 'react'
import { RadioGroupProps } from './types'
import { radioGroupStyles } from './classes'

export const RadioGroup: FC<RadioGroupProps> = ({ className, ...props }) => {
  return (
    <Headless.RadioGroup
      data-slot='control'
      {...props}
      className={radioGroupStyles({ className })}
    />
  )
}
