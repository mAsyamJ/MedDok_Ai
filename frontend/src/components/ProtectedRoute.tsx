import { useEffect } from 'react'
import { useAuth } from '../hooks/UseAuth'
import { ProtectedRouteProps } from '../types'

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth()
  useEffect(() => {
    if (!user?.actor) return
    if (!user?.isAuthenticated) {
      alert('You are not authorized to access this page, no role found')
      window.location.replace('/404')
    }
    if (user?.actor === 'patient' && !user?.isAuthenticated) {
      alert('You are not authorized to access this page, patient role not found')
      window.location.replace('/404')
    }
    if (user.isAuthenticated && !user?.role) {
      alert('You are not authorized to access this page, no role found')
    }
  }, [user])
  return children
}
