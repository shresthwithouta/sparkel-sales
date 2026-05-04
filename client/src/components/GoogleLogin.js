'use client'

import { GoogleLogin } from '@react-oauth/google'
import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function GoogleLoginComponent() {

  const { googleLogin } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSuccess = async (credentialResponse) => {
    setLoading(true)
    setError(null)

    try {
      await googleLogin(credentialResponse.credential)
      window.location.href = '/'
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




