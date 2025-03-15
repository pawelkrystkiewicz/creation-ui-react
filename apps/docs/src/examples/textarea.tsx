'use client'

import { Playground } from '@/components/playground'
import { Textarea, type TextareaProps } from '@creation-ui/react'
import { variantControl } from './shared-playground-controls'
import { DocumentedProperty } from '@/models/system'
import { classNameProps } from './shared-props'

export const TextAreaExample = (props: TextareaProps) => {
  return <Textarea {...props} />
}

export const TextAreaPlayground = () => (
  <Playground
    component={TextAreaExample}
    controls={[
      variantControl,
      {
        name: 'resizable',
        type: 'boolean',
        defaultValue: true,
      },
    ]}
    code={`
  import { Textarea, type TextareaProps } from '@creation-ui/react'

export const TextAreaExample = (props: TextareaProps) => {
  return <Textarea {{props}} />
}`}
  />
)

export const properties: DocumentedProperty[] = [
  {
    name: 'variant',
    type: 'string',
    description: 'The variant of the textarea',
  },
  {
    name: 'resizable',
    type: 'boolean',
    description: 'Whether the textarea is resizable',
  },
  classNameProps
]
