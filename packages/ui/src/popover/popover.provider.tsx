import { ReactNode } from 'react'
import { PopoverContext } from './context'
import { PopoverOptions } from './types'
import { usePopover } from './use-popover'

export function Popover({
  children,
  modal = false,
  className,
  ...restOptions
}: {
  children: ReactNode
} & PopoverOptions) {
  const popover = usePopover({ modal, ...restOptions })

  return (
    <PopoverContext.Provider value={{ ...popover }}>
      <div className={className}>{children}</div>
    </PopoverContext.Provider>
  )
}
