import type { ChipProps, DropdownMaxHeight, InputProps } from '../'
import { FnIsOptionEqualToValue } from './utils/is-equal-to-value'
import type { AutocompleteRenderOption } from './view/render-option'
import type { AutocompleteRenderTags } from './view/render-tags'

export type AutocompleteOptionDefault =
  | string
  | { label: string; disabled?: boolean }

export type AutocompleteProps<T = AutocompleteOptionDefault> = Omit<
  InputProps,
  'interactionsDisabled' | 'layout' | 'children' | 'type' | 'as' | 'onChange'
> & {
  /**
   * Disable read only
   */
  readOnly?: boolean
  /**
   * Disable interactions
   */
  disabled?: boolean
  /**
   * Custom function to compare option and value
   */
  isOptionEqualToValue?: FnIsOptionEqualToValue<T>
  /**
   * Getter for option disabled state
   */
  getOptionDisabled?: (option: T) => boolean
  /**
   * Getter for option label
   */
  getOptionLabel?: (option: T) => string
  /**
   * Component to display list options
   */
  renderOption?: AutocompleteRenderOption<T>
  /**
   * Component to display list options
   */
  renderSelection?: (option: T) => React.ReactNode
  /**
   * Component to display selection in `multiple` mode
   */
  renderTags?: AutocompleteRenderTags<T>
  /**
   * Text to display when the tags are truncated (limitTags).
    Signature:
    function(more: number) => ReactNode
    more: The number of truncated tags.
   */
  getLimitTagsText?: (more: number) => string
  /**
   * Filter options function
   */
  filterOptions?: (
    options: T[],
    filterOptions: AutocompleteFilterOptions,
  ) => T[]
  /**
   * List options
   */
  options?: T[]
  /**
   * Close button tooltip text
   */
  textEmpty?: string | null
  /**
   * Not found text
   */
  textNotFound?: string | null
  /**
   * Loading icon tooltip text
   */
  textLoading?: string | null

  /**
   * Clear button tooltip text
   */
  textClear?: string | null
  /**
   * Create option text
   */
  textCreate?: string | null
  /**
   * Should highlight matched text
   */
  autoHighlight?: boolean

  /**
   * Limit of multiple selected to be displayed in input
   */
  limit?: number
  /**
   * Callback function that is called when creating new option.
   * @param title:string - The new value(s). Calls with the current input value.
   */
  onCreate?: (title: string) => void
  /**
   * Callback function that is called when the input value changes.
   */
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * @default 500
   * either provide a number of pixels or a string like 1rem, 20vh, etc.
   * 'availableHeight': will set the max height of the dropdown to the available height of the screen
   */
  maxHeight?: DropdownMaxHeight
  /**
   * Props of the default tags component (Chip)
   */
  defaultTagProps?: ChipProps
  /**
   * z-index configuration
   */
  zIndex?: { list?: number }
  /**
   * Should filter selected options from the list
   */
  filterSelectedOptions?: boolean
} & (
    | {
        /**
         * Current value to display
         */
        value?: T | null
        /**
         * Allow selection of multiple value
         */
        multiple?: false
        /**
         * Callback function that is called when the value changes.
         * @param { T |  null } value - The new value(s). Returns an array of selected values. If !multiple, will return an array with one value.
         */
        onChange?: (value: T | null) => void
      }
    | {
        /**
         * Current value to display
         */
        value?: T[] | null
        /**
         * Allow selection of multiple value
         */
        multiple: true
        /**
         * Callback function that is called when the value changes.
         * @param { T[] | null } value - The new value(s). Returns an array of selected values. If !multiple, will return an array with one value.
         */
        onChange?: (value: T[] | null) => void
      }
  )

export interface AutocompleteFilterOptionsConfig<
  T = AutocompleteOptionDefault,
> {
  ignoreAccents?: boolean
  ignoreCase?: boolean
  limit?: number
  matchFrom: 'start' | 'any' | 'end'
  stringify?: (option: T) => string
  trim?: boolean
}

export interface AutocompleteFilterOptions<T = any> {
  query: string
  getOptionLabel: (option: T) => string
}

export type AutocompleteOptionProps = {
  className: string
  index: number
  query: string
  active: boolean
} & GetItemPropsReturnType

export type GetItemPropsReturnType = {
  'aria-selected'?: boolean
  'aria-disabled'?: boolean
  role: string
  key: string
  multiple: boolean
  selected: boolean
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  ref: React.RefObject<HTMLLIElement>
} & React.HTMLProps<HTMLLIElement>

export type AutocompleteInnerInputProps =
  React.InputHTMLAttributes<HTMLInputElement>
