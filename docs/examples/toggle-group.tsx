import Icon from '@components/icon'
import { Playground } from '@components/playground'

import { ToggleGroup } from '@creation-ui/react'
import { mdiFormatAlignCenter, mdiFormatAlignLeft, mdiFormatAlignRight } from '@mdi/js'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { labelControl, sizeControl } from './shared-playground-controls'

const options = [
  { value: '1', label: <Icon path={mdiFormatAlignLeft} /> },
  { value: '2', label: <Icon path={mdiFormatAlignCenter} /> },
  { value: '3', label: <Icon path={mdiFormatAlignRight} /> },
]

export const ToggleGroupPlayground = () => {
  const [value, setValue] = useState<string>('1')

  return (
    <Playground
      name='ToggleGroup'
      component={ToggleGroup}
      controls={[sizeControl, { ...labelControl, defaultValue: 'Text alignment' }]}
      componentProps={{ options, value, onChange: setValue }}
      showCode={false}
    />
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'label',
    type: 'string',
    description: 'The label of the toggle group',
  },
  {
    name: 'options',
    type: 'ToggleGroupOption[]',
    description: 'Options to select, see ToggleGroupOption below',
  },
  {
    name: 'required',
    type: 'boolean',
    description: 'Is the toggle group marked as required?',
  },
  {
    name: 'onChange',
    type: '(value: T = string): void;',
    description: 'Callback when the value changes. Type of value is inherited from the options - string is default',
  },
]

export const optionProps: DocumentedProperty[] = [
  {
    name: 'label',
    type: 'string | React.ReactNode',
    description: 'The title of the option',
  },
  {
    name: 'value',
    type: 'string',
    description: 'The value of the option',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Is option disabled?',
  },
]
