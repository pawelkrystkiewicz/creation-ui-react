import type { ClassName, ElementPosition } from '../../types'

export interface TooltipProps {
  className?: ClassName
  children?: React.ReactNode
  content?: React.ReactNode
  position?: ElementPosition
}
