import { Playground } from '@components/playground'
import { Button } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'
import {
  childrenControl,
  disabledControl,
  fullWidthControl,
  loadingControl,
  sizeControl,
  statusControl,
  variantControl,
} from './shared-playground-controls'
import { iconProp } from './shared-props'

export const ButtonPlayground = () => (
  <Playground
    component={Button}
    name='Button'
    controls={[
      childrenControl,
      sizeControl,
      variantControl,
      statusControl,
      loadingControl,
      disabledControl,
      {
        name: 'uppercase',
        type: 'boolean',
      },
      fullWidthControl,
      {
        name: 'circle',
        type: 'boolean',
      },
    ]}
  />
)

export const properties: DocumentedProperty[] = [
  {
    name: 'children',
    description: 'The content of the button group.',
    type: 'React.ReactNode',
  },
  {
    ...iconProp,
    name: 'iconLeft',
    description: "Icon on the left side of the component's children",
  },
  {
    ...iconProp,
    name: 'iconRight',
    description: "Icon on the right side of the component's children",
  },
]
