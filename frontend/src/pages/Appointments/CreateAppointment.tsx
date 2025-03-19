import React, { useState } from 'react'
import { Calendar, Clock, DollarSign, FileText, User, UserCog } from 'lucide-react'

interface AppointmentForm {
  userId: string
  doctorId: string
  timestamp: string
  description: string
  price: string
  paymentStatus: 'pending' | 'completed' | 'failed'
}

export default function CreateAppointment() {
  const [form, setForm] = useState<AppointmentForm>({
    userId: '',
    doctorId: '',
    timestamp: '',
    description: '',
    price: '',
    paymentStatus: 'pending',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', form)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>Create New Appointment</h2>
      </div>

      <form onSubmit={handleSubmit} className='glass-effect rounded-2xl p-8 space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* User ID Field */}
          <div className='space-y-2'>
            <label className='flex items-center space-x-2 text-gray-300'>
              <User className='w-4 h-4' />
              <span>Patient ID</span>
            </label>
            <input type='text' name='userId' value={form.userId} onChange={handleChange} className='w-full bg-gray-900/50 border border-indigo-500/30 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-100' placeholder='Enter patient ID' />
          </div>

          {/* Doctor ID Field */}
          <div className='space-y-2'>
            <label className='flex items-center space-x-2 text-gray-300'>
              <UserCog className='w-4 h-4' />
              <span>Doctor ID</span>
            </label>
            <input type='text' name='doctorId' value={form.doctorId} onChange={handleChange} className='w-full bg-gray-900/50 border border-indigo-500/30 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-100' placeholder='Enter doctor ID' />
          </div>

          {/* Timestamp Field */}
          <div className='space-y-2'>
            <label className='flex items-center space-x-2 text-gray-300'>
              <Calendar className='w-4 h-4' />
              <span>Appointment Date & Time</span>
            </label>
            <input type='datetime-local' name='timestamp' value={form.timestamp} onChange={handleChange} className='w-full bg-gray-900/50 border border-indigo-500/30 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-100' />
          </div>

          {/* Price Field */}
          <div className='space-y-2'>
            <label className='flex items-center space-x-2 text-gray-300'>
              <DollarSign className='w-4 h-4' />
              <span>Price (ETH)</span>
            </label>
            <input type='number' name='price' value={form.price} onChange={handleChange} step='0.001' className='w-full bg-gray-900/50 border border-indigo-500/30 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-100' placeholder='0.00' />
          </div>

          {/* Payment Status Field */}
          <div className='space-y-2'>
            <label className='flex items-center space-x-2 text-gray-300'>
              <Clock className='w-4 h-4' />
              <span>Payment Status</span>
            </label>
            <select name='paymentStatus' value={form.paymentStatus} onChange={handleChange} className='w-full bg-gray-900/50 border border-indigo-500/30 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-100'>
              <option value='pending'>Pending</option>
              <option value='completed'>Completed</option>
              <option value='failed'>Failed</option>
            </select>
          </div>

          {/* Description Field - Full Width */}
          <div className='space-y-2 md:col-span-2'>
            <label className='flex items-center space-x-2 text-gray-300'>
              <FileText className='w-4 h-4' />
              <span>Description</span>
            </label>
            <textarea name='description' value={form.description} onChange={handleChange} rows={4} className='w-full bg-gray-900/50 border border-indigo-500/30 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-gray-100' placeholder='Enter appointment description' />
          </div>
        </div>

        {/* Submit Button */}
        <div className='flex justify-end pt-4'>
          <button type='submit' className='px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 flex items-center space-x-2'>
            Create Appointment
          </button>
        </div>
      </form>
    </div>
  )
}
