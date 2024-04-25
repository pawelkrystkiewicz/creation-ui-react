import { useCalendar } from '../calendar.context'
import { CalendarGridView } from './CalendarGridView'

export const CalendarYearsView = () => {
  const {
    viewDate: currentDate,
    setViewDate: setCurrentDate,
    setView,
    size,
  } = useCalendar()

  const startYear = Math.floor(currentDate.getFullYear() / 10) * 10 - 1
  const years = Array.from({ length: 12 }, (_, i) => startYear + i)

  const handleYearClick = (year: number) => {
    setCurrentDate(new Date(year, currentDate.getMonth()))
    setView('months')
  }

  const currentYear = currentDate.getFullYear()

  return (
    <CalendarGridView
      size={size}
      entries={years}
      currentValue={currentYear}
      onClick={handleYearClick}
    />
  )
}
