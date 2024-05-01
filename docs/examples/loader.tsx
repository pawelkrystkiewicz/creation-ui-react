import { Container } from '@components/container'
import { Playground } from '@components/playground'
import { Loader, LoaderProps } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'
import { colorsBlackAndWhite, sizeControl } from './shared-playground-controls'
import { classNameProps, colorProp, sizeProp } from './shared-props'

export const LoaderExample = (props: LoaderProps) => (
  <Container>
    <Loader {...props} />
  </Container>
)

export const LoaderPlayground = () => (
  <Playground component={Loader} name='Loader' controls={[sizeControl, colorsBlackAndWhite]} />
)

export const properties: DocumentedProperty[] = [sizeProp, colorProp, classNameProps]
