// app/ClientProvider.tsx
'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/features/auth/auth.store'

export default function ClientProvider({ children }: any) {
  const initAuth = useAuthStore((s) => s.initAuth)

  useEffect(() => {
    initAuth()
  }, [])

  return children
}