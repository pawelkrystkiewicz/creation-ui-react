import { Container } from '@components/container'
import { Loader } from '@creation-ui/react'
import { LoaderProps } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'
import { sizeProp, classNameProps } from './shared-props'

export const LoaderExample = (props: LoaderProps) => (
  <Container>
    <Loader {...props} />
  </Container>
)

export const properties: DocumentedProperty[] = [sizeProp, classNameProps]
