import {
  autoUpdate,
  flip,
  size as floatingSize,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import Keyboard from 'keyboard-key'
import React, { useEffect, useRef, useState } from 'react'
import { Chip, DropdownChevron, getDropdownHeight, InputBase } from '../../'
import { selectOptionClasses } from '../../classes'
import { getFlatOptions } from '../../utils/normalize-dropdown-options'
import { AUTOCOMPLETE_MARGIN } from '../constants'
import { AutocompleteContext } from '../context'
import {
  AutocompleteInnerInputProps,
  AutocompleteOptionProps,
  AutocompleteProps,
  GetItemPropsReturnType,
} from '../types'
import { _isOptionEqualToValue } from '../utils/is-equal-to-value'
import { createFilterOptions } from '../utils/utils'
import { AutocompleteView } from '../view/autocomplete.view'

export function Autocomplete<T>(props: AutocompleteProps<T>) {
  const {
    textLoading = 'Loading...',
    textEmpty = 'No options',
    textNotFound = 'No results found',
    textCreate = 'Create',
    multiple = false,
    limit,
    maxHeight,
    variant,
    zIndex,
    cx,
    value,
    options = [],
    filterSelectedOptions = false,
    defaultTagProps = {
      variant: 'outlined',
      color: 'mono',
    },
    autoHighlight = false,
    onChange,
    filterOptions = createFilterOptions<T>(),
    getLimitTagsText = (more: number) => `+${more}`,
    renderOption,
    renderSelection,
    getOptionLabel: getOptionLabelProp = (option: T): string =>
      typeof option === 'string' ? option : (option as any).label,
    isOptionEqualToValue = _isOptionEqualToValue<T>,
    getOptionDisabled = (option: T) => (option as any).disabled,
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

  const _renderTags = (
    selected: T[],
    handleRemoveSelected: (option: T) => void,
  ) => {
    return selected?.map(option => {
      const label = getOptionLabel(option)
      const onDelete = () => handleRemoveSelected(option)
      return (
        <Chip
          {...defaultTagProps}
          key={label}
          label={label}
          onDelete={onDelete}
        />
      )
    })
  }

  const { renderTags = _renderTags } = props

  const [open, setOpen] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [activeIndex, setActiveIdx] = useState<number | null>(null)
  const [width, setWidth] = useState<number | undefined>(undefined)

  const isQuery = !!query?.trim()
  const isEmpty = value === null || (Array.isArray(value) && value.length === 0)
  const interactionsDisabled =
    //
    // props.disabled ||
    props.loading
  //  || props.readOnly
  const clearable = props.clearable && (!isEmpty || isQuery)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const clearSearch = () => setQuery('')

  const clearableCallback = () => {
    onChange?.(multiple ? [] : null)
    props.onInputChange?.({ target: { value: '' } } as any)
    clearSearch()
  }

  const createCallback = () => {
    props.onCreate?.(query)
    clearSearch()
  }

  // @ts-ignore
  const { refs, context, floatingStyles } = useFloating<HTMLInputElement>({
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
    onOpenChange: open => {
      if (interactionsDisabled) return
      setOpen(open)
    },
    open,
    middleware: [
      flip({ padding: AUTOCOMPLETE_MARGIN }),
      offset(5),
      floatingSize({
        apply({ rects, availableHeight, elements }) {
          const height = getDropdownHeight(maxHeight, availableHeight)

          setWidth(Number(rects.reference.width?.toFixed(0)))

          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: height,
            overflowY: 'auto',
          })
        },
        padding: AUTOCOMPLETE_MARGIN,
      }),
    ],
  })

  const role = useRole(context, { role: 'listbox' })
  const dismiss = useDismiss(context)
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex: activeIndex,
    onNavigate: setActiveIdx,
    virtual: true,
    loop: true,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav],
  )

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (interactionsDisabled) return
    const {
      target: { value },
    } = event

    const text = value
    setQuery(text)
    props.onInputChange?.(event)

    if (text) {
      setOpen(true)
      setActiveIdx(0)
    } else {
      setOpen(false)
    }
  }

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

  const toggleOpen = () => setOpen(!open)

  const handleSelect = (option: T) => {
    if (multiple) {
      clearSearch()
      const newValue = ((isEmpty ? [] : value) as T[]).concat(option)
      onChange?.(newValue)
    } else {
      onChange?.(option)
      setActiveIdx(null)
      setOpen(false)
      setQuery(getOptionLabel?.(option))
    }
  }

  const handleRemoveSelected = (option: T) => {
    if (multiple) {
      // @ts-expect-error
      const newValue = value?.filter((o: any) => o.id !== option.id)
      onChange?.(!multiple ? getFlatOptions(newValue) : newValue)
    }
  }

  const containerProps = getReferenceProps({
    ref: refs.setReference,
  })

  const retainInputValue = () => {
    if (value && !multiple) {
      const label = getOptionLabel?.(value) || ''

      if (typeof label !== 'string' || typeof query !== 'string') {
        clearSearch()
      }

      if (!open && label !== query) {
        setQuery(label)
      }
    }
  }

  useEffect(() => {
    retainInputValue()
  }, [])

  const inputProps: AutocompleteInnerInputProps = {
    onChange: onInputChange,
    value: query,
    'aria-autocomplete': 'list',
    onClick() {
      setOpen(true)
    },
    onBlur() {
      retainInputValue()
    },
    onKeyDown(event) {
      switch (event.key) {
        case 'Enter':
          if (activeIndex != null && filteredOptions[activeIndex]) {
            handleSelect(filteredOptions[activeIndex])
          } else {
            createCallback()
          }
          break
        case 'Escape':
          setOpen(false)
          break
        case 'ArrowDown':
          setOpen(true)
          break
      }
    },
  }

  const getOptionProps = (
    option: T,
    index: number,
  ): AutocompleteOptionProps => {
    const active = activeIndex === index
    const selected = isOptionEqualToValue(option, value)
    const disabled = getOptionDisabled(option)
    const label = getOptionLabel?.(option)
    const truncate = typeof renderOption !== 'function'

    const itemProps = getItemProps({
      ref: node => {
        listRef.current[index] = node
      },
      onKeyDown(e) {
        if (disabled) return

        const code = Keyboard.getCode(e)

        const isEnter = code === Keyboard.Enter
        const isSpace = code === Keyboard.Spacebar

        if (isEnter || isSpace) {
          e.preventDefault()
          const wasSelected =
            (e.target as any).getAttribute?.('aria-selected') === 'true'

          if (selected && multiple) {
            handleRemoveSelected(option)
          }

          if (!wasSelected) {
            handleSelect(option)
          }

          refs.domReference.current?.focus()
        }
      },
      onClick(e: React.MouseEvent<HTMLLIElement>) {
        if (disabled) return

        const wasSelected =
          (e.target as any).getAttribute?.('aria-selected') === 'true'

        if (selected && multiple) {
          handleRemoveSelected(option)
        }

        if (!wasSelected) {
          handleSelect(option)
        }
        refs.domReference.current?.focus()
      },
      style: { ...(truncate ? { maxWidth: width } : {}) },
    }) as unknown as GetItemPropsReturnType

    return {
      ...itemProps,
      key: label,
      multiple,
      selected,
      className: selectOptionClasses({
        selected,
        disabled,
        truncate,
      }),
      index,
      query,
      active,
      tabIndex: active ? 0 : -1,
      'aria-label': label,
      'aria-selected': selected,
      'aria-disabled': disabled,
      role: 'option',
    }
  }

  const listProps = {
    ref: refs.setFloating,
    placement: context.placement,
    style: {
      ...floatingStyles,
      zIndex: zIndex?.list,
    },
    ...getFloatingProps(),
  }

  const handleChevronClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (interactionsDisabled) return
    toggleOpen()
  }

  return (
    <>
      <InputBase
        variant={variant}
        loading={props.loading}
        endAdornment={
          <DropdownChevron open={open} onClick={handleChevronClick} />
        }
        clearable={clearable}
        onClear={clearableCallback}
        cx={cx}
        {...containerProps}
      >
        <AutocompleteContext.Provider
          value={{
            renderTags,
            handleRemoveSelected,
            setOpen,
            multiple,
            autoHighlight,
            clearable,
            floatingContext: context,
            options: filteredOptions,
            activeIndex,
            limit,
            selected: value,
            propsList: listProps,
            propsInput: inputProps,
            textEmpty,
            textLoading,
            textNotFound,
            open,
            defaultTagProps,
            renderOption,
            renderSelection,
            getOptionLabel,
            getOptionProps,
            getLimitTagsText,
            onCreate: createCallback,
            allowCreate: !!props.onCreate,
            textCreate,
            query,
          }}
        >
          <AutocompleteView />
        </AutocompleteContext.Provider>
      </InputBase>
    </>
  )
}


