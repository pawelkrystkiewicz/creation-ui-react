'use client'
import { Description, Field, Label, type FieldProps } from '@creation-ui/react'
import type { FC, ReactNode } from 'react'

interface PlaygroundInputFieldProps {
  label?: ReactNode
  value?: string
  helperText?: string
  children: React.ReactNode
  type?: FieldProps['layout']
  className?: string
}

export const PlaygroundInputField: FC<PlaygroundInputFieldProps> = ({
  label,
  value,
  helperText,
  children,
  type = 'column',
  className,
}) => {
  return (
    <Field layout={type} className={className}>
      <Label className={'flex items-center gap-1'}>
        {label}
        {value ? <LabelCode>{value}</LabelCode> : null}
      </Label>
      {children}
      <Description>{helperText}</Description>
    </Field>
  )
}

export const LabelCode = ({ children }: { children: ReactNode }) => (
  <code className='text-xs border rounded-sm px-1'>{children}</code>
)
