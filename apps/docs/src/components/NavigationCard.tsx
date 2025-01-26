import Icon from '@/components/icon'
import { Card, CardContent, CardDescription } from '@creation-ui/react'
import { Show } from '@creation-ui/react/dist/components/show/show'
import NextLink from 'next/link'
import { FC } from 'react'

interface NavigationCardProps {
  title: string
  link: string
  icon?: string
  description: string
}

export const NavigationCard: FC<NavigationCardProps> = ({ description, link, title, icon }) => {
  return (
    <NextLink href={link} className='w-full'>
      <Card className='group hover:shadow-xl micro-interactions'>
        <CardContent className='flex items-center gap-2'>
          <Show when={!!icon}>
            <Icon path={icon!} className='flex-shrink-0  group-hover:text-primary micro-interactions text-opacity-80' size={1} />
          </Show>
          <h2 className='font-bold text-lg'>{title}</h2>
        </CardContent>
        <CardDescription>{description}</CardDescription>
      </Card>
    </NextLink>
  )
}
