import { cva } from 'class-variance-authority'

export const classes = {
  container: [
    'grid',
    'grid-cols-3',
    'border',
    'rounded-lg',
    'border-(--border)',
    'my-3'
  ],
  view: cva(
    ['p-10', 'flex', 'items-center', 'place-items-center', 'justify-center'],
    {
      variants: {
        controls: { true: ['col-span-2'], false: ['col-span-3'] },
      },
    },
  ),
  controls: [
    'flex',
    'flex-col',
    'border-l',
    'border-(--border)',
    'p-4',
    'gap-2',
    'bg-neutral-100',
    'dark:bg-neutral-800',
  ],
  title: ['text-xl', 'font-semibold', 'leading-relaxed'],
  code: [
    'col-span-3',
    'text-sm',
    'w-full',
    'font-mono',
    'border-t',
    'border-(--border)',
  ],
}
