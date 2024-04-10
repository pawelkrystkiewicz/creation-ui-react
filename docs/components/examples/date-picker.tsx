import { Playground } from '@components/playground'
import { DatePicker } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'
import React, { useState } from 'react'
import { createInputControls } from './shared-playground-controls'

const controls = createInputControls('DatePicker')

export const DatePickerPlayground: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDateChange = (date: any) => {
    setSelectedDate(date)
  }

  return (
    <div>
      <Playground
        component={DatePicker}
        name='DatePicker'
        controls={controls}
        componentProps={{
          value: selectedDate,
          onChange: handleDateChange,
        }}
      />
      {selectedDate && <p>Selected date: {selectedDate.toLocaleDateString()}</p>}
    </div>
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
