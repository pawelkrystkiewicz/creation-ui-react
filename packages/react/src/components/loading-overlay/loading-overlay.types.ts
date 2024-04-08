import { ElementSize } from '@creation-ui/react'
import type { LoaderProps } from '../loader/loader.types'
import type { OverlayProps } from '../overlay/overlay.types'

export interface LoadingOverlayProps extends LoaderProps, OverlayProps {
  size?: ElementSize
}
