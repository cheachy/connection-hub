
import React, { useState, useEffect } from 'react';
import { TimeZoneInfo } from '../types';

interface ClockProps {
  info: TimeZoneInfo;
  isMain?: boolean;
}

const Clock: React.FC<ClockProps> = ({ info, isMain }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    timeZone: info.zone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const hour = parseInt(time.toLocaleTimeString('en-US', { timeZone: info.zone, hour: '2-digit', hour12: false }));
  const isAwake = hour >= 7 && hour <= 23;

  return (
    <div className={`p-4 rounded-3xl backdrop-blur-md transition-all duration-500 border border-white/10 ${isMain ? 'bg-pink-500/20 shadow-lg shadow-pink-500/10' : 'bg-emerald-900/40'}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className={`text-xs uppercase tracking-widest font-bold mb-1 ${isMain ? 'text-pink-200/60' : 'text-emerald-200/60'}`}>{info.label}</p>
          <h2 className="text-2xl font-bold tracking-tight text-white">{timeString}</h2>
          <p className="text-xs text-slate-400 mt-1">{info.name}</p>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isAwake ? (isMain ? 'bg-pink-400/20 text-pink-400' : 'bg-emerald-400/20 text-emerald-400') : 'bg-slate-700/50 text-slate-500'}`}>
          <i className={`fas ${isAwake ? 'fa-sun animate-pulse' : 'fa-moon'}`}></i>
        </div>
      </div>
    </div>
  );
};

export default Clock;