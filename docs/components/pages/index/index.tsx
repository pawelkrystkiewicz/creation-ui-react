import { Hero } from '@components/pages/index/hero'
// import { Playground } from '@components/pages/index/playground'
import clsx from 'clsx'

const mainBodyClasses = clsx([
  'flex',
  'flex-col',
  'mx-auto',
  'snap-y',
  'snap-mandatory',
  'lg:max-w-6xl',
  'md:max-w-md',
  'sm:max-w-sm',
  'max-w-xs',
])

export const Index = () => (
  <div className={mainBodyClasses}>
    <Hero />
    {/* <Playground /> */}
    {/* <Pallette />
    <Advantages />
    <Docs /> */}
  </div>
)
