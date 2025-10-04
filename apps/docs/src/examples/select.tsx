'use client'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import {
  disabledControl,
  labelControl,
  loadingControl,
  variantControl,
} from './shared-playground-controls'

import { PlaygroundInputField } from '@/components/playground/playground.input-field'
import {
  Field,
  Icon,
  Label,
  Select,
  SelectOption,
  type SelectProps,
} from '@creation-ui/react'
import { iconProp } from './shared-props'
import { useState } from 'react'
import clsx from 'clsx'

export const SelectExample = (
  props: SelectProps & { required?: boolean; label?: string },
) => {
  const width = 'w-32'
  const options = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' },
    { value: 'CAD', label: 'CAD' },
    { value: 'PLN', label: 'PLN' },
  ]
  const [selected, setSelected] = useState<string | undefined>(options[0].value)

  const onClear = () => {
    setSelected(undefined)
  }
  return (
    <Field disabled={props.disabled}>
      <Label required={props.required}>{props.label}</Label>
      <Select
        name='currency'
        {...props}
        value={selected}
        onChange={setSelected}
        onClear={onClear}
        cx={{
          container: width,
        }}
      >
        {options.map(option => (
          <SelectOption
            key={option.value}
            value={option.value}
            selected={option.value === selected}
            className={width}
          >
            {option.label}
            <Icon
              icon='check'
              className={clsx(
                'text-primary micro-interactions',
                option.value === selected ? 'opacity-100' : 'opacity-0',
              )}
            />
          </SelectOption>
        ))}
      </Select>
    </Field>
  )
}

export const SelectField = () => {
  return (
    <PlaygroundInputField
      label='Currency'
      helperText='Select your currency'
      className='max-w-sm'
    >
      <SelectExample />
    </PlaygroundInputField>
  )
}

export const SelectPlayground = () => (
  <>
    <Playground
      component={SelectExample}
      controls={[
        variantControl,
        loadingControl,
        disabledControl,
        {
          name: 'multiple',
          type: 'boolean',
        },
        labelControl,
      ]}
      code={`
import { Select, type SelectProps } from '@creation-ui/react'

export const SelectExample = (props: SelectProps) => {
  return (
    <Select name='currency' {{props}}>
      <option value='USD'>USD</option>
      <option value='EUR'>EUR</option>
      <option value='GBP'>GBP</option>
      <option value='CAD'>CAD</option>
      <option value='PLN'>PLN</option>
    </Select>
  )
}
  `}
    />
  </>
)

export const properties: DocumentedProperty[] = [
  {
    name: 'children',
    description: 'Button label',
    type: 'React.ReactNode',
  },
  {
    ...iconProp,
    name: 'starAdornment',
    description: "E.g. icon on the left side of the component's children",
  },
  {
    ...iconProp,
    name: 'endAdornment',
    description: "E.g. icon on the right side of the component's children",
  },
  {
    name: 'multiple',
    type: 'boolean',
    description: 'Whether the select is multiple',
  },
]
