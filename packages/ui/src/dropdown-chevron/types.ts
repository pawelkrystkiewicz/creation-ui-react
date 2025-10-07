import { IconProps } from '../icon'

export interface DropdownChevronProps extends Omit<IconProps, 'icon'> {
  /**
   * Open state
   */
  open?: boolean
  /**
   * Disabled state
   */
  disabled?: boolean
}
