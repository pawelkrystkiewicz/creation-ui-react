'use client'
import {
  Field,
  Error,
  Label,
  Input,
  Description,
} from '@creation-ui/react'
import { useState, type ChangeEvent } from 'react'

export const InputField = () => {

  const [value, setValue] = useState(20)

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }

  const isError = value < 0

  return (

    <Field className='max-w-sm mx-auto'>
      <Label>Amount</Label>
      <Input
        name='amount'
        value={value}
        onChange={onValueChange}
        placeholder='$0.00'
        autoFocus
        type='number'
      />
      <Description>
        Set the desired amount
      </Description>
      {isError && <Error>Amount must be greater than 0</Error>}
    </Field>

  )
}
