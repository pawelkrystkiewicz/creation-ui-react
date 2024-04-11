import Icon from '@components/icon'
import { BaseComponentProps, ElementSize, inputContainer, label as labelClasses, useTheme } from '@creation-ui/react'
import { mdiCircle, mdiClose } from '@mdi/js'
import { capitalize } from '@utils/list-or-types'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { FC, useId } from 'react'

export type GenericColorDefinition = {
  label: string
  value: string | undefined
  className: string
}

interface ColorsSelectorProps extends BaseComponentProps {
  options: GenericColorDefinition[]
  onClick: (value: string | boolean | undefined) => void
  label: string
  value?: GenericColorDefinition
  size?: ElementSize
}

const elementClasses = cva(
  ['relative', 'transform', 'h-6', 'w-6', 'rounded', 'cursor-pointer', 'transition-all', 'hover:scale-125'],
  {
    variants: {
      selected: {
        true: ['scale-125'],
        false: ['scale-100'],
      },
      undef: {
        true: 'border',
      },
    },
  },
)

export const ColorsSelector = ({ options, onClick, label, value, ...props }: ColorsSelectorProps) => {
  const componentId = useId()

  const { size: defaultSize } = useTheme()
  const { size = defaultSize, required, readOnly, error } = props

  const disabled = props.disabled || readOnly
  const containerClasses = clsx(inputContainer({ disabled, error: !!error }), `text-${size}`, 'micro-interactions')

  return (
    <div className={containerClasses}>
      <label
        htmlFor={componentId}
        className={labelClasses({ size, required: props.required })}
        aria-label={label?.toString()}
      >
        {label}
      </label>
      <div className='flex flex-wrap gap-3 w-fit' aria-required={required}>
        {options.map(option => (
          <ColorOption
            key={option.label}
            onClick={onClick.bind(null, option.value)}
            option={option}
            selected={option.value === value?.value}
          />
        ))}
      </div>
    </div>
  )
}

interface ColorOptionProps {
  option: GenericColorDefinition
  onClick: () => void
  selected: boolean
}

const ColorOption: FC<ColorOptionProps> = ({ option, onClick, selected }) => {
  const { value, label, className } = option
  const undef = value === 'default'

  return (
    <div
      key={value}
      title={capitalize(label)}
      onClick={onClick}
      className={elementClasses({
        undef,
        selected,
        className: className,
      })}
    >
      {undef && !selected && <Icon path={mdiClose} className='text-info' size={0.9} />}
      {selected && (
        <Icon
          path={mdiCircle}
          className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
      )}
    </div>
  )
}
