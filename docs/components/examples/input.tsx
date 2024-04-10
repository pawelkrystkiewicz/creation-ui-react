import { Playground } from '@components/playground'
import { Input, InputProps } from '@creation-ui/react'
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import { Icon } from '@mdi/react'
import { DocumentedProperty } from 'models/system'
import { useEffect, useState } from 'react'
import { inputBaseProperties } from './input-base-properties'
import { createInputControls } from './shared-playground-controls'

interface InputExampleProps extends Omit<InputProps, 'onChange' | 'ref'> {}

export const InputExample = ({ ...props }: InputExampleProps) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (props.value) {
      setValue(props.value as any)
    }
  }, [props.value, setValue])

  return (
    <div className='flex flex-col gap-3 max-w-xs' key={props.key}>
      <Input onChange={e => setValue(e.target.value)} value={value} placeholder='Placeholder' {...props} />
    </div>
  )
}

const controls = createInputControls('Input')

export const InputPlayground = ({ ...props }: InputExampleProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const onClear = () => {
    setInputValue('')
  }
  return (
    <Playground
      component={Input}
      componentProps={{
        onClear,
        value: inputValue,
        onChange: e => setInputValue(e.target.value),
      }}
      controls={controls}
      name='Input'
    />
  )
}

export const PasswordExample = ({ ...props }: InputExampleProps) => {
  const [value, setValue] = useState('')
  const [type, setType] = useState<string>('password')

  useEffect(() => {
    if (props.value) {
      setValue(props.value as any)
    }
  }, [])

  const onIconClick = () => {
    setType(type === 'password' ? 'text' : 'password')
  }
  const htmlType = type as any

  return (
    <div className='flex flex-col gap-3 max-w-xs' key={props.key}>
      <Input
        onChange={e => setValue(e.target.value)}
        value={value}
        type={htmlType}
        endAdornment={
          <Icon
            path={htmlType === 'password' ? mdiEyeOutline : mdiEyeOffOutline}
            size={1}
            // @ts-expect-error
            onClick={onIconClick}
          />
        }
        {...props}
      />
    </div>
  )
}

export const InputWidthsExample = ({ ...props }: InputExampleProps) => {
  const test = ['w-[200px]', 'w-96', 'w-2/3', 'w-full']

  return (
    <div className='flex flex-col gap-10 my-10 w-full'>
      {test.map(width => (
        <Input cx={{ container: { inner: width } }} label={width} placeholder='Placeholder' clearable key={width} />
      ))}
    </div>
  )
}

export const properties: DocumentedProperty[] = inputBaseProperties
