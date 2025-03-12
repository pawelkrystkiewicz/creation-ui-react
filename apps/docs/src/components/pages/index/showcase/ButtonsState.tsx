'use client'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ELEMENT_VARIANTS,
  Flex,
} from '@creation-ui/react'

export const ButtonsState = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
      </CardHeader>
      <CardContent>
        <Flex gapX={6} gapY={2}>
          {ELEMENT_VARIANTS.map(variant => (
            <Flex column gapY={6} key={variant}>
              <p className='text-center capitalize'>{variant}</p>
              <Button
                variant={variant}
                data-active='true'
                className='capitalize'
              >
                active
              </Button>
              <Button
                variant={variant}
                data-hover='true'
                className='capitalize'
              >
                hover
              </Button>
              <Button
                variant={variant}
                data-focus='true'
                className='capitalize'
              >
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
      </CardContent>
    </Card>
  )
}
