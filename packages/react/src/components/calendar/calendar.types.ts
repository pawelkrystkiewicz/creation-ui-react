import type { BaseComponentProps } from '@types'

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
  locale?: string
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
export type CalendarViewMode = 'days' | 'months' | 'years'

export type WeekDayIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7
