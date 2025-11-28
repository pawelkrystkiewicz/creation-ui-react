'use client'
import { Container } from '@/components/container'
import type { DocumentedProperty } from '@/models/system'
import { DatePicker, Field, Label } from '@creation-ui/react'
import { useState, type FC } from 'react'

const CurrentDate: FC<any> = ({ date }) => {
  if (!date)
    return (
      <div className='text-sm max-w-sm flex flex-col gap-2'>
        <div className='text-muted-foreground'>No date selected</div>
      </div>
    )

  const formatted = date.toISOString()
  const local = date.toLocaleString()
  return (
    <div className='text-sm max-w-sm flex flex-col gap-2'>
      <>
        <div className='text-muted-foreground'>Selected</div>
        <pre suppressHydrationWarning>{JSON.stringify(date)}</pre>
      </>
      <>
        <div className='text-muted-foreground'>ISO Date with time set</div>
        <pre suppressHydrationWarning>{formatted}</pre>
      </>
      <>
        <div className='text-muted-foreground'>Local date with time set</div>
        <pre suppressHydrationWarning>{local}</pre>
      </>
      <>
        <div className='text-muted-foreground'>Timezone</div>
        <pre suppressHydrationWarning>
          UTC {date.getTimezoneOffset()} minutes in&nbsp;
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </pre>
      </>
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
      <Field>
        <Label>Date</Label>
        <DatePicker
          placeholder='Select a date'
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Field>
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
