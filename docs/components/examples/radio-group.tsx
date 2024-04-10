import { Playground } from '@components/playground'
import { Radio, RadioGroup, RadioGroupProps } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'
import { createRadioControls } from './shared-playground-controls'
import { childrenProp, labelProp, sizeProp } from './shared-props'

export const RadioGroupExample = (props: RadioGroupProps) => {
  const [selected, setSelected] = useState<string | undefined>()

  const options = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Maybe', value: 'maybe' },
  ]

  const handleClick = e => setSelected(e.target.value)

  return (
    <RadioGroup {...props}>
      {options.map(option => (
        <Radio
          key={option.value}
          label={option.label}
          onClick={handleClick}
          value={option.value}
          checked={selected === option.value}
          size={props.size}
        />
      ))}
    </RadioGroup>
  )
}

export const radioControlsSet = createRadioControls('Radio Group')

export const RadioGroupPlayground = () => (
  <Playground name='Radio' component={RadioGroupExample} controls={radioControlsSet} />
)

export const properties: DocumentedProperty[] = [sizeProp, labelProp, childrenProp]
