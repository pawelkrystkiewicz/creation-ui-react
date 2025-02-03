'use client'

import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import {
  Checkbox,
  CheckboxField,
  Label,
  type CheckboxProps
} from '@creation-ui/react'
import {
  disabledControl,
  errorControl,
  helperTextControl,
  labelControl,
  loadingControl,
  readOnlyControl,
} from './shared-playground-controls'

export const CheckboxExample = ({
  label,
  ...props
}: CheckboxProps & { label: string }) => {
  return (
    <>
      <CheckboxField>
        <Checkbox name='checkbox' {...props} />
        <Label>{label}</Label>
      </CheckboxField>
    </>
  )
}

export const CheckboxPlayground = () => (
  <Playground
    name='Checkbox'
    component={CheckboxExample}
    controls={[
      errorControl,
      loadingControl,
      disabledControl,
      readOnlyControl,
      helperTextControl,
      labelControl,
    ]}
  />
)

export const properties: DocumentedProperty[] = [
  { name: 'label', type: 'string', description: 'Input label' },
  {
    name: 'indeterminate',
    type: 'string',
    description: 'Should component display icon for the indeterminate state',
    note: 'Often used as indication that not all options are selected on the list',
  },
  { name: 'disabled', type: 'boolean', description: 'Is disabled?' },
  {
    name: 'enableFocusRing',
    type: 'boolean',
    description: 'Should component display focus ring when `:focus`',
  },
]
