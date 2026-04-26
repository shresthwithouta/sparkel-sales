'use client'

import { useGoogleLogin } from '@react-oauth/google'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export function useGoogleAuth() {
  const { login } = useAuth()
  const router = useRouter()

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_token: tokenResponse.access_token,
          }),
        })

        const data = await res.json()
        if (!res.ok) throw new Error(data.message)

        login(data.token, data.user)
        router.push('/')
      } catch (err) {
        console.error('Google Auth Error:', err)
      }
    },
    onError: (error) => {
      console.error('Google Login Failed:', error)
    },
  })

  return { initiateGoogleSignup: loginWithGoogle }
}



