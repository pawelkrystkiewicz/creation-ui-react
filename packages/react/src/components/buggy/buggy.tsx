import { FloatingPortal } from '@floating-ui/react'
import { twMerge } from 'tailwind-merge'

interface BuggyProps {
  value: any
  className?: string
}

export const Buggy = ({ value, className }: BuggyProps) => (
  <FloatingPortal>
    <>
      <div
        className={twMerge(
          [
            'fixed',
            'top-20',
            'right-10',
            'rounded-md',
            'backdrop-blur-3xl',
            'bg-white',
            'bg-opacity-95',
            'z-[9999]',
            'p-5',
            'w-80',
            'border',
            'shadow-xl',
            'max-h-1/2',
          ],
          className,
        )}
      >
        <h4 className='leading-relaxed text-xl font-semibold'>Debug</h4>
        <pre className='text-xs overflow-y-auto'>
          {JSON.stringify(value, null, 2)}
        </pre>
      </div>
    </>
  </FloatingPortal>
)
