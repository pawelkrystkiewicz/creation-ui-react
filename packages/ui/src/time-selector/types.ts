import { TimePickerValue } from '../time-picker/types'

export interface TimeSelectorProps {
  value: TimePickerValue
  onSelect: (date: TimePickerValue) => void
  format?: 12 | 24
}

export interface OnTimeSliderSelectArgs {
  hour?: number
  minute?: number
}
