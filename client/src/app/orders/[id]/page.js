'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter, useParams } from 'next/navigation'
import { fetchOrderById } from '@/lib/api'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Package, Truck, CheckCircle, Clock, MapPin, CreditCard, ShoppingBag, AlertCircle, DollarSign } from 'lucide-react'

export default function OrderDetailPage({ params }) {
  const { id } = useParams()
  const { isAuthenticated, loading, token } = useAuth()
  const router = useRouter()
  const [order, setOrder] = useState(null)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login')
    }
  }, [loading, isAuthenticated, router])

  useEffect(() => {
    const loadOrder = async () => {
      if (!token || !id) return
      try {
        const data = await fetchOrderById(token, id)
        setOrder(data.order)
      } catch (error) {
        console.error('Failed to fetch order:', error)
      } finally {
        setFetching(false)
      }
    }
    
    if (isAuthenticated) {
      loadOrder()
    }
  }, [token, id, isAuthenticated])

  if (loading || fetching) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
    </div>
  )

  if (!order) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="text-center">
        <Package size={48} className="mx-auto text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-brand-blue mb-2">Order Not Found</h2>
        <p className="text-slate-600 mb-6">We couldn&apos;t find the order you&apos;re looking for.</p>
        <Link href="/orders" className="px-6 py-2 bg-brand text-white rounded-lg font-bold">
          Back to Orders
        </Link>
      </div>
    </div>
  )

  const statusIcons = {
    pending: <Clock className="text-yellow-500" />,
    processing: <Package className="text-blue-500" />,
    shipped: <Truck className="text-purple-500" />,
    delivered: <CheckCircle className="text-green-500" />,
    cancelled: <AlertCircle className="text-red-500" />
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/orders" className="p-2 hover:bg-white rounded-lg transition">
            <ChevronLeft size={24} className="text-slate-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight">Order Details</h1>
            <p className="text-slate-600">Order #{order._id.substring(order._id.length - 8).toUpperCase()}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-brand-blue flex items-center gap-2">
                  <ShoppingBag size={18} />
                  Items Ordered
                </h3>
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-slate-100 rounded-full">
                  {order.items.length} Items
                </span>
              </div>
              <div className="divide-y divide-slate-50">
                {order.items.map((item, idx) => (
                  <div key={idx} className="p-6 flex gap-4">
                    <div className="relative w-20 h-20 bg-slate-50 rounded-lg overflow-hidden border border-slate-100 p-2 flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-brand-blue text-sm uppercase leading-tight mb-1">{item.name}</h4>
                      <p className="text-xs text-slate-500 mb-2">Qty: {item.quantity}</p>
                      <p className="text-sm font-black text-brand">₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-brand-blue">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Subtotal</span>
                    <span>₹{(order.total - (order.shippingPrice || 0)).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Shipping</span>
                    <span>{order.shippingPrice ? `₹${order.shippingPrice.toLocaleString('en-IN')}` : 'Free'}</span>
                  </div>
                  <div className="flex justify-between text-lg font-black text-brand-blue pt-2 border-t border-slate-200">
                    <span>Total Amount</span>
                    <span>₹{order.total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-brand-blue mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                Order Status
              </h3>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  {statusIcons[order.status] || <Package className="text-slate-400" />}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">Current Status</p>
                  <p className="font-bold text-brand-blue uppercase">{order.status}</p>
                </div>
              </div>
            </div>

            {}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-brand-blue mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                <MapPin size={16} />
                Shipping Address
              </h3>
              <div className="text-sm text-slate-600 space-y-1">
                <p className="font-bold text-slate-900">{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.street}</p>
                <p>{order.shippingAddress.city}, {order.shippingAddress.state}</p>
                <p>{order.shippingAddress.zipCode}, {order.shippingAddress.country}</p>
                <p className="pt-2 text-brand font-bold">{order.shippingAddress.phone}</p>
              </div>
            </div>

            {}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-brand-blue mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                <CreditCard size={16} />
                Payment Method
              </h3>
              <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow-xs">
                   <DollarSign size={16} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-blue uppercase">{order.paymentMethod || 'Cash on Delivery'}</p>
                  <p className={`text-[10px] font-black uppercase tracking-widest ${order.isPaid ? 'text-green-600' : 'text-yellow-600'}`}>
                    {order.isPaid ? 'Paid' : 'Payment Pending'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
