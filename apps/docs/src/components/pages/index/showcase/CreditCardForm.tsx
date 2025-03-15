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

export const CreditCardForm = () => {
  return (
    <Card className='w-fit h-fit flex-shrink-1 flex flex-col gap-4'>
      <CardHeader>
        <CardTitle>Credit Card</CardTitle>
      </CardHeader>
      <CardContent className='gap-3 flex flex-col w-64'>
        <CreditCardFormExample />
      </CardContent>
      <CardFooter className='h-fit flex-row-reverse'>
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
