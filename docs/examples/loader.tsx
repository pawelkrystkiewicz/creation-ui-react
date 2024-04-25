import { Container } from '@components/container'
import { Loader, LoaderProps } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'
import { classNameProps, sizeProp } from './shared-props'

export const LoaderExample = (props: LoaderProps) => (
  <Container>
    <Loader {...props} />
  </Container>
)

export const properties: DocumentedProperty[] = [sizeProp, classNameProps]
