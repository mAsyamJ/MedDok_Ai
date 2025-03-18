import React, { useEffect } from 'react';
import { useAuth } from '../hooks/UseAuth';
import { ProtectedRouteProps } from '../types';

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();
  useEffect(() => {
    if (!user?.actor) return;
    if (!user?.isAuthenticated) {
      window.location.replace('/404');
    }
  }, [user]);
  return children;
}
