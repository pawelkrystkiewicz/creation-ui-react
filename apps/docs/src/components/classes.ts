import clsx from 'clsx'

export const docsMicroInteractions = clsx('transform', 'transition-all', 'duration-500', 'delay-100', 'ease-in-out')

export const gradient = {
  bg: clsx(['bg-gradient-to-br', 'from-purple-600', 'to-pink-600']),
  text: clsx(['text-transparent', 'bg-clip-text', 'bg-gradient-to-br', 'from-purple-500', 'to-pink-600']),
  // New aurora-inspired gradients
  aurora: clsx([
    'bg-gradient-to-r',
    'from-violet-600',
    'via-fuchsia-500',
    'to-pink-500',
  ]),
  auroraText: clsx([
    'text-transparent',
    'bg-clip-text',
    'bg-gradient-to-r',
    'from-violet-400',
    'via-fuchsia-400',
    'to-pink-400',
  ]),
  // Subtle mesh for backgrounds
  mesh: clsx([
    'bg-gradient-to-br',
    'from-violet-500/10',
    'via-transparent',
    'to-pink-500/10',
  ]),
}

// Glow effects
export const glow = {
  primary: clsx([
    'shadow-[0_0_80px_-12px_rgba(168,85,247,0.5)]',
    'dark:shadow-[0_0_80px_-12px_rgba(168,85,247,0.4)]',
  ]),
  subtle: clsx([
    'shadow-[0_0_60px_-15px_rgba(168,85,247,0.3)]',
    'dark:shadow-[0_0_60px_-15px_rgba(168,85,247,0.25)]',
  ]),
}

// Animations
export const animations = {
  fadeIn: 'animate-[fadeIn_0.6s_ease-out_forwards]',
  slideUp: 'animate-[slideUp_0.6s_ease-out_forwards]',
  float: 'animate-[float_6s_ease-in-out_infinite]',
  pulse: 'animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]',
  shimmer: 'animate-[shimmer_2s_linear_infinite]',
}

// Stagger delays for orchestrated animations
export const stagger = {
  1: 'animation-delay-[0ms]',
  2: 'animation-delay-[100ms]',
  3: 'animation-delay-[200ms]',
  4: 'animation-delay-[300ms]',
  5: 'animation-delay-[400ms]',
  6: 'animation-delay-[500ms]',
}
