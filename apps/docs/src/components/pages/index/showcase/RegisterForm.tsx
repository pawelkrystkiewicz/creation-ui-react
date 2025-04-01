'use client'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Field,
  Input,
  Label,
  Link,
} from '@creation-ui/react'
import clsx from 'clsx'
import { ShowcaseCardProps } from './types'

export const RegisterForm = ({ className }: ShowcaseCardProps) => {
  return (
    <Card className={clsx('flex flex-col gap-4', className)}>
      <CardHeader className='flex-col items-start gap-1'>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Enter your email and password to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <Field>
          <Label>Email</Label>
          <Input type='email' placeholder='email@example.com' />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input type='password' placeholder='********' />
        </Field>

        <Field layout='row'>
          <Label>Remember me</Label>
          <Checkbox />
        </Field>
        <Button className='rounded' variant='contained'>
          Register
        </Button>
        <p className='text-sm text-text-secondary text-center'>
          Already have an account?{' '}
          <Link href='/login' className='link'>
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
