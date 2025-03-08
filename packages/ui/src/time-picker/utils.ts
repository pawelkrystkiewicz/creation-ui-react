import { MARK } from './constants'
import type { TimePickerValue } from './types'

export const padStart = (value?: number): string =>
  String(typeof value === 'number' ? (value < 10 ? '0' + value : value) : MARK)

export const formatTime = (value?: TimePickerValue): string => {
  if (!value) return `${MARK}:${MARK}`
  const { hours, minutes } = value

  const h = padStart(hours)
  const min = padStart(minutes)

  return `${h}:${min}`
}
