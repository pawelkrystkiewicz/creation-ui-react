'use client'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { ToggleGroup } from '@creation-ui/react'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'iconoir-react'
import { useState } from 'react'

const iconClasses = 'text-text-primary text-lg flex-shrink-0 size-6'
const options = [
  { value: 'text-left', label: <AlignLeft className={iconClasses} /> },
  { value: 'text-center', label: <AlignCenter className={iconClasses} /> },
  { value: 'text-right', label: <AlignRight className={iconClasses} /> },
  { value: 'text-justify', label: <AlignJustify className={iconClasses} /> },
]

export const ToggleGroupExample = () => {
  const [value, setValue] = useState<string>(options[0].value)

  return <ToggleGroup options={options} value={value} onChange={setValue} />
}

export const ToggleGroupPlayground = () => (
  <Playground
    component={ToggleGroupExample}
    code={`
import { ToggleGroup } from '@creation-ui/react'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'iconoir-react'
import { useState } from 'react'

const iconClasses = 'text-text-primary text-lg flex-shrink-0 size-6'
const options = [
  { value: 'text-left', label: <AlignLeft className={iconClasses} /> },
  { value: 'text-center', label: <AlignCenter className={iconClasses} /> },
  { value: 'text-right', label: <AlignRight className={iconClasses} /> },
  { value: 'text-justify', label: <AlignJustify className={iconClasses} /> },
]

export const ToggleGroupExample = () => {
  const [value, setValue] = useState<string>(options[0].value)

  return <ToggleGroup options={options} value={value} onChange={setValue} />
}
`}
  />
)

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
