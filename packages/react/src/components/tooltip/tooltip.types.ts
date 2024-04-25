import type { ClassName, ElementPosition, ElementSize } from '@types'

export interface TooltipProps {
  className?: ClassName
  children?: React.ReactNode
  content?: React.ReactNode
  position?: ElementPosition
  size?: ElementSize
}
