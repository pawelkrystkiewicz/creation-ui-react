'use client'
import { gradient } from '@/components/classes'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import {
  BlogCard,
  ButtonsState,
  CalendarPicker,
  CookieSettings,
  CreditCardForm,
  DashboardChartCard,
  DashboardStatsCard,
  RegisterForm,
  TeamMembers,
} from './showcase/index'
import { Card, DatePicker } from '@creation-ui/react'
import { DatePickerExample } from '@/examples/date-picker'

// Showcase item wrapper with animations
const ShowcaseItem = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={clsx(
      'relative shrink-0',
      'snap-center',
      'transition-all duration-300',
      'hover:z-10',
      className,
    )}
  >
    {/* Hover glow effect */}
    <div
      className={clsx(
        'absolute -inset-3 rounded-3xl -z-10',
        'bg-linear-to-br from-violet-500/10 via-fuchsia-500/10 to-pink-500/10',
        'opacity-0 hover:opacity-100',
        'blur-xl transition-opacity duration-500',
      )}
    />
    {children}
  </div>
)

// Navigation dots for carousel
const CarouselDots = ({
  total,
  current,
  onSelect,
}: {
  total: number
  current: number
  onSelect: (index: number) => void
}) => (
  <div className='flex items-center justify-center gap-2 mt-6 lg:hidden'>
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onSelect(i)}
        className={clsx(
          'w-2 h-2 rounded-full transition-all duration-300',
          i === current
            ? 'bg-violet-500 w-6'
            : 'bg-muted-foreground/30 hover:bg-muted-foreground/50',
        )}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
)

// Carousel navigation arrows
const CarouselArrow = ({
  direction,
  onClick,
  disabled,
}: {
  direction: 'left' | 'right'
  onClick: () => void
  disabled: boolean
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      'absolute top-1/2 -translate-y-1/2 z-20',
      'w-10 h-10 rounded-full',
      'bg-background/80 backdrop-blur-sm border border-border',
      'flex items-center justify-center',
      'transition-all duration-200',
      'hover:bg-accent hover:scale-110',
      'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100',
      'hidden sm:flex lg:hidden',
      direction === 'left' ? 'left-2' : 'right-2',
    )}
    aria-label={direction === 'left' ? 'Previous' : 'Next'}
  >
    <svg
      className={clsx('w-5 h-5', direction === 'left' && 'rotate-180')}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M9 5l7 7-7 7'
      />
    </svg>
  </button>
)

export const Showcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 8

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.scrollWidth / totalSlides
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth',
      })
      setCurrentSlide(index)
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.scrollWidth / totalSlides
      const newSlide = Math.round(scrollRef.current.scrollLeft / slideWidth)
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide)
      }
    }
  }

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      scrollToSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1)
    }
  }

  return (
    <section className='relative py-16 md:py-24 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-1/4 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl' />
      </div>

      {/* Section header */}
      <div className='max-w-3xl mx-auto text-center mb-12 px-4'>
        <span
          className={clsx(
            'inline-block px-3 py-1 mb-4',
            'text-xs font-medium uppercase tracking-widest',
            'text-violet-600 dark:text-violet-400',
            'bg-violet-500/10 rounded-full',
          )}
        >
          Component Gallery
        </span>

        <h2
          className={clsx(
            'text-3xl sm:text-4xl md:text-5xl',
            'font-bold tracking-tight mb-4',
          )}
        >
          See what you can
          <span className={clsx(gradient.auroraText, 'ml-2')}>create</span>
        </h2>

        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Real-world examples built entirely with Creation UI components. From
          forms to dashboards, everything just works.
        </p>
      </div>

      {/* Mobile & Tablet: Horizontal scroll carousel */}
      <div className='relative lg:hidden'>
        <CarouselArrow
          direction='left'
          onClick={prevSlide}
          disabled={currentSlide === 0}
        />
        <CarouselArrow
          direction='right'
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
        />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={clsx(
            'flex gap-4 px-4 pb-4',
            'overflow-x-auto snap-x snap-mandatory',
            'scrollbar-none hide-scrollbar',
            '-mx-4 px-[calc(50vw-160px)] sm:px-[calc(50vw-200px)]',
          )}
        >
          <ShowcaseItem>
            <RegisterForm className='w-[320px] sm:w-[380px]' />
          </ShowcaseItem>

          <ShowcaseItem>
            <CreditCardForm className='w-[320px] sm:w-[380px]' />
          </ShowcaseItem>

          <ShowcaseItem>
            <TeamMembers className='w-[320px] sm:w-[380px]' />
          </ShowcaseItem>

          <ShowcaseItem>
            <CookieSettings className='w-[320px] sm:w-[380px]' />
          </ShowcaseItem>

          <ShowcaseItem>
            <ButtonsState className='w-[320px] sm:w-[380px] max-h-[544px] overflow-y-auto' />
          </ShowcaseItem>

          <ShowcaseItem className='flex flex-col gap-4'>
            <DashboardStatsCard className='w-[320px] sm:w-[380px]' />
            <DashboardChartCard className='w-[320px] sm:w-[380px]' />
          </ShowcaseItem>

          <ShowcaseItem>
            <Card className='w-full h-full'>
              <DatePickerExample />
            </Card>
          </ShowcaseItem>
        </div>

        <CarouselDots
          total={totalSlides}
          current={currentSlide}
          onSelect={scrollToSlide}
        />
      </div>

      {/* Desktop: Bento grid layout */}
      <div className='hidden lg:block max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-12 gap-6 auto-rows-min'>
          {/* Row 1 */}
          <ShowcaseItem className='col-span-4'>
            <RegisterForm className='w-full h-full' />
          </ShowcaseItem>

          <ShowcaseItem className='col-span-4'>
            <TeamMembers className='w-full h-full' />
          </ShowcaseItem>

          <ShowcaseItem className='col-span-4 flex flex-col gap-4'>
            <DashboardStatsCard className='w-full' />
            <DashboardChartCard className='w-full flex-1' />
          </ShowcaseItem>

          {/* Row 2 */}
          <ShowcaseItem className='col-span-3'>
            <CreditCardForm className='w-full h-full' />
          </ShowcaseItem>

          <ShowcaseItem className='col-span-5'>
            <ButtonsState className='w-full h-full' />
          </ShowcaseItem>

          <ShowcaseItem className='col-span-4'>
            <CookieSettings className='w-full h-full' />
          </ShowcaseItem>

          {/* Row 3 */}
          <ShowcaseItem className='col-span-4'>
            <BlogCard className='w-full h-full' />
          </ShowcaseItem>

          <ShowcaseItem className='col-span-4 flex justify-center'>
            <Card className='w-full h-full'>
              <DatePickerExample />
            </Card>
          </ShowcaseItem>

          {/* Placeholder for balance - could add more components */}
          <div className='col-span-4 flex items-center justify-center p-8 rounded-2xl border border-dashed border-border/50'>
            <div className='text-center text-muted-foreground'>
              <p className='text-sm'>20+ more components</p>
              <a
                href='/docs'
                className='text-sm text-violet-500 hover:text-violet-400 transition-colors'
              >
                Explore all →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
