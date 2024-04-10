import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context/context'
import { DropdownProps } from '@creation-ui/core'
import { Select } from '@creation-ui/react'
import { pick } from 'lodash'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { PersonOnListType } from './autocomplete/types'
import options from './people-short-list.json'
import { createInputControls } from './shared-playground-controls'
import { createDocsLink } from './utils'

export const SelectExample = ({ ...props }: DropdownProps) => {
  const [value, setValue] = useState<PersonOnListType | null>(null)

  const playground = usePlayground()

  const state = pick(playground.state, ['size', 'error', 'loading', 'disabled', 'readOnly', 'clearable'])

  const onClear = () => setValue(null)
  return (
    <Select
      {...state}
      {...props}
      label={'Person'}
      value={value}
      onChange={setValue}
      onClear={onClear}
      options={options}
    />
  )
}

export const SelectPlayground = () => (
  <Playground name='Select' component={SelectExample} controls={createInputControls('Select')} showCode={false} />
)

export const properties: DocumentedProperty[] = [
  {
    description: 'List available options',
    name: 'options',
    type: 'T[]',
    defaultValue: '[]',
  },
  {
    description: 'Function to render option',
    name: 'renderOption',
    type: '((option: RenderOptionProps, index:number) => React.ReactNode)',
  },
  {
    description: 'Current value of component',
    name: 'value',
    type: 'T',
  },
  {
    name: 'onChange',
    type: '(value: T | T[]) => void',
    description: 'Change event callback',
  },
  {
    name: 'getOptionLabel',
    type: ' (option: T) => string',
    defaultValue: 'option => option.label ?? option',
    description: 'Getter for option label.',
  },
  {
    name: 'getOptionDisabled',
    type: ' (option: T) => boolean',
    defaultValue: 'option => option.disabled',
    description: 'Getter for option disabled state.',
  },
  {
    name: 'isOptionEqualToValue',
    type: '(option: T, value?: T | null) => boolean',
    defaultValue: '_isOptionEqualToValue',
    description: `Function to compare option and value.`,
  },
  {
    name: 'renderOption',
    type: '(props: RenderOptionProps, option: T) => ReactNode',
    defaultValue: '_renderOption',
    description: `Function rendering option in dropdown.
      ${createDocsLink({
        label: 'Docs',
        component: 'render-option',
        parent: 'select',
      })}
      `,
  },
  {
    name: 'renderSelection',
    type: '(option: T) => ReactNode',
    defaultValue: '_renderSelection',
    description: `Function rendering single selection. ${createDocsLink({
      label: 'Docs',
      component: 'render-selection',
      parent: 'select',
    })}
    `,
  },
  // renderSelection = (value: T) => value ? getOptionLabel(value) : <Placeholder>{placeholder}</Placeholder>,
]
