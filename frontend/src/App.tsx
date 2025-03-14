import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Error from './pages/Error';
import Landing from './pages/Landing';
import Login from './pages/Login';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/dashboard"
                element={
                  // <ProtectedRoute>
                  <Dashboard />
                  // </ProtectedRoute>
                }
              ></Route>
              <Route path="/404" element={<Error />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
