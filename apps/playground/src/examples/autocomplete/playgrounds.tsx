// @ts-ignore
import { Autocomplete } from '@creation-ui/react'
import { useState } from 'react'
import options from './people-short-list.json'
import { type PersonOnListType } from './types'

export const AutocompleteExample = () => {
  const [value, setValue] = useState<PersonOnListType | null>(options[0])

  return (
    <Autocomplete<PersonOnListType>
      value={value}
      options={options}
      onChange={setValue}
      onClear={() => setValue(null)}
      getOptionLabel={(option: PersonOnListType) => option?.label}
    />
  )
}

export const AutocompleteMultipleExample = () => {
  const [value, setValue] = useState<PersonOnListType[] | null>([
    options[0],
    options[3],
  ])

  const handleChange = (value: PersonOnListType[] | null) => setValue(value)
  const onCreate = (value: string) => {
    setValue(prev => [...(prev ?? []), { label: value, id: value }])
  }

  return (
    <>
      <Autocomplete<PersonOnListType>
        multiple
        value={value}
        options={options}
        onCreate={onCreate}
        onChange={handleChange}
        onClear={() => setValue([])}
      />
    </>
  )
}
export const AutocompleteMultipleExampleAllSelected = () => {
  const [value, setValue] = useState<PersonOnListType[] | null>(options)

  const handleChange = (value: PersonOnListType[] | null) => setValue(value)
  const onCreate = (value: string) => {
    setValue(prev => [...(prev ?? []), { label: value, id: value }])
  }

  return (
    <>
      <Autocomplete<PersonOnListType>
        multiple
        value={value}
        options={options}
        onCreate={onCreate}
        onChange={handleChange}
        onClear={() => setValue([])}
      />
    </>
  )
}
