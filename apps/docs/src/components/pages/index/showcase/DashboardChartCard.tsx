'use client'
import {
  Card,
  CardHeader,
  CardTitle
} from '@creation-ui/react'
import { Computer } from 'iconoir-react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ShowcaseCardProps } from './types'
import clsx from 'clsx'
const data = [
  {
    name: 'Page A',
    desktop: 4000,
    mobile: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    desktop: 3000,
    mobile: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    desktop: 2000,
    mobile: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    desktop: 2780,
    mobile: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    desktop: 1890,
    mobile: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    desktop: 2390,
    mobile: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    desktop: 3490,
    mobile: 4300,
    amt: 2100,
  },
]
export const DashboardChartCard = ({ className }: ShowcaseCardProps) => {
  return (
    <Card className={clsx('h-96 flex-grow-0', className)}>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle>Site visits by device</CardTitle>
        <Computer className='text-text-primary' data-slot='icon' />
      </CardHeader>
      <>
        <ResponsiveContainer width='100%' height='90%' className={'-mx-4'}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='mobile'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='desktop' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </>
    </Card>
  )
}
