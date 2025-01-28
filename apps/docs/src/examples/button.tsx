'use client'

import { Playground } from '@/components/playground'
import { Button } from '@creation-ui/react/Button'
import type { DocumentedProperty } from '@/models/system'
import {
  childrenControl,
  disabledControl,
  fullWidthControl,
  loadingControl,
  sizeControl,
  colorControl,
  variantControl,
} from './shared-playground-controls'

import { iconProp } from './shared-props'

export const ButtonPlayground = () => (
  <>
    <Playground
      component={Button}
      name="Button"
      controls={[
        childrenControl,
        sizeControl,
        variantControl,
        colorControl,
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
        {
          name: 'loaderColor',
          type: 'string',
          label: 'Loader color',
          defaultValue: true,
        },
      ]}
    />
  </>
)

export const properties: DocumentedProperty[] = [
  {
    name: 'children',
    description: 'Button label',
    type: 'React.ReactNode',
  },
  {
    ...iconProp,
    name: 'starAdornment',
    description: "E.g. icon on the left side of the component's children",
  },
  {
    ...iconProp,
    name: 'endAdornment',
    description: "E.g. icon on the right side of the component's children",
  },
  {
    name: 'loaderColor',
    type: 'string',
    description: `Loader color as tailwindcss color e.g. <code>"[--btn-loader:theme(colors.black)]"</code>`,
  },
]
