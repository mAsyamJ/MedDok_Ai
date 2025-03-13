import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  subtitle?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon: Icon, trend, subtitle }) => {
  const trendColor = trend && trend > 0 ? 'text-emerald-400' : 'text-rose-400';
  
  return (
    <div className="metric-card">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
            <Icon className="w-6 h-6 text-indigo-400" />
          </div>
          {trend !== undefined && (
            <span className={`${trendColor} text-sm font-medium`}>
              {trend > 0 ? '+' : ''}{trend}%
            </span>
          )}
        </div>
        <h3 className="text-gray-400 text-sm font-medium mb-2">{title}</h3>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold glow-text">
            {value}
          </p>
          {subtitle && (
            <p className="text-sm text-gray-400">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;