import { docsMicroInteractions } from '@components/classes'
import { ElementStatus } from '@creation-ui/core'
import { twMerge } from 'tailwind-merge'

interface ColorBoxProps {
  color: ElementStatus
  onClick?: () => void
  selected?: boolean
}

const bg: Record<ElementStatus, any> = {
  primary: 'bg-primary-500',
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  error: 'bg-error-500',
  info: 'bg-info-500',
}

const ring: Record<ElementStatus, any> = {
  primary: 'ring-primary-500',
  success: 'ring-success-500',
  warning: 'ring-warning-500',
  error: 'ring-error-500',
  info: 'ring-info-500',
}

export const ColorBox = ({ onClick, color, selected }: ColorBoxProps) => (
  <div className={twMerge('group', docsMicroInteractions, 'flex flex-col items-center')}>
    <div
      onClick={onClick}
      className={twMerge(
        //
        'w-10 h-10',
        'md:w-16 md:h-16',
        'lg:w-20 lg:h-20 rounded-lg',
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
