import { Show, ShowFirstMatching } from '../../show'
import { useAutocomplete } from '../context'
import { AutocompleteOptionDefault, AutocompleteProps } from '../types'
import Highlighter from 'react-highlight-words'

export const renderOptionInternalContainer = (
  option: AutocompleteOptionDefault,
  index: number
) => {
  const { renderOption = _renderOption, getOptionProps } = useAutocomplete()
  const props = getOptionProps(option, index)
  return renderOption?.(props, option)
}

export const _renderOption: AutocompleteProps['renderOption'] = (
  props,
  option
) => {
  const { getOptionLabel, autoHighlight } = useAutocomplete()
  const label = getOptionLabel!(option)

  return (
    <li {...props}>
      <ShowFirstMatching>
        <Show when={autoHighlight}>
          <Highlighter
            searchWords={[props.query]}
            autoEscape={true}
            textToHighlight={label}
          />
        </Show>
        <Show when={autoHighlight}>{label}</Show>
      </ShowFirstMatching>
    </li>
  )
}
