import { Field, Label, Description, type FieldProps } from '@creation-ui/react'
import type { FC } from 'react'

interface PlaygroundInputFieldProps {
  label?: string
  value?: string
  helperText?: string
  children: React.ReactNode
  type?: FieldProps['type']
}

export const PlaygroundInputField: FC<PlaygroundInputFieldProps> = ({
  label,
  value,
  helperText,
  children,
  type = 'column',
}) => {
  return (
    <Field type={type}>
      <Label className={'flex items-center gap-1'}>
        {label}{' '}
        {value ? (
          <code className='text-xs border rounded-sm px-1'>{value}</code>
        ) : null}
      </Label>
      {children}
      <Description>{helperText}</Description>
    </Field>
  )
}
