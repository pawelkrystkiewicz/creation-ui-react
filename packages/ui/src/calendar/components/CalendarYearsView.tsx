import { useCalendar } from '../calendar.context'
import { CalendarGridView } from './CalendarGridView'

export const CalendarYearsView = () => {
  const {
    viewDate: currentDate,
    setViewDate: setCurrentDate,
    setView,
  } = useCalendar()

  const startYear = Math.floor(currentDate.getFullYear() / 10) * 10 - 1
  const years = Array.from({ length: 12 }, (_, i) => startYear + i)

  const handleYearClick = (year: number | string) => {
    setCurrentDate(new Date(Number(year), currentDate.getMonth()))
    setView('months')
  }

  const currentYear = currentDate.getFullYear()

  return (
    <CalendarGridView
      entries={years}
      currentValue={currentYear}
      onClick={handleYearClick}
    />
  )
}
