import clsx from 'clsx'

export const popoverCloseClasses = clsx('size', 'text-size')
export const popoverContentClasses = clsx(
  'bg-background-input',
  // TODO: bg-background-portal
  '!shadow-lg',
  'rounded',
  'py-2',
  'px-3',
  'size',
  'text-size'
)
export const popoverDescriptionClasses = clsx(
  'text-info',
  'text-sm',
  'leading-5',
  'description-size',
  'size'
)

export const popoverHeadingClasses = clsx('font-bold', 'size', 'heading-size')
export const popoverTriggerClasses = clsx('cursor-pointer', 'size', 'text-size')
