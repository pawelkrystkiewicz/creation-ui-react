import * as Headless from '@headlessui/react'

export interface RadioProps
  extends Omit<Headless.RadioProps, 'as' | 'className' | 'children'> {
  className?: string
}

export interface RadioGroupProps
  extends Omit<Headless.RadioGroupProps, 'as' | 'className'> {
  className?: string
  readOnly?: boolean
}
