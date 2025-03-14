import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../context/AuthContext';

// Custom hook untuk menggunakan context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth harus digunakan di dalam AuthProvider');
  }
  return context;
};
