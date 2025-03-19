import { ActorSubclass } from '@dfinity/agent'
import { AuthClient } from '@dfinity/auth-client'
import React from 'react'

export interface HealthMetric {
  date: string
  value: number
}

export interface DailyActivity {
  steps: number
  calories: number
  distance: number
  activeMinutes: number
}

export interface Appointment {
  id: string
  doctorName: string
  specialty: string
  date: string
  time: string
  status: 'upcoming' | 'completed' | 'cancelled'
}

export interface HealthRecord {
  id: string
  type: string
  date: string
  provider: string
  description: string
}
export interface ProtectedRouteProps {
  role?: string
  children: React.ReactNode
}

export interface User {
  actor: ActorSubclass<any> |undefined
  authClient: AuthClient | undefined
  isAuthenticated: boolean | undefined
  principal: string | undefined
  role?: string
}
export interface ButtonLoginProps {
  user: User | null
  login: () => void
  logout: () => void
  provider: string
  logo: React.ReactNode | string
}

export interface AuthContextType {
  user: User | null
  login: (role: string, provider: string) => void
  logout: () => void
}

// Definisi tipe untuk AuthProvider props
export interface AuthProviderProps {
  children: React.ReactNode
}

export interface MedicalRecord {
  patientName: string
  dateOfBirth: string
  bloodType: string
  allergies: string[]
  currentMedications: string[]
  chronicConditions: string[]
  vitalSigns: {
    bloodPressure: string
    heartRate: string
    temperature: string
    weight: string
    height: string
  }
  notes: string
}
export interface Patient {
  id: string
  name: string
  age: number
  conditions: string[]
  category: string
  status: string
  enrollDate: string
  program: string
  provider: string
  monthlyMins: number
  avatar: string
}
export interface RevenueData {
  month: string
  amount: number
}

export interface RevenueDropdownProps {
  data: RevenueData[]
  selectedMonth: string
  onMonthSelect: (month: string) => void
}
