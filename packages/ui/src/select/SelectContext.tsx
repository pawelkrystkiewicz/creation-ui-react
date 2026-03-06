import { createContext, use } from 'react'

export interface SelectContextValue<T = string> {
  open: boolean
  disabled: boolean
  invalid: boolean
  value: T
  onClear?: () => void
}

const SelectContext = createContext<SelectContextValue | null>(null)

export const useSelectContext = () => {
  const context = use(SelectContext)
  if (!context) {
    throw new Error(
      'CUI: useSelectContext must be used within a Select component',
    )
  }
  return context
}

export { SelectContext }
