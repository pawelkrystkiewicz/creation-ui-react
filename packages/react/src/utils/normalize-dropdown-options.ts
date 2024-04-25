import { DropdownOptionType, DropdownValueType } from '../types'

export const normalizeOptions = (
  options: string[] | DropdownOptionType[] | null
): DropdownOptionType[] => {
  switch (Array.isArray(options) && typeof options[0] === 'string') {
    case true:
      return (options as string[]).map((option: string) => ({
        id: option,
        label: option,
      }))
    default:
      return (options as DropdownOptionType[]) ?? []
  }
}

export const normalizeValue = (
  value?: DropdownValueType | null
): DropdownOptionType | DropdownOptionType[] | null => {
  if (!value) return null

  switch (true) {
    case Array.isArray(value) && typeof value[0] === 'string':
      return (value as string[]).map((option: string) => ({
        id: option,
        label: option,
      }))
    case typeof value === 'string':
      return {
        id: value as string,
        label: value as string,
      }
    default:
      return value as DropdownOptionType | DropdownOptionType[]
  }
}

export const getFlatOptions = (
  options: DropdownOptionType[] | DropdownOptionType | null
): string[] => {
  switch (Array.isArray(options)) {
    case true:
      // @ts-expect-error
      return options.map((option: DropdownOptionType) => option.label)
    case false:
      return [(options as DropdownOptionType).label]
    default:
      return []
  }
}
