import { cva } from 'class-variance-authority'
import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '../icon'
import { InputBaseProps } from './types'

const classes = cva([
  'cursor-pointer',
  'absolute',
  '-translate-y-1/2',
  '-translate-x-1/2',
  'right-0',
  'bottom-0',
])

export const EndAdornment = ({ children }: { children: ReactNode }) => (
  <span
    className={'absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2'}
  >
    {children}
  </span>
)
export const StartAdornment = ({ children }: { children: ReactNode }) => (
  <span className={'absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2'}>
    {children}
  </span>
)

export const InputBase: FC<InputBaseProps & { className?: string }> = ({
  startAdornment,
  endAdornment,
  clearable,
  onClear,
  children,
  className,
}) => {
  return (
    <span data-slot='control' className={twMerge('relative', className)}>
      {startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
      {children}
      {endAdornment && <EndAdornment>{endAdornment}</EndAdornment>}
      {clearable && (
        <Icon icon={'close'} onClick={onClear} className={classes()} />
      )}
    </span>
  )
}
