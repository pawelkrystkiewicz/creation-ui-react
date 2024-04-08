import { DropdownMaxHeight } from '../../types'

const asPx = (value: number | string): string => `${value}px`

export const getDropdownHeight = (
  maxHeight: DropdownMaxHeight = 500,
  availableHeight: number
): string => {
  if (typeof maxHeight === 'number') {
    return maxHeight >= availableHeight
      ? asPx(availableHeight)
      : asPx(maxHeight)
  }

  return maxHeight === 'available'
    ? asPx(availableHeight)
    : (maxHeight as string)
}
