import type { ReactNode } from 'react'
import { Button } from '../../button'
import { useCalendar } from '../calendar.context'

export const CalendarYearsView = () => {
  const {
    viewDate: currentDate,
    setViewDate: setCurrentDate,
    setView,
    size,
  } = useCalendar()

  const startYear = Math.floor(currentDate.getFullYear() / 10) * 10 - 1
  const years = Array.from({ length: 12 }, (_, i) => startYear + i)

  const handleYearClick = year => {
    setCurrentDate(new Date(year, currentDate.getMonth()))
    setView('months')
  }

  const currentYear = currentDate.getFullYear()

  const yearsGrid = years.map(year => (
    <Button
      size={size}
      key={year}
      variant={year === currentYear ? 'outlined' : 'text'}
      className='w-14 h-14 text-info dark:text-info'
      onClick={() => handleYearClick(year)}
    >
      {year}
    </Button>
  ))

  const rows: ReactNode[] = []
  for (let i = 0; i < yearsGrid.length; i += 4) {
    rows.push(
      <div key={i} className='flex justify-between mb-2'>
        {yearsGrid.slice(i, i + 4)}
      </div>
    )
  }

  return <div className='flex flex-col justify-between'>{rows}</div>
}
