import { cva } from 'class-variance-authority'
import { useTheme } from '../../theme'
import type { CalloutProps } from './types'
import { ELEMENT_STATUS, ELEMENT_VARIANTS } from '@creation-ui/core'
import { validateEnumProp } from '@creation-ui/core'
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
          'bg-primary/50',
          'text-primary',
          'border-primary',
          'bg-opacity-25',
        ],
        error: ['bg-error-50', 'text-error-500', 'border-error-500'],
        success: ['bg-success-50', 'text-success-600', 'border-success-500'],
        warning: [
          'bg-warning-100',
          'text-warning-600',
          'border-warning-500',
          'bg-opacity-25',
        ],
        info: ['bg-neutral-100', 'text-neutral-500', 'border-neutral-500'],
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
        className: '!bg-error-200',
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
