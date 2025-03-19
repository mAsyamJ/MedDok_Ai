import React, { useEffect, useState } from 'react'
import NfidLogo from '../assets/img/nfid.png'
import { InternetIdentityLogo } from '../assets/logo/Logo'
import { ButtonLoginProps } from '../types'
import { useAuth } from '../hooks/UseAuth'
import { useNavigate } from 'react-router-dom'

const ButtonLogin = ({ user, logout, login, provider, logo }: ButtonLoginProps) => {
  return (
    <>
      <button onClick={user?.isAuthenticated ? logout : login} className='w-full flex items-center justify-center p-4 rounded-xl border border-blue-200 hover:border-blue-400 bg-white hover:bg-blue-50 transition-all'>
        {React.isValidElement(logo) ? logo : <img className='mr-4 w-8 h-8 aspect-square' src={String(logo)} alt='' />}
        <span className='font-medium text-gray-700'>
          {' '}
          {user?.isAuthenticated ? 'Logout from ' : 'Login with '} {provider}{' '}
        </span>
      </button>
    </>
  )
}

export default function Login() {
  const [role, setRole] = useState<string>('')
  const { login, logout, user } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (user?.isAuthenticated) {
      navigate('/dashboard')
    }
  }, [navigate, user?.isAuthenticated])
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-white'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-blue-900 mb-4'>Welcome To MedDokAi</h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>Secure Health Platform Powered by Blockchain Technology</p>
        </div>
        <div className='max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8'>
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6 text-center'>Secure Login Methods</h3>
            <div className='flex justify-between'>
              <select name='role' value={role} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRole(e.target.value)}>
                <option value=''>Select Role</option>
                <option value='patient'>Patient</option>
                <option value='doctor'>Doctor</option>
              </select>
              <button type='button' onClick={() => logout()}>
                Logout
              </button>
            </div>
            {/* Internet Identity */}
            <ButtonLogin login={() => login(role, 'II')} logout={logout} logo={<InternetIdentityLogo />} provider='Internet Identity' user={user} />
            <ButtonLogin login={() => login(role, 'NFID')} logout={logout} logo={NfidLogo} provider='NFID' user={user} />
          </div>
        </div>
        <div className='mt-12 text-center text-sm text-gray-500'>
          <p>© 2025 MedDokAi. All rights reserved.</p>
          <div className='mt-2 space-x-4'>
            <a href='#' className='hover:text-blue-600'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-blue-600'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
