'use client'

import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { generateId } from '@/utils/generate-id/generate-id'
import { Flex, TouchTarget, type FlexProps } from '@creation-ui/react'
import { Plus, Trash, WrapText, Xmark } from 'iconoir-react'
import { useState } from 'react'

const ID_LENGTH = 4

type ItemType = {
  id: string
  minWidth: number
  minHeight: number
}

const getStyle = (idx: number) => {
  const minWidth = idx % 3 === 0 ? 100 : 50
  const minHeight = idx % 3 === 0 ? 100 : 50
  return { minWidth, minHeight }
}

const initialItems = new Array(5).fill(null).map((_, i) => ({
  id: generateId(undefined, ID_LENGTH),
  ...getStyle(i),
}))

export const FlexExample = (props: FlexProps) => {
  const [items, setItems] = useState<ItemType[]>(initialItems)

  const addItem = () =>
    setItems(prev => [
      ...prev,
      { id: generateId(undefined, ID_LENGTH), ...getStyle(prev.length) },
    ])

  const removeItem = (id: string) => () =>
    setItems(prev => prev.filter(item => item.id !== id))

  return (
    <Flex {...props}>
      {items.map(({ id, ...style }) => (
        <div
          key={id}
          className='group bg-background border border-border rounded-md font-medium flex items-center justify-center relative'
          style={{ ...style }}
        >
          <span className='text-xs'>{id}</span>
          <TouchTarget>
            <Trash
              className='group-hover:opacity-100 opacity-0 micro-interactions text-destructive absolute top-2 right-2 cursor-pointer'
              onClick={removeItem(id)}
            />
          </TouchTarget>
        </div>
      ))}
      <div
        onClick={addItem}
        className='cursor-pointer group bg-background/50 hover:bg-background rounded-md font-medium flex items-center justify-center micro-interactions'
        style={{
          minWidth: 50,
        }}
      >
        <Plus className='group-hover:scale-110 group-hover:text-primary micro-interactions' />
      </div>
    </Flex>
  )
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
          defaultValue: true,
        },
        {
          name: 'gapX',
          type: 'array',
          component: 'select',
          values: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 28, 32, 36,
            40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
          ],
          defaultValue: 3,
        },
        {
          name: 'gapY',
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
          defaultValue: 'wrap',
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
