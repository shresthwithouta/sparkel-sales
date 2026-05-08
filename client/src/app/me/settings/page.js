'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { updateUserProfile, uploadImage, updatePassword as updatePasswordApi } from '@/lib/api'
import { ChevronLeft, Save, AlertCircle, CheckCircle, Camera, Loader2, Lock } from 'lucide-react'

export default function UserSettings() {
  const { user, loading, isAuthenticated } = useAuth()
  const router = useRouter()

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
          <p className="text-slate-600">Loading settings...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !user) return null

  return <SettingsForm key={user.id} user={user} />
}

function SettingsForm({ user }) {
  const { token, login } = useAuth()
  const [formData, setFormData] = useState({ 
    name: user.name || '', 
    email: user.email || '',
    phone: user.phone || ''
  })
  const [message, setMessage] = useState({ type: '', text: '' })
  const [isSaving, setIsSaving] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState(user.avatar || '')

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'Image must be less than 5MB' })
      return
    }

    try {
      setIsUploading(true)
      const formData = new FormData()
      formData.append('image', file)
      
      const res = await uploadImage(token, formData)
      setAvatarPreview(res.url)
      
      // Update profile immediately with new avatar
      const updatedUser = await updateUserProfile(token, { avatar: res.url })
      login(token, updatedUser.user || updatedUser)
      setMessage({ type: 'success', text: 'Profile picture updated!' })
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to upload image' })
    } finally {
      setIsUploading(false)
    }
  }

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const [addressData, setAddressData] = useState({ 
    street: user.address?.street || '', 
    city: user.address?.city || '', 
    state: user.address?.state || '', 
    zipCode: user.address?.zipCode || '',
    country: user.address?.country || ''
  })

  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [isChangingPassword, setIsChangingPassword] = useState(false)

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' })
      return
    }
    
    setIsChangingPassword(true)
    try {
      await updatePasswordApi(token, {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      })
      setMessage({ type: 'success', text: 'Password updated successfully!' })
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Failed to update password' })
    } finally {
      setIsChangingPassword(false)
    }
  }

  const handleAddressChange = (e) => {
    const { name, value } = e.target
    setAddressData(prev => ({ ...prev, [name]: value }))
  }

  const handleSaveProfile = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    try {
      const updatedUser = await updateUserProfile(token, {
        ...formData,
        address: addressData
      })
      login(token, updatedUser.user || updatedUser) // Update context
      setMessage({ type: 'success', text: 'Profile updated successfully!' })
      setTimeout(() => setMessage({ type: '', text: '' }), 5000)
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Failed to update profile' })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 pt-32 pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/me"
            className="p-2 hover:bg-white rounded-lg transition"
          >
            <ChevronLeft size={24} className="text-slate-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight">Settings</h1>
            <p className="text-slate-600">Manage your account settings and preferences</p>
          </div>
        </div>

        {message.text && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            message.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-700'
              : 'bg-red-50 border border-red-200 text-red-700'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            <span className="font-medium">{message.text}</span>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-brand-blue mb-6">Profile Picture</h2>
          <div className="flex items-center gap-6 mb-8">
            <div className="relative group">
              <div className="w-24 h-24 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-200 flex items-center justify-center relative">
                {avatarPreview ? (
                  <Image src={avatarPreview} alt="Avatar" fill className="object-cover" sizes="80px" />
                ) : (
                  <Camera size={32} className="text-slate-300" />
                )}
                {isUploading && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-xs flex items-center justify-center">
                    <Loader2 size={24} className="text-brand animate-spin" />
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 p-2 bg-brand text-white rounded-full cursor-pointer shadow-lg hover:bg-brand-dark transition-colors border-2 border-white">
                <Camera size={14} />
                <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} disabled={isUploading} />
              </label>
            </div>
            <div>
              <p className="text-sm font-bold text-brand-blue uppercase tracking-tight">Your Avatar</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-medium">JPG or PNG. Max 5MB.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-brand-blue mb-6">Update Profile</h2>
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label htmlFor="settings-name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input
                id="settings-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleProfileChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="settings-email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input
                id="settings-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleProfileChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="settings-phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
              <input
                id="settings-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleProfileChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                placeholder="Enter your phone number"
              />
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition disabled:opacity-50"
            >
              <Save size={18} />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-brand-blue mb-6">Delivery Address</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="settings-street" className="block text-sm font-semibold text-slate-700 mb-2">Street Address</label>
              <input
                id="settings-street"
                type="text"
                name="street"
                value={addressData.street}
                onChange={handleAddressChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                placeholder="123 Main St, Apt 4B"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={addressData.city}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                  placeholder="Kolkata"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={addressData.state}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                  placeholder="West Bengal"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">PIN Code</label>
              <input
                type="text"
                name="zipCode"
                value={addressData.zipCode}
                onChange={handleAddressChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                placeholder="700001"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={addressData.country}
                onChange={handleAddressChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                placeholder="India"
              />
            </div>

            <button
              type="button"
              onClick={handleSaveProfile}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-2 bg-brand text-white rounded-lg font-semibold hover:bg-brand-dark transition disabled:opacity-50"
            >
              <Save size={18} />
              {isSaving ? 'Saving...' : 'Save Address'}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <h2 className="text-xl font-bold text-brand-blue mb-6">Security</h2>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Current Password</label>
              <input
                type="password"
                required
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">New Password</label>
                <input
                  type="password"
                  required
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isChangingPassword}
              className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-black transition disabled:opacity-50"
            >
              <Lock size={18} />
              {isChangingPassword ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

