'use client'

import { useEffect, useState } from 'react'
import { apiClient } from '@/shared/lib/apiClient'

type State<T> = {
  data: T | null
  loading: boolean
  error: string | null
}

export function useAxiosGet<T>(url: string) {
  const [state, setState] = useState<State<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiClient.get(url)

        setState({
          data: res.data,
          loading: false,
          error: null,
        })
      } catch (err: any) {
        setState({
          data: null,
          loading: false,
          error: err.message,
        })
      }
    }

    fetchData()
  }, [url])

  return state
}