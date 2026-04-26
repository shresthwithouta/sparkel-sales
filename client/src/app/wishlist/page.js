'use client'

import Link from 'next/link'
import { Heart, Trash2, ShoppingCart, ChevronRight } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Wishlist() {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login')
    }
  }, [loading, isAuthenticated, router])

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div></div>
  if (!isAuthenticated) return null

  const wishlistItems = []

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight">My Wishlist</h1>
          <Link href="/products" className="px-4 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition">
            Continue Shopping
          </Link>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Heart size={48} className="text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Items in Wishlist</h3>
            <p className="text-slate-600 mb-6">Start adding items to your wishlist!</p>
            <Link href="/products" className="inline-block px-6 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition">
                <div className="relative h-48 bg-slate-200">
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition">
                    <Heart size={20} className="text-red-500 fill-current" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">{item.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{item.category}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-lg font-black text-brand-blue">₹{item.price}</p>
                      {item.originalPrice && (
                        <p className="text-xs text-slate-500 line-through">₹{item.originalPrice}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition text-sm">
                      <ShoppingCart size={16} />
                      Add to Cart
                    </button>
                    <button className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}



