'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/features/auth/auth.hooks'
type Props = {
  closeLogin: (value: string) => void
}
export default function LoginPage({closeLogin}: Props) {
  const { login, loading } = useAuth()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      await login(email, password)
      console.log(email, password)
      completeLogIn()
      router.push('/')
    } catch {
      alert('Login failed')
    }
  }
  const completeLogIn = () =>{
    closeLogin('close')
  }

  return (
    <div className="p-10">
      <input
        className="border p-2 mb-3 block"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 mb-3 block"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-black text-white px-4 py-2"
      >
        {loading ? 'Loading...' : 'Login'}
      </button>
    </div>
  )
}