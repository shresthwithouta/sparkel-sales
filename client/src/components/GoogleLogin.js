'use client'

import { GoogleLogin } from '@react-oauth/google'
import { useState } from 'react'

export default function GoogleLoginComponent() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSuccess = async (credentialResponse) => {
    setLoading(true)
    setError(null)

    try {

      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: credentialResponse.credential,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed')
      }


      if (data.token) {
        localStorage.setItem('authToken', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))


        window.location.href = '/'
      }
    } catch (err) {
      console.error('Google login error:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleError = () => {
    setError('Login failed. Please try again.')
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
        disabled={loading}
      />
    </div>
  )
}



