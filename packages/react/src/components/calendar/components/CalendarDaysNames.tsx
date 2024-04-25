import { FC } from 'react'
import { useCalendar } from '../calendar.context'
import { getFirstDayOfWeek, isWeekendIdx } from '../utils'
import { calendarDaysViewTitleClasses } from '../classes'

interface CalendarDaysNamesProps {
  offsetMonth?: 0 | 1
}

export const CalendarDaysNames: FC<CalendarDaysNamesProps> = ({
  offsetMonth,
}) => {
  const { locale, weekStartsOn } = useCalendar()
  const firstDayOfWeek = getFirstDayOfWeek(new Date(), weekStartsOn)

  const dayNames = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(
      new Date(firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1))
    )
  )

  return (
    <div className={calendarDaysViewTitleClasses.row({ offsetMonth })}>
      {dayNames.map((dayName, i) => (
        <div
          key={dayName}
          className={calendarDaysViewTitleClasses.day({
            isWeekend: isWeekendIdx(i),
          })}
        >
          {dayName}
        </div>
      ))}
    </div>
  )
}
