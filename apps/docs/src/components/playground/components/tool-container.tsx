'use client'
import { Field, Label } from '@headlessui/react'
import { type ReactNode } from 'react'
import type { ElementSize } from '../../../../../../packages/ui/src/types'

interface ToolContainerProps {
  children?: ReactNode
  label: ReactNode
  size?: ElementSize
}

export const ToolContainer = (props: ToolContainerProps) => {
  const { label } = props
  return (
    // @ts-ignore
    <Field className={inputContainer(styles)({ className: [size] })}>
      <Label aria-label={label?.toString()}>
        {label}
      </Label>
      <div className='flex gap-3 w-fit'>{props.children}</div>
    </Field>
  )
}
