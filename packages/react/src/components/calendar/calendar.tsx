import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { Button } from '../button'
import { Flex } from '../flex'
import { Icon } from '../icon'
import { InteractiveContainer } from '../interactive-container'
import { Show } from '../show'
import { CalendarContext, CalendarContextValue } from './calendar.context'
import {
  CalendarDateValue,
  CalendarProps,
  CalendarView,
  DateRange,
} from './calendar.types'
import { calendarClasses } from './classes'
import { CalendarDaysView } from './components/CalendarDaysView'
import { CalendarMonthsView } from './components/CalendarMonthsView'
import { CalendarYearsView } from './components/CalendarYearsView'
import { MonthYearTitle } from './components/MonthYearTitle'
import { changeCalendarView, getCalendarInitialValue } from './utils'
import { CalendarDaysNames } from './components/CalendarDaysNames'

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
  const viewIs = useCallback(
    (viewType: CalendarView) => view === viewType,
    [view]
  )

  // TODO: move to <CalendarView/>
  return (
    <CalendarContext.Provider value={context}>
      <InteractiveContainer className={className}>
        <div
          className={calendarClasses.container({ size, hasSecondView })}
          id={componentId}
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
              className='!absolute bottom-0 left-0'
            >
              {todayText}
            </Button>
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
