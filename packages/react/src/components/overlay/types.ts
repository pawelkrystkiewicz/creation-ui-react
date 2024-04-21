import type { ReactNode } from 'react'

export interface OverlayProps {
  active?: boolean
  onClick?: () => void
  className?: string
  cursorWait?: boolean
  children?: ReactNode
}
