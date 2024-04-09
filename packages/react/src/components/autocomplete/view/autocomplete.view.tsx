import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'
import clsx from 'clsx'
import { FC, useCallback } from 'react'
import { Show, ShowFirstMatching } from '../../../components/show'
import { useInputBase } from '../../input-base/input-base.context'
import { DropdownMenu } from '../../shared/DropdownMenu'
import { useAutocomplete } from '../context'
import { AutocompleteOptionDefault } from '../types'
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
    propsList,
    onCreate,
    textCreate,
    query,
    allowCreate,
  } = useAutocomplete()

  const customRenderValue = renderSelection && !multiple && selected
  const hasOptions = options.length > 0

  const handleCreate = useCallback(() => {
    if (!onCreate || !query) return
    onCreate(query)
  }, [query, onCreate])

  return (
    <div className={clsx(classes.input, 'relative h-auto py-1')}>
      <div className={clsx('flex flex-col gap-1')}>
        <div className='inline-flex gap-2 items-center flex-wrap h-fit'>
          {multiple && <MultipleSelections />}
          {customRenderValue ? (
            <>{renderSelection(selected as AutocompleteOptionDefault)}</>
          ) : (
            <input
              {...propsInput}
              id={componentId}
              className={clsx('reset-input h-fit', propsInput.className)}
            />
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
              <ShowFirstMatching>
                <Show when={hasOptions}>
                  {options?.map(renderOptionInternalContainer)}
                </Show>
                <Show when={!hasOptions}>
                  <li
                    className={clsx(
                      'py-2 px-3 w-full',
                      allowCreate ? 'cursor-pointer' : 'text-center',
                    )}
                  >
                    <ShowFirstMatching>
                      <Show when={!allowCreate}>{textNotFound}</Show>
                      <Show when={!!allowCreate}>
                        <span onClick={handleCreate}>
                          {textCreate} &quot;{query}&quot;
                        </span>
                      </Show>
                    </ShowFirstMatching>
                  </li>
                </Show>
              </ShowFirstMatching>
            </DropdownMenu>
          </FloatingFocusManager>
        </FloatingPortal>
      </Show>
    </div>
  )
}
