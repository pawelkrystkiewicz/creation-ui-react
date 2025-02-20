'use client'

import { Container } from '@/components/container'
import { Playground } from '@/components/playground'
import type { DocumentedProperty } from '@/models/system'
import { TimePicker, type TimePickerValue } from '@creation-ui/react'
import React, { useState, type FC } from 'react'
import { createInputControls } from './shared-playground-controls'

const controls = createInputControls('TimePicker')

interface CurrentDateProps {
  time?: TimePickerValue
}

const CurrentTime: FC<CurrentDateProps> = ({ time }) => {
  if (!time) return null

  const now = new Date()
  now.setHours(time?.hours ?? 0, time?.minutes ?? 0, 0, 0)

  const formatted = now.toISOString()
  const local = now.toLocaleString()
  return (
    <div className='text-sm max-w-sm'>
      <div className='grid grid-cols-2 gap-3'>
        <div className='font-medium'>Selected</div>
        <pre suppressHydrationWarning>{JSON.stringify(time)}</pre>
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
          UTC {now.getTimezoneOffset()} minutes in&nbsp;
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </pre>
      </div>
    </div>
  )
}

export const TimePickerExample = () => {
  const [time, setTime] = useState<TimePickerValue>(null)
  const onClear = () => setTime(null)
  const now = new Date()

  return (
    <Container variant='column'>
      <TimePicker
        value={time}
        onChange={setTime}
        // zIndex={{ popover: 9999 }}
        onClear={onClear}
        className='w-48'
      />
      <CurrentTime time={time} />
    </Container>
  )
}

export const TimePickerPlayground: React.FC = () => {
  return (
    <>
      <Playground
        component={TimePickerExample}
        controls={controls}
        code={`
import { TimePicker, type TimePickerValue } from '@creation-ui/react'

export const TimePickerExample = () => {
  const [time, setTime] = useState<TimePickerValue>(null)
  const onClear = () => setTime(null)

  return (
    <>
      <TimePicker
        value={time}
        onChange={setTime}
        zIndex={{ popover: 9999 }}
        onClear={onClear}
      />
      {time && <pre>Selected time: {JSON.stringify(time, null, 2)}</pre>}
    </>
  )
}
        `}
      />
    </>
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
