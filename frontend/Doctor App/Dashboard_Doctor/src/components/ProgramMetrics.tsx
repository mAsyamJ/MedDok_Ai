import React from 'react';

interface ProgramMetric {
  title: string;
  value: number;
  subtitle?: string;
}

const ProgramMetrics: React.FC<{ metrics: ProgramMetric[] }> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="dashboard-card">
          <h3 className="text-gray-400 text-sm mb-3">{metric.title}</h3>
          <p className="text-3xl font-bold glow-text">
            {metric.value}
          </p>
          {metric.subtitle && (
            <p className="text-xs text-gray-500 mt-2">{metric.subtitle}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgramMetrics;