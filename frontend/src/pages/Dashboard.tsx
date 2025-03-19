import { Activity, Footprints, Flame, Timer, Users, Heart, PieChart } from 'lucide-react'
import DashboardCard from '../components/DashboardCard'
import MetricCard from '../components/MetricCard'
import { dailyActivity, upcomingAppointments, recentHealthRecords } from '../../mockData'
import TodaysTasks from '../components/TodaysTasks'
import PatientList from '../components/PatientList'
import { UserRole } from '../constants/userRole'
import { useAuth } from '../hooks/UseAuth'

export default function Dashboard() {
  const { user } = useAuth()
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
        {user?.role == UserRole.PATIENT && (
          <>
            <MetricCard title='Daily Steps' value={dailyActivity.steps.toLocaleString()} icon={Footprints} trend={5} />
            <MetricCard title='Calories Burned' value={dailyActivity.calories} icon={Flame} trend={-2} />
            <MetricCard title='Distance (km)' value={dailyActivity.distance} icon={Activity} trend={3} />
            <MetricCard title='Active Minutes' value={dailyActivity.activeMinutes} icon={Timer} trend={8} />
          </>
        )}
        {user?.role === UserRole.DOCTOR && (
          <>
            <MetricCard title='Patient Enrolled' value={550} icon={Users} trend={10} />
            <MetricCard title='Non-Complex' value={500} icon={Heart} trend={5} />
            <MetricCard title='Complex' value={50} icon={Activity} trend={0.6} />
            <MetricCard title='Compliance' value='75%' icon={PieChart} trend={-1.2} />
          </>
        )}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
        {user?.role === UserRole.PATIENT && (
          <>
            <DashboardCard title='Upcoming Appointments'>
              <div className='space-y-6'>
                {upcomingAppointments.map(appointment => (
                  <div key={appointment.id} className='glass-effect p-6 rounded-xl hover-glow transition-all duration-300'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='font-medium text-lg bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>{appointment.doctorName}</p>
                        <p className='text-sm text-gray-400 mt-1'>{appointment.specialty}</p>
                      </div>
                      <div className='text-right'>
                        <p className='font-medium text-gray-200'>{appointment.date}</p>
                        <p className='text-sm text-gray-400 mt-1'>{appointment.time}</p>
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
            <TodaysTasks />
          </>
        )}
      </div>
      {user?.role === UserRole.PATIENT && (
        <DashboardCard title='Recent Health Records'>
          <div className='space-y-6'>
            {recentHealthRecords.map((record: { id: string; type: string; provider: string; date: string; description: string }) => (
              <div key={record.id} className='glass-effect p-6 rounded-xl hover-glow transition-all duration-300'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-medium text-lg bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>{record.type}</p>
                    <p className='text-sm text-gray-400 mt-1'>{record.provider}</p>
                  </div>
                  <div className='text-right'>
                    <p className='font-medium text-gray-200'>{record.date}</p>
                    <p className='text-sm text-gray-400 mt-1'>{record.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      )}
      {user?.role === UserRole.DOCTOR && (
        <>
          <div className='mb-8'>
            <PatientList />
          </div>
        </>
      )}
    </>
  )
}
