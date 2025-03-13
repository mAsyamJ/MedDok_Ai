import { HealthMetric, DailyActivity, Appointment, HealthRecord } from './Dashboard/types';

export const heartRateData: HealthMetric[] = [
  { date: '2024-03-01', value: 72 },
  { date: '2024-03-02', value: 75 },
  { date: '2024-03-03', value: 71 },
  { date: '2024-03-04', value: 73 },
  { date: '2024-03-05', value: 70 },
  { date: '2024-03-06', value: 74 },
  { date: '2024-03-07', value: 76 },
];

export const dailyActivity: DailyActivity = {
  steps: 8432,
  calories: 2150,
  distance: 6.2,
  activeMinutes: 45,
};

export const patientBalance = {
  balance: 1200.50,
  monthlyBilling: [
    { month: 'January', amount: 300 },
    { month: 'February', amount: 250 },
    { month: 'March', amount: 400 },
    { month: 'April', amount: 250 },
  ],
  loans: 500,
};

export const upcomingAppointments: Appointment[] = [
  {
    id: '1',
    doctorName: 'Dr. Sarah Chen',
    specialty: 'Cardiologist',
    date: '2024-03-15',
    time: '10:30 AM',
    status: 'upcoming',
  },
  {
    id: '2',
    doctorName: 'Dr. Michael Rodriguez',
    specialty: 'General Practitioner',
    date: '2024-03-20',
    time: '2:15 PM',
    status: 'upcoming',
  },
];

export const recentHealthRecords: HealthRecord[] = [
  {
    id: '1',
    type: 'Blood Test',
    date: '2024-02-28',
    provider: 'City Medical Lab',
    description: 'Annual blood work results',
  },
  {
    id: '2',
    type: 'Vaccination',
    date: '2024-02-15',
    provider: 'Community Health Center',
    description: 'COVID-19 Booster',
  },
];