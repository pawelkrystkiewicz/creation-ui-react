'use client'
import { Flex } from '@creation-ui/react'

interface ContainerProps {
  children?: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Flex
      className='border border-(--border) p-5 rounded-md h-fit w-fit flex-grow-0'
      column
      gapY={3}
    >
      {children}
    </Flex>
  )
}
