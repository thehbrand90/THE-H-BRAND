import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
import LazyImage from './LazyImage';

const { Link } = ReactRouterDOM;

const OpenPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check localStorage for 24-hour suppression
    const hideUntil = localStorage.getItem('the_h_brand_popup_24h');
    const now = new Date().getTime();

    if (!hideUntil || now > parseInt(hideUntil)) {
      setShouldRender(true);
      // Small delay to allow DOM render before opacity transition
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    // Wait for fade-out animation to finish before unmounting
    setTimeout(() => setShouldRender(false), 500);
  };

  const dontShowToday = () => {
    const now = new Date();
    // Set expiry to 24 hours from now
    const expiry = new Date(now.getTime() + 24 * 60 * 60 * 1000).getTime();
    localStorage.setItem('the_h_brand_popup_24h', expiry.toString());
    closePopup();
  };

  if (!shouldRender) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
        onClick={closePopup}
      ></div>

      {/* Modal Container */}
      <div className={`relative bg-white w-full max-w-[900px] shadow-2xl flex flex-col md:flex-row overflow-hidden transform transition-all duration-700 ease-out ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        
        {/* Left Half: Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[550px] relative bg-gray-100">
          <LazyImage 
            src="https://i.postimg.cc/wBzkG4Vk/open.png" 
            alt="Grand Opening" 
            className="absolute inset-0 w-full h-full object-cover"
            containerClassName="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Right Half: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-14 bg-white flex flex-col justify-center text-center relative">
          
          {/* Close Icon (Top Right) */}
          <button 
            onClick={closePopup}
            className="absolute top-5 right-5 text-gray-300 hover:text-brand-dark transition-colors p-2 z-10"
          >
            <X size={24} strokeWidth={1} />
          </button>

          <div className="flex-grow flex flex-col justify-center items-center">
            {/* Titles */}
            <div className="mb-8 md:mb-10">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight drop-shadow-sm">
                GRAND OPEN
              </h2>
              <div className="h-[1px] w-12 bg-brand-brown mx-auto mb-4"></div>
              <p className="text-[10px] md:text-xs font-bold text-brand-brown tracking-[0.25em] uppercase">
                THE H BRAND - Premium Interior Studio
              </p>
            </div>

            {/* Message */}
            <div className="mb-10 space-y-3">
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed font-sans">
                저희 디에이치브랜드가<br/>
                공식 웹사이트를 오픈하였습니다.
              </p>
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed font-sans">
                프리미엄 공간 디자인의<br/>
                새로운 기준을 경험해보세요.
              </p>
            </div>

            {/* CTA Button */}
            <Link 
               to="/portfolio" 
               onClick={closePopup}
               className="inline-block border border-brand-dark bg-brand-dark text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-500 shadow-md hover:shadow-lg"
             >
               Explore Portfolio
            </Link>
          </div>

          {/* Footer Controls */}
          <div className="mt-8 pt-4 border-t border-gray-100 w-full flex justify-between items-center text-[10px] md:text-xs text-gray-400 font-medium">
             <button 
               onClick={dontShowToday}
               className="hover:text-brand-dark transition-colors flex items-center group"
             >
               <div className="w-3 h-3 border border-gray-300 mr-2 flex items-center justify-center transition-colors group-hover:border-brand-dark"></div>
               오늘 하루 보지 않기
             </button>
             <button 
               onClick={closePopup}
               className="hover:text-brand-dark transition-colors uppercase tracking-wider font-bold"
             >
               Close
             </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default OpenPopup;