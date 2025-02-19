import clsx from 'clsx'

export const popoverContentClasses = clsx(
  'bg-(--background-primary)',
  '!shadow-lg',
  'rounded-md',
  'py-2',
  'px-3',
  'border',
  'border-(--border)',
)
export const popoverDescriptionClasses = clsx(
  'text-info',
  'text-sm',
  'leading-5',
)

export const popoverHeadingClasses = clsx('font-bold')
export const popoverTriggerClasses = clsx('cursor-pointer')
