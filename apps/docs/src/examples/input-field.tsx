'use client'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import {
  Checkbox,
  DatePicker,
  Description,
  Error,
  Field,
  Input,
  Label,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Textarea,
  TimePicker,
  ToggleGroup,
  type FieldProps,
  type TimePickerValue,
} from '@creation-ui/react'
import { useState } from 'react'
import {
  descriptionControl,
  errorControl,
  labelControl,
} from './shared-playground-controls'
import { childrenProp, classNameProps } from './shared-props'

const inputTypes = [
  'number',
  'text',
  'textarea',
  'select',
  'checkbox',
  'radio',
  'switch',
  'toggle',
  'date',
  'time',
]

const DynamicInput = ({
  inputType,
}: {
  inputType: (typeof inputTypes)[number]
}) => {
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState<TimePickerValue>(null)

  const fruit = ['Banana', 'Apple', 'Orange', 'Pear']
  switch (inputType) {
    case 'number':
      return <Input type='number' />
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
            <Field key={option} type='row'>
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
    case 'date':
      return (
        <DatePicker
          value={date}
          // @ts-expect-error
          onChange={setDate}
        />
      )
    case 'time':
      return <TimePicker value={time} onChange={setTime} />
    default:
      return <Input />
  }
}

interface InputFieldProps {
  label: string
  description: string
  error: string
  inputType: (typeof inputTypes)[number]
  fieldType: FieldProps['type']
}

export const InputField = ({
  label,
  description,
  error,
  inputType,
  fieldType,
}: InputFieldProps) => {
  return (
    <Field type={fieldType}>
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
        { ...labelControl, defaultValue: 'Amount' },
        { ...descriptionControl, defaultValue: 'Set the desired amount' },
        { ...errorControl, defaultValue: undefined, helperText: undefined },
        {
          defaultValue: 'number',
          name: 'inputType',
          component: 'select',
          type: 'array',
          values: inputTypes,
        },
        {
          defaultValue: 'column',
          name: 'fieldType',
          component: 'select',
          type: 'array',
          values: ['switch', 'row', 'column'],
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
  fieldType,
}: InputFieldProps) => {
  return (
    <Field type={{fieldType}}>
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
    description: 'The layout of the field',
    name: 'type',
    defaultValue: 'column',
    type: "'column' | 'row' | 'switch'",
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
