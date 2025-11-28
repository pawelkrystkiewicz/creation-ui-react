'use client'
import { gradient } from '@/components/classes'
import clsx from 'clsx'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Composable Architecture',
    description: 'Build complex interfaces by combining simple, focused components. Each piece works independently and together.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Themeable by Design',
    description: 'CSS variables and Tailwind integration make customization effortless. Match your brand in minutes, not days.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Accessible First',
    description: 'WCAG 2.1 AA compliant. Keyboard navigation, screen reader support, and focus management built into every component.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Zero Runtime Overhead',
    description: 'Lightweight and tree-shakeable. Only ship the code you use. No hidden performance costs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'TypeScript Native',
    description: 'Full type safety with intelligent autocomplete. Catch errors at build time, not in production.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: 'Shadcn Compatible',
    description: 'Same design tokens and patterns. Mix and match with your existing shadcn components seamlessly.',
  },
]

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
  <div
    className={clsx(
      'group relative p-6 rounded-2xl',
      'bg-card/50 dark:bg-card/30',
      'border border-border/50',
      'hover:border-violet-500/30 hover:bg-card/80',
      'transition-all duration-300',
      'animate-[fadeIn_0.5s_ease-out_forwards] opacity-0',
    )}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Icon container */}
    <div className={clsx(
      'inline-flex items-center justify-center',
      'w-12 h-12 rounded-xl mb-4',
      'bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10',
      'text-violet-600 dark:text-violet-400',
      'group-hover:from-violet-500/20 group-hover:to-fuchsia-500/20',
      'transition-all duration-300',
    )}>
      {feature.icon}
    </div>

    <h3 className="text-lg font-semibold mb-2 tracking-tight">
      {feature.title}
    </h3>

    <p className="text-muted-foreground text-sm leading-relaxed">
      {feature.description}
    </p>

    {/* Subtle hover glow */}
    <div className={clsx(
      'absolute inset-0 -z-10 rounded-2xl',
      'bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5',
      'opacity-0 group-hover:opacity-100',
      'blur-xl transition-opacity duration-500',
    )} />
  </div>
)

export const Features = () => {
  return (
    <section className="relative py-24 px-4">
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className={clsx(
          'inline-block px-3 py-1 mb-4',
          'text-xs font-medium uppercase tracking-widest',
          'text-violet-600 dark:text-violet-400',
          'bg-violet-500/10 rounded-full',
        )}>
          Why Creation UI
        </span>

        <h2 className={clsx(
          'text-3xl sm:text-4xl md:text-5xl',
          'font-bold tracking-tight mb-4',
        )}>
          Built for developers who
          <br />
          <span className={gradient.auroraText}>care about details</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every component is crafted with precision, from pixel-perfect visuals to
          thoughtful API design. No compromises.
        </p>
      </div>

      {/* Features grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}
