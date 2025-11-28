'use client'
import { gradient, glow } from '@/components/classes'
import { Logo } from '@/components/logo'
import { Button } from '@creation-ui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { CopyBlock, dracula } from 'react-code-blocks'

const GridPattern = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    {/* Gradient orbs */}
    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl" />
    <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-fuchsia-500/15 to-transparent rounded-full blur-3xl" />

    {/* Subtle grid pattern */}
    <svg className="absolute inset-0 h-full w-full opacity-[0.03] dark:opacity-[0.05]" aria-hidden="true">
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M0 32V0h32" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>

    {/* Radial fade from center */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
  </div>
)

const FloatingBadge = () => (
  <div className={clsx(
    'inline-flex items-center gap-2 px-4 py-1.5 rounded-full',
    'bg-violet-500/10 dark:bg-violet-500/15',
    'border border-violet-500/20',
    'text-sm font-medium text-violet-600 dark:text-violet-400',
    'backdrop-blur-sm',
    'animate-[fadeIn_0.5s_ease-out_forwards]',
  )}>
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
    </span>
    v16 — Shadcn Compatible
  </div>
)

const StatsBar = () => {
  const stats = [
    { value: '40+', label: 'Components' },
    { value: '100%', label: 'TypeScript' },
    { value: 'MIT', label: 'License' },
  ]

  return (
    <div className={clsx(
      'flex items-center justify-center gap-8 md:gap-12',
      'pt-8 mt-8 border-t border-border/50',
      'animate-[fadeIn_0.6s_ease-out_0.5s_forwards] opacity-0',
    )}>
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-2xl md:text-3xl font-bold tracking-tight">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export const Hero = () => {
  const installationScript = 'npm i @creation-ui/react'

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <GridPattern />

      <div className="relative flex flex-col items-center gap-8 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <FloatingBadge />

        {/* Logo with glow */}
        <div className={clsx(
          'relative group',
          'animate-[fadeIn_0.5s_ease-out_0.1s_forwards] opacity-0',
        )}>
          <Logo size="hero" className={clsx(glow.primary, 'transition-all duration-700 group-hover:scale-105')} />
          {/* Animated glow behind logo */}
          <div className={clsx(
            'absolute inset-0 -z-10',
            'h-32 w-32 rounded-full',
            'bg-gradient-to-br from-violet-500/40 via-fuchsia-500/30 to-pink-500/40',
            'blur-2xl opacity-60',
            'group-hover:opacity-80 group-hover:scale-150',
            'transition-all duration-700',
          )} />
        </div>

        {/* Headline */}
        <div className={clsx(
          'space-y-4',
          'animate-[fadeIn_0.6s_ease-out_0.2s_forwards] opacity-0',
        )}>
          <h1 className={clsx(
            'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
            'font-black tracking-tight leading-[1.1]',
          )}>
            Build interfaces
            <br />
            <span className={clsx(gradient.auroraText, 'inline-block')}>
              that inspire
            </span>
          </h1>

          <p className={clsx(
            'text-lg md:text-xl text-muted-foreground',
            'max-w-2xl mx-auto leading-relaxed',
          )}>
            A refined React component library with 40+ accessible, customizable
            components. Designed for developers who value both aesthetics and craft.
          </p>
        </div>

        {/* CTA Section */}
        <div className={clsx(
          'flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg',
          'animate-[fadeIn_0.6s_ease-out_0.3s_forwards] opacity-0',
        )}>
          <div className="w-full sm:flex-1 [&_.code-block]:!rounded-lg [&_code]:!text-sm">
            <CopyBlock
              text={installationScript}
              language="bash"
              theme={dracula}
              showLineNumbers={false}
              wrapLongLines={false}
              customStyle={{
                height: '48px',
                fontSize: '0.875rem',
                lineHeight: '48px',
                padding: '0 1rem',
                width: '100%',
                borderRadius: '0.5rem',
              }}
            />
          </div>

          <Button
            className={clsx(
              gradient.aurora,
              'w-full sm:w-auto px-8',
              'border-none text-white font-semibold',
              '[--ui-height:48px]',
              'hover:opacity-90 hover:scale-[1.02]',
              'active:scale-[0.98]',
              'transition-all duration-200',
              glow.subtle,
            )}
            color="unstyled"
          >
            <Link href="/docs" className="flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <StatsBar />
      </div>

      {/* Scroll indicator */}
      <div className={clsx(
        'absolute bottom-8 left-1/2 -translate-x-1/2',
        'flex flex-col items-center gap-2',
        'animate-[fadeIn_0.6s_ease-out_0.8s_forwards] opacity-0',
      )}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-[bounce_1.5s_infinite]" />
        </div>
      </div>
    </section>
  )
}
