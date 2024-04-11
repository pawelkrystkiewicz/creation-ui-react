import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { FC, useCallback, useEffect, useRef } from 'react'
import { OnTimeSliderSelectArgs, TimeSelectorProps } from './types'

const cellClasses = cva(
  ['cursor-pointer', 'px-2', 'py-1', 'hover:bg-primary-50/50'],
  {
    variants: {
      selected: {
        true: [
          //
          'bg-primary',
          'dark:bg-primary',
          'dark:text-info',
        ],
        false: '',
      },
    },
  }
)

const columnClasses = clsx('overflow-y-scroll', 'h-48')

const MINUTES = Array.from({ length: 60 }, (_, i) => i)
const HOURS_12 = Array.from({ length: 12 }, (_, i) => i)
const HOURS_24 = Array.from({ length: 24 }, (_, i) => i)

export const TimeSelector: FC<TimeSelectorProps> = ({
  value,
  onSelect,
  format = 24,
}) => {
  const HOURS = format === 12 ? HOURS_12 : HOURS_24

  const handleSelect = useCallback(
    ({ hour, minute }: OnTimeSliderSelectArgs) => {
      const hours = hour ?? value?.hours ?? 0
      const minutes = minute ?? value?.minutes ?? 0
      onSelect({ hours, minutes })
    },
    [onSelect]
  )

  const hourRef = useRef<HTMLDivElement[]>([])
  const minuteRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const h = value?.hours
    const m = value?.minutes

    h &&
      hourRef.current[h]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      })

    m &&
      minuteRef.current[m]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      })
  }, [value])

  return (
    <div
      className={clsx(
        'bg-white dark:bg-info dark:border-info border rounded-md',
        'grid grid-cols-2 gap-2'
      )}
    >
      <div className={columnClasses}>
        {HOURS.map(hour => (
          <div
            ref={el => ((hourRef as any).current[hour] = el)}
            key={hour}
            onClick={() => handleSelect({ hour })}
            className={cellClasses({
              selected: value?.hours === hour,
            })}
          >
            {hour.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
      <div className={columnClasses}>
        {MINUTES.map(minute => (
          <div
            ref={el => ((minuteRef as any).current[minute] = el)}
            key={minute}
            onClick={() => handleSelect({ minute })}
            className={cellClasses({
              selected: value?.minutes === minute,
            })}
          >
            {minute.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  )
}
