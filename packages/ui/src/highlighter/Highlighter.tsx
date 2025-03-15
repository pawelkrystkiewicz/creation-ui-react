import type { FC } from 'react'
import type { HighlighterProps } from './types'

export const Highlighter: FC<HighlighterProps> = ({
  searchWords,
  textToHighlight,
}) => {
  if (!searchWords || !searchWords.length) return textToHighlight

  const regex = new RegExp(`(${searchWords.join('|')})`, 'gi')
  const parts = textToHighlight.split(regex).filter(Boolean)

  return (
    <span>
      {parts.map((part, index) =>
        searchWords.some(word => word.toLowerCase() === part.toLowerCase()) ? (
          <mark key={index} className='highlighter'>
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </span>
  )
}
