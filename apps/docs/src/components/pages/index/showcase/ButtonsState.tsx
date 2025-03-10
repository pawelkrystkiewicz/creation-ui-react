'use client'
import {
  Button,
  ELEMENT_VARIANTS,
  Flex
} from '@creation-ui/react'

export const ButtonsState = () => {
  return (
    <Flex
      column
      gapY={2}
      className='border border-(--border) p-4 rounded-md h-fit w-fit'
    >
      <h2 className='text-lg font-bold'>Buttons</h2>
      <Flex gapX={5}>
        {ELEMENT_VARIANTS.map(variant => (
          <Flex column gapY={2} key={variant}>
            <p className='text-center capitalize'>{variant}</p>
            <Button variant={variant} data-active='true' className='capitalize'>
              active
            </Button>
            <Button variant={variant} data-hover='true' className='capitalize'>
              hover
            </Button>
            <Button variant={variant} data-focus='true' className='capitalize'>
              focus
            </Button>
            <Button
              variant={variant}
              data-disabled='true'
              className='capitalize'
            >
              disabled
            </Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
