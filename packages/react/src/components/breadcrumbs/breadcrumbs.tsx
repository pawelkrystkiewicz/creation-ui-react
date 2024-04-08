import type { FC, ReactNode } from 'react'
import { useMemo } from 'react'
import { BreadcrumbLink, ElementSize } from '../../types'
import { BreadcrumbItem } from './breadcrumb-item'
import { separators } from './seperators'
import { Icon } from '../icon'
import { cva } from 'class-variance-authority'

export interface BreadcrumbsProps extends React.HTMLProps<HTMLElement> {
  /**
   * You can provide a custom home icon or disable it
   */
  homeIcon?: ReactNode | false
  /**
   * You can provide a custom separator
   */
  separator?: ReactNode | 'chevron' | 'slash' | 'dot'
  /**
   * first will be treated as home path
   */
  links?: BreadcrumbLink[] | string[]
  spacing?: ElementSize
}

const listClasses = cva(['inline-flex', 'items-center'], {
  variants: {
    spacing: {
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-3',
    },
  },
})

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  links,
  separator = 'chevron',
  homeIcon = <Icon icon='home' />,
  spacing = 'sm',
  ...props
}) => {
  const normalizedLinks = useMemo(() => {
    return links?.map((link, idx) => {
      return typeof link === 'string'
        ? { href: link, label: link, id: idx }
        : link
    })
  }, [links])

  const separatingIcon =
    typeof separator === 'string' ? separators[separator] : separator

  return (
    <nav className='flex' {...props}>
      <ol className={listClasses({ spacing })}>
        {normalizedLinks?.map((link, idx, array) => (
          <BreadcrumbItem
            count={array?.length}
            index={idx}
            link={link}
            separator={
              idx === 0 ? (
                <div className='mr-1'>{homeIcon}</div>
              ) : (
                separatingIcon
              )
            }
            key={link.href}
          />
        ))}
      </ol>
    </nav>
  )
}
