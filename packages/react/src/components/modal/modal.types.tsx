import type { ClassName } from '../../types'
import type React from 'react'

export type ModalProps = {
  onClose?: (value?: boolean) => void
  onOverlayClick?: () => void
  open?: boolean
  className?: string
  children?: React.ReactNode
}

export interface ModalTitleProps {
  children: React.ReactNode
  className?: ClassName
  as?: React.ElementType
}
