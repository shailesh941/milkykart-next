
// src/shared/hooks/useAuth.ts
'use client'

import { useAuthStore } from '@/features/auth/auth.store'

export const useAuth = () => {
  const { user, login, logout, loading } = useAuthStore()

  return {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  }
}