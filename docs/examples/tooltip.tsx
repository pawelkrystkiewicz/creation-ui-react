import { Playground } from '@components/playground'
import { Button, Tooltip } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { positionControl, sizeControl } from './shared-playground-controls'
import { positionProp, sizeProp } from './shared-props'

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
      sizeControl,
    ]}
    name='Tooltip'
    component={TooltipExample}
    showCode={false}
  />
)

export const properties: DocumentedProperty[] = [
  positionProp,
  sizeProp,
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
