/**
 * Check if a value is empty
 * @param value
 * @returns
 */
export const isEmpty = (value: unknown) => {
  if (value === null || value === undefined) return true
  if (Array.isArray(value) && value.length === 0) return true
  if (typeof value === 'object' && Object.keys(value as object).length === 0) {
    return true
  }
  if (typeof value === 'string' && value.trim().length === 0) {
    return true
  }

  return false
}
