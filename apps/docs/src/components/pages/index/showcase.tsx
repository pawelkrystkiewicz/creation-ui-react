'use client'
import {
  Button,
  DATE_TYPES,
  Description,
  Field,
  Flex,
  Input,
  INPUT_TYPES,
  Label,
} from '@creation-ui/react'
import { InputTemplate } from './showcase/InputTemplate'

export const Showcase = () => {
  return (
    <div className='mt-10 grid grid-cols-4 grid-rows-3 gap-4 p-4 text-white min-h-screen'>
      <div className='col-span-1 row-span-1 border p-4 rounded-md border-(--border)'>
        <img
          src='https://source.unsplash.com/random/300x200'
          alt='Article'
          className='rounded-md border-(--border) mb-4'
        />
        <h2 className='text-lg font-bold'>The Power of Positive Thinking</h2>
        <p className='text-sm mt-2'>
          Discover how the power of positive thinking can transform your life...
        </p>
        <div className='flex items-center mt-4'>
          <img
            src='https://source.unsplash.com/50x50/?face'
            alt='Author'
            className='w-8 h-8 rounded-full mr-2'
          />
          <span className='text-sm'>John Smith</span>
        </div>
      </div>
      <div className='col-span-2 row-span-1 border p-4 rounded-md border-(--border)'>
        <h2 className='text-lg font-bold mb-4'>Contacts</h2>
        <table className='w-full text-left'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>+01 1234567890</td>
            </tr>
            <tr>
              <td>Michael K</td>
              <td>+01 1234567890</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Flex
        className='border border-(--border) p-5 rounded-md h-fit'
        column
        gapY={3}
      >
        <h2 className='text-lg font-bold'>Register</h2>
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
        <Field>
          <Label>Date of birth</Label>
          <Input type='date' placeholder='Date of birth' />
        </Field>
        <Button className='rounded mt-2' variant='contained'>
          Register
        </Button>
      </Flex>
      <div className='col-span-1 row-span-1 border p-4 rounded-md border-(--border) flex flex-col items-center'>
        <h2 className='text-lg font-bold'>Weekly Views</h2>
        <p className='text-2xl'>10,000</p>
      </div>

      <div className='col-span-1 row-span-1 border p-4 rounded-md border-(--border) flex flex-col items-center'>
        <h2 className='text-lg font-bold'>Weekly Followers</h2>
        <p className='text-2xl'>15,790</p>
      </div>
      <Flex
        className='col-span-1 row-span-1 border p-4 rounded-md border-(--border) flex justify-between'
        column
        gapY={4}
      >
        <h2 className='text-lg font-bold'>Supported Input Types</h2>
        {INPUT_TYPES.map(type => (
          <Field key={type}>
            <Label className='capitalize'>{type}</Label>
            <InputTemplate key={type} type={type} />
            <Description>{type}</Description>
          </Field>
        ))}
        {DATE_TYPES.map(type => (
          <Field key={type}>
            <Label className='capitalize'>{type}</Label>
            <InputTemplate key={type} type={type} />
            <Description>{type}</Description>
          </Field>
        ))}
      </Flex>
      <Flex
        className='col-span-1 row-span-1 border p-4 rounded-md border-(--border) flex justify-between'
        column
        gapY={4}
      >
        <h2 className='text-lg font-bold'>Supported Input Types</h2>
        {INPUT_TYPES.map(type => (
          <InputTemplate key={type} type={type} />
        ))}
        {DATE_TYPES.map(type => (
          <InputTemplate key={type} type={type} />
        ))}
      </Flex>
    </div>
  )
}
