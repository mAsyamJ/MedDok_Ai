import React from 'react';
import { Trophy, Star, Activity } from 'lucide-react';

interface DoctorStatsProps {
  rank: number;
  rating: number;
  consultations: number;
}

const DoctorStats: React.FC<DoctorStatsProps> = ({ rank, rating, consultations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="dashboard-card">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
            <Trophy className="w-8 h-8 text-yellow-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Doctor Rank</p>
            <p className="text-2xl font-bold text-yellow-400">#{rank}</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-card">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
            <Star className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Rating</p>
            <p className="text-2xl font-bold text-indigo-400">{rating}/5.0</p>
          </div>
        </div>
      </div>
      
      <div className="dashboard-card">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20">
            <Activity className="w-8 h-8 text-emerald-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Monthly Consultations</p>
            <p className="text-2xl font-bold text-emerald-400">{consultations}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorStats;