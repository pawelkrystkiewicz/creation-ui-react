import { LoaderProps } from "../loader"
import { OverlayProps } from "../overlay"

export interface LoadingOverlayProps
  extends Partial<Omit<OverlayProps, 'className'>> {
    // Classes modification interface
  cx?: {
    overlay?: string
    loader?: LoaderProps['cx']
  }
  /**
   * Loader color
   */
  loaderColor?: LoaderProps['color']
}