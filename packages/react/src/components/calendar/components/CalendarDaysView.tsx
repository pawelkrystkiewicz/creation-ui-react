import { useTheme } from '@root/theme'
import { FC, useCallback, useMemo, type ReactNode } from 'react'
import { useCalendar } from '../calendar.context'
import { calendarDaysViewClasses, dayRowClasses } from '../classes'
import { isDateInDisplayedMonth, isWeekendIdx } from '../utils'

interface CalendarDaysViewProps {
  offsetMonth?: 0 | 1
  multipleCalendars?: boolean
}

export const CalendarDaysView: FC<CalendarDaysViewProps> = ({
  offsetMonth = 0,
  multipleCalendars = false,
}) => {
  const {
    viewDate: originalViewDate,
    selectedDates,
    setSelectedDates,
    mode,
    size,
    weekStartsOn,
  } = useCalendar()
  const { styles } = useTheme()

  //adjust for offset month
  const viewDate = new Date(originalViewDate)
  viewDate.setMonth(originalViewDate.getMonth() + offsetMonth)

  const withThemeDaysClasses = useMemo(
    () => calendarDaysViewClasses(styles),
    [styles]
  )

  const month = viewDate.getMonth()
  const year = viewDate.getFullYear()

  const monthStart = new Date(year, month, 1)
  const monthEnd = new Date(year, month + 1, 0)

  const startDate = new Date(
    monthStart.setDate(
      monthStart.getDate() - ((7 + monthStart.getDay() - weekStartsOn) % 7)
    )
  )

  const endDate = new Date(
    monthEnd.setDate(monthEnd.getDate() + (6 - monthEnd.getDay()))
  )

  const isDateSelected = useCallback(
    (date: Date) => {
      const first = selectedDates?.[0]?.toDateString()
      const second = selectedDates?.[1]?.toDateString()
      const dateString = date.toDateString()
      return first === dateString || second === dateString
    },
    [selectedDates]
  )

  const isDateInRange = (date: Date) => {
    if (mode === 'range' && selectedDates[0] && selectedDates[1]) {
      return date >= selectedDates[0] && date <= selectedDates[1]
    }
    return false
  }

  const isDateFirstOrLast = (date: Date) => {
    const first = selectedDates?.[0]?.toDateString()
    const second = selectedDates?.[1]?.toDateString()
    const dateString = date.toDateString()
    return first === dateString ? 0 : second === dateString ? 1 : -1
  }

  const handleRowClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const day = (e.target as HTMLElement).closest('button')
    if (!day) return

    const date: string | null = day.getAttribute('data-date')
    if (!date) return

    const clickedDate = new Date(date)

    setSelectedDates(clickedDate)
  }

  let date = startDate
  const rows: ReactNode[] = []

  while (date <= endDate) {
    const days = []

    for (let i = 0; i < 7; i++) {
      const cellDate = date.toDateString()
      const isToday = new Date().toDateString() === cellDate
      const isCurrentMonth = date.getMonth() === viewDate?.getMonth()
      const isSelected = isDateSelected(date)
      const isInRange = isDateInRange(date)
      const isWeekend = isWeekendIdx(i)
      const idx = isDateFirstOrLast(date)
      const isInRenderedMonth = isDateInDisplayedMonth(date, viewDate)
      const shouldSkipRender = multipleCalendars && !isInRenderedMonth
      console.table({
        cellDate,
        viewDate,
        month,
        multipleCalendars,
        shouldSkipRender,
        isInRenderedMonth,
      })

      days.push(
        <button
          data-date={cellDate}
          key={`${days.length}-${i}`}
          className={
            !shouldSkipRender
              ? withThemeDaysClasses({
                  size,
                  isCurrentMonth,
                  isSelected,
                  isToday,
                  isWeekend,
                  isInRange,
                  isStart: idx === 0,
                  isEnd: idx === 1,
                })
              : undefined
          }
        >
          {!shouldSkipRender ? date.getDate().toString() : null}
        </button>
      )

      date.setDate(date.getDate() + 1)
    }

    rows.push(
      <div key={`week-${days[0]}`} className={dayRowClasses}>
        {days}
      </div>
    )
  }

  return (
    <div className='grid grid-flow-row w-full gap-y-1' onClick={handleRowClick}>
      {rows}
    </div>
  )
}
