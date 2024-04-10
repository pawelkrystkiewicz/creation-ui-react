import { Playground } from '@components/playground'
import { Switch, SwitchProps } from '@creation-ui/react'
import { ELEMENT_SIZES } from '@creation-ui/core'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
import { createInputControls } from './shared-playground-controls'

const controls = createInputControls('Switch')

interface SwitchExampleProps extends Omit<SwitchProps, 'onChange'> {}

export const SwitchExample = ({ ...props }: SwitchExampleProps) => {
  const [checked, setChecked] = useState<boolean>(false)

  return <Switch onChange={setChecked} checked={checked} size='md' {...props} />
}

export const SwitchPlayground = () => <Playground name='Switch' component={SwitchExample} controls={controls} />

export const properties: DocumentedProperty[] = [
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
    description: 'Size of the element',
  },
  { name: 'required', type: 'boolean', description: 'Is element required?' },
  { name: 'readOnly', type: 'boolean', description: 'Is element read-only?' },
  {
    name: 'checked',
    type: 'boolean',
    description: '<code>checked</code> state',
  },
  {
    name: 'defaultChecked',
    type: 'boolean',
    description: 'Switch is defaultChecked?',
  },
  { name: 'label', type: 'string', description: 'Input label' },
  { name: 'disabled', type: 'boolean', description: 'Is disabled?' },
  {
    name: 'onChange',
    type: '(value: boolean) => void',
    description: 'Callback function',
  },
]
