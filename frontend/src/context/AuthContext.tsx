import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Definisi tipe untuk AuthContext
export interface AuthContextType {
  user: { role: string } | null;
  login: (role: string) => void;
  logout: () => void;
}

// Definisi tipe untuk AuthProvider props
interface AuthProviderProps {
  children: ReactNode;
}

// Buat context dengan default value
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<{ role: string } | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Simpan user ke localStorage setiap kali berubah
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (role: string) => {
    setUser({ role });
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
