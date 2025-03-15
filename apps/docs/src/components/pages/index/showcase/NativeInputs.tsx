'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DATE_TYPES,
  Field,
  INPUT_TYPES,
  Label,
} from '@creation-ui/react'
import { InputTemplate } from './InputTemplate'

export const NativeInputs = () => {
  return (
    <Card>
      <CardHeader className='flex-col items-start'>
        <CardTitle>Native Inputs for the win!</CardTitle>
        <CardDescription>Supported Input Types</CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  )
}
