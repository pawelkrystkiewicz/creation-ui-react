'use client'
import { gradient, glow } from '@/components/classes'
import { Button } from '@creation-ui/react'
import clsx from 'clsx'
import Link from 'next/link'

export const CTA = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Main content */}
        <h2 className={clsx(
          'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
          'font-bold tracking-tight mb-6',
        )}>
          Ready to build something
          <br />
          <span className={gradient.auroraText}>extraordinary?</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10">
          Join developers who ship faster with beautiful, accessible components.
          Start building in minutes.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className={clsx(
              gradient.aurora,
              'px-8 py-3',
              'border-none text-white font-semibold',
              '[--ui-height:52px]',
              'hover:opacity-90 hover:scale-[1.02]',
              'active:scale-[0.98]',
              'transition-all duration-200',
              glow.subtle,
            )}
            color="unstyled"
          >
            <Link href="/docs" className="flex items-center gap-2">
              Get Started Free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>

          <Button
            className={clsx(
              'px-8 py-3',
              'border border-border',
              'bg-background hover:bg-accent',
              'font-semibold',
              '[--ui-height:52px]',
              'hover:scale-[1.02]',
              'active:scale-[0.98]',
              'transition-all duration-200',
            )}
            color="unstyled"
          >
            <Link
              href="https://github.com/pawelkrystkiewicz/creation-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </Link>
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Trusted by developers worldwide</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-1">
              <svg className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">4.9/5</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="font-medium">MIT Licensed</span>
            <div className="h-4 w-px bg-border" />
            <span className="font-medium">Active Development</span>
          </div>
        </div>
      </div>
    </section>
  )
}
