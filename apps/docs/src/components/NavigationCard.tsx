import {
  Card,
  CardContent,
  CardDescription
} from '@creation-ui/react'
import NextLink from 'next/link'
import type { FC, ReactNode } from 'react'

interface NavigationCardProps {
  title: string
  link: string
  icon?: ReactNode
  description: string
}

export const NavigationCard: FC<NavigationCardProps> = ({
  description,
  link,
  title,
  icon,
}) => {
  return (
    <NextLink href={link} className='w-full'>
      <Card className='group hover:shadow-xl micro-interactions'>
        <CardContent className='flex items-center gap-2'>
          icon &&
          <>
            <div className='flex-shrink-0  group-hover:text-primary micro-interactions text-opacity-80'>
              {icon}
            </div>
          </>
          <h2 className='font-bold text-lg'>{title}</h2>
        </CardContent>
        <CardDescription>{description}</CardDescription>
      </Card>
    </NextLink>
  )
}
