import { createContext, useContext } from 'react'
import type { ElementSize } from '@types'
import {
  CalendarDateValue,
  CalendarMode,
  CalendarView,
  DateRange,
  WeekDayIndex,
} from './calendar.types'

export interface CalendarContextValue {
  viewDate: Date
  selectedDates: DateRange
  setSelectedDates: (value: CalendarDateValue) => void
  setViewDate: (value: Date) => void
  setView: (value: CalendarView) => void
  view: CalendarView
  size: ElementSize
  locale?: string
  weekStartsOn: WeekDayIndex
  mode: CalendarMode
  numberOfMonths: 1 | 2
}

export const CalendarContext = createContext<CalendarContextValue>({} as any)

export const useCalendar = () => {
  const context = useContext(CalendarContext)

  if (!context) {
    throw new Error(`"CalendarProvider" must be present in React DOM tree`)
  }

  return context
}
