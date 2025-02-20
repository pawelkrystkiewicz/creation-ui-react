import { useAutocomplete } from '../context'
import { AutocompleteOptionDefault, AutocompleteProps } from '../types'
import { Highlighter } from '../../'
export const renderOptionInternalContainer = (
  option: AutocompleteOptionDefault,
  index: number,
) => {
  const { renderOption = _renderOption, getOptionProps } = useAutocomplete()
  const props = getOptionProps(option, index)
  return renderOption?.(props, option)
}

export const _renderOption: AutocompleteProps['renderOption'] = (
  props,
  option,
) => {
  const { getOptionLabel, autoHighlight } = useAutocomplete()
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
