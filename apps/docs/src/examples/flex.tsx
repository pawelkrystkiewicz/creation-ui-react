'use client'

import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { Flex, type FlexProps } from '@creation-ui/react'
import { WrapText, Xmark } from 'iconoir-react'

const items = new Array(5).fill(null).map((_, i) => (
  <div
    key={i}
    className='bg-(--background-primary) border border-(--border) rounded-md font-medium flex items-center justify-center'
    style={{
      minHeight: i % 3 === 0 ? 100 : 50,
      minWidth: i % 3 === 0 ? 100 : 50,
    }}
  >
    {i + 1}
  </div>
))

export const FlexExample = (props: FlexProps) => {
  return <Flex {...props}>{items}</Flex>
}

export const FlexPlayground = () => {
  return (
    <Playground
      className='overflow-clip max-w-fit'
      component={FlexExample}
      controls={[
        {
          name: 'column',
          type: 'boolean',
          defaultValue: false,
        },
        {
          name: 'grow',
          type: 'boolean',
          defaultValue: false,
        },
        {
          name: 'shrink',
          type: 'boolean',
          defaultValue: false,
        },
        {
          name: 'gap',
          type: 'array',
          component: 'select',
          values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 28, 32, 36,
            40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
          ],
          defaultValue: 3,
        },

        {
          name: 'justify',
          type: 'array',
          component: 'select',
          values: ['start', 'end', 'center', 'between', 'around', 'evenly'],
          defaultValue: 'start',
        },
        {
          name: 'items',
          type: 'array',
          component: 'select',
          values: ['start', 'end', 'center', 'baseline', 'stretch'],
          defaultValue: 'stretch',
        },
        {
          name: 'wrap',
          type: 'array',
          values: [
            { label: <Xmark fontSize={20} />, value: 'none' },
            { label: <WrapText fontSize={20} />, value: 'wrap' },
            {
              label: <WrapText fontSize={20} className='-scale-x-100' />,
              value: 'reverse',
            },
          ],
          defaultValue: 'none',
          helperText:
            'In this example effect can be observed when shrink is enabled',
        },
      ]}
      code={`
      import { Playground } from '@/components/playground'
      import { Flex, type FlexProps } from '@creation-ui/react'

      export const FlexExample = (props: FlexProps) => {
        return (
          <Flex {{props}}>
            {items}
          </Flex>
        )
      }
      `}
    />
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'column',
    type: 'boolean',
    description: 'Determines if the flex direction is column instead of row.',
    defaultValue: false,
  },
  {
    name: 'justify',
    type: "'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'",
    description: 'Controls how flex items are aligned along the main axis.',
    defaultValue: "'start'",
  },
  {
    name: 'items',
    type: "'start' | 'end' | 'center' | 'baseline' | 'stretch'",
    description: 'Controls alignment of flex items along the cross axis.',
    defaultValue: "'stretch'",
  },
  {
    name: 'self',
    type: "'auto' | 'start' | 'end' | 'center' | 'stretch' | 'baseline'",
    description: 'Controls individual alignment of a flex item.',
  },
  {
    name: 'wrap',
    type: "'none' | 'wrap' | 'reverse'",
    description: 'Determines if flex items should wrap.',
    defaultValue: "'none'",
  },
  {
    name: 'content',
    type: "'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'",
    description: 'Controls alignment of flex content along the cross axis.',
  },
  {
    name: 'gap',
    type: '0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96',
    description: 'Defines the space between flex items.',
    defaultValue: 0,
  },
  {
    name: 'grow',
    type: 'boolean',
    description:
      'Determines whether the flex item should grow to fill available space.',
    defaultValue: false,
  },
  {
    name: 'shrink',
    type: 'boolean',
    description: 'Determines whether the flex item should shrink if needed.',
    defaultValue: true,
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional class names for styling.',
  },
  {
    name: 'title',
    type: 'string',
    description: 'Adds a title attribute to the flex container.',
  },
  {
    name: 'onClick',
    type: '(event: React.MouseEvent<HTMLDivElement>) => void',
    description: 'Callback function fired when the flex container is clicked.',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    description: 'Content to be rendered inside the Flex container.',
  },
]
