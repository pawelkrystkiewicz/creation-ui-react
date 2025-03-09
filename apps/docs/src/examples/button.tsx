'use client'

import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { Button } from '@creation-ui/react'
import {
  childrenControl,
  colorControl,
  disabledControl,
  fullWidthControl,
  loadingControl,
  variantControl,
} from './shared-playground-controls'

import { Container } from '@/components/container'
import { PlaygroundControl } from '@/components/playground/types'
import UseClient from '@/components/UseClient'
import { iconProp } from './shared-props'

export const BUTTON_CONTROLS: PlaygroundControl[] = [
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
]

export const BUTTON_CODE_TEMPLATE = `
import { Button, type ButtonProps } from '@creation-ui/react'

const ButtonExample = ({children, ...rest}: ButtonProps) => {
  return <Button {{rest}}>{{children}}</Button>
}`

export const ButtonPlayground = () => (
  <UseClient>
    <Playground
      component={Button}
      controls={BUTTON_CONTROLS}
      code={BUTTON_CODE_TEMPLATE}
    />
  </UseClient>
)

export const SingleButtonExample = () => (
  <Container>
    <Button>Button</Button>
  </Container>
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
    description: `Loader color as tailwindcss color e.g. <code>"[--trigger-loader:theme(colors.black)]"</code>`,
  },
]
