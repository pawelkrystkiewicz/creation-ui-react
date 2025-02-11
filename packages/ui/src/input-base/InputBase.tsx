import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { InputBaseProps } from './types'
import { Icon } from '../icon'
import { Loader } from '../loader'

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

export const InputBase: FC<InputBaseProps> = ({
  startAdornment,
  endAdornment,
  clearable,
  onClear,
  children,
  className,
  loading,
}) => {
  return (
    <span data-slot='control' className={twMerge('relative', className)}>
      {startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
      {children}
      {loading && (
        <EndAdornment>
          <Loader />
        </EndAdornment>
      )}
      {!loading && endAdornment && <EndAdornment>{endAdornment}</EndAdornment>}
      {clearable && (
        <Icon
          icon={'close'}
          onClick={onClear}
          className={clsx(
            'cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2',
          )}
        />
      )}
    </span>
  )
}
