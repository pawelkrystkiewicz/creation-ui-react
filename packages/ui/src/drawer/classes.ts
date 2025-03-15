import { cva } from 'class-variance-authority'

export const drawerAnimation = {
  animation: ['micro-interactions', 'transform'],
  enter: {
    top: ['-translate-y-full'],
    bottom: ['translate-y-full'],
    right: ['translate-x-full'],
    left: ['-translate-x-full'],
  },
  leave: {
    top: ['translate-y-0'],
    bottom: ['translate-y-0'],
    right: ['translate-x-0'],
    left: ['translate-x-0'],
  },
}

export const drawerChildClasses = [
  'w-full',
  'overflow-hidden',
  'text-left',
  'shadow-xl',
  'bg-[varbackground-primary]',
]

export const drawerStyles = cva(
  ['fixed', 'overflow-hidden', 'w-full', 'h-full', 'z-[var(--ui-z-drawers)]'],
  {
    variants: {
      position: {
        bottom: ['inset-x-0', 'bottom-0'],
        top: ['inset-x-0', 'top-0'],
        right: ['inset-y-0', 'right-0'],
        left: ['inset-y-0', 'left-0'],
      },
      defaultVariants: {
        position: 'right',
      },
    },
  },
)
