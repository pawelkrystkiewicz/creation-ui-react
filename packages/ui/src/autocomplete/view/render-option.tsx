import { Highlighter, Icon } from '../..'
import { AutocompleteOptionDefault, AutocompleteOptionProps } from '../types'

type RenderOptionProps<T = AutocompleteOptionDefault> = {
  option: T
  index: number
  autoHighlight?: boolean
  getOptionProps: (option: T, index: number) => AutocompleteOptionProps
} & (
  | {
      getOptionLabel: (option: T) => string
    }
  | {
      getOptionLabel?: never
    }
)

export const _renderOption = <T,>({
  option,
  index,
  autoHighlight,
  getOptionProps,
  getOptionLabel,
}: RenderOptionProps<T>): React.ReactNode => {
  // if getOptionLabel is not provided assume options is a string
  const label = getOptionLabel?.(option) ?? (option as string)
  const props = getOptionProps(option, index)

  return (
    <li {...props}>
      {autoHighlight ? (
        <Highlighter searchWords={[props.query]} textToHighlight={label} />
      ) : (
        label
      )}
      <Icon icon='check' className='[li[aria-selected="true"]_&]:block hidden text-primary' />
    </li>
  )
}

export type AutocompleteRenderOption<T> = typeof _renderOption<T>
