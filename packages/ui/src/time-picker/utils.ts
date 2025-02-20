import { TimePickerValue } from './types'

export const padStart = (value?: number): string =>
  String(typeof value === 'number' ? (value < 10 ? '0' + value : value) : '--')

export const formatTime = (value?: TimePickerValue): string => {
  if (!value) return '--:--'
  const { hours, minutes } = value

  const h = padStart(hours)
  const min = padStart(minutes)

  return `${h}:${min}`
}

export const sanitizeTime = (val: string): number =>
  Number(val?.replaceAll('__', ''))


