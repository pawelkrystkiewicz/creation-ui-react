'use client'
import { Playground } from '@/components/playground'
import { For, Flex } from '@creation-ui/react'

export const ForExample = () => {
  const items = ['apple', 'banana', 'cherry']

  return (
    <Flex column className='rounded-md bg-primary/10 w-fit p-3' items='center'>
      <For each={items}>{item => <div key={item}>{item}</div>}</For>{' '}
    </Flex>
  )
}

export const ForPlayground = () => {
  const items = ['apple', 'banana', 'cherry']

  return (
    <Playground
      code={`
import { Playground } from '@/components/playground'
import { For, Flex } from '@creation-ui/react'

const items = ['apple', 'banana', 'cherry']

export const ForExample = () => {

  return (
    <Flex column className='rounded-md bg-primary/10 w-fit p-3' items='center'>
      <For each={items}>{item => <div key={item}>{item}</div>}</For>{' '}
    </Flex>
  )
}`}
      component={ForExample}
    />
  )
}
