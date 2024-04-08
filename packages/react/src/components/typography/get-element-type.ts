import type { ElementType } from 'react'
import type { ElementTypography } from '../../types'

export const getElementType = (
  variant: ElementTypography = 'content'
): ElementType => {
  const map: Record<ElementTypography, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    content: 'p',
    description: 'span',
  }
  return map[variant]
}
