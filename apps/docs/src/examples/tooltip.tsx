'use client'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { Button, Tooltip, type TooltipProps } from '@creation-ui/react'
import { positionControl } from './shared-playground-controls'
import { positionProp } from './shared-props'

export const TooltipExample = (props: TooltipProps) => (
  <Tooltip {...props}>
    <Button variant='contained'>Submit</Button>
  </Tooltip>
)

export const TooltipPlayground = () => (
  <Playground
    controls={[
      {
        name: 'content',
        type: 'string',
        defaultValue: 'Tooltip content',
      },
      positionControl,
    ]}
    component={TooltipExample}
    code={`
  export const TooltipExample = (props: TooltipProps) => (
    <Tooltip {{props}}>
      <Button variant='contained'>Submit</Button>
    </Tooltip>
  )
  `}
  />
)

export const properties: DocumentedProperty[] = [
  positionProp,
  {
    description: 'Content inside tooltip',
    name: 'content',
    type: 'React.ReactNode',
  },
  {
    description: 'This is the content that tooltip wraps around',
    name: 'children',
    type: 'React.ReactNode',
  },
  {
    description: 'Class names override',
    name: 'className',
    type: 'string',
  },
]
