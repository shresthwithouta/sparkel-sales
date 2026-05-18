'use client'

import { useState } from 'react'

export default function BackupPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState('')

  const handleDownload = async () => {
    try {
      setMessage('Downloading...')
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/backup/download`, {
        method: 'GET'
      })

      if (!response.ok) {
        throw new Error('Failed to download backup')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'database-backup.json'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      
      setMessage('Download complete!')
    } catch (error) {
      console.error(error)
      setMessage('Error downloading backup')
    }
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    try {
      setIsUploading(true)
      setMessage('Reading file...')

      const text = await file.text()
      const jsonData = JSON.parse(text)

      setMessage('Uploading to database (this may take a moment)...')

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/backup/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      })

      if (!response.ok) {
        throw new Error('Failed to upload backup')
      }

      setMessage('Database successfully restored!')
    } catch (error) {
      console.error(error)
      setMessage('Error uploading backup. Make sure it is a valid JSON backup file.')
    } finally {
      setIsUploading(false)
      // Reset input
      e.target.value = ''
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-100">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Database Backup
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Easily download and upload your database data.
          </p>
        </div>

        {message && (
          <div className="bg-blue-50 text-blue-700 p-3 rounded-md text-sm font-medium text-center border border-blue-100">
            {message}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <button
              onClick={handleDownload}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm transition-colors"
            >
              Download Backup (JSON)
            </button>
            <p className="mt-2 text-xs text-gray-500 text-center">
              Downloads a full copy of your current database.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <div>
            <label className={`w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md shadow-sm transition-colors ${isUploading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'text-gray-700 bg-white hover:bg-gray-50 cursor-pointer'}`}>
              <span>{isUploading ? 'Uploading...' : 'Upload Backup (JSON)'}</span>
              <input
                type="file"
                accept=".json"
                className="hidden"
                onChange={handleUpload}
                disabled={isUploading}
              />
            </label>
            <p className="mt-2 text-xs text-red-500 font-medium text-center">
              Warning: Uploading will completely overwrite the current database!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
