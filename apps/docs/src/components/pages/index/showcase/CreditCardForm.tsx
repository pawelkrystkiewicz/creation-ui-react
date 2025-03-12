'use client'
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
        <Field>
          <Label>Card Number</Label>
          <Input placeholder='1234 5678 9012 3456' />
        </Field>
        <Flex gapX={3}>
          <Field>
            <Label>Expiry Date</Label>
            <Input placeholder='MM/YY' data-slots='MY' />
          </Field>
          <Field>
            <Label>CVV</Label>
            <Input
              type='text'
              maxLength={3}
              minLength={3}
              placeholder='123'
              cx={{ inner: '!w-20' }}
            />
          </Field>
        </Flex>
        <Field>
          <Label>Cardholder Name</Label>
          <Input placeholder='John Doe' />
        </Field>
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
