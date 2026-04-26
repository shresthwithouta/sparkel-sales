'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  User, 
  Settings, 
  Heart, 
  ShoppingBag, 
  MapPin, 
  LogOut,
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  Edit2,
  Lock
} from 'lucide-react'

export default function UserDashboard() {
  const { user, loading, logout, isAuthenticated } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login')
    }
  }, [loading, isAuthenticated, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight mb-2">
            Welcome Back, {user?.name?.split(' ')[0]}!
          </h1>
          <p className="text-slate-600">Manage your account, orders, and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-6">
              {}
              <div className="bg-linear-to-br from-brand to-brand-dark p-6 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={32} />
                </div>
                <h3 className="font-bold text-lg">{user?.name}</h3>
                <p className="text-white/80 text-sm">{user?.email}</p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {user?.role || 'user'}
                  </span>
                </div>
              </div>

              {}
              <nav className="p-4 space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition ${
                    activeTab === 'overview'
                      ? 'bg-brand text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <ShoppingBag size={18} />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition ${
                    activeTab === 'profile'
                      ? 'bg-brand text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <User size={18} />
                  Profile
                </button>
              </nav>

              {}
              <div className="p-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    logout()
                    router.push('/')
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-3">
            {}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 text-sm font-medium">Total Orders</p>
                        <p className="text-3xl font-black text-brand-blue mt-1">0</p>
                      </div>
                      <ShoppingBag size={40} className="text-slate-200" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 text-sm font-medium">Wishlist Items</p>
                        <p className="text-3xl font-black text-brand-blue mt-1">0</p>
                      </div>
                      <Heart size={40} className="text-slate-200" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 text-sm font-medium">Member Since</p>
                        <p className="text-sm font-bold text-brand-blue mt-2">
                          {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recently'}
                        </p>
                      </div>
                      <Calendar size={40} className="text-slate-200" />
                    </div>
                  </div>
                </div>

                {}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-bold text-lg text-brand-blue mb-4">Recent Activity</h3>
                  <div className="text-center py-12">
                    <ShoppingBag size={48} className="text-slate-200 mx-auto mb-3" />
                    <p className="text-slate-500">No orders yet</p>
                    <Link
                      href="/products"
                      className="inline-block mt-4 px-6 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition"
                    >
                      Browse Products
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {}
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

                {}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-brand-blue mb-4">Saved Addresses</h4>
                  <div className="text-center py-8 bg-slate-50 rounded-lg">
                    <MapPin size={40} className="text-slate-300 mx-auto mb-2" />
                    <p className="text-slate-500 mb-4">No addresses saved yet</p>
                    <button className="px-4 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition text-sm">
                      Add Address
                    </button>
                  </div>
                </div>
              </div>
            )}

            {}
            {activeTab === 'security' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg text-brand-blue mb-6">Security Settings</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Password</p>
                      <p className="text-sm text-slate-600">Change your password regularly to keep your account secure</p>
                    </div>
                    <button className="px-4 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition text-sm">
                      Change
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Two-Factor Authentication</p>
                      <p className="text-sm text-slate-600">Add an extra layer of security to your account</p>
                    </div>
                    <button className="px-4 py-2 bg-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-400 transition text-sm cursor-not-allowed">
                      Enable (Coming Soon)
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Active Sessions</p>
                      <p className="text-sm text-slate-600">Manage your active login sessions</p>
                    </div>
                    <button className="px-4 py-2 bg-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-400 transition text-sm cursor-not-allowed">
                      View (Coming Soon)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {}
            {activeTab === 'preferences' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg text-brand-blue mb-6">Preferences</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Email Notifications</p>
                      <p className="text-sm text-slate-600">Receive updates about orders and promotions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Marketing Emails</p>
                      <p className="text-sm text-slate-600">Exclusive deals and product recommendations</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">SMS Notifications</p>
                      <p className="text-sm text-slate-600">Order updates via SMS</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}



