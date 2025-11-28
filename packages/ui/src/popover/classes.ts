import clsx from 'clsx'

export const popoverContentClasses = clsx(
  'bg-popover',
  'text-popover-foreground',
  '!shadow-lg',
  'rounded-md',
  'py-2',
  'px-3',
  'border',
  'border-border',
  'z-(--ui-z-dropdowns)',
)
export const popoverDescriptionClasses = clsx(
  'text-popover-foreground/75',
  'text-sm',
  'leading-5',
)

export const popoverHeadingClasses = clsx('font-bold')
export const popoverTriggerClasses = clsx('cursor-pointer')
