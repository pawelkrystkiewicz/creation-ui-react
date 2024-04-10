import { Playground } from '@components/playground'
import { Callout } from '@creation-ui/react/index'
import { mdiCheckCircle, mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import { Icon } from '@mdi/react'
import { DocumentedProperty } from 'models/system'
import { statusControl, variantControl } from './shared-playground-controls'
import { iconProp, labelProp, statusProp, variantProp } from './shared-props'

export const Example = () => (
  <>
    <Callout
      variant={'outlined'}
      status={'success'}
      title='Action completed'
      content='Your request has been processed successfully.'
      icon={<Icon path={mdiCheckCircle} size={1} />}
      onClose={() => alert('Callout closed')}
    />
  </>
)

const ICON_OPTIONS = [
  {
    label: <Icon path={mdiEyeOutline} size={1} />,
    value: <Icon path={mdiCheckCircle} size={1} />,
  },
  { label: <Icon path={mdiEyeOffOutline} size={1} />, value: null },
]

const CALLBACK_OPTIONS = [
  { label: 'No', value: null },
  { label: 'Yes', value: () => alert('Callout closed') },
]

export const CalloutPlayground = () => (
  <Playground
    component={Callout}
    name='Callout'
    showCode={false}
    controls={[
      statusControl,
      variantControl,
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Action completed',
      },
      {
        name: 'content',
        type: 'string',
        defaultValue: 'Your request has been processed successfully.',
      },
      {
        name: 'icon',
        type: 'array',
        values: ICON_OPTIONS,
        defaultValue: undefined,
      },
      {
        label: 'Close Callback',
        name: 'onClose',
        type: 'array',
        values: CALLBACK_OPTIONS,
      },
    ]}
  />
)

export const properties: DocumentedProperty[] = [
  { ...labelProp, name: 'title', description: 'Title of the callout' },
  { ...labelProp, name: 'content', description: 'Content of the callout' },
  iconProp,
  statusProp,
  variantProp,
]
