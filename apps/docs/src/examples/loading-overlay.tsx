'use client'
import { Container } from '@/components/container'
import type { DocumentedProperty } from '@/models/system'
import {
  Button,
  LoadingOverlay,
  type LoadingOverlayProps,
} from '@creation-ui/react'
import { useState } from 'react'
import { activeProp, colorProp, onClickCallback } from './shared-props'

export const LoadingOverlayExample = (props: LoadingOverlayProps) => {
  const [loading, setLoading] = useState(true)

  const start = () => setLoading(true)
  const end = () => setLoading(false)
  const handleClick = loading ? end : start

  return (
    <Container variant='column'>
      <div
        className='
      relative
      overflow-clip
      bg-blue-200 h-36 w-36 rounded-lg'
      >
        <LoadingOverlay active={loading} {...props} />
      </div>

      <Button onClick={handleClick}>
        {loading ? 'Stop' : 'Start'} loading
      </Button>
    </Container>
  )
}

export const properties: DocumentedProperty[] = [
  activeProp,
  {
    ...colorProp,
    name: 'loaderColor',
    description: 'Loader color',
    defaultValue: 'white',
  },
  onClickCallback,
  {
    description: 'Apply <code>cursor-wait</code> to overlay',
    name: 'cursorWait',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    description:
      'Class names to add to wrapping InputBase component. Separately modify inner and outer container or input',
    name: 'cx',
    type: JSON.stringify(
      {
        overlay: 'string',
        loader: {
          inner: 'string',
          outer: 'string',
        },
      },
      null,
      4,
    ),
  },
]
