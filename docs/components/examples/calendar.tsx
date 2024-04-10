import { Playground } from '@components/playground'
import { Calendar, DateRange } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'
import { sizeControl } from './shared-playground-controls'
import { classNameProps, idProp, sizeProp } from './shared-props'
import { useState } from 'react'

export const CalendarPlayground = () => <Playground component={Calendar} name='Calendar' controls={[sizeControl]} />

export const CalendarExample = () => {
  const [value, setValue] = useState<DateRange>([null, null])

  return (
    <Calendar mode='range' value={value} onChange={setValue} weekStartsOn={1} numberOfMonths={2} todayText='Heute' />
  )
}

export const properties: DocumentedProperty[] = [
  sizeProp,
  {
    name: 'onClick',
    description: 'Callback function to be called when the calendar date is clicked',
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
