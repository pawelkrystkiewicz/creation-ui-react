import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputBaseContainerInnerProps {
  children?: React.ReactNode
  className?: string
}

// TODO: ref should be passed to input/textarea/select!
export const InputBaseContainerInner = forwardRef<
  HTMLDivElement,
  InputBaseContainerInnerProps
>(({ children, className }, ref) => (
  <div className={twMerge('relative', 'max-h-min', className)} ref={ref}>
    {children}
  </div>
))
