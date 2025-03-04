'use client'
import { Container } from '@/components/container'
import {
  Autocomplete,
  Avatar,
  ClearButton,
  Field,
  Flex,
  Label,
} from '@creation-ui/react'
import { useState } from 'react'
import { renderOption } from './custom'
import { type Character } from './types'
import users from './users.json'

const renderTags = (
  selected: Character[],
  handleRemoveSelected: (option: any) => void,
) =>
  selected?.map(option => (
    <Flex
      key={option.id}
      items={'center'}
      gapX={2}
      gapY={2}
      className='size-fit border rounded-full p-1 text-xs'
    >
      <Avatar
        size={16}
        src={option.image}
        className={'size-fit object-cover'}
      />
      <span className='font-medium'>{option.name}</span>
      <ClearButton onClick={() => handleRemoveSelected(option as any)} />
    </Flex>
  ))

export const AutocompleteExampleCustomMultiselect = () => {
  const [value, setValue] = useState<Character[] | undefined | null>([])

  const onChange = (value: Character[] | null) => {
    setValue(value)
  }

  return (
    <Container variant='column'>
      <Field>
        <Label>Autocomplete - custom</Label>
        <Autocomplete<Character>
          renderOption={renderOption}
          renderTags={renderTags}
          multiple
          filterSelectedOptions
          value={value as any}
          options={users}
          onChange={onChange as any}
          isOptionEqualToValue={(a: Character, b: Character) => a?.id === b?.id}
          getOptionLabel={({ name }: Character) => name}
          onClear={() => setValue(null)}
        />
      </Field>
    </Container>
  )
}
