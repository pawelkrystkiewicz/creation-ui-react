import { InputProps } from '../input'

export type TimePickerValue =
  | { hours: number; minutes: number }
  | null
  | undefined

export interface TimePickerProps
  extends Omit<InputProps, 'onChange' | 'value'> {
  onChange?: (date: TimePickerValue) => void
  format?: 12 | 24
  value: TimePickerValue
  /**
   * z-index configuration
   */
  zIndex?: { popover?: number }
}
