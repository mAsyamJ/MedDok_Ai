import {
  Activity,
  Calendar,
  FileText,
  Heart,
  LogOut,
  MessageSquare,
  Settings,
  Stethoscope,
  User,
  Users,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/UseAuth';
import { UserRole } from '../constants/userRole';

export default function Sidebar() {
  const { user, logout } = useAuth();
  return (
    <>
      <div className="glow-effect bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-xl mb-12 hover:scale-110 transition-transform duration-300">
        {/* logo patient */}
        {user?.role == UserRole.PATIENT && <Activity className="w-7 h-7" />}

        {/* logo doctor*/}
        {user?.role == UserRole.DOCTOR && (
          <Stethoscope className="w-6 h-6 md:w-7 md:h-7" />
        )}
      </div>
      <div className="flex flex-col items-center space-y-10">
        {/* to manage .. */}
        <Link to={'/heart'} className="nav-button active-nav p-4 rounded-xl">
          <Heart className="w-7 h-7 text-indigo-400" />
        </Link>
        <Link
          to={'/calendar'}
          className="nav-button p-4 rounded-xl text-gray-400"
        >
          <Calendar className="w-7 h-7" />
        </Link>
        {user?.role == UserRole.PATIENT && (
          <Link
            to={'/file-text'}
            className="nav-button p-4 rounded-xl text-gray-400"
          >
            <FileText className="w-7 h-7" />
          </Link>
        )}
        {/* chat feature */}
        {user?.role == UserRole.DOCTOR && (
          <Link
            to={'/message'}
            className="nav-button p-4 rounded-xl text-gray-400"
          >
            <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
          </Link>
        )}

        {user?.role == UserRole.PATIENT && (
          <Link
            to={'/user'}
            className="nav-button p-4 rounded-xl text-gray-400"
          >
            <User className="w-7 h-7" />
          </Link>
        )}
        {user?.role == UserRole.PATIENT && (
          <Link
            to={'/users'}
            className="nav-button p-4 rounded-xl text-gray-400"
          >
            <Users className="w-7 h-7" />
          </Link>
        )}
      </div>
      <div className="mt-auto flex flex-col items-center space-y-6">
        <Link
          to={'/settings'}
          className="nav-button p-4 rounded-xl text-gray-100"
        >
          <Settings className="w-7 h-7" />
        </Link>
        <button
          onClick={logout}
          className="nav-button p-4 rounded-xl text-gray-400"
        >
          <LogOut className="w-7 h-7" />
        </button>
      </div>
    </>
  );
}
