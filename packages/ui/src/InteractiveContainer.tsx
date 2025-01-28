import { cva } from 'class-variance-authority'
import { getWidthClasses } from './utils'
import clsx from 'clsx'

export const interactiveContainerClasses = cva([], {
  variants: {
    disabled: {
      true: ['cursor-not-allowed'],
    },
    fullWidth: {
      true: 'w-full',
    },
  },
})

interface InteractiveContainerProps {
  disabled?: boolean
  fullWidth?: boolean
  children?: React.ReactNode
  className?: string | string[]
}

export const InteractiveContainer = ({
  className,
  disabled,
  children,
  fullWidth,
}: InteractiveContainerProps) => {
  const classes = clsx(className)?.split(' ')
  const widthClasses = getWidthClasses(classes)

  return (
    <div
      className={interactiveContainerClasses({
        disabled,
        fullWidth,
        className: [widthClasses],
      })}
    >
      {children}
    </div>
  )
}
