import Icon from '@components/icon'
import { Breadcrumbs, BreadcrumbsProps } from '@creation-ui/react/components'
import { mdiAlphabetAurebesh, mdiArrowRightThin } from '@mdi/js'
import { DocumentedProperty } from '@models/system'
import { classNameProps, sizeProp } from './shared-props'

export const BreadcrumbsExample = ({ ...props }: BreadcrumbsProps) => {
  return <Breadcrumbs links={['home', 'visitors', 'happy']} {...props} />
}

export const BreadcrumbsExampleAllCustom = ({ ...props }: BreadcrumbsProps) => (
  <Breadcrumbs
    homeIcon={<Icon path={mdiAlphabetAurebesh} />}
    links={['home', 'visitors', 'happy']}
    separator={<Icon path={mdiArrowRightThin} />}
    spacing='lg'
    {...props}
  />
)

export const properties: DocumentedProperty[] = [
  {
    name: 'options',
    description: 'Options of the button group.',
    type: 'ButtonGroupOption[]',
  },
  classNameProps,
  {
    ...sizeProp,
    name: 'spacing',
    description: 'Size of the gap between elements',
  },
]
