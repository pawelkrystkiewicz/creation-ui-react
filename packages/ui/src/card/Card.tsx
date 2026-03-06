import React, { forwardRef } from 'react'
import { twix } from '../utils'

const titleClasses = twix('leading-none tracking-tight text-lg font-medium')

export const CardTitle = ({ ref, className, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { ref?: React.RefObject<HTMLHeadingElement | null> }) => (
  <h3 ref={ref} className={titleClasses(className)} {...props} />
)

const cardClasses = twix(
  'border',
  'rounded-lg',
  'p-5',
  'text-card-foreground',
  'bg-card',
  'border-border',
)

export const Card = ({ ref, className, href, children, ...props }: CardProps & { ref?: React.RefObject<HTMLDivElement | null> }) => (
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

import clsx from 'clsx'
import { CardProps } from './types'

export const CardContent = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div ref={ref} className={clsx(className)} {...props} />
)

const cardDescriptionClasses = twix('text-sm text-muted-foreground')

export const CardDescription = ({ ref, className, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { ref?: React.RefObject<HTMLParagraphElement | null> }) => (
  <p ref={ref} className={cardDescriptionClasses(className)} {...props} />
)

const cardFooterClasses = twix('flex items-center gap-2')

export const CardFooter = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div ref={ref} className={cardFooterClasses(className)} {...props} />
)

const cardHeaderClasses = twix('w-full')

export const CardHeader = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div ref={ref} className={cardHeaderClasses(className)} {...props} />
)

const cardStatsClasses = twix(
  'text-2xl',
  'sm:text-xl',
  'md:text-2xl',
  'lg:text-3xl',
  'xl:text-4xl',
  'font-bold',
  'my-1.5',
)

export const CardStats = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div ref={ref} className={cardStatsClasses(className)} {...props} />
)
