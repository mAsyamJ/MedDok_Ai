import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/UseAuth';
import { ProtectedRouteProps } from '../types';

export default function ProtectedRoute({
  role,
  children,
}: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={'/404'} replace />;
  }
  return children;
}
