'use client'
import { capitalize } from '@/utils/list-or-types'
import type { BaseComponentProps, ElementSize } from '@creation-ui/react'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { Xmark } from 'iconoir-react'
import { type FC } from 'react'
import { PlaygroundInputField } from '../playground.input-field'

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
  [
    'relative',
    'transform',
    'h-6',
    'w-6',
    'rounded',
    'cursor-pointer',
    'transition-all',
    'hover:scale-125',
  ],
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

export const ColorsSelector = ({
  options,
  onClick,
  label,
  value,
  ...props
}: ColorsSelectorProps) => {
  const { required, readOnly, error } = props
  const disabled = props.disabled || readOnly
  return (
    <PlaygroundInputField label={label} value={value?.value}>
      <div className='flex flex-wrap gap-3 w-fit mt-2' aria-required={required}>
        {options.map(option => (
          <ColorOption
            key={option.label}
            onClick={onClick.bind(null, option.value)}
            option={option}
            selected={option.value === value?.value}
          />
        ))}
      </div>
    </PlaygroundInputField>
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
      {undef && !selected && <Xmark />}
      <div
        className={clsx(
          'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-2 rounded-full micro-interactions',
          selected ? 'bg-white' : 'bg-transparent',
        )}
      />
    </div>
  )
}
