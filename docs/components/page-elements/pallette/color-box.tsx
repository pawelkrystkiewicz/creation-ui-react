import { docsMicroInteractions } from '@components/classes'
import { ElementColor } from '@creation-ui/react'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

interface ColorBoxProps {
  color: ElementColor
  onClick?: () => void
  selected?: boolean
}

const boxClasses = cva(
  [
    //
    'size-10',
    'md:size-16',
    'lg:size-20 rounded-lg',
    'cursor-pointer',
    'group-hover:scale-110',
    docsMicroInteractions,
  ],
  {
    variants: {
      selected: {
        true: ['scale-110'],
      },
      color: {
        primary: ['bg-primary'],
        success: ['bg-success'],
        warning: ['bg-warning'],
        error: ['bg-error'],
        info: ['bg-info'],
      },
    },
  },
)

export const ColorBox = ({ onClick, color, selected }: ColorBoxProps) => (
  <div className={twMerge('group', docsMicroInteractions, 'flex flex-col items-center')}>
    <div onClick={onClick} className={boxClasses({ selected, color })}>
      &nbsp;
    </div>
    <div className={twMerge('group-hover:opacity-100 opacity-0 text-center mt-4', 'capitalize', docsMicroInteractions)}>
      {color}
    </div>
  </div>
)
