'use client'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import {
  disabledControl,
  loadingControl,
  variantControl,
} from './shared-playground-controls'

import { Select, type SelectProps } from '@creation-ui/react'
import { iconProp } from './shared-props'

export const SelectExample = (props: SelectProps) => {
  return (
    <Select name='currency' {...props}>
      <option value='USD'>USD</option>
      <option value='EUR'>EUR</option>
      <option value='GBP'>GBP</option>
      <option value='CAD'>CAD</option>
      <option value='PLN'>PLN</option>
    </Select>
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
