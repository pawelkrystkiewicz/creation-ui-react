import { ThemePreloadedClasses } from '@root/theme'
import { cva } from 'class-variance-authority'

export const tooltip = ({ animations, size }: ThemePreloadedClasses) =>
  cva(
    [
      animations.microInteractionsAll,
      'pointer-events-none',
      'absolute',
      'whitespace-nowrap',
      'rounded',
      'bg-background-portal',
      'opacity-0',
      'transition',
      'before:absolute',
      'before:border-4',
      'before:border-transparent',
      "before:content-['']",
      'group-hover:opacity-100',
      'border',
      'border-border',
      'shadow-lg',
    ],
    {
      variants: {
        position: {
          top: [
            'before:top-full',
            '-top-10',
            'left-1/2',
            'before:border-t-border',
            '-translate-x-1/2',
            'before:left-1/2',
            'before:-translate-x-1/2',
          ],
          bottom: [
            'top-full',
            'mt-2',
            '-translate-x-1/2',
            'left-1/2',
            'before:bottom-full',
            'before:left-1/2',
            'before:-translate-x-1/2',
            'before:border-b-border',
          ],
          left: [
            'right-full',
            'mr-2',
            '-translate-y-1/2',
            'top-1/2',
            'before:left-full',
            'before:top-1/2',
            'before:-translate-y-1/2',
            'before:border-l-border',
          ],
          right: [
            'ml-2',
            'top-1/2',
            'left-full',
            '-translate-y-1/2',
            'before:right-full',
            'before:top-1/2',
            'before:-translate-y-1/2',
            'before:border-r-border',
          ],
        },
        size: {
          sm: [size.sm.fontSize, 'py-0.5', 'px-1'],
          md: [size.md.fontSize, 'py-1', 'px-2'],
          lg: [size.lg.fontSize, 'py-2', 'px-3'],
        },
      },
      defaultVariants: {
        position: 'top',
      },
    }
  )
