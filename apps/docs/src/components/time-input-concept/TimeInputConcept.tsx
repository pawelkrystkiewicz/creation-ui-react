import React, { useState } from 'react'

const MARK = '--'
const MASK = `${MARK}:${MARK}`

interface TimeInputProps {
  value?: string
  onChange?: (value: string) => void
  onClear?: () => void
}

export const TimeInput = ({ value, onChange, onClear }: TimeInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value

    // Allow only numbers and colons
    const sanitizedInput = input.replace(/[^0-9:]/g, '')

    // Ensure the input follows the --:-- format
    let formattedInput = sanitizedInput

    // If the input is empty, reset to --:--
    if (sanitizedInput === '') {
      formattedInput = MASK
    } else {
      // Split the input into hours and minutes
      const [hours, minutes] = sanitizedInput.split(':')

      // Format hours
      let formattedHours = hours || MARK
      if (formattedHours.length > 2) {
        formattedHours = formattedHours.slice(0, 2)
      }

      // Format minutes
      let formattedMinutes = minutes || MARK
      if (formattedMinutes.length > 2) {
        formattedMinutes = formattedMinutes.slice(0, 2)
      }

      // Combine hours and minutes with a colon
      formattedInput = `${formattedHours}:${formattedMinutes}`
    }

    onChange?.(formattedInput)
  }

  return (
    <input
      type='text'
      value={value}
      onChange={handleChange}
      placeholder={MASK}
      maxLength={5}
    />
  )
}
