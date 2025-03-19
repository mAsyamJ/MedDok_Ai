import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import Error from './pages/Error'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Appointment from './pages/Appointments/Appointment'
import Layout from './components/Layout'
import CreateAppointment from './pages/Appointments/CreateAppointment'
import MedicalHistory from './pages/MedicalHistory'

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route
              path='/dashboard'
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path='appointments' element={<Appointment />} />
              <Route path='appointments/create' element={<CreateAppointment />} />
              <Route path='medical-history' element={<MedicalHistory />} />
            </Route>
            <Route path='/404' element={<Error />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  )
}
