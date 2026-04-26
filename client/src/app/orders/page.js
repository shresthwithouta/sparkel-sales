'use client'

import Link from 'next/link'
import { ShoppingBag, ChevronRight, Calendar, DollarSign, Truck } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function OrderHistory() {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login')
    }
  }, [loading, isAuthenticated, router])

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div></div>
  if (!isAuthenticated) return null

  const orders = []

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight">Order History</h1>
          <Link href="/products" className="px-4 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition">
            Continue Shopping
          </Link>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <ShoppingBag size={48} className="text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Orders Yet</h3>
            <p className="text-slate-600 mb-6">You haven&apos;t placed any orders yet. Start shopping now!</p>
            <Link href="/products" className="inline-block px-6 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-blue-100 px-3 py-1 rounded-lg">
                        <p className="text-sm font-bold text-blue-600">Order #{order.id}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar size={16} />
                        <span>{order.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <ShoppingBag size={16} />
                        <span>{order.items} items</span>
                      </div>
                      <div className="flex items-center gap-2 text-brand font-bold">
                        <DollarSign size={16} />
                        <span>₹{order.total}</span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/orders/${order.id}`} className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition">
                    View Details
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}



