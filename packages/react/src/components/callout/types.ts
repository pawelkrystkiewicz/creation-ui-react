import type { ElementColor, ElementVariant } from '@types'

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: ElementColor
  variant?: ElementVariant
}
