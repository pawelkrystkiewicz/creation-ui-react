import { ReactNode } from 'react'
import type {
  BaseComponentProps,
  ElementBaseVariant,
  ElementColor,
  InputClassNamesAPI,
} from '../types'

export type ChipProps = Partial<Pick<BaseComponentProps, 'label'>> & {
  /**
   * Should be uppercase?
   */
  uppercase?: boolean
  /**
   * Status of the element
   */
  color?: ElementColor | 'unstyled'
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
   * Style overrides, helpful with adding custom colors. Passing `style` will disable `color` prop.
   */
  style?: React.CSSProperties
}
