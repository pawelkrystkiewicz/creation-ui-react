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
import { ShowcaseCardProps } from './types'

export const ButtonsState = ({ className }: ShowcaseCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
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
        </div>
      </CardContent>
    </Card>
  )
}
