import type { ElementSize } from '@types'

export type LoaderColor =
  | 'primary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'white'
  | 'black'

export type LoaderProps = {
  /**
   * Color of the loader
   */
  color?: LoaderColor
  /**
   * Class names API. Inner will be applied to SVG element, outer to the container.
   */
  cx?: {
    outer?: string
    inner?: string
  }
  /**
   * Loader size
   */
  size?: ElementSize
}
