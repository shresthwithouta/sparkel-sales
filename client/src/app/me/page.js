'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  User,
  Heart,
  ShoppingBag,
  MapPin,
  LogOut,
  Calendar,
  Edit2,
  LayoutDashboard,
  ArrowLeft,
  Loader2
} from 'lucide-react'
import { useWishlist } from '@/contexts/WishlistContext'
import { fetchUserOrders } from '@/lib/api'

export default function UserDashboard() {
  const { user, loading, logout, isAuthenticated, token } = useAuth()
  const { wishlistCount } = useWishlist()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [orders, setOrders] = useState([])
  const [fetchingOrders, setFetchingOrders] = useState(false)
  const [totalOrders, setTotalOrders] = useState(0)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login')
    }
  }, [loading, isAuthenticated, router])

  useEffect(() => {
    const loadOrders = async () => {
      if (!isAuthenticated || !token) return
      try {
        setFetchingOrders(true)
        const data = await fetchUserOrders(token, 50)
        setOrders(data.orders || [])
        setTotalOrders(data.total || 0)
        setHasMore(data.pages > 1)
        setPage(1)
      } catch (error) {
        console.error('Failed to fetch orders:', error)
      } finally {
        setFetchingOrders(false)
      }
    }
    if (isAuthenticated) {
      loadOrders()
    }
  }, [isAuthenticated, token])

  const loadMoreOrders = async () => {
    if (!hasMore || fetchingOrders) return
    try {
      setFetchingOrders(true)
      const nextPage = page + 1
      const data = await fetchUserOrders(token, 50, nextPage)
      setOrders(prev => [...prev, ...(data.orders || [])])
      setPage(nextPage)
      setHasMore(data.pages > nextPage)
    } catch (error) {
      console.error('Failed to fetch more orders:', error)
    } finally {
      setFetchingOrders(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight mb-2">
            Welcome Back, {user?.name?.split(' ')[0]}!
          </h1>
          <p className="text-slate-600">Manage your account and orders</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-32">

              {/* Profile Header */}
              <div className="bg-gradient-to-br from-brand to-brand-dark p-6 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/30 relative mx-auto mb-3">
                  {user?.avatar ? (
                    <Image src={user.avatar} alt={user.name} fill className="object-cover" sizes="80px" />
                  ) : (
                    <User size={40} className="text-white" />
                  )}
                </div>
                <h3 className="font-bold text-lg">{user?.name}</h3>
                <p className="text-white/80 text-sm">{user?.email}</p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {user?.role || 'user'}
                  </span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="p-4 space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition ${
                    activeTab === 'overview' ? 'bg-brand text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <ShoppingBag size={18} />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition ${
                    activeTab === 'orders' ? 'bg-brand text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <ShoppingBag size={18} />
                  Orders
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition ${
                    activeTab === 'profile' ? 'bg-brand text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <User size={18} />
                  Profile
                </button>
                {user?.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-brand-blue hover:bg-slate-100 transition mt-2 border border-brand/10"
                  >
                    <LayoutDashboard size={18} />
                    Admin Panel
                  </Link>
                )}
              </nav>

              {/* Logout */}
              <div className="p-4 border-t border-slate-200">
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>

            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 animate-reveal">

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 text-sm font-medium">Total Orders</p>
                        <p className="text-3xl font-black text-brand-blue mt-1">{totalOrders}</p>
                      </div>
                      <ShoppingBag size={40} className="text-slate-200" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 text-sm font-medium">Wishlist Items</p>
                        <p className="text-3xl font-black text-brand-blue mt-1">{wishlistCount}</p>
                      </div>
                      <Heart size={40} className="text-slate-200" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 text-sm font-medium">Member Since</p>
                        <p className="text-sm font-bold text-brand-blue mt-2">
                          {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-IN') : 'Recently'}
                        </p>
                      </div>
                      <Calendar size={40} className="text-slate-200" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold text-lg text-brand-blue mb-4">Recent Activity</h3>
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag size={48} className="text-slate-200 mx-auto mb-3" />
                      <p className="text-slate-500">No orders yet</p>
                      <Link href="/products" className="inline-block mt-4 px-6 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition">
                        Browse Products
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.slice(0, 3).map(order => (
                        <div key={order._id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-brand/10 text-brand rounded-full flex items-center justify-center">
                              <ShoppingBag size={20} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-brand-blue">Order #{order._id.substring(order._id.length - 8).toUpperCase()}</p>
                              <p className="text-xs text-slate-500">{new Date(order.createdAt).toLocaleDateString('en-IN')}</p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                            order.status === 'delivered' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-brand/10 text-brand border-brand/20'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      ))}
                      <button
                        onClick={() => setActiveTab('orders')}
                        className="w-full py-3 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors"
                      >
                        View All Orders {totalOrders > 0 && `(${totalOrders})`}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-lg text-brand-blue uppercase tracking-tight">Your Orders</h3>
                    <button
                      onClick={() => setActiveTab('overview')}
                      className="text-[10px] font-black text-slate-400 hover:text-brand uppercase tracking-widest flex items-center gap-2"
                    >
                      <ArrowLeft size={14} /> Back to Overview
                    </button>
                  </div>

                  {fetchingOrders ? (
                    <div className="text-center py-20">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand mx-auto mb-4"></div>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Syncing Orders...</p>
                    </div>
                  ) : orders.length === 0 ? (
                    <div className="text-center py-20 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                      <ShoppingBag size={48} className="text-slate-200 mx-auto mb-4" />
                      <p className="text-slate-500 font-bold">You haven&apos;t placed any orders yet.</p>
                      <Link href="/products" className="inline-block mt-6 px-8 py-3 bg-brand text-white rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-brand-dark transition shadow-lg shadow-brand/20">
                        Start Shopping
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {orders.map(order => (
                        <div key={order._id} className="border border-slate-100 rounded-lg overflow-hidden group hover:border-brand/30 transition-all hover:shadow-xl hover:shadow-slate-200/50">
                          <div className="bg-slate-50 px-6 py-4 flex flex-wrap justify-between items-center gap-4 border-b border-slate-100">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand shadow-sm">
                                <ShoppingBag size={20} />
                              </div>
                              <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order ID</p>
                                <p className="text-xs font-bold text-brand-blue uppercase tracking-tight">#{order._id.substring(order._id.length - 8).toUpperCase()}</p>
                              </div>
                            </div>
                            <div className="hidden sm:block">
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date Placed</p>
                              <p className="text-xs font-bold text-brand-blue">{new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Amount</p>
                              <p className="text-xs font-black text-brand">₹{order.total?.toLocaleString('en-IN')}</p>
                            </div>
                            <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm ${
                              order.status === 'delivered' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                              order.status === 'shipped' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                              'bg-brand/10 text-brand border-brand/20'
                            }`}>
                              {order.status}
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex flex-wrap gap-4">
                              {order.items?.slice(0, 4).map((item, idx) => (
                                <div key={idx} className="w-16 h-16 bg-white border border-slate-100 rounded-sm p-1 relative group-hover:border-brand/20 transition-colors">
                                  <Image src={item.image || '/images/placeholder.png'} alt={item.name} fill className="object-contain p-1" sizes="64px" />
                                </div>
                              ))}
                              {order.items?.length > 4 && (
                                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center text-[10px] font-black text-slate-400">
                                  +{order.items.length - 4} MORE
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      {hasMore && (
                        <button
                          onClick={loadMoreOrders}
                          disabled={fetchingOrders}
                          className="w-full py-4 border-2 border-dashed border-slate-200 rounded-lg text-xs font-black uppercase tracking-widest text-slate-400 hover:text-brand hover:border-brand/30 transition-all flex items-center justify-center gap-2"
                        >
                          {fetchingOrders ? (
                            <><Loader2 className="animate-spin" size={16} /> Loading More...</>
                          ) : (
                            'Load More Orders'
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-brand-blue">Personal Information</h3>
                  <Link
                    href="/me/settings"
                    className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition text-sm"
                  >
                    <Edit2 size={16} />
                    Edit Profile
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                    <div className="p-3 bg-slate-50 rounded-lg text-slate-900 font-medium">{user?.name}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                    <div className="p-3 bg-slate-50 rounded-lg text-slate-900 font-medium">{user?.email}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Account Type</label>
                    <div className="p-3 bg-slate-50 rounded-lg text-slate-900 font-medium capitalize">{user?.role || 'User'}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Member Since</label>
                    <div className="p-3 bg-slate-50 rounded-lg text-slate-900 font-medium">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recently'}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-brand-blue mb-4">Delivery Address</h4>
                  {user?.address?.street ? (
                    <div className="bg-slate-50 p-4 rounded-lg flex items-start gap-4">
                      <MapPin className="text-brand mt-1 shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-slate-800">{user.name}</p>
                        <p className="text-slate-600 mt-1">{user.address.street}</p>
                        <p className="text-slate-600">{user.address.city}, {user.address.state} {user.address.zipCode}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-slate-50 rounded-lg">
                      <MapPin size={40} className="text-slate-300 mx-auto mb-2" />
                      <p className="text-slate-500 mb-4">No addresses saved yet</p>
                      <Link href="/me/settings" className="inline-block px-4 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition text-sm">
                        Add Address
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
