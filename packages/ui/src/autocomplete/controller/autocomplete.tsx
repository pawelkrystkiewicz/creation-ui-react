import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  size as floatingSize,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import clsx from 'clsx'
import Keyboard from 'keyboard-key'
import React, {
  ComponentPropsWithoutRef,
  FC,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  ClearButton,
  DropdownChevron,
  DropdownMenu,
  DropdownMenuProps,
  Input,
} from '../../'
import { selectOptionClasses } from '../../classes'
import { getFlatOptions } from '../../utils/normalize-dropdown-options'
import { AUTOCOMPLETE_MARGIN } from '../constants'
import {
  AutocompleteOptionProps,
  AutocompleteProps,
  GetItemPropsReturnType,
} from '../types'
import { _isOptionEqualToValue } from '../utils/is-equal-to-value'
import { createFilterOptions } from '../utils/utils'
import { _renderOption } from '../view/render-option'
import { _renderTags } from '../view/render-tags'

export function Autocomplete<T>(props: AutocompleteProps<T>) {
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
    defaultTagProps = {
      variant: 'outlined',
      color: 'unstyled',
      cx: {
        container: {
          outer: 'max-w-full !border-neutral-400 hover:bg-neutral-100',
          inner: 'truncate',
        },
      },
    },
    autoHighlight = false,
    limit,
    renderOption = _renderOption,
    renderSelection,
    renderTags = _renderTags,
    getLimitTagsText = (more: number) => `+${more}`,
    textEmpty = 'No options',
    textNotFound = 'No results found',
    textCreate = 'Create',
    placeholder = 'Search...',
    readOnly,
    disabled,
    border,
    background,
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
  const isClearable =
    typeof props.onClear === 'function' && (!isEmpty || isQuery)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const clearSearch = useCallback(() => setQuery(''), [])

  const clearableCallback = useCallback(() => {
    // @ts-expect-error
    onChange?.(multiple ? [] : null)
    props.onClear?.()
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
          // no focus on input - automatic action
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

  // const retainInputValue = useCallback(() => {
  //   if (value && !multiple) {
  //     // @ts-expect-error
  //     const label = getOptionLabel?.(value) || ''
  //     if (typeof label !== 'string' || typeof query !== 'string') {
  //       clearSearch()
  //     }
  //     if (!open && label !== query) {
  //       setQuery(label)
  //     }
  //   }
  // }, [value, multiple, getOptionLabel, query, open, clearSearch])

  // useEffect(() => {
  //   retainInputValue()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const onInputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (interactionsDisabled) return
      const {
        target: { value },
      } = event

      setQuery(value)
      onInputChange?.(event)
      if (value) {
        setOpen(true)
        setActiveIdx(0)
      } else {
        setOpen(false)
      }
    },
    [interactionsDisabled],
  )

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
      offset(5),
      flip({
        padding: AUTOCOMPLETE_MARGIN,
        fallbackAxisSideDirection: 'end',
      }),
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
    activeIndex,
    onNavigate: setActiveIdx,
    virtual: true,
    loop: true,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav],
  )

  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = useMemo(
    () => ({
      role: 'textbox',
      placeholder,
      className: 'reset-input w-full',
      onChange: onInputChangeHandler,
      value: query,
      'aria-autocomplete': 'list',
      'aria-controls': 'autocomplete-list',
      onClick() {
        setOpen(true)
      },
      // onBlur() {
      //   retainInputValue()
      // },
      onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
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
    }),
    [activeIndex, filteredOptions?.length, query],
  )

  // Option props
  const getOptionProps = (
    option: T,
    index: number,
  ): AutocompleteOptionProps => {
    const active = activeIndex === index
    const selected = multiple
      ? (value as T[]).some(v => isOptionEqualToValue(option, v))
      : isOptionEqualToValue(option, value as T)

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
    placement: context.placement as 'bottom' | 'top',
    style: {
      ...floatingStyles,
      zIndex: zIndex?.list,
    },
    ...getFloatingProps(),
  } satisfies DropdownMenuProps

  const handleChevronClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (props.disabled || props.readOnly) return
    setOpen(!open)
  }

  const customRenderValue = useMemo(
    () =>
      typeof renderSelection === 'function' && !multiple && value != undefined,
    [renderSelection, multiple, value],
  )

  const handleCreate = useCallback(() => {
    if (!props.onCreate || !query) return
    props.onCreate(query)
  }, [query, props.onCreate])

  const displayedOptions = useMemo(
    () => (filterSelectedOptions || isQuery ? filteredOptions : options),
    [filterSelectedOptions, isQuery, filteredOptions?.length, options?.length],
  )

  const noOptionsDefined = useMemo(() => !options.length, [options.length])

  const moreTagsAreSelected = useMemo(
    () => (multiple ? (value as T[])?.length - (limit ?? 0) : 0),
    [multiple, value, limit],
  )

  const limitedOptions = useMemo(
    () => (multiple ? (value as T[])?.slice(0, limit) : []),
    [multiple, value, limit],
  )

  return (
    <>
      <Input
        containerHeight='auto'
        as={'div'}
        onClick={() => setOpen(true)}
        variant={props.variant}
        endAdornment={
          <div className='w-fit flex items-center gap-1'>
            {isClearable && (
              <ClearButton
                onClick={clearableCallback}
                role='button'
                data-testid='autocomplete-clear-button'
              />
            )}
            <DropdownChevron open={open} onClick={handleChevronClick} />
          </div>
        }
        cx={{
          container: clsx(
            props.cx?.container,
            // account for the clear button and the chevron extra width
            '[--input-pr:calc(--spacing(3.5)-1px+var(--ui-icon-height)*2)]',
          ),
          input: clsx(props.cx?.input),
        }}
        border={border}
        background={background}
        {...getReferenceProps({ ref: refs.setReference })}
      >
        {_bag => (
          <div className='flex items-center gap-2 flex-wrap'>
            {multiple &&
              renderTags({
                renderableOptions: limitedOptions,
                removeSelected: disabled ? undefined : handleRemoveSelected,
                getOptionLabel,
                defaultTagProps,
              })}
            {moreTagsAreSelected > 0 && (
              <span>{getLimitTagsText?.(moreTagsAreSelected)}</span>
            )}
            {!customRenderValue ? (
              <input {...(inputProps as any)} />
            ) : (
              renderSelection?.(value as T)
            )}
          </div>
        )}
      </Input>
      {open && (
        <FloatingPortal>
          <FloatingFocusManager
            initialFocus={-1}
            context={context}
            visuallyHiddenDismiss
          >
            <DropdownMenu {...listProps} open={open}>
              {!noOptionsDefined ? (
                displayedOptions.length > 0 ? (
                  displayedOptions?.map((option, index) =>
                    renderOption({
                      option,
                      index,
                      getOptionProps,
                      getOptionLabel,
                      autoHighlight,
                    }),
                  )
                ) : (
                  <li key='options-not-found' className={'py-1 px-2 w-full'}>
                    {props.onCreate ? (
                      <span onClick={handleCreate} className='cursor-pointer'>
                        {textCreate} &quot;{query}&quot;
                      </span>
                    ) : (
                      <EmptyState>{textNotFound}</EmptyState>
                    )}
                  </li>
                )
              ) : (
                <li key='options-are-empty' className={'py-1 px-2 w-full'}>
                  <EmptyState>{textEmpty}</EmptyState>
                </li>
              )}
            </DropdownMenu>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}

const EmptyState: FC<ComponentPropsWithoutRef<'span'>> = ({ children }) => (
  <span className='text-center text-text-secondary text-sm mx-auto'>
    {children}
  </span>
)
