import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface StartAdornmentProps {
  children: ReactNode
  className?: string
}

export const StartAdornment = ({
  children,
  className,
}: StartAdornmentProps) => (
  <span
    className={twMerge(
      'absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2',
      className,
    )}
  >
    {children}
  </span>
)
