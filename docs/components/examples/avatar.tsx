import { Container } from '@components/container'
import { Playground } from '@components/playground'
import { ELEMENT_SIZES } from '@creation-ui/core'
import { Avatar, AVATAR_VARIANTS, AvatarGroup, AvatarGroupProps } from '@creation-ui/react'
import { mdiCircleOutline, mdiSquareOutline, mdiSquareRoundedOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'
import { sizeControl } from './shared-playground-controls'

const SRC =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'

const avatarVariants = [
  {
    value: 'circle',
    label: <Icon title='Circle' path={mdiCircleOutline} size={1} />,
  },
  {
    value: 'rounded',
    label: <Icon title='Rounded' path={mdiSquareRoundedOutline} size={1} />,
  },
  {
    value: 'square',
    label: <Icon title='Square' path={mdiSquareOutline} size={1} />,
  },
]

export const AvatarPlayground = () => (
  <Playground
    component={Avatar}
    name={'Avatar'}
    componentProps={{
      alt: 'Avatar',
    }}
    controls={[
      //
      sizeControl,
      {
        name: 'variant',
        values: avatarVariants,
        defaultValue: 'circle',
        type: 'array',
      },

      {
        name: 'src',
        label: 'Image URL',
        type: 'string',
        defaultValue: SRC,
      },
      // {
      //   name: 'size',
      //   label: 'Size (number)',
      //   type: 'number',
      // },
    ]}
  />
)

export const AvatarWithNumberSize = () => {
  const numberSize = [10, 20, 30, 40, 50, 60, 100]
  return (
    <Container className='items-start'>
      {numberSize.map(size => (
        <div className='flex flex-col gap-10 items-center' key={size}>
          <p>{size}px</p>
          <Avatar src={SRC} size={size} />
        </div>
      ))}
    </Container>
  )
}

export const AvatarGroupExample = (props: AvatarGroupProps) => (
  <Container>
    <AvatarGroup {...props}>
      <Avatar src={SRC} />
      <Avatar src={SRC} />
      <Avatar src={SRC} />
      <Avatar src={SRC} />
    </AvatarGroup>
  </Container>
)

const sizeType = `${ListOrTypes([...ELEMENT_SIZES])} | number`

export const properties: DocumentedProperty[] = [
  {
    name: 'variant',
    type: ListOrTypes([...AVATAR_VARIANTS]),
    defaultValue: 'circle',
    description: 'The shape of the avatar.',
  },
  {
    name: 'size',
    type: sizeType,
    defaultValue: 'md',
    description: 'The size of the avatar.',
  },
  {
    name: 'src',
    type: 'string | null',
    description: 'The source of the avatar image.',
  },
  {
    name: 'alt',
    type: 'string',
    description: 'The alt text of the avatar.',
  },
  {
    name: 'badge',
    type: 'object',
    defaultValue: 'null',
    description: 'The badge of the avatar.',
  },
]

export const groupProperties: DocumentedProperty[] = [
  {
    name: 'total',
    type: 'number',
    defaultValue: '0',
    description: 'Manually controls the count displayed in last Avatar.',
  },
  {
    name: 'max',
    type: 'number',
    description: 'Amount of avatars to display. Surplus will be rendered as count in an extra (last) Avatar.',
  },
  { name: 'children', type: 'ReactNode', description: 'Avatars.' },
  {
    name: 'size',
    type: sizeType,
    defaultValue: 'md',
    description: 'The size of the avatars and counter.',
  },
  {
    name: 'offsetMultiplier',
    type: 'number',
    defaultValue: -0.3,
    description: 'Multiplier for the offset of Avatars. Controls the overlap.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Container <code>className</code>',
  },
  {
    name: 'surplusClassName',
    type: 'string',
    description: '<code>className</code> of surplus displaying Avatar (counter).',
  },
  {
    name: 'renderSurplus',
    type: '(surplusCount: number) => ReactNode',
    description: 'Custom render function for surplus displaying Avatar (counter).',
  },
]
