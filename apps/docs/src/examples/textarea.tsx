'use client'

import { Playground } from '@/components/playground'
import { Textarea, type TextareaProps } from '@creation-ui/react'

export const TextAreaExample = (props: TextareaProps) => {
  return <Textarea {...props} />
}

export const TextAreaPlayground = () => (
  <Playground
    component={TextAreaExample}
    code={`
  import { Textarea, type TextareaProps } from '@creation-ui/react'

export const TextAreaExample = (props: TextareaProps) => {
  return <Textarea {...props} />
}`}
  />
)
