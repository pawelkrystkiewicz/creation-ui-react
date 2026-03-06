import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { overlay } from './classes'
import type { OverlayProps } from './types'

export const Overlay: FC<OverlayProps> = ({
  active,
  onClick,
  className,
  cursorWait,
  children,
}) => {
  return (
    <div
      className={twMerge(
        overlay({ cursorWait }),
        'micro-interactions',
        active ? 'opacity-100' : 'opacity-0 pointer-events-none',
        className,
      )}
      onClick={onClick}
      aria-hidden={!active}
    >
      {children}
    </div>
  )
}
