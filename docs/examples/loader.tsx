import { Container } from '@components/container'
import { Loader, LoaderProps } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'
import { classNameProps, sizeProp, colorProp } from './shared-props'
import { Playground } from '@components/playground'
import { loadingControl, sizeControl, colorControl, colorsBlackAndWhite } from './shared-playground-controls'

export const LoaderExample = (props: LoaderProps) => (
  <Container>
    <Loader {...props} />
  </Container>
)

export const LoaderPlayground = () => (
  <Playground
    component={Loader}
    name='Loader'
    controls={[
      //
      sizeControl,
      loadingControl,
      colorsBlackAndWhite,
    ]}
  />
)

export const properties: DocumentedProperty[] = [sizeProp, colorProp, classNameProps]
