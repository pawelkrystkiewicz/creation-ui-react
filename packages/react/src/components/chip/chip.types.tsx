import { ReactNode } from 'react'
import type {
  BaseComponentProps,
  ElementBaseVariant,
  ElementStatus,
  InputClassNamesAPI,
} from '@creation-ui/react'

export interface ChipProps
  extends Pick<BaseComponentProps, 'className' | 'size' | 'label'> {
  /**
   * Should be uppercase?
   */
  uppercase?: boolean
  /**
   * Status of the element
   */
  status?: ElementStatus
  /**
   * Should have border?
   */
  border?: boolean
  /**
   * Variant
   */
  variant?: ElementBaseVariant
  /**
   * Start adornment
   */
  startAdornment?: ReactNode
  /**
   * Start adornment
   */
  endAdornment?: ReactNode
  /**
   * Callback when delete button is clicked
   */
  onDelete?: () => void
  /**
   *
   * Callback when chip is clicked
   */
  onClick?: () => void
  /**
   * Class names overrides
   */
  cx?: Pick<InputClassNamesAPI, 'container'>
  /**
   * Style overrides, helpful with adding custom colors. Passing `style` will disable `status` prop.
   */
  style?: React.CSSProperties
}
