import { useCalendar } from '../calendar.context'
import { CalendarGridView } from './CalendarGridView'

export const CalendarMonthsView = () => {
  const {
    viewDate: currentDate,
    setViewDate: setCurrentDate,
    setView,
    size,
    locale,
  } = useCalendar()

  const months = Array.from({ length: 12 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { month: 'short' }).format(
      new Date(2000, i)
    )
  )

  const handleMonthClick = (month: string) => {
    setCurrentDate(new Date(currentDate.getFullYear(), months.indexOf(month)))
    setView('days')
  }

  const currentMonth = currentDate.getMonth()

  return (
    <CalendarGridView
      size={size}
      entries={months}
      currentValue={currentMonth}
      onClick={handleMonthClick}
    />
  )
}
