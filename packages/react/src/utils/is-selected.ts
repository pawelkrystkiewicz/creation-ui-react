import { DropdownOptionType } from '../types'

export const isSelected = (
  value: DropdownOptionType | null,
  selected: null | DropdownOptionType | DropdownOptionType[]
) => {
  switch (Array.isArray(selected)) {
    case true:
      // @ts-expect-error
      return selected.some(o => o.id === value.id)
    case false:
      // @ts-expect-error
      return selected?.id === value.id
    default:
      return false
  }
}
