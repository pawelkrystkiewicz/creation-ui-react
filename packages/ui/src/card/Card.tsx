import React, { forwardRef } from 'react'
import { twix } from '../utils'

const titleClasses = twix('leading-none tracking-tight text-sm font-medium')

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={titleClasses(className)} {...props} />
))

const cardClasses = twix(
  'border',
  'min-h-fit',
  'min-w-fit',
  'flex-grow',
  'rounded-xl',
  'p-6',
  'shadow',
  'border-global',
)

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
  ),
)

import clsx from 'clsx'
import { CardProps } from './types'

export const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(className)} {...props} />
))

const cardDescriptionClasses = twix('text-sm text-info')

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cardDescriptionClasses(className)} {...props} />
))

const cardFooterClasses = twix('flex items-center p-6 pt-0')

export const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cardFooterClasses(className)} {...props} />
))

const cardHeaderClasses = twix(
  'w-full',
  'gap-3',
  'flex',
  'items-center',
  'justify-between',
  'pb-2',
)

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cardHeaderClasses(className)} {...props} />
))

const cardStatsClasses = twix(
  'text-2xl',
  'sm:text-xl',
  'md:text-2xl',
  'lg:text-3xl',
  'xl:text-4xl',
  'font-bold',
  'my-1.5',
)

export const CardStats = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cardStatsClasses(className)} {...props} />
))
