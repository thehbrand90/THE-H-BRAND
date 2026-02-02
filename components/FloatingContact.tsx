import React from 'react';
import { Instagram } from 'lucide-react';

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 print:hidden">
      {/* Instagram */}
      <a 
        href="https://www.instagram.com/design_theh" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group w-[50px] h-[50px] rounded-full flex items-center justify-center border border-brand-dark/10 bg-white/50 backdrop-blur-sm hover:bg-brand-dark transition-all duration-300 hover:scale-105"
        aria-label="Instagram"
      >
        <Instagram 
          strokeWidth={1.5} 
          className="w-5 h-5 text-brand-dark group-hover:text-white transition-colors duration-300" 
        />
      </a>

      {/* KakaoTalk */}
      <a 
        href="https://pf.kakao.com/_xbAies/chat" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group w-[50px] h-[50px] rounded-full flex items-center justify-center border border-brand-dark/10 bg-white/50 backdrop-blur-sm hover:bg-brand-dark transition-all duration-300 hover:scale-105"
        aria-label="KakaoTalk"
      >
        {/* Simple Chat Bubble Icon representing KakaoTalk */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-5 h-5 fill-brand-dark group-hover:fill-white transition-colors duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3C6.48 3 2 6.48 2 10.77C2 13.56 3.78 16.03 6.47 17.38L5.5 21L9.12 18.59C10.03 18.79 11 18.89 12 18.89C17.52 18.89 22 15.41 22 11.12C22 6.83 17.52 3 12 3Z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingContact;