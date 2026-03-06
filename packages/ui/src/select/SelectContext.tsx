import { createContext, use } from 'react'

export interface SelectContextValue {
  open: boolean
  disabled: boolean
  invalid: boolean
  value: unknown
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
