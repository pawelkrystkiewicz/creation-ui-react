'use client'
import { DATE_TYPES, Field, INPUT_TYPES, Label } from '@creation-ui/react'
import { Container } from './Container'
import { InputTemplate } from './InputTemplate'

export const NativeInputs = () => {
  return (
    <Container>
      <h2 className='text-lg font-bold text-center'>
        Native Inputs for the win!
      </h2>
      <p className='text-sm text-(--text-secondary) text-center'>
        Supported Input Types
      </p>
      <div className='grid grid-cols-3 gap-4'>
        {INPUT_TYPES.map(type => (
          <Field key={type}>
            <Label className='capitalize'>{type}</Label>
            <InputTemplate key={type} type={type} />
          </Field>
        ))}
        {DATE_TYPES.map(type => (
          <Field key={type}>
            <Label className='capitalize'>{type}</Label>
            <InputTemplate key={type} type={type} />
          </Field>
        ))}
      </div>
    </Container>
  )
}
