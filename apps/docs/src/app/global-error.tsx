'use client'

import { useEffect } from 'react'
import ErrorView from './error'

export interface ErrorProps {
  error?: Error & { digest?: string }
  reset?: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <ErrorView error={error} reset={reset} />
}
