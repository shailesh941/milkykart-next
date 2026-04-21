// src/shared/api/auth.api.ts
import { api } from '@/shared/lib/api'

export const loginApi = (data: { email: string; password: string }) =>
  api.post('/auth/login', data)

export const registerApi = (data: any) =>
  api.post('/auth/register', data)

export const getProfileApi = () =>
  api.post('/auth/profile')