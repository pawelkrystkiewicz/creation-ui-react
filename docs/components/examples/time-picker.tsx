import { Playground } from '@components/playground'
import { DocumentedProperty } from '@models/system'
import React, { useState } from 'react'
import { createInputControls } from './shared-playground-controls'
import { TimePicker, TimePickerValue } from '@creation-ui/react'

const controls = createInputControls('TimePicker')

export const TimePickerExample: React.FC = () => {
  const [time, setTime] = useState<TimePickerValue>(null)
  const onClear = () => setTime(null)

  return (
    <div>
      <Playground
        component={TimePicker}
        name="TimePicker"
        controls={controls}
        componentProps={{
          value: time,
          onChange: setTime,
          zIndex: { popover: 9999 },
          onClear
        }}
      />
      {time && <pre>Selected time: {JSON.stringify(time, null, 2)}</pre>}
    </div>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'value',
    description: 'Time selected in input',
    type: 'Date | null | undefined'
  },
  {
    name: 'onChange',
    description: 'Callback function when time is selected',
    type: '(date: Date | null | undefined) => void'
  }
]
