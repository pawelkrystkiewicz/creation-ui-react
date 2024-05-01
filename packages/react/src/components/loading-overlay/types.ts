import type { LoaderProps, OverlayProps } from '@components'
import type { ClassName, ElementSize } from '@types'

export interface LoadingOverlayProps
  extends Partial<Omit<OverlayProps, 'className'>> {
  size?: ElementSize
  // Classes modification interface
  cx?: {
    overlay?: ClassName
    loader?: LoaderProps['cx']
  }
  /**
   * Loader color
   */
  loaderColor?: LoaderProps['color']
}
