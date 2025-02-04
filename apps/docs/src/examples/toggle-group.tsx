'use client'
import type { DocumentedProperty } from '@/models/system'
import { ToggleGroup } from '@creation-ui/react'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'iconoir-react'
import { useState } from 'react'

const options = [
  { value: 'text-left', label: <AlignLeft /> },
  { value: 'text-center', label: <AlignCenter /> },
  { value: 'text-right', label: <AlignRight /> },
  { value: 'text-justify', label: <AlignJustify /> },
]

export const ToggleGroupExample = () => {
  const [value, setValue] = useState<string>('text-left')

  return <ToggleGroup options={options} value={value} onChange={setValue} />
}

export const properties: DocumentedProperty[] = [
  {
    name: 'options',
    type: 'ToggleGroupOption[]',
    description: 'Options to select, see ToggleGroupOption below',
  },
  {
    name: 'onChange',
    type: '(value: T = string): void;',
    description:
      'Callback when the value changes. Type of value is inherited from the options - string is default',
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
