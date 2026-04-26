'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AlertCircle } from 'lucide-react'

export default function AdminGuard({ children }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const canAccess = user?.role === 'admin';

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4"></div>
          <p className="text-slate-600">Verifying access...</p>
        </div>
      </div>
    )
  }

  if (!canAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={32} className="text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Access Denied</h1>
          <p className="text-slate-600 mb-6">You don&apos;t have permission to access the admin panel.</p>
          <div className="flex gap-3">
            <button
              onClick={() => router.push('/')}
              className="flex-1 px-4 py-2 bg-slate-200 text-slate-900 rounded-lg font-semibold hover:bg-slate-300 transition"
            >
              Home
            </button>
            <button
              onClick={() => router.push('/cart')}
              className="flex-1 px-4 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  return children
}



