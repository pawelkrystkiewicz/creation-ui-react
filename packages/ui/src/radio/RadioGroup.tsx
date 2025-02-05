import * as Headless from '@headlessui/react'
import type { FC } from 'react'
import type { RadioGroupProps } from './types'
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
