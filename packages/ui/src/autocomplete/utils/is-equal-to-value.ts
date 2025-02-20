export const _isOptionEqualToValue = <T>(a: T, b?: T | T[] | null): boolean => {
  if (b === undefined || b === null) {
    return false
  }

  if (Array.isArray(b)) {
    return b.some(v => _isOptionEqualToValue(a, v))
  } else {
    return a === b
  }
}
