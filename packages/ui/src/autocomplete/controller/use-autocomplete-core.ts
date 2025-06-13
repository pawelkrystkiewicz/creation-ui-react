import { useCallback, useEffect, useRef, useState } from 'react'
import { getFlatOptions } from '../../utils/normalize-dropdown-options'
import type { AutocompleteOptionDefault, AutocompleteProps } from '../types'
import { _isOptionEqualToValue } from '../utils/is-equal-to-value'
import { createFilterOptions } from '../utils/utils'

export function useAutocompleteCore<T = AutocompleteOptionDefault>(
  props: AutocompleteProps<T>,
) {
  const {
    value,
    options = [],
    multiple = false,
    filterOptions = createFilterOptions<T>(),
    getOptionLabel: getOptionLabelProp = (option: T): string =>
      typeof option === 'string' ? option : (option as any).label,
    isOptionEqualToValue = _isOptionEqualToValue<T>,
    getOptionDisabled = (option: T) => (option as any).disabled,
    filterSelectedOptions = false,
    onChange,
    onInputChange,
    onCreate,
    maxHeight,
    zIndex,
    defaultTagProps = { variant: 'outlined', color: 'mono' },
    autoHighlight = false,
    limit,
    renderOption,
    renderSelection,
    renderTags,
    getLimitTagsText = (more: number) => `+${more}`,
    textEmpty = 'No options',
    textNotFound = 'No results found',
    textLoading = 'Loading...',
    textCreate = 'Create',
    clearable,
    readOnly,
    disabled,
    ...rest
  } = props

  let getOptionLabel = getOptionLabelProp
  getOptionLabel = (option: T) => {
    const optionLabel = getOptionLabelProp(option)
    if (typeof optionLabel !== 'string') {
      if (process.env.NODE_ENV !== 'production') {
        const erroneousReturn =
          optionLabel === undefined
            ? 'undefined'
            : `${typeof optionLabel} (${optionLabel})`
        console.error(
          `CUI: The \`getOptionLabel\` method of [Autocomplete] returned ${erroneousReturn} instead of a string for ${JSON.stringify(
            option,
          )}.`,
        )
      }
      return String(optionLabel)
    }
    return optionLabel
  }

  const [open, setOpen] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [activeIndex, setActiveIdx] = useState<number | null>(null)

  const isQuery = !!query?.trim()
  const isEmpty = value === null || (Array.isArray(value) && value.length === 0)
  const interactionsDisabled = disabled || readOnly
  const isClearable = clearable && (!isEmpty || isQuery)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const clearSearch = useCallback(() => setQuery(''), [])

  const clearableCallback = useCallback(() => {
    switch (multiple) {
      case true:
        // @ts-expect-error
        onChange?.([])
        break
      case false:
        onChange?.(null)
        break
    }
    onInputChange?.({ target: { value: '' } } as any)
    clearSearch()
  }, [multiple, onChange, onInputChange, clearSearch])

  const createCallback = useCallback(() => {
    onCreate?.(query)
    clearSearch()
  }, [onCreate, query, clearSearch])

  const initiallyFiltered = filterSelectedOptions
    ? options.filter(option => {
        if (
          ((multiple ? value : [value]) as T[]).some(v =>
            isOptionEqualToValue(option, v),
          )
        ) {
          return false
        }
        return true
      })
    : options

  const filteredOptions: T[] = open
    ? filterOptions(initiallyFiltered, { query, getOptionLabel })
    : []

  const toggleOpen = useCallback(() => setOpen(o => !o), [])

  const handleSelect = useCallback(
    (option: T) => {
      switch (multiple) {
        case true: {
          clearSearch()
          const newValue = ((isEmpty ? [] : value) as T[]).concat(option)
          // @ts-expect-error
          onChange?.(newValue)
          break
        }
        case false: {
          // @ts-expect-error
          onChange?.(option)
          setActiveIdx(null)
          setOpen(false)
          setQuery(getOptionLabel?.(option))
          break
        }
      }
    },
    [multiple, clearSearch, isEmpty, value, onChange, getOptionLabel],
  )

  const handleRemoveSelected = useCallback(
    (option: T) => {
      if (multiple) {
        // @ts-expect-error
        const newValue = value?.filter((o: any) => o.id !== option.id)
        onChange?.(!multiple ? getFlatOptions(newValue) : newValue)
      }
    },
    [multiple, value, onChange],
  )

  const retainInputValue = useCallback(() => {
    if (value && !multiple) {
      // @ts-expect-error
      const label = getOptionLabel?.(value) || ''
      if (typeof label !== 'string' || typeof query !== 'string') {
        clearSearch()
      }
      if (!open && label !== query) {
        setQuery(label)
      }
    }
  }, [value, multiple, getOptionLabel, query, open, clearSearch])

  useEffect(() => {
    retainInputValue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onInputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (interactionsDisabled) return
      const {
        target: { value },
      } = event
      const text = value
      setQuery(text)
      onInputChange?.(event)
      if (text) {
        setOpen(true)
        setActiveIdx(0)
      } else {
        setOpen(false)
      }
    },
    [interactionsDisabled, onInputChange],
  )

  return {
    // State
    open,
    setOpen,
    query,
    setQuery,
    activeIndex,
    setActiveIdx,
    filteredOptions,
    isQuery,
    isEmpty,
    clearable: isClearable,
    listRef,
    // Logic
    clearSearch,
    clearableCallback,
    createCallback,
    toggleOpen,
    handleSelect,
    handleRemoveSelected,
    retainInputValue,
    onInputChangeHandler,
    // Props/data
    value,
    options,
    multiple,
    getOptionLabel,
    getOptionDisabled,
    filterOptions,
    renderOption,
    renderSelection,
    renderTags,
    getLimitTagsText,
    textEmpty,
    textNotFound,
    textLoading,
    textCreate,
    defaultTagProps,
    autoHighlight,
    limit,
    zIndex,
    maxHeight,
    ...rest,
  }
}
