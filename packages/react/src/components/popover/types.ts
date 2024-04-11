import type { Placement } from '@floating-ui/react'
import type { ElementSize } from '@types'

export interface PopoverOptions {
  initialOpen?: boolean
  placement?: Placement
  modal?: boolean
  open?: boolean
  size?: ElementSize
  onOpenChange?: (open: boolean) => void
  className?: string
}
