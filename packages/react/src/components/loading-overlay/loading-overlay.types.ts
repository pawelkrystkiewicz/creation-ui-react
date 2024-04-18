import type { ClassName, ElementSize } from '@types'
import type { LoaderProps } from '../loader/loader.types'
import type { OverlayProps } from '../overlay/overlay.types'

export interface LoadingOverlayProps extends LoaderProps, Omit<OverlayProps, 'className'> {
  size?: ElementSize,
  // classes modification interface
  cx?: {
    overlay?: ClassName
    loader?: ClassName
  }
}
