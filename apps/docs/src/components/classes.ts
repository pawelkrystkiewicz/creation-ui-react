import clsx from 'clsx'

export const docsMicroInteractions = clsx('transform', 'transition-all', 'duration-500', 'delay-100', 'ease-in-out')

export const gradient = {
  bg: clsx(['bg-gradient-to-br', 'from-purple-600', 'to-pink-600']),
  text: clsx(['text-transparent', 'bg-clip-text', 'bg-gradient-to-br', 'from-purple-500', 'to-pink-600']),
}
