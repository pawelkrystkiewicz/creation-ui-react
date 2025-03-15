import { FnIsOptionEqualToValue } from '../types'

export const _isOptionEqualToValue = <T>(
  option: T,
  value: T | T[] | null | undefined,
): boolean => {
  if (value === undefined || value === null) {
    return false
  }

  if (Array.isArray(value)) {
    return value.some(v => _isOptionEqualToValue(option, v))
  } else {
    return option === value
  }
}
