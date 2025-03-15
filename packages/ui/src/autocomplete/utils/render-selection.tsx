import { useAutocomplete } from '../context'
import { AutocompleteOptionDefault } from '../types'

export const _renderSelection = (option: AutocompleteOptionDefault) => {
  const { getOptionLabel } = useAutocomplete()
  return option ? <span>{getOptionLabel?.(option)}</span> : null
}
