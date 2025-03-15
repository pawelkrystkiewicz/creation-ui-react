'use client'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import {
  Checkbox,
  Description,
  Error,
  Field,
  Input,
  INPUT_TYPES,
  Label,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Textarea,
  ToggleGroup,
  type FieldProps,
  type HTMLInputType,
} from '@creation-ui/react'
import { TableRows, ViewColumns3 } from 'iconoir-react'
import {
  descriptionControl,
  errorControl,
  ICON_CLASSES,
  labelControl,
} from './shared-playground-controls'
import { childrenProp, classNameProps } from './shared-props'

interface DynamicInputProps {
  inputType:
    | HTMLInputType
    | 'textarea'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'switch'
    | 'toggle'
}

const DynamicInput = ({ inputType }: DynamicInputProps) => {
  const fruit = ['Banana', 'Apple', 'Orange', 'Pear']
  switch (inputType) {
    case 'textarea':
      return <Textarea />
    case 'select':
      return (
        <Select>
          {fruit.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      )
    case 'checkbox':
      return <Checkbox />
    case 'radio':
      return (
        <RadioGroup>
          {fruit.map(option => (
            <Field key={option} layout='row'>
              <Radio value={option} />
              <Label>{option}</Label>
            </Field>
          ))}
        </RadioGroup>
      )
    case 'switch':
      return <Switch />
    case 'toggle':
      return (
        <ToggleGroup
          options={fruit.map(option => ({
            label: option,
            value: option,
          }))}
        />
      )

    default:
      return <Input type={inputType} />
  }
}

interface InputFieldProps {
  label: string
  description: string
  error: string
  inputType: HTMLInputType
  layout: FieldProps['layout']
  loading?: boolean
}

export const InputField = ({
  label,
  description,
  error,
  inputType,
  layout,
}: InputFieldProps) => {
  return (
    <Field layout={layout}>
      <Label>{label}</Label>
      <DynamicInput inputType={inputType} />
      <Description>{description}</Description>
      {error && <Error>{error}</Error>}
    </Field>
  )
}

export const InputFieldPlayground = () => {
  return (
    <Playground
      controls={[
        {
          defaultValue: 'column',
          name: 'layout',
          component: 'toggle-group',
          type: 'array',
          values: [
            { label: <TableRows className={ICON_CLASSES} />, value: 'row' },
            {
              label: <ViewColumns3 className={ICON_CLASSES} />,
              value: 'column',
            },
          ],
        },
        { ...labelControl, defaultValue: 'Amount' },
        { ...descriptionControl, defaultValue: 'Set the desired amount' },
        { ...errorControl, defaultValue: undefined, helperText: undefined },
        {
          defaultValue: 'number',
          name: 'inputType',
          component: 'select',
          type: 'array',
          values: [
            ...INPUT_TYPES,
            'textarea',
            'checkbox',
            'radio',
            'switch',
            'toggle',
          ],
        },
      ]}
      component={InputField}
      code={`
import { Description, Error, Field, Input, Label } from '@creation-ui/react'
import { useState, type ChangeEvent } from 'react'


export const InputField = ({
  label,
  description,
  error,
  inputType,
  layout,
  loading,
}: InputFieldProps) => {
  return (
    <Field type={{layout}}>
      <Label>{{label}}</Label>
      <DynamicInput inputType={{inputType}} />
      <Description>{{description}}</Description>
      {error && <Error>{{error}}</Error>}
    </Field>
  )
}`}
    />
  )
}




export const fieldProperties: DocumentedProperty[] = [
  childrenProp,
  classNameProps,
  {
    description:
      'The layout of the field. Use row for small controls like Switch or Checkbox.',
    name: 'layout',
    defaultValue: 'column',
    type: "'column' | 'row'",
  },
]

export const labelProperties: DocumentedProperty[] = [
  classNameProps,
  childrenProp,
]

export const errorProperties: DocumentedProperty[] = [
  classNameProps,
  childrenProp,
]

export const descriptionProperties: DocumentedProperty[] = [
  classNameProps,
  childrenProp,
]
