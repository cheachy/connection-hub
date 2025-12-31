
import React, { useState } from 'react';
import { FALLBACK_QUESTIONS } from "../constants";

export const getDailyQuestion = async (): Promise<string> => {
  // Simulate a short delay to keep the "loading" animation feel
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Pick a random question from your local list
  const randomIndex = Math.floor(Math.random() * FALLBACK_QUESTIONS.length);
  return FALLBACK_QUESTIONS[randomIndex];
};

const CheckIn: React.FC = () => {
  const [question, setQuestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const handleCheckIn = async () => {
    setLoading(true);
    setShowHeart(true);
    
    // Trigger animation
    setTimeout(() => setShowHeart(false), 2000);
    
    const newQuestion = await getDailyQuestion();
    setQuestion(newQuestion);
    setLoading(false);
  };

  return (
    <div className="relative p-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/20 to-pink-500/10 border border-white/10 shadow-2xl flex flex-col items-center text-center overflow-hidden">
      
      {showHeart && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
           <i className="fas fa-heart text-7xl text-pink-500 animate-[ping_1.5s_infinite] opacity-50"></i>
        </div>
      )}

      <div className="mb-6 relative">
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40 cursor-pointer hover:scale-105 active:scale-95 transition-all" onClick={handleCheckIn}>
          <i className="fas fa-hand-holding-heart text-3xl text-white"></i>
        </div>
        {!question && <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-900 animate-bounce"></div>}
      </div>

      <h3 className="text-xl font-bold mb-2">Daily Connection</h3>
      <p className="text-slate-400 text-sm mb-6 max-w-xs">
        {question ? "Today's question for us:" : "Tap to spark a conversation and see what we can learn about each other today."}
      </p>

      {loading ? (
        <div className="space-y-2 w-full max-w-sm">
          <div className="h-4 bg-white/5 rounded animate-pulse"></div>
          <div className="h-4 bg-white/5 rounded animate-pulse w-3/4 mx-auto"></div>
        </div>
      ) : (
        question && (
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 w-full animate-[fadeIn_0.5s_ease-out]">
            <p className="text-lg text-emerald-100 font-medium leading-relaxed italic">
              "{question}"
            </p>
          </div>
        )
      )}

      {question && (
        <button 
          onClick={handleCheckIn}
          className="mt-6 text-xs text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-widest font-bold"
        >
          Generate New Question
        </button>
      )}
    </div>
  );
};

export default CheckIn;