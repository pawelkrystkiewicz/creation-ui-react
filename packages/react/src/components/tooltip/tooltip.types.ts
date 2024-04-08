import type { ClassName, ElementPosition } from '@creation-ui/react'

export interface TooltipProps {
  className?: ClassName
  children?: React.ReactNode
  content?: React.ReactNode
  position?: ElementPosition
}
