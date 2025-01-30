'use client'
// import { ToggleGroup } from '@creation-ui/react/toggle-group'
import { Input } from '@creation-ui/react'
import { Switch } from '@creation-ui/react'
import { capitalize } from '@/utils/list-or-types'
import clsx from 'clsx'
import type { FC } from 'react'
import { classes } from './classes'
import { ColorsSelector } from './components/colors-selector'
import { DEFAULT_CONTROLS } from './constants'
import { usePlayground } from './context/context'
import type { PlaygroundControl } from './types'
import { get } from 'lodash'
import { Field, Label } from '@headlessui/react'

interface PlaygroundControlProps {
  property: PlaygroundControl
  parentKey?: string
}

export const PlaygroundControlComponent: FC<PlaygroundControlProps> = ({
  property,
  parentKey,
}) => {
  const { state, handleChange } = usePlayground()
  const { name: n, type, values, component: controls, helperText } = property

  const name = parentKey ? `${parentKey}.${n}` : n

  const label = property.label ?? capitalize(name)

  const controlType = controls ?? DEFAULT_CONTROLS[type]

  const handleInputChange = (e: any) => {
    handleChange(name, e.target.value)
  }
  const handlePlainChange = (value: any) => {
    handleChange(name, value)
  }
  const onClear = () => {
    handleChange(name, '')
  }

  const value = get(state, name)

  const arrayValue = values?.find(v => v.value === value)

  switch (controlType) {
    case 'input:number':
      return (
        <Field>
          <Label>{label}</Label>
          <Input
            value={value as number}
            onChange={handleInputChange}
            placeholder={label}
            type={'number'}
            // helperText={helperText}
          />
        </Field>
      )
    case 'colors':
      return (
        <ColorsSelector
          label={label}
          value={arrayValue}
          options={(values ?? []) as any}
          onClick={handlePlainChange}
          helperText={helperText}
        />
      )
    case 'switch':
      return (
        <Field>
          <Switch
            checked={value as boolean}
            onChange={handlePlainChange}
            // helperText={helperText}
            // label={label}
          />
          <Label className={'ml-2 font-medium text-sm'}>{label}</Label>
        </Field>
      )
    case 'toggle-group':
      return 'Not implemented'
    // <ToggleGroup
    //   label={label}
    //   options={(values ?? []) as any}
    //   value={value as any}
    //   onChange={handlePlainChange}
    //   helperText={helperText}
    // />
    case 'nested':
      return (
        <div
          className={clsx(classes.controls, '!pl-0', '!pt-0', '!border-none')}
        >
          <div className='font-semibold'>{label}</div>
          {property.controls!.map(childProperty => (
            <PlaygroundControlComponent
              property={childProperty}
              key={childProperty.name}
              parentKey={name}
            />
          ))}
        </div>
      )
    case 'input:text':
    default:
      return (
        <Field>
          <Label className={'font-medium text-sm'}>{label}</Label>
          <Input
            onChange={handleInputChange}
            placeholder={label}
            type={'text'}
            value={value as string}
            // onClear={onClear}
            // clearable={!!value}
            // helperText={helperText}
          />
          <span>{helperText}</span>
        </Field>
      )
  }
}
