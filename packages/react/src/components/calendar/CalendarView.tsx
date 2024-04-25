import { ElementSize } from '@root/types'
import { FC } from 'react'
import { Button } from '../button'
import { Icon } from '../icon'
import { InteractiveContainer } from '../interactive-container'
import { Show } from '../show'
import { CalendarViewMode } from './calendar.types'
import { calendarClasses } from './classes'
import { CalendarDaysNames } from './components/CalendarDaysNames'
import { CalendarDaysView } from './components/CalendarDaysView'
import { CalendarMonthsView } from './components/CalendarMonthsView'
import { CalendarYearsView } from './components/CalendarYearsView'
import { MonthYearTitle } from './components/MonthYearTitle'

interface CalendarViewProps {
  className?: string
  size?: ElementSize
  hasSecondView?: boolean
  showTodaySelector?: boolean
  isTodaySelected?: boolean
  todayText?: string
  onPrevClick?: () => void
  onNextClick?: () => void
  onTodayClick?: () => void
  viewIs?: (view: CalendarViewMode) => boolean
  id?: string
}

export const CalendarView: FC<CalendarViewProps> = ({
  viewIs,
  className,
  size,
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
    <InteractiveContainer className={className}>
      <div
        className={calendarClasses.container({ size, hasSecondView })}
        id={id}
      >
        <Button
          size={size}
          variant='text'
          onClick={onPrevClick.bind(null)}
          className='!absolute top-0 left-0 mt-4 mx-2'
        >
          <Icon icon='chevron_left' size={size} />
        </Button>
        <Button
          size={size}
          variant='text'
          onClick={onNextClick.bind(null)}
          className='!absolute top-0 right-0 mt-4 mx-2'
        >
          <Icon icon='chevron_right' size={size} />
        </Button>

        <div className='grid lg:grid-flow-col gap-5'>
          <div className='grid grid-flow-row justify-items-center gap-2'>
            <MonthYearTitle offsetMonth={0} />
            <Show when={viewIs('days')}>
              <CalendarDaysNames />
              <CalendarDaysView multipleCalendars={hasSecondView} />
            </Show>
            <Show when={viewIs('months')}>
              <CalendarMonthsView />
            </Show>
            <Show when={viewIs('years')}>
              <CalendarYearsView />
            </Show>
          </div>
          <Show when={viewIs('days') && hasSecondView}>
            <div className='grid grid-flow-row justify-items-center gap-2'>
              <MonthYearTitle offsetMonth={1} />
              <CalendarDaysNames offsetMonth={1} />
              <CalendarDaysView offsetMonth={1} multipleCalendars />
            </div>
          </Show>
        </div>

        <Show when={showTodaySelector}>
          <Button
            variant='text'
            size={size}
            onClick={onTodayClick}
            disabled={isTodaySelected}
            className='!absolute bottom-0 left-0 mb-4 mx-2'
          >
            {todayText}
          </Button>
        </Show>
      </div>
    </InteractiveContainer>
  )
}
