'use client'
import { HTMLInputType, Input } from '@creation-ui/react'
import { useState } from 'react'

interface InputProps {
  type: HTMLInputType
  placeholder?: string
  initialValue?: string | number
}

const INITIAL_VALUE_MAP: Record<HTMLInputType, any> = {
  number: 0,
  email: '',
  password: '',
  search: '',
  tel: '',
  url: '',
  color: '#007bff',
  file: '',
  date: '',
  time: '',
  month: '',
  week: '',
  text: '',
  'datetime-local': '',
}

export const InputTemplate = ({
  placeholder,
  type,
  initialValue,
}: InputProps) => {
  const [state, setState] = useState<string | number | never>(
    initialValue ?? INITIAL_VALUE_MAP[type],
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }

  const handleClear = () => {
    switch (type) {
      case 'number':
        setState(initialValue ?? 0)
        break
      default:
        setState(initialValue ?? '')
        break
    }
  }

  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={state}
      onChange={handleChange}
      onClear={handleClear}
    />
  )
}
