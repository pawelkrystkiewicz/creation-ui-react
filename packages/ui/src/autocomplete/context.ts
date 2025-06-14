import { createContext, useContext } from 'react'
import {
  AutocompleteOptionProps,
  AutocompleteOptionDefault,
  AutocompleteProps,
  AutocompleteInnerInputProps,
} from './types'

export interface AutocompleteContextValue<T = any>
  extends Pick<
    AutocompleteProps<T>,
    | 'renderOption'
    | 'renderSelection'
    | 'getOptionLabel'
    | 'getLimitTagsText'
    | 'renderTags'
    | 'multiple'
    | 'clearable'
    | 'limit'
    | 'options'
    | 'textLoading'
    | 'textEmpty'
    | 'textNotFound'
    | 'defaultTagProps'
    | 'autoHighlight'
    | 'onCreate'
    | 'textCreate'
  > {
  query?: string
  allowCreate?: boolean
  open?: boolean
  floatingContext: any
  activeIndex: number | null
  selected?: T | T[] | null
  /** PROPS **/
  propsInput: AutocompleteInnerInputProps
  propsList: Record<string, unknown>
  getOptionProps: (option: T, index: number) => AutocompleteOptionProps
  /** CONTROLS **/
  setOpen: (value: boolean) => void
  handleRemoveSelected: (option: AutocompleteOptionDefault) => void
}

// Define a non-generic context first
// We will cast the type later
export const AutocompleteContext = createContext<any>(null)

export const useAutocomplete = <T = AutocompleteOptionDefault>() => {
  const context = useContext(
    AutocompleteContext,
  ) as AutocompleteContextValue<T> | null

  if (!context) {
    throw new Error(
      'useAutocomplete must be used within an AutocompleteProvider',
    )
  }
  return context
}
