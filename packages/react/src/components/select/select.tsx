import Keyboard from 'keyboard-key'
import { Theme, useTheme } from '../../theme'
import { AUTOCOMPLETE_MARGIN } from '../autocomplete/constants'
import { _isOptionEqualToValue } from '../autocomplete/utils/is-equal-to-value'
import { InputBase } from '../input-base'
import { RenderOptionProps, SelectProps } from './types'

import {
  autoUpdate,
  flip,
  size as floatingSize,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react'

import { useRef, useState } from 'react'
import { selectOptionClasses } from '../../classes'
import { DropdownChevron } from '../dropdown-chevron'
import { getDropdownHeight } from '../shared'
import { Placeholder } from '../shared/Placeholder'
import { SelectContext } from './context'
import { SelectView } from './select.view'

export function Select<T>(props: SelectProps<T>) {
  const { size: defaultSize } = useTheme()
  const {
    id,
    textEmpty = 'No options',
    placeholder = 'Select...',
    helperText,
    error,
    zIndex,
    size = defaultSize,
    variant,
    maxHeight,
    loopListNavigation = true,
    value,
    options = [],
    getOptionLabel: getOptionLabelProp = (option: T): string =>
      typeof option === 'string' ? option : (option as any).label,
    isOptionEqualToValue = _isOptionEqualToValue<T>,
    renderOption,
    getOptionDisabled = (option: T) => (option as any).disabled,
    renderSelection = (value: T) =>
      value ? getOptionLabel(value) : <Placeholder>{placeholder}</Placeholder>,
    onChange,
    onClear,
    cx,
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
          `CUI: The \`getOptionLabel\` method of [Select:${id}] returned ${erroneousReturn} instead of a string for ${JSON.stringify(
            option
          )}.`
        )
      }

      return String(optionLabel)
    }

    return optionLabel
  }
  const isEmpty = !props.value
  const interactionsDisabled = props.disabled || props.loading || props.readOnly
  const clearable = props.clearable && !isEmpty

  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [width, setWidth] = useState<number | undefined>(undefined)

  // @ts-ignore
  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom',
    open: open,
    onOpenChange: (open: boolean) => {
      if (interactionsDisabled) return
      setOpen(open)
    },
    whileElementsMounted: autoUpdate,
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

  const listRef = useRef<Array<HTMLElement | null>>([])
  const listContentRef = useRef(options)
  const isTypingRef = useRef(false)

  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'listbox' })
  const click = useClick(context, { event: 'mousedown' })

  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    loop: loopListNavigation,
    onNavigate: setActiveIndex,
  })
  const typeahead = useTypeahead(context, {
    // @ts-ignore
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    onMatch: open ? setActiveIndex : setSelectedIndex,
    onTypingChange(isTyping) {
      isTypingRef.current = isTyping
    },
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [dismiss, role, listNav, typeahead, click]
  )

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    setOpen(false)
    onChange?.(options[index])
  }

  const listProps = {
    ref: refs.setFloating,
    style: { ...floatingStyles, zIndex: zIndex?.list },
    placement: context.placement,
    ...getFloatingProps(),
  }

  const containerProps = {
    tabIndex: 0,
    ref: refs.setReference,
    'aria-autocomplete': 'none',
    'aria-labelledby': 'select-label',
    ...getReferenceProps(),
  }

  const getOptionProps = (option: T, idx: number): RenderOptionProps => {
    const active = activeIndex === idx
    const selected = isOptionEqualToValue(option, value)
    const disabled = getOptionDisabled(option)
    const label = getOptionLabel(option)
    const truncate = typeof renderOption !== 'function'

    const optionProps = getItemProps({
      onClick() {
        if (disabled) return
        handleSelect(idx)
      },
      onKeyDown(e) {
        if (isTypingRef.current || disabled) return
        const code = Keyboard.getCode(e)

        const isEnter = code === Keyboard.Enter
        const isSpace = code === Keyboard.Spacebar

        if (isEnter || isSpace) {
          e.preventDefault()
          handleSelect(idx)
        }
      },
    })

    return {
      ...optionProps,
      key: label,
      tabIndex: active ? 0 : -1,
      'aria-selected': idx === selectedIndex && active,
      'aria-disabled': disabled,
      'aria-label': label,
      role: 'option',
      active,
      selected,
      disabled,
      label,
      className: selectOptionClasses({
        active,
        selected,
        size,
        disabled,
        truncate,
        className: [truncate ? `!w-[${width}px]` : '', 'remove-ring'],
      }),
      ref: node => {
        listRef.current[idx] = node
      },
    }
  }

  const toggleOpen = () => setOpen(o => !o)
  const handleChevronClick = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (interactionsDisabled) return

    toggleOpen()
  }

  return (
    <Theme theme={{ size }}>
      <InputBase
        id={id}
        variant={variant}
        size={size}
        error={error}
        loading={props.loading}
        readOnly={props.readOnly}
        label={props.label}
        required={props.required}
        disabled={props.disabled}
        interactionsDisabled={interactionsDisabled}
        endAdornment={
          <DropdownChevron open={open} onClick={handleChevronClick} />
        }
        helperText={helperText}
        clearable={clearable}
        onClear={onClear}
        cx={cx}
      >
        <SelectContext.Provider
          value={{
            open,
            value,
            options,
            textEmpty,
            propsList: listProps,
            floatingContext: context,
            propsContainer: containerProps,
            renderOption,
            getOptionLabel,
            getOptionProps,
            renderSelection,
          }}
        >
          <SelectView />
        </SelectContext.Provider>
      </InputBase>
    </Theme>
  )
}
