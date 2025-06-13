import React from 'react'
import {
  useFloating,
  autoUpdate,
  flip,
  offset,
  size as floatingSize,
  useRole,
  useDismiss,
  useListNavigation,
  useInteractions,
} from '@floating-ui/react'
import Keyboard from 'keyboard-key'
import { InputBase, DropdownChevron } from '../../'
import { selectOptionClasses } from '../../classes'
import { AutocompleteContext } from '../context'
import {
  AutocompleteProps,
  AutocompleteOptionProps,
  GetItemPropsReturnType,
} from '../types'
import { AUTOCOMPLETE_MARGIN } from '../constants'
import { AutocompleteView } from '../view/autocomplete.view'
import { useAutocompleteCore } from './use-autocomplete-core'

export function Autocomplete<T>(props: AutocompleteProps<T>) {
  const core = useAutocompleteCore(props)

  const {
    open,
    setOpen,
    query,
    activeIndex,
    setActiveIdx,
    filteredOptions,
    value,
    multiple,
    getOptionLabel,
    getOptionDisabled,
    renderOption,
    renderSelection,
    renderTags,
    getLimitTagsText,
    textEmpty,
    textLoading,
    textNotFound,
    defaultTagProps,
    autoHighlight,
    limit,
    zIndex,
    maxHeight,
    clearable,
    clearableCallback,
    createCallback,
    handleRemoveSelected,
    onInputChangeHandler,
    listRef,
    textCreate,
  } = core

  // Floating UI setup
  const { refs, context, floatingStyles } = useFloating<HTMLInputElement>({
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
    onOpenChange: open => {
      if (props.disabled || props.readOnly) return
      setOpen(open)
    },
    open,
    middleware: [
      flip({ padding: AUTOCOMPLETE_MARGIN }),
      offset(5),
      floatingSize({
        apply({ rects, availableHeight, elements }) {
          const height = maxHeight || availableHeight
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

  // Input props
  const inputProps = {
    role: 'textbox',
    onChange: onInputChangeHandler,
    value: query,
    'aria-autocomplete': 'list',
    'aria-controls': 'autocomplete-list',
    onClick() {
      setOpen(true)
    },
    onBlur() {
      core.retainInputValue()
    },
    onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
      switch (event.key) {
        case 'Enter':
          if (activeIndex != null && filteredOptions[activeIndex]) {
            core.handleSelect(filteredOptions[activeIndex])
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

  // Option props
  const getOptionProps = (
    option: T,
    index: number,
  ): AutocompleteOptionProps => {
    const active = activeIndex === index
    const selected =
      getOptionLabel && getOptionLabel(option) && core.value
        ? core.getOptionLabel(option) === core.getOptionLabel(core.value as T)
        : false
    const disabled = getOptionDisabled(option)
    const label = getOptionLabel?.(option)
    const truncate = typeof renderOption !== 'function'

    const itemProps = getItemProps({
      ref: node => {
        listRef.current[index] = node
      },
      onKeyDown(e: React.KeyboardEvent<HTMLLIElement>) {
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
            core.handleSelect(option)
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
          core.handleSelect(option)
        }
        refs.domReference.current?.focus()
      },
      style: { ...(truncate ? { maxWidth: undefined } : {}) },
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
    if (props.disabled || props.readOnly) return
    setOpen(!open)
  }

  return (
    <InputBase
      variant={props.variant}
      endAdornment={
        <DropdownChevron open={open} onClick={handleChevronClick} />
      }
      clearable={clearable}
      onClear={clearableCallback}
      cx={props.cx}
      {...getReferenceProps({ ref: refs.setReference })}
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
        <AutocompleteView<T> />
      </AutocompleteContext.Provider>
    </InputBase>
  )
}
