import React from 'react';

export interface HealthMetric {
  date: string;
  value: number;
}

export interface DailyActivity {
  steps: number;
  calories: number;
  distance: number;
  activeMinutes: number;
}

export interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface HealthRecord {
  id: string;
  type: string;
  date: string;
  provider: string;
  description: string;
}
export interface ProtectedRouteProps {
  role?: string ;
  children: React.ReactNode;
}