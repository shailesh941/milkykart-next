// src/features/auth/auth.store.ts

import { create } from 'zustand'
import { getProfileApi, loginApi } from './auth.api'
import { jwtDecode } from 'jwt-decode'

type User = {
  id: string
  email: string
}

type AuthState = {
  user: User | null
  token: string | null
  loading: boolean

  login: (email: string, password: string) => Promise<void>
  logout: () => void
  fetchUser: () => Promise<void>
  initAuth: () => void   // ✅ NEW
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: false,

  // ✅ INIT AUTH (AUTO LOAD FROM LOCALSTORAGE)
  initAuth: () => {
    if (typeof window === 'undefined') return

    const token = localStorage.getItem('token')

    if (!token) return

    try {
      const decoded: any = jwtDecode(token)

      set({
        token,
        user: {
          id: decoded.sub,
          email: decoded.email,
        },
      })
    } catch (err) {
      console.error('Invalid token')
      localStorage.removeItem('token')
    }
  },

  // ✅ LOGIN
  login: async (email, password) => {
    set({ loading: true })

    try {
      const res = await loginApi({ email, password })
      const token = res.data.access_token

      localStorage.setItem('token', token)

      const decoded: any = jwtDecode(token)

      set({
        token,
        user: {
          id: decoded.userId,
          email: decoded.email,
        },
        loading: false,
      })

      // optional (can remove if decode is enough)
      // await useAuthStore.getState().fetchUser()

    } catch (err) {
      set({ loading: false })
      throw err
    }
  },

  // ✅ FETCH USER (optional)
  fetchUser: async () => {
    try {
      const res = await getProfileApi()
      set({ user: res.data })
    } catch (err) {
      console.error(err)
    }
  },

  // ✅ LOGOUT
  logout: () => {
    localStorage.removeItem('token')
    set({ user: null, token: null })
    window.location.href = '/login'
  },
}))