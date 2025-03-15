'use client'
import { Container } from '@/components/container'
import type { DocumentedProperty } from '@/models/system'
import { DatePicker } from '@creation-ui/react'
import { useState, type FC } from 'react'

const CurrentDate: FC<any> = ({ date }) => {
  if (!date) return null

  const formatted = date.toISOString()
  const local = date.toLocaleString()
  return (
    <div className='text-sm max-w-sm'>
      <div className='grid grid-cols-2 gap-3'>
        <div className='font-medium'>Selected</div>
        <pre suppressHydrationWarning>{JSON.stringify(date)}</pre>
      </div>
      <div className='grid grid-cols-2 gap-3'>
        <div className='font-medium'>ISO Date with time set</div>
        <pre suppressHydrationWarning>{formatted}</pre>
      </div>
      <div className='grid grid-cols-2 gap-3'>
        <div className='font-medium'>Local date with time set</div>
        <pre suppressHydrationWarning>{local}</pre>
      </div>
      <div className='grid grid-cols-2 gap-3'>
        <div className='font-medium'>Timezone</div>
        <pre suppressHydrationWarning>
          UTC {date.getTimezoneOffset()} minutes in&nbsp;
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </pre>
      </div>
    </div>
  )
}

export const DatePickerExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const handleDateChange = (date: any) => {
    setSelectedDate(date)
  }

  return (
    <Container variant='column'>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
      <CurrentDate date={selectedDate} />
    </Container>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'value',
    description: 'Date selected in calendar',
    type: 'Date | null | undefined',
  },
  {
    name: 'onChange',
    description: 'Callback function when date is selected',
    type: '(date: Date | null | undefined) => void',
  },
]
