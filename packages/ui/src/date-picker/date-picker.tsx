import { FC, useRef, useState } from 'react'
import { Calendar, CalendarDateValue } from '../calendar'
import { Input } from '../input'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { DatePickerProps } from './types'

export const DatePicker: FC<DatePickerProps> = props => {
  const { value, onChange, ...inputProps } = props

  const [popoverVisible, setPopoverVisible] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  const closeCalendar = () => setPopoverVisible(false)

  const handleDateSelect = (date: CalendarDateValue) => {
    onChange?.(date)
    setPopoverVisible(false)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    const parsedDate = new Date(inputValue)
    closeCalendar()

    if (!isNaN(parsedDate.valueOf())) {
      onChange?.(parsedDate)
    } else {
      onChange?.(null)
    }
  }

  const clearValue = () => {
    onChange?.(null)
    closeCalendar()
  }

  const handleClick = () => setPopoverVisible(true)

  return (
    <Popover
      open={popoverVisible}
      onOpenChange={setPopoverVisible}
      placement='bottom-start'
    >
      <PopoverTrigger>
        <Input
          {...inputProps}
          ref={ref}
          onClear={clearValue}
          value={value ? (value as Date).toLocaleDateString() : ''}
          onChange={handleInputChange}
          onClick={handleClick}
        />
      </PopoverTrigger>
      <PopoverContent
        className='!p-0 !bg-transparent'
        zIndex={props.zIndex?.popover}
      >
        <Calendar
          onChange={handleDateSelect}
          // TODO: type
          value={value as any}
          mode='single'
        />
      </PopoverContent>
    </Popover>
  )
}
