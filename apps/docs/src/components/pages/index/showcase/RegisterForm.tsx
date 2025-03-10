'use client'
import {
  Button,
  Checkbox,
  Field,
  Input,
  Label,
  Link
} from '@creation-ui/react'
import { Container } from './Container'

export const RegisterForm = () => {
  return (
    <Container
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
    </Container>
  )
}
