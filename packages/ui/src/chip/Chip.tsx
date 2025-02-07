import { ClearButton } from '../clear-button'
import { chipClasses } from './classes'
import type { ChipProps } from './types'

export const Chip = (props: ChipProps) => {
  const {
    //
    label,
    color = 'primary',
    variant = 'contained',
    onDelete,
    onClick,
    startAdornment = null,
    endAdornment = null,
    uppercase,
    cx,
    style,
  } = props

  const removable = !!onDelete
  const interactive = !!onClick || removable

  return (
    <div
      style={style}
      className={chipClasses({
        color: style ? 'unstyled' : color,
        variant,
        uppercase,
        interactive,
        className: [cx?.container?.outer],
      })}
      onClick={onClick}
    >
      {!!startAdornment && startAdornment}
      <span className={cx?.container?.inner}>{label}</span>
      {!!endAdornment && endAdornment}
      {removable && (
        <div className='rounded-full'>
          <ClearButton onClick={onDelete} />
        </div>
      )}
    </div>
  )
}

Chip.displayName = 'Chip'
