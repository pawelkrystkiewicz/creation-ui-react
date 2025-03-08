'use client'
import { HTMLInputType, Input } from '@creation-ui/react'
import { useState } from 'react'

interface InputProps {
  placeholder?: string
  type?: HTMLInputType
  initialValue?: string | number
}

export const InputTemplate = ({
  placeholder,
  type,
  initialValue,
}: InputProps) => {
  const [state, setState] = useState<string | number | never>(
    initialValue ?? '',
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
