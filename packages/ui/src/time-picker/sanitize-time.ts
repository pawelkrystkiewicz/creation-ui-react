import { MARK } from './constants'
import type { TimeFormat, TimePickerValue } from './types'

/**
 *
 * @param time as formatted time string "12:30"
 * @returns
 */
export const sanitizeTimeString =
  (format: TimeFormat) =>
  (time: string): TimePickerValue => {
    if (!time) return null

    const [hours, minutes] = time
      .split(':')
      .map(val => Number(val.replaceAll(MARK, '')))

    return {
      hours: coerceHours(hours, format),
      minutes: coerceMinutes(minutes),
    }
  }

const coerceHours = (hours: number, format: TimeFormat) => {
  if (isNaN(hours)) {
    return null
  }

  if (String(hours).length > 2) {
    return 0
  }

  if (hours > format) {
    return hours % format
  }

  return hours
}

const coerceMinutes = (minutes: number) => {
  if (isNaN(minutes)) {
    return null
  }

  if (minutes > 59) {
    return 0
  }

  return minutes
}
