import { cva } from 'class-variance-authority'
import { twix } from '@utils'

export const headerClasses = twix('font-semibold', 'capitalize ')

export const calendarClasses = {
  container: cva(
    ['relative',
      'micro-interactions',
      'bg-background-primary',
      'border',
      'p-4',
      'rounded-md'
    ],
    {
      variants: {
        size: {
          sm: ['w-72'],
          md: ['w-96'],
          lg: ['w-[406px]']
        },
        hasSecondView: {
          true: ['!min-w-fit']
        }
      }
    }
  )
}

export const calendarDaysViewClasses = {
  day: cva(
    [
      //
      'micro-interactions',
      'cursor-pointer',
      'select-none',
      'justify-self-center',
      'flex',
      'items-center',
      'justify-center',
      'text-center',
      'relative',
      'rounded-md',
      'cui-element',
      'border-transparent',
      'bg-primary'
    ],
    {
      variants: {
        isToday: {
          true: ['font-bold'],
          false: ''
        },
        isInRange: {
          true: [
            'rounded-none',
            'first:rounded-l-md',
            'last:rounded-r-md',
            'border-t',
            'border-b',
            '!border-primary',
            'first:border-l',
            'last:border-r'
          ],
          false: ''
        },
        isSelected: {
          true: [
            'cui-selected',
            'contained',
            '!text-white',
            '!border-none'
          ],
          false: ['outlined']
        },
        isStart: {
          true: ['rounded-l-md'],
          false: ''
        },
        isEnd: {
          true: ['rounded-r-md'],
          false: ''
        },
        isCurrentMonth: {
          true: [],
          false: ['text-opacity-75']
        },
        size: {
          sm: ['size-8', 'text-sm'],
          md: ['size-10', 'text-sm'],
          lg: ['size-12']
        },
        isWeekend: {
          true: ['text-error'],
          false: []
        }
      },
      defaultVariants: {
        isSelected: false,
        isToday: false,
        isCurrentMonth: true,
        isWeekend: true
      },
    }
  )
}

export const dayRowClasses = twix('grid', 'grid-cols-7')
export const calendarDaysViewTitleClasses = {
  day: cva(['select-none', 'justify-self-center'], {
    variants: {
      isToday: {
        true: '',
        false: ''
      },
      isWeekend: {
        true: 'text-error',
        false: ''
      }
    }
  }),
  row: cva(
    [
      //
      dayRowClasses(),
      'py-2',
      'text-xs',
      'font-semibold',
      'capitalize'
    ],
    {
      variants: {
        offsetMonth: {
          0: '',
          1: ['md:grid', 'hidden']
        }
      }
    }
  )
}
