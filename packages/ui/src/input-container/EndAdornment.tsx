import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface EndAdornmentProps {
  children: ReactNode
  className?: string
}

export const EndAdornment = ({ children, className }: EndAdornmentProps) => (
  <span
    className={twMerge('absolute top-1/2 -translate-y-1/2 right-0', className)}
    style={
      {
        transform: 'translateX(calc(var(--ui-icon-height) * -1/2))',
      } as React.CSSProperties
    }
  >
    {children}
  </span>
)
