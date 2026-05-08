'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { fetchUserMe, loginWithGoogle } from '@/lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  // Clears auth state only — does NOT redirect
  const clearAuth = useCallback(() => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
  }, [])

  // Full logout that also redirects to home
  const logout = useCallback(() => {
    clearAuth()
    window.location.href = '/'
  }, [clearAuth])

  useEffect(() => {
    const handleUnauthorized = () => {
      console.warn('Unauthorized — clearing session');
      clearAuth();
      window.location.href = '/auth/login?expired=true';
    };
    window.addEventListener('unauthorized', handleUnauthorized);
    return () => window.removeEventListener('unauthorized', handleUnauthorized);
  }, [clearAuth]);

  useEffect(() => {
    const loadUser = async () => {
      const storedToken = localStorage.getItem('authToken')
      if (storedToken) {
        try {
          const data = await fetchUserMe(storedToken)
          setToken(storedToken)
          setUser(data.user)
        } catch (err) {
          console.error('Session expired or invalid — clearing auth')
          // Just clear state, do NOT redirect — user may be on a public page
          clearAuth()
        }
      }
      setLoading(false)
    }
    loadUser()
  }, [clearAuth])

  const login = (token, userData) => {
    setToken(token);
    setUser(userData);
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const register = (token, userData) => {
    login(token, userData);
  };

  const googleLogin = async (idToken) => {
    setLoading(true);
    try {
      const data = await loginWithGoogle(idToken);
      login(data.token, data.user);
      return data;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      loading, 
      login, 
      register,
      googleLogin,
      logout,
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin'
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}




