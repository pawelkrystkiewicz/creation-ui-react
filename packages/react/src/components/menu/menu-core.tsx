import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from '@floating-ui/react'
import React, { useContext, useMemo, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { DropdownChevron } from '../dropdown-chevron'
import { Show, ShowFirstMatching } from '../show'
import { MenuContext } from './context'
import { MenuProps } from './types'
import { TreeChevron } from '../tree-chevron'
import clsx from 'clsx'
import { CONSISTENT_ITEM_MARGIN } from './constants'

export const MenuCore = React.forwardRef<HTMLButtonElement, MenuProps>(
  (
    { children, label, renderInput, level = 0, cx, size, ...props },
    forwardedRef,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [hasFocusInside, setHasFocusInside] = React.useState(false)
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

    const elementsRef = useRef<Array<HTMLButtonElement | null>>([])
    const labelsRef = useRef<Array<string | null>>([])
    const parent = useContext(MenuContext)

    const tree = useFloatingTree()
    const nodeId = useFloatingNodeId()
    const parentId = useFloatingParentNodeId()
    const item = useListItem()

    const isNested = parentId != null
    const Chevron = useMemo(
      () => (!isNested ? DropdownChevron : TreeChevron),
      [isNested],
    )

    const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
      nodeId,
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: 'bottom-start',
      middleware: [offset(), flip(), shift()],
      whileElementsMounted: autoUpdate,
    })

    const click = useClick(context, { event: 'mousedown' })
    const role = useRole(context, { role: 'menu' })
    const dismiss = useDismiss(context, { bubbles: true })
    const listNavigation = useListNavigation(context, {
      listRef: elementsRef,
      activeIndex,
      nested: isNested,
      onNavigate: setActiveIndex,
    })
    const typeahead = useTypeahead(context, {
      listRef: labelsRef,
      onMatch: isOpen ? setActiveIndex : undefined,
      activeIndex,
    })

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([click, role, dismiss, listNavigation, typeahead])

    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere
    // in the tree.
    React.useEffect(() => {
      if (!tree) return

      function handleTreeClick() {
        setIsOpen(false)
      }

      function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
        if (event.nodeId !== nodeId && event.parentId === parentId) {
          setIsOpen(false)
        }
      }

      tree.events.on('click', handleTreeClick)
      tree.events.on('menuopen', onSubMenuOpen)

      return () => {
        tree.events.off('click', handleTreeClick)
        tree.events.off('menuopen', onSubMenuOpen)
      }
    }, [tree, nodeId, parentId])

    React.useEffect(() => {
      if (isOpen && tree) {
        tree.events.emit('menuopen', { parentId, nodeId })
      }
    }, [tree, isOpen, nodeId, parentId])

    return (
      <FloatingNode id={nodeId}>
        <div className={cx?.container?.outer}>
          <button
            ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
            tabIndex={
              !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
            }
            role={isNested ? 'menuitem' : undefined}
            data-open={isOpen ? '' : undefined}
            data-nested={isNested ? '' : undefined}
            data-focus-inside={hasFocusInside ? '' : undefined}
            className={twMerge(cx?.trigger, 'relative text-left')}
            {...getReferenceProps(
              parent.getItemProps({
                ...props,
                onFocus(event: React.FocusEvent<HTMLButtonElement>) {
                  props.onFocus?.(event),
                    setHasFocusInside(false),
                    parent.setHasFocusInside(true)
                },
              }),
            )}
          >
            <ShowFirstMatching>
              <Show when={!!renderInput}>
                {renderInput?.({
                  chevron: <Chevron open={isOpen} aria-hidden size={size} />,
                })}
              </Show>
              <Show when={true}>
                <Chevron
                  open={isOpen}
                  aria-hidden
                  size={size}
                  className={'absolute left-0 top-1/2 -translate-y-1/2'}
                />
                <span
                  className={clsx('truncate text-left', CONSISTENT_ITEM_MARGIN)}
                  title={label}
                >
                  {label}
                </span>
              </Show>
            </ShowFirstMatching>
          </button>
          <ShowFirstMatching>
            <Show when={isNested && isOpen}>
              <div
                // this is nested list container
                ref={refs.setFloating}
                className={twMerge(cx?.container?.inner)}
                {...getFloatingProps()}
              >
                {children}
              </div>
            </Show>
            <Show when={!isNested}>
              <MenuContext.Provider
                value={{
                  activeIndex,
                  setActiveIndex,
                  getItemProps,
                  setHasFocusInside,
                  isOpen,
                }}
              >
                <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
                  <Show when={isOpen}>
                    <FloatingPortal>
                      <FloatingFocusManager
                        context={context}
                        modal={false}
                        initialFocus={0}
                        returnFocus={false}
                      >
                        <div
                          ref={refs.setFloating}
                          className={twMerge(cx?.container?.inner)}
                          style={{ ...floatingStyles }}
                          {...getFloatingProps()}
                        >
                          {children}
                        </div>
                      </FloatingFocusManager>
                    </FloatingPortal>
                  </Show>
                </FloatingList>
              </MenuContext.Provider>
            </Show>
          </ShowFirstMatching>
        </div>
      </FloatingNode>
    )
  },
)
