'use client'

import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import {
  Checkbox,
  Description,
  Field,
  Label,
  type CheckboxProps,
} from '@creation-ui/react'
import {
  disabledControl,
  descriptionControl,
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
    component={CheckboxExample}
    controls={[
      loadingControl,
      disabledControl,
      readOnlyControl,
      descriptionControl,
      labelControl,
    ]}
    code={`
      export const CheckboxExample = ({
  label,
  helperText,
  ...props
}: CheckboxProps & { label: string; helperText?: string }) => {
  return (
    <>
      <Field type='row'>
        <Checkbox name='checkbox' {{props}} />
        <Label>{{label}}</Label>
        {helperText && <Description>{{helperText}}</Description>}
      </Field>
    </>
  )
}`}
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
