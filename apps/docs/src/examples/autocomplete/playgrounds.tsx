'use client'
import { Playground } from '@/components/playground'
import { Autocomplete } from '@creation-ui/react'
import { useState } from 'react'
import options from '../people-short-list.json'
import { type PersonOnListType } from './types'

const AutocompleteExample = () => {
  const [value, setValue] = useState<PersonOnListType | null>(options[0])

  return (
    <Autocomplete<PersonOnListType>
      value={value}
      options={options}
      onChange={value => setValue(value as PersonOnListType)}
      getOptionLabel={(option: PersonOnListType) => option?.label}
    />
  )
}

export const AutocompletePlayground = () => {
  return (
    <Playground
      component={AutocompleteExample}
      code={`
import { Autocomplete } from '@creation-ui/react'
import { useState } from 'react'
import options from '../people-short-list.json'
import { type PersonOnListType } from './types'


const AutocompleteExample = () => {
  const [value, setValue] = useState<PersonOnListType | null>(options[0])

  return (
    <Autocomplete<PersonOnListType>
      value={value}
      options={options}
      onChange={setValue}
      getOptionLabel={(option: PersonOnListType) => option?.label}
    />
  )
}`}
    />
  )
}

export const AutocompleteMultipleExample = () => {
  const [value, setValue] = useState<PersonOnListType[] | null>([
    options[0],
    options[1],
  ])

  const handleChange = (value: PersonOnListType[] | null) => setValue(value)
  const onCreate = (value: string) => {
    setValue(prev => [...(prev ?? []), { label: value, id: value }])
  }

  return (
    <Autocomplete<PersonOnListType>
      cx={{ container: 'w-64' }}
      multiple
      limit={3}
      value={value}
      options={options}
      onCreate={onCreate}
      onChange={handleChange}
      onClear={() => setValue([])}
    />
  )
}

export const AutocompleteMultiplePlayground = () => {
  return (
    <Playground
      component={AutocompleteMultipleExample}
      code={`
import { Autocomplete } from '@creation-ui/react'
import { useState } from 'react'
import { type PersonOnListType } from './types'
import options from '../people-short-list.json'


export const AutocompleteMultipleExample = () => {
  const [value, setValue] = useState<PersonOnListType[] | null>([
    options[0],
    options[1],
  ])

  const handleChange = (value: PersonOnListType[] | null) => setValue(value)
  const onCreate = (value: string) => {
    setValue(prev => [...(prev ?? []), { label: value, id: value }])
  }

  return (
    <Autocomplete<PersonOnListType>
      multiple
      limit={3}
      cx={{ container: 'w-64' }}
      value={value}
      options={options}
      onCreate={onCreate}
      onChange={handleChange}
      clearable
      onClear={() => setValue([])}
    />
  )
}`}
    />
  )
}
