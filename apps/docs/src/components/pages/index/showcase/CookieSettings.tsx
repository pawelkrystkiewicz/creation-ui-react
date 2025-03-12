'use client'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Flex,
  Switch,
} from '@creation-ui/react'

const options = [
  {
    name: 'Strictly Necessary',
    description:
      'These cookies are essential in order to use the website and use its features.',
    checked: true,
    disabled: true,
  },
  {
    name: 'Functional Cookies',
    description:
      'These cookies allow the website to provide personalized functionality.',
    checked: true,
  },
  {
    name: 'Performance Cookies',
    description:
      'These cookies help to improve the performance of the website.',
  },
]

export const CookieSettings = () => {
  return (
    <Card className='max-w-sm flex flex-col gap-4 justify-between'>
      <CardHeader className='flex flex-col gap-1 items-start'>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-2 flex-grow-1'>
        {options.map(option => (
          <Flex key={option.name} className='items-center justify-between'>
            <Flex className='flex-col gap-0.5 w-2/3'>
              <h4 className='font-medium text-base'>{option.name}</h4>
              <p className='text-xs text-text-secondary'>
                {option.description}
              </p>
            </Flex>
            <Switch checked={option.checked} disabled={option.disabled} />
          </Flex>
        ))}
      </CardContent>
      <CardFooter className='h-fit flex-row-reverse'>
        <Button variant='outlined' color="mono">Save</Button>
        <Button variant='outlined' color="error">Discard changes</Button>
      </CardFooter>
    </Card>
  )
}
