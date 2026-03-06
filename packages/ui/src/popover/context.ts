import { createContext, use } from 'react'
import { PopoverContextType } from './use-popover'

export const PopoverContext = createContext<PopoverContextType>(null)

export const usePopoverContext = (): NonNullable<PopoverContextType> => {
  const context = use(PopoverContext)

  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />')
  }

  return context
}
