import React from 'react';
import {
  Activity,
  Bell,
  Footprints,
  Flame,
  Timer,
  Users,
  Heart,
  PieChart,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import DashboardCard from '../components/DashboardCard';
import MetricCard from '../components/MetricCard'; // Import the MetricCard component
import PatientBalanceCard from '../components/PatientBalanceCard'; // Import the PatientBalanceCard component
import {
  heartRateData,
  dailyActivity,
  upcomingAppointments,
  recentHealthRecords,
  programMetrics,
} from '../../mockData';
import Sidebar from '../components/Sidebar';
import BillingCard from '../components/BillingCard';
import TodaysTasks from '../components/TodaysTasks';
import ProgramMetrics from '../components/ProgramMetrics';
import PatientList from '../components/PatientList';
import { UserRole } from '../constants/userRole';
import { useAuth } from '../hooks/UseAuth';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 text-gray-100">
      {/* Background Decoration */}
      <div className="fixed inset-0 space-gradient opacity-50"></div>

      {/* Sidebar */}
      <nav className="fixed left-0 top-0 h-full w-24 glass-effect border-r border-indigo-500/20 flex flex-col items-center py-12 z-50">
        <Sidebar />
      </nav>

      {/* Main Content */}
      <div className="ml-24">
        {/* Header */}
        <header className="glass-effect border-b border-indigo-500/20 p-6 sticky top-0 z-40">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Health Dashboard
            </h1>
            <div className="flex items-center space-x-6">
              <button className="nav-button p-3 rounded-xl text-gray-400 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
              </button>
              <div className="glow-effect rounded-full p-1 hover:scale-110 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-12 h-12 rounded-full ring-2 ring-indigo-500/50"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-12 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {user?.role == UserRole.PATIENT && (
              <>
                <MetricCard
                  title="Daily Steps"
                  value={dailyActivity.steps.toLocaleString()}
                  icon={Footprints}
                  trend={5}
                />
                <MetricCard
                  title="Calories Burned"
                  value={dailyActivity.calories}
                  icon={Flame}
                  trend={-2}
                />
                <MetricCard
                  title="Distance (km)"
                  value={dailyActivity.distance}
                  icon={Activity}
                  trend={3}
                />
                <MetricCard
                  title="Active Minutes"
                  value={dailyActivity.activeMinutes}
                  icon={Timer}
                  trend={8}
                />
              </>
            )}
            {user?.role === UserRole.DOCTOR && (
              <>
                <MetricCard
                  title="Patient Enrolled"
                  value={550}
                  icon={Users}
                  trend={10}
                />
                <MetricCard
                  title="Non-Complex"
                  value={500}
                  icon={Heart}
                  trend={5}
                />
                <MetricCard
                  title="Complex"
                  value={50}
                  icon={Activity}
                  trend={0.6}
                />
                <MetricCard
                  title="Compliance"
                  value="75%"
                  icon={PieChart}
                  trend={-1.2}
                />
              </>
            )}
          </div>
          {user?.role === UserRole.PATIENT && (
            <>
              <PatientBalanceCard />{' '}
              {/* Add the PatientBalanceCard component */}
            </>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {user?.role === UserRole.PATIENT && (
              <>
                <DashboardCard title="Heart Rate">
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={heartRateData}>
                        <defs>
                          <linearGradient
                            id="colorValue"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#6366f1"
                              stopOpacity={0.6}
                            />
                            <stop
                              offset="50%"
                              stopColor="#8b5cf6"
                              stopOpacity={0.4}
                            />
                            <stop
                              offset="95%"
                              stopColor="#ec4899"
                              stopOpacity={0.2}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="date"
                          stroke="#6B7280"
                          tickFormatter={(value) =>
                            new Date(value).toLocaleDateString()
                          }
                        />
                        <YAxis stroke="#6B7280" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'rgba(30, 41, 59, 0.95)',
                            border: '1px solid rgba(99, 102, 241, 0.3)',
                            borderRadius: '0.75rem',
                            backdropFilter: 'blur(12px)',
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="url(#colorValue)"
                          strokeWidth={3}
                          dot={{
                            fill: '#6366f1',
                            strokeWidth: 2,
                            stroke: '#818cf8',
                            r: 4,
                          }}
                          activeDot={{
                            r: 8,
                            className: 'hover-glow',
                            fill: '#8b5cf6',
                            stroke: '#6366f1',
                          }}
                          fill="url(#colorValue)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </DashboardCard>
                <DashboardCard title="Upcoming Appointments">
                  <div className="space-y-6">
                    {upcomingAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="glass-effect p-6 rounded-xl hover-glow transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-lg bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                              {appointment.doctorName}
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                              {appointment.specialty}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-200">
                              {appointment.date}
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                              {appointment.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </DashboardCard>
              </>
            )}
            {user?.role === UserRole.DOCTOR && (
              <>
                <BillingCard />
                <TodaysTasks />
              </>
            )}
          </div>
          {user?.role === UserRole.PATIENT && (
            <DashboardCard title="Recent Health Records">
              <div className="space-y-6">
                {recentHealthRecords.map(
                  (record: {
                    id: string;
                    type: string;
                    provider: string;
                    date: string;
                    description: string;
                  }) => (
                    <div
                      key={record.id}
                      className="glass-effect p-6 rounded-xl hover-glow transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-lg bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            {record.type}
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            {record.provider}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-200">
                            {record.date}
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            {record.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </DashboardCard>
          )}
          {user?.role === UserRole.DOCTOR && (
            <>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-6">Program Overview</h2>
                <ProgramMetrics metrics={programMetrics} />
              </div>
              <div className="mb-8">
                <PatientList />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
