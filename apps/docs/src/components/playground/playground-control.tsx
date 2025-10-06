'use client'
import { capitalize } from '@/utils/list-or-types'
import {
  Input,
  Select,
  SelectButton,
  Selected,
  SelectOption,
  SelectOptions,
  Switch,
  ToggleGroup,
} from '@creation-ui/react'
import clsx from 'clsx'
import { get } from 'lodash'
import type { FC, ReactNode } from 'react'
import { classes } from './classes'
import { ColorsSelector } from './components/colors-selector'
import { DEFAULT_CONTROLS } from './constants'
import { usePlayground } from './context/context'
import { PlaygroundInputField } from './playground.input-field'
import type { PlaygroundControl, PlaygroundSelectValue } from './types'

const PLAIN_SELECT_VALUE = ['string', 'number', 'boolean']
type SelectComplexOption = { label: ReactNode; value: PlaygroundSelectValue }
type SelectOptionType = PlaygroundSelectValue | SelectComplexOption

const selectValue = (
  option?: SelectOptionType,
): PlaygroundSelectValue | undefined => {
  if (PLAIN_SELECT_VALUE.includes(typeof option)) {
    return option as any
  }

  return (option as SelectComplexOption)?.value
}

const selectLabel = (option?: SelectOptionType): string => {
  if (PLAIN_SELECT_VALUE.includes(typeof option)) {
    return option as any
  }

  return String((option as SelectComplexOption)?.label ?? '')
}

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
  const arrayValue = values?.find(v => selectValue(v) === value) as
    | PlaygroundSelectValue
    | undefined
  const placeholder = typeof label === 'string' ? label : undefined

  switch (controlType) {
    case 'select':
      return (
        <PlaygroundInputField
          label={label}
          helperText={helperText}
          value={selectLabel(value as SelectOptionType)}
        >
          <Select
            value={value as string}
            onChange={handlePlainChange}
            cx={{
              container: 'w-full',
            }}
          >
            <SelectButton className='w-full'>
              <Selected placeholder='Select option' />
            </SelectButton>
            <SelectOptions>
              {(values ?? []).map(option => {
                const value = selectValue(option as SelectOptionType)
                const label = selectLabel(option)

                return (
                  <SelectOption key={value} value={value as string}>
                    {label}
                  </SelectOption>
                )
              })}
            </SelectOptions>
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
          value={arrayValue as any}
          options={(values ?? []) as any}
          onClick={handlePlainChange}
          helperText={helperText}
        />
      )
    case 'switch':
      return (
        <PlaygroundInputField type='row' label={label} helperText={helperText}>
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
