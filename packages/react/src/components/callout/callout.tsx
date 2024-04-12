import { cva } from 'class-variance-authority'
import { useTheme } from '../../theme'
import type { CalloutProps } from './types'
import { ELEMENT_STATUS, ELEMENT_VARIANTS } from '@types'
import { validateEnumProp } from '@utils'
import clsx from 'clsx'
import { ClearButton } from '../clear-button'

const calloutClasses = cva(
  [
    //
    'flex',
    'place-items-center',
    'gap-4',
    'py-5',
    'px-6',
    'rounded-lg',
    'w-full',
  ],
  {
    variants: {
      status: {
        primary: [
          'bg-primary',
          'text-primary',
          'border-primary',
          'bg-opacity-25',
        ],
        error: ['bg-error', 'text-error', 'border-error'],
        success: ['bg-success', 'text-success', 'border-success'],
        warning: [
          'bg-warning',
          'text-warning',
          'border-warning',
          'bg-opacity-25',
        ],
        info: ['bg-background-input'],
      },
      variant: {
        contained: [],
        outlined: ['border', '!bg-opacity-10'],
        text: ['!bg-opacity-0'],
      },
    },
    compoundVariants: [
      {
        status: 'info',
        variant: 'outlined',
        className: '!bg-neutral-200',
      },
      {
        status: 'error',
        variant: 'outlined',
        className: '!bg-error',
      },
    ],
  }
)

export const Callout = (props: CalloutProps) => {
  const theme = useTheme()
  const {
    //
    title,
    icon,
    content,
    onClose,
    className,
  } = props

  const isStatusValid = validateEnumProp(props.status, ELEMENT_STATUS as any)
  const isVariantValid = validateEnumProp(
    props.variant,
    ELEMENT_VARIANTS as any
  )
  const status = isStatusValid ? props.status : 'info'
  const variant = isVariantValid ? props.variant : 'contained'

  return (
    <div
      className={calloutClasses({ status, variant, className })}
      role='alert'
    >
      {icon}
      <div className={clsx('flex', 'flex-col', 'w-full')}>
        {title && (
          <h4 className='mb-2 text-2xl font-medium leading-tight '>{title}</h4>
        )}
        <p className=''>{content}</p>
      </div>
      {onClose && <ClearButton onClick={onClose} />}
    </div>
  )
}
