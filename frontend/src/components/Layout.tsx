import { Bell } from 'lucide-react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Layout() {
  const [showNotifications, setShowNotifications] = useState(false)
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (showNotifications && !document.getElementById('notifications')?.contains(e.target as Node)) {
        setShowNotifications(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [showNotifications])
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 text-gray-100'>
      {/* Background Decoration */}
      <div className='fixed inset-0 space-gradient opacity-50'></div>

      {/* Sidebar */}
      <nav className='fixed left-0 top-0 h-full w-24 glass-effect border-r border-indigo-500/20 flex flex-col items-center py-12 z-50'>
        <Sidebar />
      </nav>

      {/* Main Content */}
      <div className='ml-24'>
        {/* Header */}
        <header className='glass-effect border-b border-indigo-500/20 p-6 sticky top-0 z-40'>
          <div className='flex items-center justify-between max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>Health Dashboard</h1>
            <div className='flex items-center space-x-6 relative'>
              <button className='nav-button p-3 rounded-xl text-gray-400 relative ' onClick={() => setShowNotifications(!showNotifications)}>
                <Bell className='w-6 h-6' />
                <span className='absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full'></span>
              </button>
              {showNotifications && (
                <div className='absolute right-0 top-20 mt-2 w-64 bg-white text-black rounded-lg shadow-lg z-50'>
                  <ul>
                    <li className='p-4 border-b border-gray-200'>Notification 1</li>
                    <li className='p-4 border-b border-gray-200'>Notification 2</li>
                    <li className='p-4'>Notification 3</li>
                  </ul>
                </div>
              )}
              <div className='glow-effect rounded-full p-1 hover:scale-110 transition-transform duration-300'>
                <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='Profile' className='w-12 h-12 rounded-full ring-2 ring-indigo-500/50' />
              </div>
            </div>
          </div>
        </header>
        <main className='p-12 max-w-7xl mx-auto relative z-10'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
