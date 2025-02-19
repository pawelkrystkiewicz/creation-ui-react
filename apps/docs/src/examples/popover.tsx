'use client'

import type { DocumentedProperty } from '@/models/system'
import {
  ClearButton,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
  Switch,
} from '@creation-ui/react'
import { useState } from 'react'
import { childrenProp, classNameProps, onClickCallback } from './shared-props'
import { Container } from '@/components/container'

export const PopoverExampleUncontrolled = () => {
  return (
    <Container>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className='w-52'>
          <PopoverHeading>Popover</PopoverHeading>
          <PopoverDescription className='pt-2'>
            In the uncontrolled variant, the open and close behavior of the
            Popover is managed internally.
          </PopoverDescription>
          <br />
          <PopoverClose>Dismiss</PopoverClose>
        </PopoverContent>
      </Popover>
    </Container>
  )
}

export const PopoverExampleControlled = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(v => !v)

  return (
    <Container>
      <Switch checked={open} onChange={setOpen} />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={toggleOpen}>Open</PopoverTrigger>
        <PopoverContent className='w-52'>
          <div className='flex justify-between items-center'>
            <PopoverHeading>Controlled</PopoverHeading>
            <PopoverClose>
              <ClearButton />
            </PopoverClose>
          </div>
          <PopoverDescription className='pt-2'>
            In the controlled variant, you can manage the open and close
            behavior of the Popover externally through props.
          </PopoverDescription>
        </PopoverContent>
      </Popover>
    </Container>
  )
}

export const commonProperties: DocumentedProperty[] = [
  childrenProp,
  classNameProps,
]

export const properties = [
  ...commonProperties,
  {
    name: 'initialOpen',
    type: 'boolean',
    description: 'Initial open state',
    defaultValue: 'false',
  },
  {
    name: 'placement',
    type: 'Placement',
    description: 'Placement of the popover relative to the trigger element',
  },
  {
    name: 'modal',
    type: 'boolean',
    description: 'Whether the popover should be modal',
  },
  { name: 'open', type: 'boolean', description: 'State of popover' },
  { name: 'onOpenChange', type: '(open: boolean) => void', description: '' },
]

export const popoverTriggerProperties: DocumentedProperty[] = [
  onClickCallback,
  {
    name: 'asChild',
    type: `boolean`,
    description: 'Allows the user to pass any element as the anchor',
  },
  ...commonProperties,
]
