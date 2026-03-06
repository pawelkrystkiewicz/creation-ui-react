import { CalendarDateValue, CalendarProps } from '../calendar'
import { InputProps } from '../input'
import type { BaseComponentProps, InputVariant } from '../types'

export type DatePickerProps = Omit<CalendarProps, 'onChange'> &
  Omit<InputProps, 'onChange' | 'value' | 'ref'> &
  Pick<BaseComponentProps, 'label' | 'helperText' | 'error'> & {
    onChange?: (date: CalendarDateValue) => void
    variant?: InputVariant
    zIndex?: { popover?: number }
  }
