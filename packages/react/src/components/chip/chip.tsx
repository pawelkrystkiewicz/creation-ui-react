import { useTheme } from '../../theme'
import { ClearButton } from '../clear-button'
import { Show } from '../show'
import type { ChipProps } from './chip.types'
import { chipClasses } from './classes'

export const Chip = (props: ChipProps) => {
  const {
    //
    size: defaultSize,
  } = useTheme()

  const {
    //
    label,
    status = 'info',
    size = defaultSize,
    variant,
    onDelete,
    onClick,
    startAdornment = null,
    endAdornment = null,
    uppercase,
    cx,
    style,
  } = props

  const interactive = !!onClick
  const removable = !!onDelete

  return (
    <div
      style={style}
      className={chipClasses({
        size,
        status: style ? undefined : status,
        variant,
        uppercase,
        interactive,
        className: cx?.container?.outer,
      })}
      onClick={onClick}
    >
      <Show when={!!startAdornment}>{startAdornment}</Show>
      <span className={cx?.container?.inner}>{label ?? status}</span>
      <Show when={!!endAdornment}>{endAdornment}</Show>
      <Show when={removable}>
        <div className='bg-info-50 dark:bg-info/50 rounded-full'>
          <ClearButton onClick={onDelete} />
        </div>
      </Show>
    </div>
  )
}

Chip.displayName = 'Chip'
