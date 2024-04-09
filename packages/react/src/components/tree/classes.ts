import { cva, VariantProps } from 'class-variance-authority'

export const indentationClasses = cva([], {
  variants: {
    level: {
      false: [],
      0: ['pl-2'],
      1: ['pl-4'],
      2: ['pl-6'],
      3: ['pl-8'],
      4: ['pl-10'],
    },
  },
})

export type IndentationLevel = VariantProps<typeof indentationClasses>['level']

export const titleClasses = cva(
  [
    //
    'cursor-pointer',
    'h-9',
    'py-2',
    'pr-4',
    'leading-tight',
    'truncate',
    'text-text-primary',
    'bg-info-50',
    'hover:bg-primary',
    'border-b',
    'border-gray-200',
    'flex',
    'items-center',
    'group',
    'text-sm',
    '!overflow-x-auto',
  ],
  {
    variants: {
      level: {
        0: ['font-bold'],
      },
    },
  },
)
