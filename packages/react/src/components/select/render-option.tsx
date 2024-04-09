import { useSelect } from './context'
import { SelectOptionDefault, SelectProps } from './types'

export const renderOptionInternalContainer = (
  option: SelectOptionDefault,
  index: number,
) => {
  const { renderOption = _renderOption, getOptionProps } = useSelect()
  const props = getOptionProps(option, index)
  return renderOption?.(props, option)
}

export const _renderOption: SelectProps['renderOption'] = (props, option) => {
  const { getOptionLabel } = useSelect()
  const label = getOptionLabel!(option)

  return <li {...props}>{label}</li>
}
