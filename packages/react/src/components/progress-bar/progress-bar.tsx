import { useTheme } from '@theme'
import clsx from 'clsx'
import type { ProgressBarProps } from './progress-bar.types'
import { cva } from 'class-variance-authority'
import { Show, ShowFirstMatching } from '@root/components'

const INVERT_THRESHOLD = 48

const classes = {
  container: [
    'w-full',
    'rounded-full',
    'relative', 'bg-background-input'
  ]
}

const progressValue = cva(
  [
    'absolute',
    'top-1/2',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    '-translate-y-1/2'
  ],
  {
    variants: {

      size: {
        sm: ['!top-0', '!-translate-y-full', 'pb-2', 'text-sm'],
        md: ['text-sm'],
        lg: ['text-base']
      }
    }
  }
)

const progressValueAtom = cva([], {
  variants: {
    invert: {
      true: ['text-white'],
      false: ['text-text-primary']
    }
  }
})

const progressBar = cva(
  [
    'text-center',
    'leading-none',
    'rounded-full',
    'transition-all',
    'duration-500',
    'ease-in-out'
  ],
  {
    variants: {
      size: {
        sm: ['p-1'],
        md: ['p-2'],
        lg: ['p-3']
      },
      value: {
        false: ['!bg-transparent']
      },
      status: {
        primary: ['bg-primary'],
        success: ['bg-success'],
        warning: ['bg-warning'],
        error: ['bg-error'],
        info: ['bg-info']
      }
    },
    defaultVariants: {
      size: 'md',
      status: 'primary'
    }
  }
)

const formatDisplayValueDefault = (value: number) => `${value}%`

const ProgressBar = (props: ProgressBarProps) => {
  const { size: defaultSize } = useTheme()
  const {
    value: _value = 0,
    showValue = false,
    formatDisplayValue = formatDisplayValueDefault,
    className,
    size = defaultSize,
    status,
    invertThreshold = INVERT_THRESHOLD
  } = props
  const value = isNaN(_value) ? 0 : Math.min(100, Math.max(0, _value))
  const invert = value >= invertThreshold
  const formattedValue = formatDisplayValue(value)
  const width = formatDisplayValueDefault(value)
  return (
    <div {...props} className={clsx(classes.container, className)}>
      <div
        className={progressBar({ size, value: value !== 0, status })}
        style={{ width }}
      ></div>
      <span className={progressValue({ size, className: [size] })}>
        <Show when={showValue && size !== 'sm'}>
          <ShowFirstMatching>
            <Show when={formattedValue.length <= 3}>
          {formattedValue?.split('').map((character, index) => {
            const invert = invertThreshold + 2 * index <= value
            return <span
              className={progressValueAtom({ invert })}>{character}</span>
          })}
            </Show>
            <Show when={true}>
              <span
                className={progressValueAtom({ invert })}>{formattedValue}</span>
            </Show>
          </ShowFirstMatching>
        </Show>
      </span>
    </div>
  )
}

export default ProgressBar
