import { Highlighter } from '../../'
import { useAutocomplete } from '../context'
import { AutocompleteOptionDefault, AutocompleteOptionProps } from '../types'

export function renderOptionInternalContainer<T = AutocompleteOptionDefault>(
  option: T,
  index: number,
) {
  const { renderOption = _renderOption, getOptionProps } = useAutocomplete<T>()
  const props = getOptionProps(option, index)
  return renderOption?.(props, option)
}

export const _renderOption = <T,>(
  props: AutocompleteOptionProps,
  option: T,
): React.ReactNode => {
  const { getOptionLabel, autoHighlight } = useAutocomplete<T>()
  const label = getOptionLabel!(option)

  return (
    <li {...props}>
      {autoHighlight ? (
        <Highlighter searchWords={[props.query]} textToHighlight={label} />
      ) : (
        label
      )}
    </li>
  )
}
