'use client'
import { For, Flex } from '@creation-ui/react'

export const ForExample = () => {
  const items = ['apple', 'banana', 'cherry']

  return (
    <Flex column className='rounded-md bg-primary/10 w-fit p-3' items='center'>
      <For each={items}>{item => <div key={item}>{item}</div>}</For>{' '}
    </Flex>
  )
}
