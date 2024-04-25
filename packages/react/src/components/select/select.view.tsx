import React from 'react';
import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'
import { twMerge } from 'tailwind-merge'
import { useInputBase } from '../input-base/input-base.context'
import { DropdownMenu } from '../shared/DropdownMenu'
import { useSelect } from './context'
import { renderOptionInternalContainer } from './render-option'

export const SelectView = () => {
  const { classes, componentId } = useInputBase()
  const {
    propsContainer,
    floatingContext,
    propsList,
    open,
    options,
    value,
    textEmpty,
    renderSelection,
  } = useSelect()

  return (
    <>
      <div
        id={componentId}
        {...propsContainer}
        className={twMerge(classes.input, 'cursor-default flex items-center')}
      >
        {renderSelection?.(value)}
      </div>
      {open && (
        <FloatingPortal>
          <FloatingFocusManager context={floatingContext} modal={false}>
            <DropdownMenu {...propsList} open={open}>
              {options?.length ? (
                options?.map(renderOptionInternalContainer)
              ) : (
                <li className={'py-2 px-3 w-full text-center'}>{textEmpty}</li>
              )}
            </DropdownMenu>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}
