'use client'
import { Container } from '@/components/container'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { Avatar, AvatarGroup, type AvatarGroupProps } from '@creation-ui/react'
import { Circle, RoundedMirror, Square } from 'iconoir-react'
import { Fragment } from 'react'

const MALE_1 =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
const MALE_2 =
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const FEMALE_1 =
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const FEMALE_2 =
  'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

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
      { name: 'src', label: 'Image URL', type: 'string', defaultValue: MALE_1 },
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
    <div className='flex items-center justify-between max-w-lg mx-auto'>
      {numberSize.map(size => (
        <div
          className='grid grid-rows-2 gap-x-10 gap-y-5 items-center h-[200px]'
          key={size}
        >
          <p className='mx-auto'>{size}px</p>
          <Avatar src={FEMALE_1} size={size} className='self-center' />
        </div>
      ))}
    </div>
  )
}

const avatars = [MALE_1, FEMALE_1, MALE_2, FEMALE_2]

export const AvatarGroupExample = (props: AvatarGroupProps) => {
  return (
    <Container>
      <AvatarGroup {...props}>
        {avatars.map(src => (
          <Avatar src={src} key={src} />
        ))}
      </AvatarGroup>
    </Container>
  )
}

export const AvatarGroupPlayground = () => (
  <Playground
    code={`
import { Avatar, AvatarGroup, type AvatarGroupProps } from '@creation-ui/react'
import { Container } from '@/components/container'


export const AvatarGroupExample = (props: AvatarGroupProps) => {
  return (
    <Container>
      <AvatarGroup {{props}}>
        {avatars.map(src => (
          <Avatar src={src} key={src} />
        ))}
      </AvatarGroup>
    </Container>
  )
}`}
    component={AvatarGroupExample}
    controls={[
      {
        name: 'variant',
        values: avatarVariants,
        defaultValue: 'circle',
        type: 'array',
      },
      {
        label: (
          <>
            Size <code>px</code>
          </>
        ),
        name: 'size',
        type: 'number',
        defaultValue: 40,
      },
      {
        label: (
          <>
            Stacking Offset <code>%</code>
          </>
        ),
        name: 'stackingOffsetPercent',
        type: 'number',
        defaultValue: 3.5,
      },
      {
        name: 'limit',
        type: 'number',
        defaultValue: 3,
      },
      {
        name: 'total',
        type: 'number',
      },
    ]}
  />
)

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
    name: 'limit',
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
