'use client'

import { Playground } from '@/components/playground'
import { Button, type ButtonProps } from '@creation-ui/react'
import type { DocumentedProperty } from '@/models/system'
import {
  childrenControl,
  disabledControl,
  fullWidthControl,
  loadingControl,
  colorControl,
  variantControl,
} from './shared-playground-controls'

import { iconProp } from './shared-props'

export const ButtonPlayground = () => (
  <>
    <Playground
      component={Button}
      controls={[
        childrenControl,
        variantControl,
        colorControl,
        loadingControl,
        disabledControl,
        {
          name: 'uppercase',
          type: 'boolean',
        },
        fullWidthControl,
      ]}
      code={`

        const ButtonExample = (props: ButtonProps) => {
  return <Button {{props}}>{{children}}</Button>
}
      `}
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
