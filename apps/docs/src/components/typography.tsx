import type { ReactNode, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeaderProps {
  id?: string
  children: ReactNode
  as?: ElementType
  href?: string
  'aria-label'?: string
  className?: string
}

export const Header = ({
  children,
  as: Tag = 'h1',
  href,
  className,
  ...props
}: HeaderProps) => (
  <Tag
    className={twMerge(
      'text-xl font-bold group whitespace-pre-wrap mt-3 mb-2',
      className,
    )}
    {...props}
  >
    <a
      href={href}
      className='after:hash absolute -ml-6 !text-text-secondary !no-underline opacity-0 !shadow-none focus-visible:opacity-100 group-hover:opacity-100'
      aria-label={props['aria-label']}
    />
    <span aria-hidden='true'>{children}</span>
  </Tag>
)

export const Description = ({
  children,
  id,
}: {
  children: ReactNode
  id?: string
}) => (
  <p className='prose dark:prose-invert' id={id}>
    {children}
  </p>
)
