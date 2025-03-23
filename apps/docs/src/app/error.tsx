'use client'

import { Button } from '@creation-ui/react'
import { Link } from 'iconoir-react'
import { ErrorProps } from './global-error'


export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-bold'>500</h2>
      <p className='text-2xl'>Something went wrong</p>
      <Link href='/' className='text-primary mt-10'>
        Return Home
      </Link>
      {reset && (
        <Button variant='outlined' onClick={() => reset()}>
          Try again
        </Button>
      )}
    </div>
  )
}
