import clsx from 'clsx'
import { type FC } from 'react'
import { ClearButton } from '../clear-button'
import { inputBaseClasses } from './classes'
import { EndAdornment } from '../input/EndAdornment'
import { StartAdornment } from '../input/StartAdornment'
import { InputBaseProps } from './types'

export const InputBase: FC<InputBaseProps & { className?: string }> = ({
  startAdornment,
  endAdornment,
  clearable,
  onClear,
  children,
  className,
  border,
  background,
}) => {
  return (
    <span
      data-slot='control'
      className={'relative'}
    >
      {startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
      {children}
      {endAdornment && (
        <EndAdornment isNotLast={clearable}>{endAdornment}</EndAdornment>
      )}
      {clearable && (
        <ClearButton
          onClick={onClear}
          className={clsx(
            'cursor-pointer',
            'absolute',
            '-translate-y-1/2',
            '-translate-x-1/2',
            'right-0',
            'top-1/2',
          )}
          role='button'
          data-testid='clear-button'
        />
      )}
    </span>
  )
}
