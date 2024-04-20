import { useTheme } from '@root/theme'
import { ensureNumber } from '@utils'
import clsx from 'clsx'
import { FC, useCallback, useEffect, useMemo, useRef } from 'react'
import { OnTimeSliderSelectArgs, TimeSelectorProps } from './types'
import { cellClasses, columnClasses } from './classes'

const MINUTES = Array.from({ length: 60 }, (_, i) => i)
const HOURS_12 = Array.from({ length: 12 }, (_, i) => i)
const HOURS_24 = Array.from({ length: 24 }, (_, i) => i)

export const TimeSelector: FC<TimeSelectorProps> = ({
  value,
  onSelect,
  format = 24,
}) => {
  const HOURS = format === 12 ? HOURS_12 : HOURS_24

  const { styles } = useTheme()

  const withThemeCell = useMemo(() => cellClasses(styles), [styles])

  const handleSelect = useCallback(
    ({ hour, minute }: OnTimeSliderSelectArgs) => {
      const hours = ensureNumber(hour, value?.hours)
      const minutes = ensureNumber(minute, value?.minutes)
      onSelect({ hours, minutes })
    },
    [onSelect, value]
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
        'bg-background-portal',
        'rounded',
        'flex',
        'justify-evenly',
        'p-1',
        'gap-1'
      )}
    >
      <div className={columnClasses}>
        {HOURS.map(hour => (
          <div
            ref={el => ((hourRef as any).current[hour] = el)}
            key={hour}
            onClick={() => handleSelect({ hour })}
            className={withThemeCell({
              selected: Boolean(value?.hours === hour),
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
            className={withThemeCell({
              selected: Boolean(value?.minutes === minute),
            })}
          >
            {minute.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  )
}
