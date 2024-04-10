import { Container } from '@components/container'
import { Autocomplete } from '@creation-ui/react'
import { ChangeEvent, useState } from 'react'
import { PersonOnListType } from './types'
import options from '../people-short-list.json'

export const AutocompleteExternalSearchValueExample = () => {
  const [value, setValue] = useState<PersonOnListType>(options[0])
  const [query, setQuery] = useState('')

  const onChange = (value: PersonOnListType | PersonOnListType[] | null) => {
    // @ts-expect-error
    setValue(value)
  }
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <Container variant='column'>
      <Autocomplete<PersonOnListType>
        label={'Autocomplete - custom'}
        clearable
        value={value}
        options={options}
        onChange={onChange}
        onInputChange={onInputChange}
        getOptionLabel={(option: PersonOnListType) => option?.label}
      />
      <div className='w-64 border border-info-300 rounded-md p-5 mt-3'>
        <span className='uppercase text-sm'>Search query</span>
        <pre className='whitespace-pre-wrap'>{query}</pre>
      </div>
    </Container>
  )
}
