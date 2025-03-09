'use client'
import {
  Button,
  Calendar,
  Checkbox,
  DATE_TYPES,
  ELEMENT_VARIANTS,
  Field,
  Flex,
  Input,
  INPUT_TYPES,
  Label,
  Link,
  Select,
} from '@creation-ui/react'
import { InputTemplate } from './showcase/InputTemplate'

export const Showcase = () => {
  return (
    <div className='mt-10 flex flex-col sm:flex-row flex-wrap gap-4 p-4'>
      <Flex
        className='border border-(--border) p-5 rounded-md h-fit'
        column
        gapY={3}
      >
        <h2 className='text-lg font-bold text-center'>Register</h2>
        <p className='text-sm text-(--text-secondary)'>
          Enter your email and password to create an account
        </p>
        <Field>
          <Label>Email</Label>
          <Input type='email' placeholder='email@example.com' />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type='password' placeholder='********' />
        </Field>

        <Field type='row'>
          <Label>Remember me</Label>
          <Checkbox />
        </Field>
        <Button className='rounded' variant='contained'>
          Register
        </Button>
        <p className='text-sm text-(--text-secondary) text-center'>
          Already have an account?{' '}
          <Link href='/login' className='link'>
            Login
          </Link>
        </p>
      </Flex>
      <Flex
        className='col-span-1 row-span-1 border p-4 rounded-md border-(--border) flex justify-between'
        column
        gapY={4}
      >
        <h2 className='text-lg font-bold text-center'>
          Native Inputs for the win!
        </h2>
        <p className='text-sm text-(--text-secondary) text-center'>
          Supported Input Types
        </p>
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
      </Flex>
      <Flex
        column
        gapY={2}
        className='border border-(--border) p-4 rounded-md h-fit w-fit'
      >
        <h2 className='text-lg font-bold'>Buttons</h2>
        <Flex gapX={5}>
          {ELEMENT_VARIANTS.map(variant => (
            <Flex column gapY={2} key={variant}>
              <p className='text-center capitalize'>{variant}</p>
              <Button
                variant={variant}
                data-active='true'
                className='capitalize'
              >
                active
              </Button>
              <Button
                variant={variant}
                data-hover='true'
                className='capitalize'
              >
                hover
              </Button>
              <Button
                variant={variant}
                data-focus='true'
                className='capitalize'
              >
                focus
              </Button>
              <Button
                variant={variant}
                data-disabled='true'
                className='capitalize'
              >
                disabled
              </Button>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Calendar />
      <div className='flex gap-4 h-fit flex-grow-0'>
        <Select>
          <option value='1'>Option 1</option>
          <option value='2'>Option 2</option>
          <option value='4' disabled>
            Option 4
          </option>
          <option value='3'>Option 3</option>
        </Select>
      </div>
    </div>
  )
}
