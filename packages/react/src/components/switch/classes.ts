import { ThemePreloadedClasses } from '@root/theme'
import { cva } from 'class-variance-authority'

export const switchClasses = ({
  animations,
  readOnly,
  triggers,
}: ThemePreloadedClasses) =>
  cva(
    [
      animations.microInteractions,
      'border-border',
      'micro-interactions',
      'cursor-pointer',
      'peer',
      'relative',
      'inline-flex',
      'shrink-0',
      '!rounded-full',
      'h-fit',
      'border',
      'bg-background-input',
    ],
    {
      variants: {
        size: {
          sm: ['w-[35px]', 'p-0.5'],
          md: ['w-[47px]', 'p-0.5'],
          lg: ['w-[55px]', 'p-0.5'],
        },
        checked: {
          true: ['bg-primary'],
          false: ['hover:bg-white/25'],
        },
        readOnly: { true: readOnly },
      },
      defaultVariants: {
        size: 'md',
      },
    }
  )
export const switchCircle = cva(
  ['transform', 'rounded-full', 'bg-white', 'shadow-lg'],
  {
    variants: {
      size: {
        sm: ['size-3'],
        md: ['size-4'],
        lg: ['size-5'],
      },
      checked: {
        true: null,
        false: ['translate-x-0'],
      },
    },
    compoundVariants: [
      {
        checked: true,
        size: 'sm',
        className: ['translate-x-4'],
      },
      {
        checked: true,
        size: 'md',
        className: ['translate-x-6'],
      },
      {
        checked: true,
        size: 'lg',
        className: ['translate-x-7'],
      },
    ],
  }
)
