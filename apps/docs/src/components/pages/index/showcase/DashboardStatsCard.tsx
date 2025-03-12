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

export const DashboardStatsCard = () => {
  return(<Card className='w-96 h-36 flex-grow-0'>
      <CardHeader>
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
