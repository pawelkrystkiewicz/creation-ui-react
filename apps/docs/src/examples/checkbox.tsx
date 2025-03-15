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

export const CHECKBOX_CONTROLS = [
  loadingControl,
  disabledControl,
  readOnlyControl,
  descriptionControl,
  labelControl,
]

export const CHECKBOX_CODE_TEMPLATE = `
      export const CheckboxExample = ({
  label,
  description,
  disabled,
  loading,
  readOnly,
}: CheckboxProps & { label: string; description?: string }) => {
  return (
    <>
      <Field type='row' disabled={{disabled}}>
        <Checkbox name='checkbox' disabled={{disabled}} loading={{loading}} readOnly={{readOnly}} />
        <Label>{{label}}</Label>
        {description && <Description>{{description}}</Description>}
      </Field>
    </>
  )
}`

export const CheckboxExample = ({
  label,
  description,
  ...props
}: CheckboxProps & { label: string; description?: string }) => {
  return (
    <>
      <Field layout='row'>
        <Checkbox name='checkbox' {...props} />
        <Label>{label}</Label>
        {description && <Description>{description}</Description>}
      </Field>
    </>
  )
}

export const CheckboxPlayground = () => (
  <Playground
    component={CheckboxExample}
    controls={CHECKBOX_CONTROLS}
    code={CHECKBOX_CODE_TEMPLATE}
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
