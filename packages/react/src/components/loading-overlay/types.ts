import type { ClassName, ElementSize } from '@types'
import type { LoaderProps } from '@components'
import type { OverlayProps } from '@components'

export interface LoadingOverlayProps
  extends LoaderProps,
    Partial<Omit<OverlayProps, 'className'>> {
  size?: ElementSize
  // classes modification interface
  cx?: {
    overlay?: ClassName
    loader?: ClassName
  }
}
