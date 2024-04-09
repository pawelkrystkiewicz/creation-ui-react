import type { ReactNode } from 'react'
import type { ClassName, ElementPosition } from '../../types'

export interface TooltipProps {
  className?: ClassName
  children?: ReactNode
  content?: ReactNode
  position?: ElementPosition
}
