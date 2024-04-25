import { ThemePreloadedClasses } from '@root/theme'
import { cva } from 'class-variance-authority'

export const calendarHeaderClasses = cva(['font-semibold', 'mb-4'], {
  variants: {
    offsetMonth: {
      0: [],
      1: ['lg:block', 'hidden'],
    },
  },
})

export const calendarClasses = {
  container: cva(
    [
      'relative',
      'bg-background-portal',
      'border',
      'border-border',
      'p-4',
      'rounded-md',
    ],
    {
      variants: {
        size: {
          sm: ['w-72', 'min-h-72'],
          md: ['w-96', 'min-h-96'],
          lg: ['w-[406px]', 'min-h-[406px]'],
        },
        hasSecondView: {
          true: ['!min-w-fit'],
        },
      },
    }
  ),
}

export const calendarDaysViewClasses = ({
  animations,
  triggers,
  selected,
  focusable,
}: ThemePreloadedClasses) =>
  cva(
    [
      //
      animations.microInteractionsAll,
      focusable,
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
      'bg-primary',
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
            'bg-opacity-20',
          ],
        },
        isSelected: {
          true: [selected, triggers.contained, '!bg-opacity-100'],
          false: [triggers.outlined],
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
        size: {
          sm: ['size-8', 'text-sm'],
          md: ['size-10', 'text-sm'],
          lg: ['size-12'],
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
    }
  )

export const dayRowClasses = 'grid grid-cols-7 w-full'
export const calendarDaysViewTitleClasses = {
  day: cva(['select-none', 'justify-self-center'], {
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
