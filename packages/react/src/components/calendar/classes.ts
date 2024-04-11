import { cva } from 'class-variance-authority'
import { twix } from '@utils'

export const headerClasses = twix('font-semibold', 'capitalize ')

export const calendarClasses = {
  container: cva(
    [
      'micro-interactions',
      'bg-background-secondary',
      'border',
      'p-4',
      'rounded-md',
    ],
    {
      variants: {
        size: {
          sm: ['w-72'],
          md: ['w-96'],
          lg: ['w-[406px]'],
        },
        hasSecondView: {
          true: ['!min-w-fit'],
        },
      },
    }
  ),
}

export const calendarDaysViewClasses = {
  day: cva(
    [
      //
      'micro-interactions',
      'cursor-pointer',
      'select-none',
      'justify-self-center',
      'bg-none',
      'flex',
      'items-center',
      'justify-center',
      //
      'text-center',
      'relative',
      'rounded-md',
      'hover:bg-primary',
    ],
    {
      variants: {
        isToday: {
          true: ['font-bold'],
          false: '',
        },
        isInRange: {
          true: [
            //
            'bg-primary-50/50',
            'rounded-none',
            'first:rounded-l-md',
            'last:rounded-r-md',
          ],
          false: '',
        },
        isSelected: {
          true: [
            '!text-info',
            '!bg-primary',
            'hover:bg-primary',
            'hover:text-primary',
            'focus:bg-primary',
          ],
        },
        isStart: {
          true: ['rounded-l-md'],
          false: '',
        },
        isEnd: {
          true: ['rounded-r-md'],
          false: '',
        },
        isCurrentMonth: {
          true: ['text-info', 'dark:text-info'],
          false: ['text-info', 'dark:text-info'],
        },
        size: {
          sm: ['w-full', 'h-8', 'text-sm'],
          md: ['w-full', 'h-10', 'text-sm'],
          lg: ['w-full', 'h-12'],
        },
        isWeekend: {
          true: '!text-error',
          false: '',
        },
      },
      defaultVariants: {
        isSelected: false,
        isToday: false,
        isCurrentMonth: true,
        isWeekend: true,
      },
      compoundVariants: [
        {
          isSelected: true,
          isWeekend: true,
          isCurrentMonth: true,
          className: '!text-info',
        },
      ],
    }
  ),
}

export const dayRowClasses = twix('grid', 'grid-cols-7')
export const calendarDaysViewTitleClasses = {
  day: cva(['select-none', 'justify-self-center'], {
    variants: {
      isToday: {
        true: '',
        false: '',
      },
      isWeekend: {
        true: '!text-error',
        false: '',
      },
    },
  }),
  row: cva(
    [
      //
      dayRowClasses(),
      'py-2',
      'text-xs',
      'font-semibold',
      'capitalize',
    ],
    {
      variants: {
        offsetMonth: {
          0: '',
          1: ['md:grid', 'hidden'],
        },
      },
    }
  ),
}
