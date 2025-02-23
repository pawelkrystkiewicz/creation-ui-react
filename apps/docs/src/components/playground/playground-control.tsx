'use client'
import { capitalize } from '@/utils/list-or-types'
import { Input, Select, Switch, ToggleGroup } from '@creation-ui/react'
import clsx from 'clsx'
import { get } from 'lodash'
import type { FC } from 'react'
import { classes } from './classes'
import { ColorsSelector } from './components/colors-selector'
import { DEFAULT_CONTROLS } from './constants'
import { usePlayground } from './context/context'
import { PlaygroundInputField } from './playground.input-field'
import type { PlaygroundControl } from './types'

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
  const placeholder = typeof label === 'string' ? label : undefined

  switch (controlType) {
    case 'select':
      return (
        <PlaygroundInputField
          label={label}
          helperText={helperText}
          value={typeof value === 'string' ? value : (value as any).label}
        >
          <Select
            name={name}
            multiple={false}
            onChange={handleInputChange}
            // @ts-expect-error
            value={value}
          >
            {(values ?? []).map(opt => (
              <option value={opt} key={opt}>
                {opt}
              </option>
            ))}
          </Select>
        </PlaygroundInputField>
      )
    case 'input:number':
      return (
        <PlaygroundInputField label={label} helperText={helperText}>
          <Input
            value={value as number}
            onChange={handleInputChange}
            placeholder={placeholder}
            type={'number'}
          />
        </PlaygroundInputField>
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
        <PlaygroundInputField
          type='switch'
          label={label}
          helperText={helperText}
        >
          <Switch checked={value as boolean} onChange={handlePlainChange} />
        </PlaygroundInputField>
      )
    case 'toggle-group':
      return (
        <PlaygroundInputField
          type='column'
          label={label}
          helperText={helperText}
          value={value as string}
        >
          <ToggleGroup
            options={(values ?? []) as any}
            value={value as any}
            onChange={handlePlainChange}
          />
        </PlaygroundInputField>
      )
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
        <PlaygroundInputField label={label} helperText={helperText}>
          <Input
            onChange={handleInputChange}
            placeholder={placeholder}
            type={'text'}
            value={value as string}
            onClear={onClear}
          />
        </PlaygroundInputField>
      )
  }
}
