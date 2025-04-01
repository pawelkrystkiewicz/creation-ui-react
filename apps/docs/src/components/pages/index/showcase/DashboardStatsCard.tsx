'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@creation-ui/react'
import { Globe } from 'iconoir-react'
import { ShowcaseCardProps } from './types'
import clsx from 'clsx'
export const DashboardStatsCard = ({ className }: ShowcaseCardProps) => {
  return (
    <Card className={clsx('h-36 flex-grow-0', className)}>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle>Site visits</CardTitle>
        <Globe className='text-text-primary' data-slot='icon' />
      </CardHeader>
      <CardContent>
        <div className='text-4xl font-bold'>1,314,688</div>
      </CardContent>
      <CardFooter>
        <CardDescription>
          Total site visits for the last 30 days
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
