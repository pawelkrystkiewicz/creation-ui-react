import type { ElementColor } from '../types'

export type LoaderProps = {
  /**
   * Color of the loader
   */
  color?: string | ElementColor
  /**
   * Class names API. Inner will be applied to SVG element, outer to the container.
   */
  cx?: {
    outer?: string
    inner?: string
  }
}
