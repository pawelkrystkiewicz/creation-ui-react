import type { ElementPosition } from '../../types'

export interface DrawerProps {
  /**
   * The content of the drawer.
   */
  children?: React.ReactNode
  /**
   * The position of the drawer. `right` | `left` | `top` | `bottom`
   * @default `right``
   */
  position?: ElementPosition
  /**
   * Whether the drawer is open or not. `true` | `false`
   * @default `false`
   */
  open?: boolean
  /**
   * Callback for when the drawer is closed.
   * @default `() => {}`
   */
  onClose?: () => void
  /**
   *
   * Callback for when the overlay is clicked.
   */
  onOverlayClick?: () => void
  /**
   * Class names API
   */
  cx?: {
    /**
     * Set height of the drawer
     */
    height?: string
    /**
     * Set width of the drawer
     */
    width?: string
    container?: {
      /**
       * Manipulate the outer container element
       */
      outer?: string
      /**
       * Manipulate the inner container element, e.g. add margins and roundness.
       */
      inner?: string
    }
  }
}
