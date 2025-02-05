'use client'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import {
  Description,
  Error,
  Field,
  Label,
  Radio,
  RadioGroup,
} from '@creation-ui/react'
import { useState, type FC } from 'react'
import { createRadioControls } from './shared-playground-controls'
import { childrenProp, labelProp, sizeProp } from './shared-props'

interface RadioGroupExampleProps {
  label?: string
  error?: string
  description?: string
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
}

export const RadioGroupExample: FC<RadioGroupExampleProps> = ({
  label,
  error,
  description,
  required,
  disabled,
  readOnly,
}) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)

  const options = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Maybe', value: 'maybe' },
    { label: 'Disabled option', value: 'option-32', disabled: true },
  ]

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value)
  }

  return (
    <Field disabled={disabled}>
      <Label required={required}>{label}</Label>
      <Description>{description}</Description>
      <RadioGroup value={selected} disabled={disabled} readOnly={readOnly}>
        {options.map(option => (
          <Field key={option.value} type='row'>
            <Radio onClick={handleClick} value={option.value} />
            <Label key={option.value}>{option.label}</Label>
          </Field>
        ))}
      </RadioGroup>
      {error && <Error>{error}</Error>}
    </Field>
  )
}

const code = `
interface RadioGroupExampleProps {
  label?: string
  error?: string
  description?: string
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
}

export const RadioGroupExample: FC<RadioGroupExampleProps> = ({
  label,
  error,
  description,
  required,
  disabled,
  readOnly,
}) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)

  const options = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Maybe', value: 'maybe' },
    { label: 'Disabled option', value: 'option-32', disabled: true },
  ]

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value)
  }

  return (
    <Field disabled={disabled}>
      <Label required={required}>{label}</Label>
      <Description>{description}</Description>
      <RadioGroup value={selected} disabled={disabled} readOnly={readOnly}>
        {options.map(option => (
          <Field key={option.value} type='row'>
            <Radio onClick={handleClick} value={option.value} />
            <Label key={option.value}>{option.label}</Label>
          </Field>
        ))}
      </RadioGroup>
      {error && <Error>{error}</Error>}
    </Field>
  )
}`

export const radioControlsSet = createRadioControls('Radio Group')

export const RadioGroupPlayground = () => (
  <Playground
    component={RadioGroupExample}
    controls={radioControlsSet}
    propsKeys={['label', 'error', 'description', 'required', 'disabled', 'readOnly']}
    code={code}
  />
)

export const properties: DocumentedProperty[] = [
  sizeProp,
  labelProp,
  childrenProp,
]
