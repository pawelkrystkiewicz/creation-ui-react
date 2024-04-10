import { Playground } from '@components/playground'
import { TimePicker } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'
import React, { useState } from 'react'
import { createInputControls } from './shared-playground-controls'
import { TimePickerValue } from '@creation-ui/react/components/time-picker/types'

const controls = createInputControls('TimePicker')

export const TimePickerExample: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<TimePickerValue>(null)
  const onClear = () => {
    setSelectedDate(null)
  }
  return (
    <div>
      <Playground
        component={TimePicker}
        name='TimePicker'
        controls={controls}
        componentProps={{
          value: selectedDate,
          onChange: setSelectedDate,
          zIndex: { popover: 9999 },
          onClear,
        }}
      />
      {selectedDate && <pre>Selected time: {JSON.stringify(selectedDate, null, 2)}</pre>}
    </div>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'value',
    description: 'Time selected in input',
    type: 'Date | null | undefined',
  },
  {
    name: 'onChange',
    description: 'Callback function when time is selected',
    type: '(date: Date | null | undefined) => void',
  },
]
