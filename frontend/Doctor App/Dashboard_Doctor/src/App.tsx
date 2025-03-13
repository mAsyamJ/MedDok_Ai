import React, { useState } from 'react';
import {
  Activity, Heart, Calendar, FileText, User, Settings,
  LogOut, Bell, Users, PieChart, Clock, DollarSign,
  TrendingUp, MessageSquare, Stethoscope
} from 'lucide-react';
import MetricCard from './components/MetricCard';
import ProgramMetrics from './components/ProgramMetrics';
import PatientList from './components/PatientList';
import DoctorStats from './components/DoctorStats';
import BillingCard from './components/BillingCard';
import TodaysTasks from './components/TodaysTasks';
import { revenueData, doctorStats, programMetrics, patients } from './mockData';

function App() {
  const [selectedMonth, setSelectedMonth] = useState(revenueData[0].month);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 text-gray-100">
      <div className="fixed inset-0 space-gradient opacity-50"></div>

      {/* Sidebar */}
      <nav className="fixed left-0 top-0 h-full w-16 md:w-24 glass-effect border-r border-indigo-500/20 flex flex-col items-center py-8 md:py-12 z-50">
        <div className="glow-effect bg-gradient-to-br from-indigo-500 to-purple-500 p-3 md:p-4 rounded-xl mb-8 md:mb-12">
          <Stethoscope className="w-6 h-6 md:w-7 md:h-7" />
        </div>
        <div className="flex flex-col items-center space-y-6 md:space-y-10">
          <button className="nav-button active-nav p-3 md:p-4 rounded-xl">
            <Heart className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />
          </button>
          <button className="nav-button p-3 md:p-4 rounded-xl text-gray-400">
            <Calendar className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <button className="nav-button p-3 md:p-4 rounded-xl text-gray-400">
            <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <button className="nav-button p-3 md:p-4 rounded-xl text-gray-400">
            <Users className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>
        <div className="mt-auto flex flex-col items-center space-y-4 md:space-y-6">
          <button className="nav-button p-3 md:p-4 rounded-xl text-gray-100">
            <Settings className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <button className="nav-button p-3 md:p-4 rounded-xl text-gray-400">
            <LogOut className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="ml-16 md:ml-24 p-4 md:p-8">
        {/* Header */}
        <header className="glass-effect border-b border-indigo-500/20 p-4 md:p-6 mb-6 md:mb-8 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Doctor Dashboard
              </h1>
              <p className="text-gray-400 mt-1">Welcome back, Dr. John Doe</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-indigo-500/10 rounded-lg transition-colors">
                <Bell className="w-6 h-6 text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
              </button>
              <div className="glow-effect rounded-full p-1">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <BillingCard />
          <TodaysTasks />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6">Program Overview</h2>
          <ProgramMetrics metrics={programMetrics} />
        </div>

        <div className="mb-8">
          <PatientList />
        </div>
      </div>
    </div>
  );
}

export default App;