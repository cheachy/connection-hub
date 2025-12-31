
import React from 'react';
import Clock from './components/Clock';
import DistanceTracker from './components/DistanceTracker';
import CheckIn from './components/CheckIn';
import Countdown from './components/Countdown';
import ProfileSection from './components/ProfileSection';
import { MY_TIMEZONE, HER_TIMEZONE } from './constants';

const App: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 min-h-screen flex flex-col gap-8 relative z-10">
      
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-start justify-between gap-8 animate-[fadeInDown_0.8s_ease-out]">
        <div className="space-y-4 flex-1">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase">
            Day 06 Together (Apart)
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-emerald-200 to-pink-300 bg-clip-text text-transparent leading-tight">
            Our Connection Hub
          </h1>
          <p className="text-slate-400 max-w-md font-medium">
            A cozy digital corner for us. Though we share the same sky and time, the miles between Butuan and Cavite are just temporary.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 justify-end">
            <Clock info={MY_TIMEZONE} />
            <Clock info={HER_TIMEZONE} isMain={true} />
          </div>
        </div>
      </header>

      {/* Profiles */}
      <ProfileSection />

      {/* Main Grid - Changed to 6/6 span for better balance */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-[fadeInUp_1s_ease-out]">
        
        {/* Left Column - Engagement */}
        <div className="flex flex-col gap-8">
          <CheckIn />
          <DistanceTracker />
        </div>
        
        {/* Right Column - Stats & Media */}
        <div className="flex flex-col gap-8">
          <Countdown />
          
          {/* Spotify Embed - Now with more width thanks to the 50/50 grid and wider container */}
          <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 flex flex-col h-fit overflow-hidden shadow-xl shadow-black/20">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <i className="fab fa-spotify text-green-400 text-sm"></i>
                </div>
                <h3 className="font-bold text-slate-200">Now Playing...</h3>
            </div>
            <div className="rounded-[12px] overflow-hidden leading-[0] flex items-center justify-center bg-black/40"> 
              <iframe 
                style={{ borderRadius: '12px', border: 'none', overflow: 'hidden' }}
                src="https://open.spotify.com/embed/track/410fyfFghBsxNu45LiNJ24?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-slate-500 text-xs border-t border-white/5 pt-8">
        <p className="mb-2">Built by your GF</p>
        <div className="flex justify-center gap-4 mt-4 opacity-50">
            <i className="fas fa-star text-[8px]"></i>
            <i className="fas fa-star text-[8px]"></i>
            <i className="fas fa-star text-[8px]"></i>
            <i className="fas fa-star text-[8px]"></i>
            <i className="fas fa-star text-[8px]"></i>
        </div>
      </footer>

      {/* Background Decorative Elements */}
      <div className="fixed -bottom-20 -left-20 w-[30rem] h-[30rem] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed top-1/4 -right-20 w-[25rem] h-[25rem] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
    </div>
  );
};

export default App;
