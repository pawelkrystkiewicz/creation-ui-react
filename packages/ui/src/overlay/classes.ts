import { cva } from 'class-variance-authority'

export const overlay = cva(
  [
    'absolute',
    'bg-black/50',
    'flex',
    'justify-center',
    'place-items-center',
    'select-none',
    'overflow-clip',
    'inset-0',
    'h-full',
    'w-full',
    'z-50',
    'z-(--ui-z-overlays)',
  ],
  {
    variants: {
      cursorWait: {
        true: ['cursor-wait'],
        false: ['cursor-default'],
      },
    },
  },
)
