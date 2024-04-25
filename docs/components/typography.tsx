import React, { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeaderProps {
  id?: string
  children: React.ReactNode
  as?: ElementType
  href?: string
  'aria-label'?: string
  className?: string
}

export const Header = ({ children, as: Tag = 'h1', href, className, ...props }: HeaderProps) => (
  <Tag className={twMerge('heading group whitespace-pre-wrap mt-3', className)} {...props}>
    <a
      href={href}
      className='after:hash absolute -ml-6 !text-[#a1a1aa] !no-underline opacity-0 !shadow-none focus-visible:opacity-100 group-hover:opacity-100'
      aria-label={props['aria-label']}
    ></a>
    <span aria-hidden='true'>{children}</span>
  </Tag>
)

export const Description = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div className='prose dark:prose-invert' id={id}>
    {children}
  </div>
)
