import type { ElementColor, ElementVariant } from '@types'

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: ElementColor
  variant?: ElementVariant
}
