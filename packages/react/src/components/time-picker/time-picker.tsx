import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from '../../theme'
import { Input } from '../input'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { TimeSelector } from '../time-selector'
import { TimePickerProps, TimePickerValue } from './types'
import { formatTime, sanitizeTime } from './utils'
import InputMask from 'react-input-mask'
import { Show } from '../show'

export const TimePicker: FC<TimePickerProps> = props => {
  const { size: defaultSize } = useTheme()

  const {
    size = defaultSize,
    value,
    format = 24,
    clearable = true,
    onChange,
    zIndex,
    ...rest
  } = props

  const [_value, setValue] = useState<TimePickerValue>(value)
  const [open, setOpen] = useState(false)

  const onClear = () => {
    setValue(null)
    setOpen(false)
    props.onClear?.()
  }

  const inputValue = useMemo(
    () => (_value ? formatTime(_value) : '__:__'),
    [_value, value]
  )
  console.table({ inputValue, value, _value })

  const handleClick = () => setOpen(true)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [h, m] = event.target.value.split(':')

    const hours = sanitizeTime(h)
    const minutes = sanitizeTime(m)
    if (isNaN(hours) || isNaN(minutes)) return

    setValue({ hours, minutes })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setOpen(false)
      return
    }
    const cursorPosition = event.currentTarget.selectionStart

    if (!cursorPosition) return

    const [h, m] = event.currentTarget.value.split(':')

    let hours = sanitizeTime(h)
    let minutes = sanitizeTime(m)

    // if (isNaN(hours)) {
    //   hours = 0
    // }
    // if (isNaN(minutes)) {
    //   minutes = 0
    // }

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault()
        if (cursorPosition <= 2) {
          const nextHours = (hours + 1) % format
          setValue({ hours: nextHours, minutes })
        } else {
          const nextMinutes = (minutes + 1) % 60
          setValue({ hours, minutes: nextMinutes })
        }
        break
      case 'ArrowDown':
        event.preventDefault()
        if (cursorPosition <= 2) {
          const nextHours = (hours - 1 + format) % format
          setValue({ hours: nextHours, minutes })
        } else {
          const nextMinutes = (minutes - 1 + 60) % 60
          setValue({ hours, minutes: nextMinutes })
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    onChange?.(_value)
  }, [_value])

  return (
    <Popover open={open} onOpenChange={setOpen} placement='bottom-start'>
      <PopoverTrigger>
        <InputMask
          {...rest}
          mask='99:99'
          maskChar='_'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          clearable={clearable}
          onClick={handleClick}
          onClear={onClear}
        >
          {/* @ts-ignore */}
          {inputProps => <Input {...inputProps} size={size} />}
        </InputMask>
      </PopoverTrigger>
      <PopoverContent
        className='!p-0 !m-0 !bg-transparent'
        zIndex={zIndex?.popover}
      >
        <Show when={open}>
          <TimeSelector value={value} onSelect={setValue} format={format} />
        </Show>
      </PopoverContent>
    </Popover>
  )
}
