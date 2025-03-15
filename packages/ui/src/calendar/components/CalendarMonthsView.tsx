import { useCalendar } from '../calendar.context'
import { CalendarGridView } from './CalendarGridView'

export const CalendarMonthsView = () => {
  const {
    viewDate: currentDate,
    setViewDate: setCurrentDate,
    setView,
    locale,
  } = useCalendar()

  const months = Array.from({ length: 12 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { month: 'short' }).format(
      new Date(2000, i),
    ),
  )

  const handleMonthClick = (month: string | number) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), months.indexOf(month as string)),
    )
    setView('days')
  }

  const currentMonth = currentDate.getMonth()

  return (
    <CalendarGridView
      entries={months}
      currentValue={currentMonth}
      onClick={handleMonthClick}
    />
  )
}
