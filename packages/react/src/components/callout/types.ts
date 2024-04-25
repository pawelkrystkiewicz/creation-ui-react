import type { ElementStatus, ElementVariant } from '@types'

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: ElementStatus
  variant?: ElementVariant
}
