import { FC, useEffect, useMemo, useState } from 'react'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { Button } from '../button'
import { Icon } from '../icon'
import { InteractiveContainer } from '../interactive-container'
import { CalendarContext, CalendarContextValue } from './calendar.context'
import {
  CalendarDateValue,
  CalendarProps,
  CalendarView,
  DateRange,
} from './calendar.types'
import { calendarClasses } from './classes'
import { MonthYearTitle } from './components/container/month-year-title'
import { CalendarDaysView } from './components/days'
import { CalendarMonthsView } from './components/months'
import { CalendarYearsView } from './components/years'
import { changeCalendarView, getCalendarInitialValue } from './utils'
import { Show } from '../show'

const buttonClasses = 'size-7'

const Calendar: FC<CalendarProps> = props => {
  const theme = useTheme()

  const {
    size = theme.size ?? 'md',
    className,
    id,
    onChange,
    weekStartsOn = 1,
    numberOfMonths = 1,
    mode = 'single',
    value,
    todayText = 'Today',
    startOn,
    showTodaySelector = true,
  } = props

  const componentId = useId(id)

  const [view, setView] = useState<CalendarView>('days')
  const [viewDate, setViewDate] = useState<Date>(startOn ?? new Date())
  const [selectedDates, setSelectedDates] = useState<DateRange>([null, null])

  useEffect(() => {
    setSelectedDates(getCalendarInitialValue(value))
  }, [])

  const handleDayClick = (date: CalendarDateValue) => {
    if (mode === 'range') {
      if (!selectedDates[0] || (selectedDates[0] && selectedDates[1])) {
        setSelectedDates([date, null])
      } else if (selectedDates[0] && !selectedDates[1]) {
        // Check if selected date is before the initial date and swap if necessary
        if (date && selectedDates[0] && date < selectedDates[0]) {
          setSelectedDates([date, selectedDates[0]])
          // @ts-expect-error
          onChange?.([date, selectedDates[0]])
        } else {
          setSelectedDates([selectedDates[0], date])
          // @ts-expect-error
          onChange?.([selectedDates[0], date])
        }
      }
    } else {
      setSelectedDates([date, null])
      // @ts-expect-error
      onChange?.(date)
    }
  }

  const onNextClick = () => {
    const date = changeCalendarView(viewDate, view, 'next')
    setViewDate(date)
  }
  const onPrevClick = () => {
    const date = changeCalendarView(viewDate, view, 'prev')
    setViewDate(date)
  }

  const onTodayClick = () => {
    const today = new Date()
    setViewDate(today)
    handleDayClick(today)
    setView('days')
  }

  const isTodaySelected = useMemo(() => {
    if (mode === 'range') return false
    const first = selectedDates?.[0]?.toDateString()
    const second = selectedDates?.[1]?.toDateString()
    const today = new Date().toDateString()
    return first === today || second === today
  }, [selectedDates])

  const context: CalendarContextValue = useMemo(
    () => ({
      setSelectedDates: handleDayClick,
      setViewDate: setViewDate,
      setView,
      view,
      size,
      currentDate: viewDate,
      selectedDates,
      weekStartsOn,
      viewDate,
      mode,
      numberOfMonths,
    }),
    [size, viewDate, selectedDates, weekStartsOn]
  )

  const hasSecondView = useMemo(() => numberOfMonths === 2, [numberOfMonths])
  const currentView = useMemo(() => {
    let views: any[] = []
    for (let i = 0; i < numberOfMonths; i++) {
      switch (view) {
        case 'days':
          views.push(
            <CalendarDaysView
              key={i}
              offsetMonth={i as 0 | 1}
              multipleCalendars={hasSecondView}
            />
          )
          break
        case 'months':
          views.push(<CalendarMonthsView key={i} />)
          break
        case 'years':
          views.push(<CalendarYearsView key={i} />)
          break
      }
    }
    return <div className='flex flex-col md:flex-row gap-3'>{views}</div>
  }, [view, numberOfMonths])

  return (
    <CalendarContext.Provider value={context}>
      <InteractiveContainer className={className}>
        <div
          className={calendarClasses.container({ size, hasSecondView })}
          id={componentId}
        >
          <div className='flex items-center justify-between mb-2 w-full'>
            <Button
              size='sm'
              variant='text'
              className={buttonClasses}
              onClick={onPrevClick.bind(null)}
            >
              <Icon icon='chevron_left' />
            </Button>
            <MonthYearTitle offsetMonth={0} />
            <Show when={hasSecondView}>
              <MonthYearTitle offsetMonth={1} />
            </Show>
            <Button
              size='sm'
              variant='text'
              className={buttonClasses}
              onClick={onNextClick.bind(null)}
            >
              <Icon icon='chevron_right' />
            </Button>
          </div>
          {currentView}
          <Show when={showTodaySelector}>
            <div className='p-2'>
              <Button
                variant='text'
                size='sm'
                onClick={onTodayClick}
                disabled={isTodaySelected}
                className='absolute bottom-2 left-2'
              >
                {todayText}
              </Button>
            </div>
          </Show>
        </div>
      </InteractiveContainer>
    </CalendarContext.Provider>
  )
}

Calendar.displayName = 'Calendar'

Calendar.defaultProps = {
  size: 'md',
  weekStartsOn: 1,
}

export default Calendar
