import { CalendarDateValue, CalendarProps } from '../calendar'
import { InputProps } from '../input'

export type DatePickerProps = Omit<CalendarProps, 'onChange'> &
  Omit<InputProps, 'onChange' | 'value' | 'ref'> & {
    onChange?: (date: CalendarDateValue) => void
    /**
     * z-index configuration
     */
    zIndex?: { popover?: number }
  }
