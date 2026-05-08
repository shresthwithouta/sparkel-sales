'use client'

import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function GoogleLoginComponent() {
  return (
    <Suspense fallback={<div className="h-11 w-full bg-slate-100 animate-pulse rounded-lg" />}>
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
  const [googleReady, setGoogleReady] = useState(false)

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

  const handleCredentialResponse = useCallback(async (response) => {
    setLoading(true)
    setError(null)

    try {
      await googleLogin(response.credential)
      router.push(redirect)
    } catch (err) {
      console.error('Google login error:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [googleLogin, router, redirect])

  useEffect(() => {
    if (!clientId) return

    // Load the Google Identity Services script
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = () => {
      if (window.google) {
        if (!window.google_initialized) {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: handleCredentialResponse,
          })
          window.google_initialized = true;
        }
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-btn'),
          {
            theme: 'outline',
            size: 'large',
            width: '350',
            text: 'continue_with',
            shape: 'rectangular',
          }
        )
        setGoogleReady(true)
      }
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [clientId, handleCredentialResponse])

  if (!clientId) {
    return (
      <div className="text-center py-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
          Google login unavailable
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{error}</p>}
      <div id="google-signin-btn" className="w-full flex justify-center"></div>
      {!googleReady && (
        <div className="h-11 w-full bg-slate-50 border border-slate-100 rounded-lg animate-pulse flex items-center justify-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Loading Google...</p>
        </div>
      )}
      {loading && (
        <p className="text-[10px] font-bold uppercase tracking-widest text-brand animate-pulse">Signing in...</p>
      )}
    </div>
  )
}
