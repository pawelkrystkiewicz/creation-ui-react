'use client'
import { Container } from '@/components/container'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { Avatar, AvatarGroup, type AvatarGroupProps } from '@creation-ui/react'
import { Circle, RoundedMirror, Square } from 'iconoir-react'

const SRC =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'

const avatarVariants = [
  {
    value: 'circle',
    label: <Circle />,
  },
  {
    value: 'rounded',
    label: <RoundedMirror />,
  },
  {
    value: 'square',
    label: <Square />,
  },
]

export const AvatarPlayground = () => (
  <Playground
    propsKeys={['variant', 'src', 'size']}
    component={Avatar}
    controls={[
      {
        name: 'variant',
        values: avatarVariants,
        defaultValue: 'circle',
        type: 'array',
      },
      {
        name: 'size',
        type: 'number',
        defaultValue: 40,
      },
      { name: 'src', label: 'Image URL', type: 'string', defaultValue: SRC },
    ]}
    code={`<Avatar
      src={src}
      variant={{variant}}
      size={{size}}
    />`}
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

export const AvatarGroupExample = (props: AvatarGroupProps) => {
  return (
    <AvatarGroup {...props}>
      <Avatar src={SRC} />
      <Avatar src={SRC} />
      <Avatar src={SRC} />
      <Avatar src={SRC} />
    </AvatarGroup>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'variant',
    type: 'circle | rounded | square',
    defaultValue: 'circle',
    description: 'The shape of the avatar.',
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
    description:
      'Amount of avatars to display. Surplus will be rendered as count in an extra (last) Avatar.',
  },
  { name: 'children', type: 'ReactNode', description: 'Avatars.' },
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
    description:
      '<code>className</code> of surplus displaying Avatar (counter).',
  },
  {
    name: 'renderSurplus',
    type: '(surplusCount: number) => ReactNode',
    description:
      'Custom render function for surplus displaying Avatar (counter).',
  },
]
