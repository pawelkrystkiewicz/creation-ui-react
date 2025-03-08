import { TimePickerValue } from './types'

interface TimeInputHandlerArgs {
  key: string
  cursorPosition: number
  hours: number | null
  minutes: number | null
  preventDefault?: () => void
}

export const getTimeInputHandler =
  (format: 12 | 24) =>
  ({
    key,
    cursorPosition,
    hours,
    minutes,
    preventDefault,
  }: TimeInputHandlerArgs): TimePickerValue => {
    switch (key) {
      case 'ArrowUp':
        preventDefault?.()
        if (cursorPosition <= 2) {
          const nextHours = (hours ?? 0 + 1) % format
          return { hours: nextHours, minutes }
        } else {
          const nextMinutes = (minutes ?? 0 + 1) % 60
          return { hours, minutes: nextMinutes }
        }

      case 'ArrowDown':
        preventDefault?.()
        if (cursorPosition <= 2) {
          const nextHours = (hours ?? 0 - 1 + format) % format
          return { hours: nextHours, minutes }
        } else {
          const nextMinutes = (minutes ?? 0 - 1 + 60) % 60
          return { hours, minutes: nextMinutes }
        }

      default:
        break
    }
  }
