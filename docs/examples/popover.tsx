import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context/context'
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
import { DocumentedProperty } from '@models/system'
import { pick } from 'lodash'
import { useState } from 'react'
import { sizeControl } from './shared-playground-controls'
import { childrenProp, classNameProps, onClickCallback, sizeProp } from './shared-props'

export const PopoverExampleUncontrolled = () => {
  const playground = usePlayground()
  const state = pick(playground.state, ['size'])
  return (
    <div>
      <Popover {...state}>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className='w-52'>
          <PopoverHeading>Popover</PopoverHeading>
          <PopoverDescription className='pt-2'>
            In the uncontrolled variant, the open and close behavior of the Popover is managed internally.
          </PopoverDescription>
          <br />
          <PopoverClose>Dismiss</PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export const PopoverExampleControlled = () => {
  const [open, setOpen] = useState(false)
  const playground = usePlayground()
  const state = pick(playground.state, ['size'])

  const toggleOpen = () => setOpen(v => !v)

  return (
    <div>
      <Switch checked={open} onChange={setOpen} label={open ? 'Opened' : 'Closed'} />
      <Popover open={open} onOpenChange={setOpen} {...state}>
        <PopoverTrigger onClick={toggleOpen}>Open</PopoverTrigger>
        <PopoverContent className='w-52'>
          <div className='flex justify-between items-center'>
            <PopoverHeading>Controlled</PopoverHeading>
            <PopoverClose>
              <ClearButton />
            </PopoverClose>
          </div>
          <PopoverDescription className='pt-2'>
            In the controlled variant, you can manage the open and close behavior of the Popover externally through
            props.
          </PopoverDescription>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export const PopoverPlaygroundUncontrolled = () => (
  <Playground name='Popover' component={PopoverExampleUncontrolled} controls={[sizeControl]} />
)

export const PopoverPlaygroundControlled = () => (
  <Playground name='Popover' component={PopoverExampleControlled} controls={[sizeControl]} />
)

export const commonProperties: DocumentedProperty[] = [childrenProp, sizeProp, classNameProps]

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
