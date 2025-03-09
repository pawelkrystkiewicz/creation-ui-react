'use client'
import UseClient from '@/components/UseClient'
import type { DocumentedProperty } from '@/models/system'
import { Calendar, type DateRange } from '@creation-ui/react'
import { useState } from 'react'
import { classNameProps, idProp,  } from './shared-props'
import { Container } from '@/components/container'

export const CalendarExample = () => {
  const [value, setValue] = useState<DateRange>([null, null])

  return (
    <Container>
      <UseClient>
        <Calendar
          mode='range'
          value={value}
          onChange={setValue}
          weekStartsOn={1}
          numberOfMonths={2}
          todayText='Heute'
        />
      </UseClient>
    </Container>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'onClick',
    description:
      'Callback function to be called when the calendar date is clicked',
    type: ' onClick: (date: CalendarDateValue) => void',
  },
  {
    name: 'weekStartsOn',
    description: 'The day of the week to start on. Default is 1 (Monday)',
    type: '1 | 2 | 3 | 4 | 5 | 6 | 7',
  },
  {
    name: 'value',
    description: 'Date of highlighted day',
    type: 'Date | null | undefined',
    defaultValue: 'undefined',
  },
  classNameProps,
  idProp,
]
