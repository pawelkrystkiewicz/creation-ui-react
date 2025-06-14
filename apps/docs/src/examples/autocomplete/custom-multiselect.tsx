'use client'
import { Container } from '@/components/container'
import {
  Autocomplete,
  AutocompleteRenderTags,
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

const renderTags: AutocompleteRenderTags<Character> = ({
  renderableOptions: selected,
  removeSelected,
}) =>
  selected?.map(option => (
    <Flex
      key={option.id}
      items={'center'}
      gapX={2}
      gapY={2}
      className='size-fit rounded-full p-1 text-xs'
    >
      <Avatar
        size={16}
        src={option.image}
        className={'size-fit object-cover'}
      />
      <span className='font-medium'>{option.name}</span>
      <ClearButton onClick={() => removeSelected?.(option as any)} />
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
          // @ts-expect-error
          isOptionEqualToValue={(a: Character, b: Character) => a?.id === b?.id}
          getOptionLabel={({ name }: Character) => name}
          onClear={() => setValue(null)}
        />
      </Field>
    </Container>
  )
}
