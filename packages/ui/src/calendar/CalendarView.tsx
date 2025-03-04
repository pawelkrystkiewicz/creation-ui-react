import { FC } from 'react'
import { Button } from '../button'
import { Icon } from '../icon'
import { CalendarViewMode } from './calendar.types'
import { calendarContainerClasses } from './classes'
import { CalendarDaysNames } from './components/CalendarDaysNames'
import { CalendarDaysView } from './components/CalendarDaysView'
import { CalendarMonthsView } from './components/CalendarMonthsView'
import { CalendarYearsView } from './components/CalendarYearsView'
import { MonthYearTitle } from './components/MonthYearTitle'

interface CalendarViewProps {
  className?: string
  hasSecondView?: boolean
  showTodaySelector?: boolean
  isTodaySelected?: boolean
  todayText?: string
  onPrevClick?: () => void
  onNextClick?: () => void
  onTodayClick?: () => void
  viewIs: (view: CalendarViewMode) => boolean
  id?: string
}

export const CalendarView: FC<CalendarViewProps> = ({
  viewIs,
  className,
  hasSecondView,
  showTodaySelector,
  isTodaySelected,
  todayText,
  onPrevClick,
  onNextClick,
  onTodayClick,
  id,
}) => {
  return (
    <div className={className}>
      <div className={calendarContainerClasses({ hasSecondView })} id={id}>
        <Button
          variant='text'
          onClick={onPrevClick?.bind(null)}
          className='!absolute top-0 left-0 mt-4 mx-2'
        >
          <Icon icon='chevron_left' />
        </Button>
        <Button
          variant='text'
          onClick={onNextClick?.bind(null)}
          className='!absolute top-0 right-0 mt-4 mx-2'
        >
          <Icon icon='chevron_right' />
        </Button>

        <div className='grid lg:grid-flow-col gap-5'>
          <div className='grid grid-flow-row justify-items-center gap-2'>
            <MonthYearTitle offsetMonth={0} />
            {viewIs('days') && [
              <CalendarDaysNames />,
              <CalendarDaysView multipleCalendars={hasSecondView} />,
            ]}
            {viewIs('months') && <CalendarMonthsView />}{' '}
            {viewIs('years') && <CalendarYearsView />}
          </div>
          {viewIs('days') && hasSecondView && (
            <div className='grid grid-flow-row justify-items-center gap-2'>
              <MonthYearTitle offsetMonth={1} />
              <CalendarDaysNames offsetMonth={1} />
              <CalendarDaysView offsetMonth={1} multipleCalendars />
            </div>
          )}
        </div>

        {showTodaySelector && (
          <>
            &nbsp;
            <Button
              variant='text'
              onClick={onTodayClick}
              disabled={isTodaySelected}
            >
              {todayText}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
