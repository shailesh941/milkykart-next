// src/shared/lib/apiClient.ts
import { api } from './api'

export const apiClient = {
  get: (url: string, config = {}) => api.get(url, config),
  post: (url: string, data: any, config = {}) => api.post(url, data, config),
  put: (url: string, data: any) => api.put(url, data),
  delete: (url: string) => api.delete(url),
}