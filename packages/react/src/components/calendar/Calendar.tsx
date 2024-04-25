import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { CalendarView } from './CalendarView'
import { CalendarContext, CalendarContextValue } from './calendar.context'
import {
  CalendarDateValue,
  CalendarProps,
  CalendarViewMode,
  DateRange,
} from './calendar.types'
import { changeCalendarView, getCalendarInitialValue } from './utils'

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

  const [view, setView] = useState<CalendarViewMode>('days')
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
    (viewType: CalendarViewMode) => view === viewType,
    [view]
  )

  return (
    <CalendarContext.Provider value={context}>
      <CalendarView
        className={className}
        id={componentId}
        size={size}
        hasSecondView={hasSecondView}
        showTodaySelector={showTodaySelector}
        isTodaySelected={isTodaySelected}
        todayText={todayText}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        onTodayClick={onTodayClick}
        viewIs={viewIs}
      />
    </CalendarContext.Provider>
  )
}

Calendar.displayName = 'Calendar'

Calendar.defaultProps = {
  size: 'md',
  weekStartsOn: 1,
}

export default Calendar
