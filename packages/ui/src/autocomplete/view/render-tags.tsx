import { Chip, ChipProps } from '../..'

export type AutocompleteRenderTagsProps<T> = {
  renderableOptions: T[]
  removeSelected?: (option: T) => void
  getOptionLabel?: (option: T) => string
  defaultTagProps?: Omit<ChipProps, 'label' | 'onDelete'>
}

export const _renderTags = <T,>({
  renderableOptions,
  removeSelected,
  getOptionLabel,
  defaultTagProps,
}: AutocompleteRenderTagsProps<T>) =>
  renderableOptions.map((option: T) => {
    const label = getOptionLabel?.(option) ?? (option as string)
    const remove = () => removeSelected?.(option)
    return (
      <Chip key={label} label={label} onDelete={remove} {...defaultTagProps} />
    )
  })

export type AutocompleteRenderTags<T> = typeof _renderTags<T>
