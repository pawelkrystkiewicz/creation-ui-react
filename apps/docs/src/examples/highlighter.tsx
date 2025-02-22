'use client'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { Highlighter } from '@creation-ui/react'

interface HighlighterExampleProps {
  search: string
  textToHighlight: string
}

export const HighlighterExample = ({
  search,
  textToHighlight,
}: HighlighterExampleProps) => {
  if (!search || !textToHighlight) return null

  return (
    <Highlighter searchWords={[search]} textToHighlight={textToHighlight} />
  )
}

export const HighlighterPlayground = () => (
  <Playground
    controls={[
      {
        name: 'search',
        type: 'string',
        defaultValue: 'hello',
        noBracesInReplacement: true,
        helperText: 'Single word in playground for simplicity',
      },
      {
        name: 'textToHighlight',
        type: 'string',
        defaultValue: 'Hello world',
      },
    ]}
    component={HighlighterExample}
    code={`const Demo = () =>
      <Highlighter
       searchWords={[{{search}}]}
       textToHighlight={{textToHighlight}}
     />`}
  />
)

export const properties: DocumentedProperty[] = [
  {
    name: 'searchWords',
    type: 'string[]',
    description: 'The words to highlight',
  },
  {
    name: 'textToHighlight',
    type: 'string',
    description: 'The text to highlight',
  },
]
