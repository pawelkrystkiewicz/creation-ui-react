import { FC, useMemo } from 'react'
import { useCalendar } from '../calendar.context'
import { calendarHeaderClasses } from '../classes'
import { Flex } from '../../'

interface MonthYearTitleProps {
  offsetMonth?: 0 | 1
}

export const MonthYearTitle: FC<MonthYearTitleProps> = ({
  offsetMonth = 0,
}) => {
  const { viewDate: originalViewDate, setView, view } = useCalendar()

  // Adjust the viewDate based on the offsetMonth
  const adjustedViewDate = new Date(originalViewDate)
  adjustedViewDate.setMonth(originalViewDate.getMonth() + offsetMonth) // offsetMonth - 1 because 1 means no change and 2 means next month

  const isMonthName = useMemo(() => view === 'days', [view])
  const isYearName = useMemo(() => ['months', 'days'].includes(view), [view])

  return (
    <Flex
      gapX={1}
      items={'center'}
      className={calendarHeaderClasses({ offsetMonth })}
    >
      {isMonthName && (
        <>
          <button onClick={setView.bind(null, 'months')} className='capitalize'>
            {adjustedViewDate.toLocaleDateString(undefined, { month: 'long' })}
            &nbsp;
          </button>
        </>
      )}
      {isYearName && (
        <>
          <button onClick={setView.bind(null, 'years')}>
            {adjustedViewDate.getFullYear()}
          </button>
        </>
      )}
    </Flex>
  )
}
