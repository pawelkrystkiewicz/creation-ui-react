import type { DropdownOptionType } from '../types'

export const formatOptionValue = (
  value: DropdownOptionType | string | null
): string =>
  value && typeof value === 'object' ? value.label : (value as string)
