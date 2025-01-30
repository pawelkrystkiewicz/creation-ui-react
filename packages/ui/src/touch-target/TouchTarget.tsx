import { cva } from 'class-variance-authority'
import { ReactNode } from 'react'

const styles = cva(
  [
    //
    'absolute',
    'left-1/2',
    'top-1/2',
    'size-[max(100%,2.75rem)]',
    '-translate-x-1/2',
    '-translate-y-1/2',
    '[@media(pointer:fine)]:hidden',
  ],
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
  },
)

interface TouchTargetProps {
  children?: ReactNode
  disabled?: boolean
}

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export function TouchTarget({ children, disabled }: TouchTargetProps) {
  return (
    <>
      <span className={styles({ disabled })} aria-hidden='true' />
      {children}
    </>
  )
}
