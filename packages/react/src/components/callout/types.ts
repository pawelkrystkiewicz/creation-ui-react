import type { ElementStatus, ElementVariant } from '../../types'

export interface CalloutProps {
  content: React.ReactNode
  title?: React.ReactNode
  icon?: React.ReactNode
  status?: ElementStatus
  variant?: ElementVariant
  onClose?: () => void
  className?: string
}
