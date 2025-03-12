import { cva } from 'class-variance-authority'

export const calendarHeaderClasses = cva(['font-semibold', 'mb-4'], {
  variants: {
    offsetMonth: {
      0: [],
      1: ['lg:block', 'hidden'],
    },
  },
})

export const calendarContainerClasses = cva(
  [
    'relative',
    'bg-background-primary',
    'border',
    'border-border',
    'p-4',
    'rounded-md',
    'w-fit',
  ],
  {
    variants: {
      hasSecondView: {
        true: ['!min-w-fit'],
      },
    },
  },
)

export const calendarDayCellClasses = cva(
  [
    //
    'micro-interactions',
    // focusable,
    'focus-visible:outline-2',
    'focus-visible:outline-primary',
    // focusable
    'cursor-pointer',
    'select-none',
    'justify-self-center',
    'flex',
    'items-center',
    'justify-center',
    'text-center',
    'relative',
    'rounded-md',
    'border-transparent',
    'size-(--ui-height)',
  ],
  {
    variants: {
      isToday: {
        true: ['font-bold'],
      },
      isInRange: {
        true: [
          'rounded-none',
          'first:rounded-l-md',
          'last:rounded-r-md',
          'bg-primary/80',
          'hover:bg-primary/100',
          'text-white',
        ],
      },
      isSelected: {
        true: ['bg-primary/80', 'hover:bg-primary/100', 'text-white'],
        false: ['bg-primary/0', 'hover:bg-primary/10'],
      },
      isStart: {
        true: ['rounded-l-md'],
      },
      isEnd: {
        true: ['rounded-r-md'],
      },
      isCurrentMonth: {
        true: [],
        false: ['text-opacity-75'],
      },
      isWeekend: {
        true: ['text-error'],
        false: [],
      },
    },
    defaultVariants: {
      isSelected: false,
      isToday: false,
      isCurrentMonth: true,
      isWeekend: true,
    },
  },
)

export const dayRowClasses = 'grid grid-cols-7 w-[calc(var(--ui-height)*7)]'
export const calendarDaysViewTitleClasses = {
  day: cva(['select-none', 'items-center'], {
    variants: {
      isWeekend: {
        true: 'text-error',
        false: '',
      },
    },
  }),
  row: cva([dayRowClasses, 'text-xs', 'font-semibold', 'capitalize'], {
    variants: {
      offsetMonth: {
        0: [],
        1: ['lg:grid', 'hidden'],
      },
    },
  }),
}
