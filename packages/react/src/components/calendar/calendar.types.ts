import type { BaseComponentProps } from '@creation-ui/react'

export type CalendarDateValue = Date | null | undefined
export type CalendarMode = 'single' | 'range'
export type CalendarProps = Omit<
  BaseComponentProps,
  | 'label'
  | 'error'
  | 'helperText'
  | 'required'
  | 'disabled'
  | 'readOnly'
  | 'loading'
> & {
  showTodaySelector?: boolean
  weekStartsOn?: WeekDayIndex
  todayText?: string
  startOn?: CalendarDateValue
  numberOfMonths?: 1 | 2
} & (
    | {
        onChange?: (date: CalendarDateValue) => void
        value?: CalendarDateValue
        mode?: 'single'
      }
    | {
        onChange?: (date: DateRange) => void
        value?: DateRange
        mode?: 'range'
      }
  )

export type DateRange = [CalendarDateValue, CalendarDateValue]
export type CalendarView = 'days' | 'months' | 'years'

export type WeekDayIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7
