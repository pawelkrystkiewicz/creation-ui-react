import { docsMicroInteractions } from '@components/classes'
import { ElementStatus } from '@creation-ui/react'
import { twMerge } from 'tailwind-merge'

interface ColorBoxProps {
  color: ElementStatus
  onClick?: () => void
  selected?: boolean
}

const bg: Record<ElementStatus, any> = {
  primary: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  info: 'bg-info',
}

const ring: Record<ElementStatus, any> = {
  primary: 'ring-primary',
  success: 'ring-success',
  warning: 'ring-warning',
  error: 'ring-error',
  info: 'ring-info',
}

export const ColorBox = ({ onClick, color, selected }: ColorBoxProps) => (
  <div className={twMerge('group', docsMicroInteractions, 'flex flex-col items-center')}>
    <div
      onClick={onClick}
      className={twMerge(
        //
        'size-10',
        'md:size-16',
        'lg:size-20 rounded-lg',
        'cursor-pointer',
        'group-hover:scale-110',
        docsMicroInteractions,
        bg[color],
        selected && 'ring-2',
        selected && 'scale-110',
        selected && ring[color],
      )}
    >
      &nbsp;
    </div>
    <div
      className={twMerge(
        //
        'group-hover:opacity-100 opacity-0 text-center mt-4',
        'capitalize',
        // selected && 'opacity-100 ',
        docsMicroInteractions,
      )}
    >
      {color}
    </div>
  </div>
)
