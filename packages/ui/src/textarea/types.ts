import type { TextareaProps as HeadlessTextareaProps } from '@headlessui/react'

export interface TextareaProps
  extends Omit<HeadlessTextareaProps, 'as' | 'className'> {
  className?: string
  resizable?: boolean
}
