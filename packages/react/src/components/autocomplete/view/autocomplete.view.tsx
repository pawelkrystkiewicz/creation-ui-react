import { Show, ShowFirstMatching, useInputBase } from '@components'
import { DropdownMenu } from '@components/shared/DropdownMenu'
import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'
import clsx from 'clsx'
import { FC, useCallback } from 'react'
import { useAutocomplete } from '../context'
import { renderOptionInternalContainer } from '../utils/render-option'
import { MultipleSelections } from './multiple-selections.view'

export const AutocompleteView: FC = () => {
  const { classes, componentId } = useInputBase()
  const {
    //
    propsInput,
    multiple,
    selected,
    renderSelection,
    options = [],
    textNotFound,
    floatingContext,
    open,
    propsList: { key, ...propsList },
    onCreate,
    textCreate,
    query,
    allowCreate,
  } = useAutocomplete()

  const customRenderValue =
    !!renderSelection && !multiple && selected != undefined
  const hasOptions = options.length > 0
  const handleCreate = useCallback(() => {
    if (!onCreate || !query) return
    onCreate(query)
  }, [query, onCreate])

  return (
    <div className={clsx(classes.input, 'relative h-auto py-1')}>
      <div className={clsx('flex flex-col gap-1')}>
        <div className='inline-flex gap-2 items-center flex-wrap h-fit'>
          <Show when={multiple}>
            <MultipleSelections />
          </Show>
          {!customRenderValue ? (
            <input
              {...propsInput}
              id={componentId}
              className={clsx('reset-input', 'h-fit', propsInput.className)}
            />
          ) : (
            renderSelection?.(selected)
          )}
        </div>
      </div>
      <Show when={open}>
        <FloatingPortal>
          <FloatingFocusManager
            initialFocus={-1}
            context={floatingContext}
            visuallyHiddenDismiss
          >
            <DropdownMenu {...propsList} open={open}>
              <>
                <Show when={hasOptions}>
                  {options?.map(renderOptionInternalContainer)}
                </Show>
                <Show when={!hasOptions}>
                  <li
                    className={clsx(
                      'py-2 px-3 w-full',
                      allowCreate ? 'cursor-pointer' : 'text-center'
                    )}
                  >
                    <>
                      <Show when={!allowCreate}>{textNotFound}</Show>
                      <Show when={!!allowCreate}>
                        <span onClick={handleCreate}>
                          {textCreate} &quot;{query}&quot;
                        </span>
                      </Show>
                    </>
                  </li>
                </Show>
              </>
            </DropdownMenu>
          </FloatingFocusManager>
        </FloatingPortal>
      </Show>
    </div>
  )
}
