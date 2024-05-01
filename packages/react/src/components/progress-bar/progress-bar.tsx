import { Show } from '@root/components'
import { useTheme } from '@theme'
import { container, progressBar, progressValue } from './classes'
import type { ProgressBarProps } from './progress-bar.types'
import { formatDisplayValueDefault } from './utils'

const INVERT_THRESHOLD = 50

const ProgressBar = (props: ProgressBarProps) => {
  const { size: defaultSize } = useTheme()
  const {
    value: _value = 0,
    showValue = false,
    formatDisplayValue = formatDisplayValueDefault,
    className,
    size = defaultSize,
    status = 'primary',
    invertThreshold = INVERT_THRESHOLD,
  } = props

  const isMono = status === 'mono'
  const value = isNaN(_value) ? 0 : Math.min(100, Math.max(0, _value))
  const invert = value >= invertThreshold
  const formattedValue = formatDisplayValue(value)
  const width = formatDisplayValueDefault(value)

  return (
    <div {...props} className={container({  className })}>
      <div
        className={progressBar({ size, value: value !== 0, status })}
        style={{ width }}
      />
      <Show when={showValue && size !== 'sm'}>
        <span className={progressValue({ size, invert , mono: isMono})}>
          <span>{formattedValue}</span>
        </span>
      </Show>
    </div>
  )
}

export default ProgressBar
