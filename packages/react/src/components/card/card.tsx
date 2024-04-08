import { forwardRef, type HTMLAttributes } from 'react'

import { twix } from '../../utils'

const cardClasses = twix(
  'border',
  'min-h-fit',
  'min-w-fit',
  'flex-grow',
  'rounded-xl',
  'p-6',
  'shadow',
  'border-global'
)

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  href?: string
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, href, children, ...props }, ref) => (
    <div ref={ref} className={cardClasses(className)} {...props}>
      {href ? (
        <a href={href} className='block'>
          {children}
        </a>
      ) : (
        children
      )}
    </div>
  )
)
