import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  className = '',
}) => {
  return (
    <div
      className={`metric-glow glass-effect rounded-xl p-6 hover-glow transition-all duration-300 ${className}`}
    >
      <div className="relative z-10 flex items-center">
        <div className="bg-gradient-to-br from-indigo-500/30 to-purple-500/30 p-4 rounded-xl animate-pulse">
          <Icon className="w-8 h-8 text-indigo-400" />
        </div>
        <div className="ml-6">
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {value}
          </p>
          {trend !== undefined && (
            <p
              className={`text-sm font-medium ${
                trend >= 0 ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {trend >= 0 ? '+' : ''}
              {trend}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
