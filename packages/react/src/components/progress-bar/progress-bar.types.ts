import type { ClassName, ElementSize, ElementStatus } from '../../types'

export interface ProgressBarProps {
  /**
   * How large should the element be?
   */
  size?: ElementSize
  /**
   * The value of the progress bar.
   */
  value: number
  /**
   * Class name to be applied to the progress bar.
   */
  className?: ClassName
  /**
   * Whether to show the value of the progress bar.
   */
  showValue?: boolean
  /**
   * Function to format the value of the progress bar.
   */
  formatDisplayValue?: (value: number) => string

  status?: ElementStatus

  /**
   * This will decide when to invert the progress bar when the value is below the threshold.
   * If your text is longer than default string `{value}%` then you will find this option useful.
   */
  invertThreshold?: number
}
