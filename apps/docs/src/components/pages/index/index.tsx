'use client'
import { Hero } from '@/components/pages/index/hero'
import clsx from 'clsx'
import { Showcase } from './showcase'

const mainBodyClasses = clsx(
  'flex',
  'flex-col',
  'gap-14',
  'mx-auto',
  'snap-y',
  'snap-mandatory',
  'lg:max-w-6xl',
  'md:max-w-md',
  'sm:max-w-sm',
  'max-w-xs',
)

export const Index = () => (
  <div className={mainBodyClasses}>
    <Hero />
    <Showcase />
  </div>
)
