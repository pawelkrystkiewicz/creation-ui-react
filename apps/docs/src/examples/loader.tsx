'use client'
import { Container } from '@/components/container'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { Loader, type LoaderProps } from '@creation-ui/react'
import { colorControl } from './shared-playground-controls'
import { classNameProps, colorProp } from './shared-props'

export const LoaderExample = (props: LoaderProps) => (
  <Container>
    <Loader {...props} />
  </Container>
)

export const LoaderPlayground = () => (
  <Playground
    component={Loader}
    controls={[colorControl]}
    code={`
import { Loader, type LoaderProps } from '@creation-ui/react'
import { Container } from '@/components/container'

export const LoaderExample = (props: LoaderProps) => (
  <Container>
    <Loader {{props}} />
  </Container>
)
`}
  />
)

export const properties: DocumentedProperty[] = [
  colorProp,
  classNameProps,
]
