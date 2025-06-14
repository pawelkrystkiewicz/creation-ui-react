'use client'
import { Field, Label } from '@creation-ui/react'
import { type ReactNode } from 'react'

interface ToolContainerProps {
  children?: ReactNode
  label: ReactNode
}

export const ToolContainer = (props: ToolContainerProps) => {
  const { label } = props
  return (
    <Field>
      <Label aria-label={label?.toString()}>{label}</Label>
      <div className='flex gap-3 w-fit'>{props.children}</div>
    </Field>
  )
}
