import React, { FC, useMemo, useState } from 'react'
import { Input } from '../input'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { TimeSelector } from '../time-selector'
import { getTimeInputHandler } from './handle-time-input'
import { sanitizeTimeString } from './sanitize-time'
import { TimePickerProps } from './types'
import { formatTime } from './utils'

export const TimePicker: FC<TimePickerProps> = props => {
  const { value, format = 24, onChange, zIndex, ...rest } = props
  const [open, setOpen] = useState(false)
  const inputValue = useMemo(() => formatTime(value), [value])
  const handleTimeInput = useMemo(() => getTimeInputHandler(format), [format])
  const sanitizeTime = useMemo(() => sanitizeTimeString(format), [format])
  const handleClick = () => setOpen(true)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(sanitizeTime(event.target.value))
  }

  const handleKeyDown = ({
    key,
    currentTarget,
  }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Escape') {
      setOpen(false)
      return
    }

    if (!onChange) return

    const cursorPosition = currentTarget.selectionStart
    if (!cursorPosition) return

    const value = sanitizeTime(currentTarget.value)

    if (!value) return

    onChange(
      handleTimeInput({
        key,
        cursorPosition,
        hours: value.hours,
        minutes: value.minutes,
      }),
    )
  }

  return (
    <Popover open={open} onOpenChange={setOpen} placement='bottom-start'>
      <PopoverTrigger>
        <Input
          {...rest}
          onClear={props.onClear}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          value={inputValue}
        />
      </PopoverTrigger>
      <PopoverContent className='!p-0' zIndex={zIndex?.popover}>
        {open && (
          <TimeSelector value={value} onSelect={onChange} format={format} />
        )}
      </PopoverContent>
    </Popover>
  )
}
