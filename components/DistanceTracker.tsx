
import React from 'react';
import { STATS } from '../constants';

const DistanceTracker: React.FC = () => {
  return (
    <div className="w-full bg-slate-900/40 p-6 rounded-3xl border border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
      </div>
      
      <div className="flex justify-between items-end mb-4">
        <div className="text-center">
          <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-emerald-500/30">
             <i className="fas fa-map-marker-alt text-emerald-400"></i>
          </div>
          <p className="text-sm font-bold">{STATS.originCity}</p>
        </div>
        
        <div className="flex-1 px-4 relative pb-2">
            <div className="w-full h-px bg-gradient-to-r from-emerald-500/50 via-slate-500 to-pink-500/50 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-emerald-300">
                    {STATS.distanceMiles.toLocaleString()} Miles
                </div>
                {/* Heart moving along the path */}
                <div className="absolute top-0 -translate-y-1/2 left-1/4 animate-[bounce_2s_infinite]">
                    <i className="fas fa-heart text-[8px] text-pink-400"></i>
                </div>
            </div>
        </div>

        <div className="text-center">
          <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-pink-500/30">
             <i className="fas fa-map-marker-alt text-pink-400"></i>
          </div>
          <p className="text-sm font-bold">{STATS.destinationCity}</p>
        </div>
      </div>
      
      <p className="text-xs text-center text-slate-500 italic mt-2">
        "Distance means so little when someone means so much."
      </p>
    </div>
  );
};

export default DistanceTracker;