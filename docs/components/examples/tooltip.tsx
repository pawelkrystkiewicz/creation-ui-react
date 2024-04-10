import { Playground } from '@components/playground'
import { Button, Tooltip } from '@creation-ui/react'
import { ELEMENT_POSITION } from '@creation-ui/core'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'
import { positionControl } from './shared-playground-controls'

export const TooltipExample = props => (
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
    name='Tooltip'
    component={TooltipExample}
    showCode={false}
  />
)

export const properties: DocumentedProperty[] = [
  {
    name: 'position',
    type: ListOrTypes([...ELEMENT_POSITION]),
    defaultValue: 'top',
    description: 'Size of element',
  },
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
