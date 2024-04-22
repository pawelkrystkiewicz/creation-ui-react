import { useMemo } from 'react'
import { useTheme } from '../../theme'
import { ClearButton } from '../clear-button'
import { Show } from '../show'
import type { ChipProps } from './chip.types'
import { chipClasses } from './classes'

export const Chip = (props: ChipProps) => {
  const { size: defaultSize, variant: defaultVariant, styles } = useTheme()
  const {
    //
    label,
    status,
    size = defaultSize,
    variant = defaultVariant,
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

  const withTheme = useMemo(() => chipClasses(styles), [styles])

  return (
    <div
      style={style}
      className={withTheme({
        size,
        status: style ? undefined : status,
        variant,
        uppercase,
        interactive,
        className: [cx?.container?.outer],
      })}
      onClick={onClick}
    >
      <Show when={!!startAdornment}>{startAdornment}</Show>
      <span className={cx?.container?.inner}>{label ?? status}</span>
      <Show when={!!endAdornment}>{endAdornment}</Show>
      <Show when={removable}>
        <div className='rounded-full'>
          <ClearButton onClick={onDelete} />
        </div>
      </Show>
    </div>
  )
}

Chip.displayName = 'Chip'
