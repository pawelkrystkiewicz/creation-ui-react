export const getPropType = (
  value: string | string[] | Record<string, unknown>,
): string => {
  if (typeof value === 'string') {
    if (['true', 'false'].includes(value)) return 'boolean'

    if (!isNaN(Number(value))) return 'number'

    return 'string'
  }

  if (Array.isArray(value)) return 'array'
  if (typeof value === 'object' && value !== null) return 'object'

  return typeof value
}
