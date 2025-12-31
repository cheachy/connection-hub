
import React, { useState, useEffect } from 'react';
import { STATS } from '../constants';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +STATS.nextMeetupDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm">
        <span className="text-2xl font-bold text-emerald-400">{value}</span>
      </div>
      <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-2">{label}</span>
    </div>
  );

  return (
    <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/30 shadow-inner shadow-pink-500/20">
            <i className="fas fa-calendar-check text-pink-400 text-xs"></i>
        </div>
        <h3 className="font-bold text-slate-200">Next Reunion</h3>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hrs" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Sec" />
      </div>
      
      <p className="mt-6 text-xs text-center text-slate-400 bg-white/5 py-2 rounded-full border border-white/5">
        No solid date yet...
      </p>
    </div>
  );
};

export default Countdown;
