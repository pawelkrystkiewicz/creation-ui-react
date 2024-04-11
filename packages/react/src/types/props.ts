import {
  ForwardedComponent,
  FunctionalComponent,
  HTMLProps,
  JSXNode,
} from './base'
import { ElementSize, ElementVariant, HTMLInputType } from './ui'

export type DropdownOptionType = {
  id: string
  label: string
  disabled?: boolean
}

export type CommitInfo = {
  shortHash: string
  hash: string
  subject: string
  sanitizedSubject: string
  body: string
  authoredOn: string
  committedOn: string
  author: {
    name: string
    email: string
  }
  committer: {
    name: string
    email: string
  }
  notes: string
  branch: string
  tags: string[]
  version: string
  timestamp: string
}

export interface MultipleEllipsisFormatter {
  value: string
  hidden: number
  total: number
}

export interface BaseComponentProps {
  className?: string
  /**
   * HTML id of element
   */
  id?: string
  /**
   * Is element required?
   */
  required?: boolean
  /**
   * Is element read-only?
   */
  readOnly?: boolean
  /**
   * element size
   */
  size?: ElementSize
  /**
   * Input label
   */
  label?: string
  /**
   * Is disabled?
   */
  disabled?: boolean
  /**
   * Error message
   */
  error?: JSXNode
  /**
   * Helper text
   */
  helperText?: JSXNode
}

export interface InputBaseProps extends Omit<BaseComponentProps, 'className'> {
  /**
   * Component is in loading state?
   */
  loading?: boolean
  /**
   * Variant of the component?
   */
  variant?: ElementVariant
  /**
   * Element to be displayed on the left side of the input
   */
  startAdornment?: JSXNode
  /**
   * Element to be displayed on the right side of the input
   */
  endAdornment?: JSXNode
  /**
   * Type of HTML input
   */
  type?: HTMLInputType
  /**
   * Children
   */
  children: JSXNode
  /**
   * Show clear input icon?
   */
  clearable?: boolean
  /**
   * Callback for clear input icon.
   */
  onClear?: () => void
  /**
   * Layout of elements
   */
  layout?: 'column' | 'row'
  /**
   * CSS classes API
   */
  cx?: InputClassNamesAPI
  /**
   * Disable interactions e.g. while loading, readOnly, disabled. This will prevent interactions with the input by "pointer-events-none".
   */
  interactionsDisabled?: boolean
  /**
   * Placeholder
   */
  placeholder?: string
}

export type InputClassNamesAPI = {
  container?: {
    outer?: string
    inner?: string
  }
  label?: string
  input?: string
}

export type ReadableError = {
  message: JSXNode
  title: JSXNode
  code?: JSXNode
}

export type DropdownValueType =
  | DropdownOptionType
  | DropdownOptionType[]
  | string
  | string[]
  | null

export type OptionComponentProps = OptionProps & HTMLProps<HTMLLIElement>
export type OptionComponentType =
  | ForwardedComponent<Omit<OptionComponentProps, 'ref'> & { ref?: any }>
  | FunctionalComponent<OptionComponentProps>

export type DropdownMaxHeight = number | string | 'available'

export interface DropdownProps extends BaseComponentProps {
  /**
   * CSS classes API
   */
  cx?: InputBaseProps['cx']
  /**
   * Placeholder
   */
  placeholder?: string | null
  /**
   * List options
   */
  options?: DropdownOptionType[] | string[]
  /**
   * Component to display list options
   */
  optionComponent?: OptionComponentType
  /**
   * Component to display list options
   */
  selectedOptionComponent?: FunctionalComponent<SelectedOptionProps>
  /**
   * Default value to display when component is not controlled
   */
  defaultValue?: DropdownOptionType | string
  /**
   * Current value to display
   */
  value?: DropdownValueType
  /**
   * Close button tooltip text
   */
  emptyText?: string | null
  /**
   * Not found text
   */
  notFoundText?: string | null
  /**
   * Loading icon tooltip text
   */
  loadingText?: string | null
  /**
   * Clear button tooltip text
   */
  clearText?: string | null
  /**
   * Close button tooltip text
   */
  closeText?: string | null
  // flags
  /**
   * Should display clear value button
   */
  clearable?: boolean
  /**
   * Is field required
   */
  required?: boolean
  /**
   * Is disabled
   */
  disabled?: boolean
  /**
   * Allow selection of multiple value
   */
  multiple?: boolean
  /**
   * Should highlight matched text TODO: not implemented
   */
  highlightSearch?: boolean
  /**
   * Limit of multiple selected to be displayed in input
   */
  limit?: number
  /**
   * Should display Loader
   */
  loading?: boolean
  /**
   * Format of count of multiple selected to be displayed in input
   */
  getLimitText?: (more: number) => string
  /**
   * Filter options function
   */
  filterOptions?: (
    query?: string
  ) => (option: DropdownOptionType | any) => string
  /**
   * onChange callback. Will return array of selected values. If !multiple, will return array with one value.
   * @param value
   * @returns
   */
  onChange?: (value: DropdownValueType) => void
  /**
   * @default 500
   * either provide a number of pixels or a string like 1rem, 20vh, etc.
   * 'availableHeight': will set the max height of the dropdown to the available height of the screen
   */
  maxHeight?: DropdownMaxHeight
  /**
   * Variant of the input
   */
  variant?: ElementVariant
  /**
   * z-index configuration
   */
  zIndex?: { list?: number }
}

export interface OptionProps {
  active: boolean
  selected?: boolean
  option: DropdownOptionType
  multiple?: boolean
  size?: ElementSize
  children?: JSXNode
}

export interface SelectedOptionProps {
  option: DropdownOptionType
  children?: JSXNode
  idx: number
}

export type BreadcrumbLink = {
  href: string
  label: string
  disabled?: boolean
}
