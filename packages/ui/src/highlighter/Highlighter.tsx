import { FC } from 'react'
import { HighlighterProps } from './types'

export const Highlighter: FC<HighlighterProps> = ({
  searchWords,
  textToHighlight,
}) => {
  if (!searchWords || !searchWords.length) return textToHighlight

  const regex = new RegExp(`(${searchWords.join('|')})`, 'gi')
  const parts = textToHighlight.split(regex)

  return (
    <>
      {parts.map((part, index) =>
        searchWords.some(word => word.toLowerCase() === part.toLowerCase()) ? (
          <mark key={index} className='highlighter'>
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  )
}
