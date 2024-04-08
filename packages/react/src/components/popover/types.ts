import type { Placement } from '@floating-ui/react'
import { ElementSize } from '../../types'

export interface PopoverOptions {
  initialOpen?: boolean
  placement?: Placement
  modal?: boolean
  open?: boolean
  size?: ElementSize
  onOpenChange?: (open: boolean) => void
  className?: string
}
