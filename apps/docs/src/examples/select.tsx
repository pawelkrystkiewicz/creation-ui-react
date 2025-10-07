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
  const options = ['USD', 'EUR', 'GBP', 'CAD', 'PLN']
  const [selected, setSelected] = useState<string | null>(options[0])

  const onClear = () => {
    setSelected(null)
  }

  return (
    <Field disabled={props.disabled}>
      <Label required={props.required}>{props.label}</Label>
      <Select
        {...props}
        value={selected}
        onChange={setSelected}
        onClear={onClear}
      >
        <SelectButton className={'w-[180px]'}>
          <Selected placeholder='Currency' />
        </SelectButton>
        <SelectOptions>
          {options.map(option => (
            <SelectOption key={option} value={option}>
              {option}
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
    name: 'startAdornment',
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
