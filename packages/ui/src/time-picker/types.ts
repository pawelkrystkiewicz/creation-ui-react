import { InputProps } from '../input'

export type TimeFormat = 12 | 24
export type TimePickerValue =
  | { hours: number | null; minutes: number | null }
  | null
  | undefined

export interface TimePickerProps
  extends Omit<InputProps, 'onChange' | 'value'> {
  onChange?: (date: TimePickerValue) => void
  format?: TimeFormat
  value?: TimePickerValue
  /**
   * z-index configuration
   */
  zIndex?: { popover?: number }
}
