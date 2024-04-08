import { cva } from 'class-variance-authority'
import type { BoxProps } from './box.types'

const box = cva([], {
  variants: {
    body: {
      base: [
        'flex',
        'justify-center',
        'bg-info-50',
        'dark:bg-info-900',
        'dark:text-info-50',
        'rounded-lg',
      ],
    },
    content: {
      base: [
        'block',
        'p-5',
        'rounded-lg',
        'shadow-lg',
        'bg-gray-50',
        'dark:bg-gray-800',
        'dark:text-info-50',
      ],
    },
    border: {
      true: ['border', 'border-info-100', 'dark:border-info-800'],
      false: [],
    },
  },
})

export const Box = ({ children, className, border = true }: BoxProps) => (
  <div className={box({ body: 'base', className, border })}>
    <div className={box({ content: 'base' })}>{children}</div>
  </div>
)
