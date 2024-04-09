import { useCalendar } from '../calendar.context'
import { Button } from '../../button'
import type { ReactNode } from 'react'

export const CalendarMonthsView = () => {
  const {
    viewDate: currentDate,
    setViewDate: setCurrentDate,
    setView,
    size,
    locale,
  } = useCalendar()

  const effectiveLocale = locale || navigator.language

  const monthNames = Array.from({ length: 12 }, (_, i) =>
    new Intl.DateTimeFormat(effectiveLocale, { month: 'short' }).format(
      new Date(2000, i),
    ),
  )

  const handleMonthClick = (monthIndex: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), monthIndex))
    setView('days')
  }

  const currentMonth = currentDate.getMonth()

  const months = monthNames.map((monthName, index) => (
    <Button
      size={size}
      key={monthName}
      variant={currentMonth === index ? 'outlined' : 'text'}
      className='w-14 h-14 text-info-900 dark:text-info-100'
      onClick={() => handleMonthClick(index)}
    >
      {monthName}
    </Button>
  ))

  const rows: ReactNode[] = []
  for (let i = 0; i < months.length; i += 4) {
    rows.push(
      <div key={i} className='flex justify-between mb-2'>
        {months.slice(i, i + 4)}
      </div>,
    )
  }

  return <>{rows}</>
}
