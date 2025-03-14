import React, { useState } from 'react';
import { useAuth } from '../hooks/UseAuth';
import { AuthClient } from '@dfinity/auth-client';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [role, setRole] = useState<string>('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log(role);
    if (!role) {
      return;
    }
    login(role);
    navigate('/dashboard');
  };

  return (
    <>
      <p>Halaman Login</p>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setRole(e.target.value)
        }
        value={role}
        id=""
      >
        <option value="">Pilih role euy</option>
        <option value="patient">patient</option>
        <option value="doctor">doctor</option>
      </select>
      <button onClick={handleLogin} type="button">
        Login
      </button>
    </>
  );
}
