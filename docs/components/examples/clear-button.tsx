import { Playground } from '@components/playground'
import { ClearButton } from '@creation-ui/react/components'
import { DocumentedProperty } from '@models/system'
import { sizeControl } from './shared-playground-controls'
import { classNameProps, onClickCallback, sizeProp } from './shared-props'

export const ClearButtonPlayground = () => (
  <Playground
    name='ClearButton'
    component={ClearButton}
    controls={[sizeControl]}
    componentProps={{
      onClick: () => alert('Close me'),
    }}
  />
)

export const properties: DocumentedProperty[] = [classNameProps, sizeProp, onClickCallback]
