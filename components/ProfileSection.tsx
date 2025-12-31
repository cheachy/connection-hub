
import React, { useState, useEffect, useRef } from 'react';

interface ProfileProps {
  id: string;
  label: string;
  defaultColor: string;
}

const ProfileCard: React.FC<ProfileProps> = ({ id, label, defaultColor }) => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem(`profile_photo_${id}`);
    if (savedImage) setImage(savedImage);
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        localStorage.setItem(`profile_photo_${id}`, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center group">
      <div 
        onClick={triggerUpload}
        className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full cursor-pointer overflow-hidden border-4 transition-all duration-300 group-hover:scale-105 ${defaultColor} shadow-xl flex items-center justify-center bg-slate-800`}
      >
        {image ? (
          <img src={image} alt={label} className="w-full h-full object-cover" />
        ) : (
          <i className="fas fa-user text-3xl opacity-20"></i>
        )}
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <i className="fas fa-camera text-white text-xl"></i>
        </div>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleImageChange} 
          className="hidden" 
          accept="image/*"
        />
      </div>
      <p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
        {label}
      </p>
    </div>
  );
};

const ProfileSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-16 py-4 animate-[fadeIn_1.2s_ease-out]">
      <ProfileCard id="me" label="Chami" defaultColor="border-emerald-500/50 shadow-emerald-500/10" />
      
      <div className="flex flex-col items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-pulse">
           <i className="fas fa-heart text-pink-500/60 text-sm"></i>
        </div>
      </div>

      <ProfileCard id="her" label="Mavis" defaultColor="border-pink-500/50 shadow-pink-500/10" />
    </div>
  );
};

export default ProfileSection;