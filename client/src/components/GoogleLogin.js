'use client'

import { GoogleLogin } from '@react-oauth/google'
import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter, useSearchParams } from 'next/navigation'

import { Suspense } from 'react'

export default function GoogleLoginComponent() {
  return (
    <Suspense fallback={<div className="h-[40px] w-[200px] bg-slate-100 animate-pulse rounded" />}>
      <GoogleLoginInner />
    </Suspense>
  )
}

function GoogleLoginInner() {
  const { googleLogin } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSuccess = async (credentialResponse) => {
    setLoading(true)
    setError(null)

    try {
      await googleLogin(credentialResponse.credential)
      router.push(redirect)
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
    <div className="flex flex-col items-center gap-4 p-6 bg-slate-50/50 rounded-xl border border-slate-100/50">
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sign in with Google</p>
      {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{error}</p>}
      <div className="w-full flex justify-center">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap
          disabled={loading}
          width="100%"
        />
      </div>
    </div>
  )
}



