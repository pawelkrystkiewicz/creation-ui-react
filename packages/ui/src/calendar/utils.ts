import {
  CalendarDateValue,
  CalendarViewMode,
  DateRange,
  WeekDayIndex,
} from './calendar.types'

export const getFirstDayOfWeek = (date: Date, weekStartsOn: WeekDayIndex) => {
  const day = new Date(date).getDay()
  const daysToShift = (7 + day - weekStartsOn + 1) % 7
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - daysToShift,
  )
}

export const changeCalendarView = (
  date: Date,
  view: CalendarViewMode,
  direction: 'next' | 'prev',
) => {
  const sign = direction === 'next' ? 1 : -1

  const month = new Date(date)

  switch (view) {
    case 'days':
      month.setMonth(date.getMonth() + sign * 1)
      break
    case 'months':
      month.setFullYear(date.getFullYear() + sign * 1)
      break
    case 'years':
      month.setFullYear(date.getFullYear() + sign * 12)
      break
    default:
      break
  }

  return month
}

export const getCalendarInitialValue = (
  value: DateRange | CalendarDateValue,
): DateRange => {
  if (!value) return [null, null]

  if (Array.isArray(value)) {
    return [value[0] ?? null, value[1] ?? null]
  }

  return [value, null]
}

export const isDateInDisplayedMonth = (date: Date, viewedMonth: Date) =>
  date.getMonth() === viewedMonth.getMonth()

export const isWeekendIdx = (i: number) => [5, 6].includes(i)
