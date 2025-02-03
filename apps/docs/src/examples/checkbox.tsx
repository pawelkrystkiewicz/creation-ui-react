'use client'

import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import {
  Checkbox,
  CheckboxField,
  Description,
  Field,
  Label,
  type CheckboxProps,
} from '@creation-ui/react'
import {
  disabledControl,
  helperTextControl,
  labelControl,
  loadingControl,
  readOnlyControl,
} from './shared-playground-controls'

export const CheckboxExample = ({
  label,
  helperText,
  ...props
}: CheckboxProps & { label: string; helperText?: string }) => {
  return (
    <>
      <Field type='row'>
        <Checkbox name='checkbox' {...props} />
        <Label>{label}</Label>
        {helperText && <Description>{helperText}</Description>}
      </Field>
    </>
  )
}

export const CheckboxPlayground = () => (
  <Playground
    name='Checkbox'
    component={CheckboxExample}
    showCode={false}
    controls={[
      loadingControl,
      disabledControl,
      readOnlyControl,
      helperTextControl,
      labelControl,
    ]}
  />
)

export const properties: DocumentedProperty[] = [
  {
    name: 'readOnly',
    type: 'boolean',
    description: 'Is read only?',
  },

  {
    name: 'loading',
    type: 'boolean',
    description: 'Is loading?',
  },
]
