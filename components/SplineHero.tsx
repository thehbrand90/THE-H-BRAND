import React, { useEffect } from 'react';

const SplineHero: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Spline viewer script only when this component is mounted
    // This prevents the heavy script from blocking the initial load of other pages
    const scriptUrl = "https://unpkg.com/@splinetool/viewer@1.12.32/build/spline-viewer.js";
    
    // Check if script is already present
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = scriptUrl;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full h-[85vh] relative overflow-hidden bg-[#e0e0e0]">
      {/* 
        We use the splinetool script loaded dynamically.
        The wrapper ensures it takes up the correct space.
      */}
      {React.createElement('spline-viewer' as any, {
        url: "https://prod.spline.design/kUrlvatd-c1IOaJL/scene.splinecode"
      })}
      
      {/* Overlay Text for Hero */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-20 pointer-events-none z-10 bg-gradient-to-t from-[#f1f1f1] via-transparent to-transparent">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-brand-dark mb-4 drop-shadow-sm">
          Trust begets trust.
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-wide text-brand-dark max-w-2xl">
          프리미엄 공간, 그 시작과 완성.<br/>
          <span className="opacity-70 text-base mt-2 block">
            We create refined spaces that blend comfort, beauty, and lasting design.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SplineHero;