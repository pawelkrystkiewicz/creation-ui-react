'use client'

import { Playground } from '@/components/playground'
import type { PlaygroundConfiguratorProps } from '@/components/playground/types'
import { Description, Field, Label, Switch } from '@creation-ui/react'
import { useState } from 'react'
import { descriptionControl, labelControl } from './shared-playground-controls'

interface SwitchFieldProps {
  label: string
  description: string
}

const SwitchField = ({ label, description }: SwitchFieldProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <Field type='row'>
      <Switch checked={checked} onChange={setChecked} />
      <Label>{label}</Label>
      <Description>{description}</Description>
    </Field>
  )
}

const code = `
interface SwitchFieldProps {
  label: string
  description: string
}

const SwitchField = ({ label, description }: SwitchFieldProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <Field type='row'>
      <Switch checked={checked} onChange={setChecked} />
      <Label>{{label}}</Label>
      <Description>{{description}}</Description>
    </Field>
  )
}
`

export const playgroundConfig: PlaygroundConfiguratorProps<SwitchFieldProps> = {
  component: SwitchField,
  code,
  propsKeys: ['label', 'description'],
  controls: [labelControl, descriptionControl],
}

export const SwitchPlayground = () => (
  <Playground<SwitchFieldProps> {...playgroundConfig} />
)
