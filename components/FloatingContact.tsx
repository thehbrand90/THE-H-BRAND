import React from 'react';
import { Instagram } from 'lucide-react';

/**
 * Fixed quick-contact rail.
 * Kept clear of the hero CTA (bottom-left) and sized down on mobile so it
 * never sits on top of page content.
 */
const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-3 md:bottom-6 md:right-6 z-40 flex flex-col gap-2 print:hidden">
      <a
        href="https://www.instagram.com/design_theh"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex group w-10 h-10 rounded-full items-center justify-center border border-brand-dark/10 bg-brand-bg/80 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.07)] hover:bg-brand-dark transition-all duration-300 hover:-translate-y-0.5"
        aria-label="인스타그램"
      >
        <Instagram
          strokeWidth={1.4}
          className="w-[18px] h-[18px] text-brand-dark group-hover:text-white transition-colors duration-300"
        />
      </a>

      <a
        href="https://pf.kakao.com/_xbAies/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-11 h-11 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-brand-dark/10 bg-brand-bg/80 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.07)] hover:bg-brand-dark transition-all duration-300 hover:-translate-y-0.5"
        aria-label="카카오톡 상담"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-[18px] h-[18px] fill-brand-dark group-hover:fill-white transition-colors duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3C6.48 3 2 6.48 2 10.77C2 13.56 3.78 16.03 6.47 17.38L5.5 21L9.12 18.59C10.03 18.79 11 18.89 12 18.89C17.52 18.89 22 15.41 22 11.12C22 6.83 17.52 3 12 3Z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingContact;
