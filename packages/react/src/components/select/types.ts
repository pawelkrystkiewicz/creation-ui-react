import {
  BaseComponentProps,
  ElementSize,
  ElementVariant,
  InputBaseProps,
} from '../../types'
import { ChipProps } from '../chip'

export type SelectOptionDefault = string | { label: string; disabled?: boolean }
export interface SelectProps<T = SelectOptionDefault>
  extends BaseComponentProps {
  /**
   * CSS classes API
   */
  cx?: InputBaseProps['cx']
  /**
   * Variant of the default Tags
   */
  defaultTagProps?: ChipProps
  /**
   * Current value to display
   */
  value?: T | null
  /**
   * Default value to display when component is not controlled
   */
  defaultValue?: T
  /**
   * Is component clearable
   */
  clearable?: boolean
  /**
   * Is disabled
   */
  disabled?: boolean
  /**
   * Error to display for this input
   */
  error?: React.ReactNode
  /**
   * Helper text to display below the input
   */
  helperText?: React.ReactNode
  /**
   * Label to display above the input
   */
  label?: string

  /**
   * Maximum height of the dropdown list
   */
  maxHeight?: number
  /**
   * Indicates loading state
   */
  loading?: boolean
  /**
   * Loop list navigation?
   */
  loopListNavigation?: boolean
  /**
   * List options
   */
  options?: T[]

  /**
   * Placeholder
   */
  placeholder?: string | null

  /**
   * Is input read only
   */
  readOnly?: boolean

  /**
   * Is field required
   */
  required?: boolean

  /**
   * Size of the component
   */
  size?: ElementSize

  /**
   * Clear button tooltip text
   */
  textClear?: string | null
  /**
   * Close button tooltip text
   */
  textClose?: string | null

  /**
   * Close button tooltip text
   */
  textEmpty?: string | null
  /**
   * Variant of the input
   */
  variant?: ElementVariant
  /**
   * z-index configuration
   */
  zIndex?: { list?: number }

  /**
   * Custom function to compare option and value
   * @param {T} option - The option to compare.
   * @param {T|null} value - The value to compare with the option.
   * @returns {boolean} - The result of the comparison.
   */
  isOptionEqualToValue?: (option: T, value?: T | null) => boolean

  /**
   * Getter for option disabled state
   * @param {T} option - The option to check.
   * @returns {boolean} - The disabled state of the option.
   */
  getOptionDisabled?: (option: T) => boolean

  /**
   * Getter for option label
   * @param {T} option - The option to get label from.
   * @returns {string} - The label of the option.
   */
  getOptionLabel?: (option: T) => string

  /**
   * Callback function that is called when the value changes.
   * @param { T | null } value - The new value(s). Returns an array of selected values. If !multiple, will return an array with one value.
   */
  onChange?: (value: T | null) => void

  /**
   * onClear callback
   */
  onClear?: () => void

  /**
   * Component to display list options
   * @param {RenderOptionProps} props - The properties of the option.
   * @param {T} option - The option to render.
   * @returns {React.ReactNode} - The rendered option component.
   */
  renderOption?: (props: RenderOptionProps, option: T) => React.ReactNode

  /**
   * Component to display selection
   * @param {T} option - The selected option to render.
   * @returns {React.ReactNode} - The rendered selection component.
   */
  renderSelection?: (option: T) => React.ReactNode
}

export interface SelectViewProps extends Omit<SelectProps, 'size'> {}

export interface RenderOptionProps {
  key: string
  tabIndex: number
  'aria-selected': boolean
  'aria-disabled': boolean
  'aria-label': string
  role: string
  className: string
  ref: (node: any) => void
  active: boolean
  selected: boolean
  disabled: boolean
  label: string
}
