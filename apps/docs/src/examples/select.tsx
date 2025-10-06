'use client'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import {
  disabledControl,
  inputBackgroundControl,
  inputBorderControl,
  labelControl,
  loadingControl,
} from './shared-playground-controls'

import { PlaygroundInputField } from '@/components/playground/playground.input-field'
import {
  Field,
  Label,
  Select,
  SelectButton,
  Selected,
  SelectOptions,
  SelectOption,
  type SelectProps,
} from '@creation-ui/react'
import { useState } from 'react'
import { iconProp } from './shared-props'

export const SelectExample = (
  props: SelectProps & {
    required?: boolean
    label?: string
  },
) => {
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
      <Select {...props} value={selected} onChange={setSelected}>
        <SelectButton className={'w-[180px]'} onClear={onClear}>
          <Selected placeholder='Currency' />
        </SelectButton>
        <SelectOptions>
          {options.map(option => (
            <SelectOption key={option.value} value={option.value}>
              {option.label}
            </SelectOption>
          ))}
        </SelectOptions>
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
        loadingControl,
        disabledControl,
        labelControl,
        inputBorderControl,
        inputBackgroundControl,
      ]}
      code={`
        import {
          Select,
          SelectButton,
          Selected,
          SelectOptions,
          SelectOption,
          type SelectProps
        } from '@creation-ui/react'

        export const SelectElegantExample = (props: SelectProps) => {
          return (
            <Select {{props}}>
              <SelectButton className="w-[180px]">
                <Selected placeholder="Currency" />
              </SelectButton>
              <SelectOptions>
                <SelectOption value="USD">USD</SelectOption>
                <SelectOption value="EUR">EUR</SelectOption>
                <SelectOption value="GBP">GBP</SelectOption>
                <SelectOption value="CAD">CAD</SelectOption>
                <SelectOption value="PLN">PLN</SelectOption>
              </SelectOptions>
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
