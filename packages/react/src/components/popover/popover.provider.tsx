import { ReactNode } from 'react'
import { useTheme } from '@theme'
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
  const { size: defaultSize } = useTheme()
  const { size = defaultSize } = restOptions

  const popover = usePopover({ modal, ...restOptions })

  return (
    <PopoverContext.Provider value={{ ...popover, size }}>
      <div className={className}>{children}</div>
    </PopoverContext.Provider>
  )
}
