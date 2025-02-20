'use client'
import { type ReactNode, useEffect, useState } from 'react'

interface UseClientProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function UseClient({
  children,
  fallback = null,
}: UseClientProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? <>{children}</> : <>{fallback}</>
}
