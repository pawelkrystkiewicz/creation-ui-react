import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import type { BreadcrumbLink } from '../../types'

interface BreadcrumbItemProps {
  link: BreadcrumbLink
  index: number
  count: number
  separator: ReactNode
}

export const BreadcrumbItem: FC<BreadcrumbItemProps> = memo(
  ({ link: { href, label }, index, count, separator }) => {
    const isLast = index === count - 1

    const props: React.HTMLProps<HTMLLIElement> = {
      ...(isLast && { 'aria-current': 'page' }),
    }

    return (
      <>
        {separator}
        <li {...props}>
          <div className='flex items-center capitalize'>
            <a
              href={href}
              className='text-text-primary hover:text-primary text-sm font-medium'
            >
              {label}
            </a>
          </div>
        </li>
      </>
    )
  },
)
