'use client'
import { CreditCardFormExample } from '@/examples/modal'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  Flex,
  Input,
  Label,
  Button,
} from '@creation-ui/react'
import clsx from 'clsx'
import { ShowcaseCardProps } from './types'

export const CreditCardForm = ({ className }: ShowcaseCardProps) => {
  return (
    <Card className={clsx('w-fit h-fit shrink flex flex-col gap-4', className)}>
      <CardHeader>
        <CardTitle>Credit Card</CardTitle>
      </CardHeader>
      <CardContent className='gap-3 flex flex-col'>
        <CreditCardFormExample />
      </CardContent>
      <CardFooter className='h-fit flex-row-reverse mt-2'>
        <Button variant='contained' color='primary'>
          Next
        </Button>
        <Button variant='outlined' color='primary'>
          Save for later
        </Button>
      </CardFooter>
    </Card>
  )
}
