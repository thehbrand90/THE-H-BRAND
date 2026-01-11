import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const { Link } = ReactRouterDOM;

const slides = [
  {
    id: 1,
    image: 'https://i.postimg.cc/JzQZJPKV/main1.jpg',
    alt: "Dark Modern Interior"
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/L6cNvCzX/main2.jpg',
    alt: "Bright Minimalist Living"
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/Bb8BBHbC/main3.jpg',
    alt: "Wood Texture Interior"
  },
  {
    id: 4,
    image: 'https://i.postimg.cc/TYDcyVBZ/main4.jpg',
    alt: "Modern Architecture Structure"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Slide Navigation Logic
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Particle Effect Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 15);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.1,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y -= p.speed;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createParticles();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black group">
      
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
          }`}
        >
          {/* bg-center and bg-cover ensures the image is responsive */}
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
              index === currentSlide ? 'animate-subtle-zoom' : ''
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Particle Overlay Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 pointer-events-none opacity-50"
      />

      {/* Slider Controls - Left Arrow (Hidden on very small mobile, visible on desktop) */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-30 text-white/50 hover:text-white transition-all duration-300 p-2 hover:bg-black/20 rounded-full opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>

      {/* Slider Controls - Right Arrow (Hidden on very small mobile, visible on desktop) */}
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-30 text-white/50 hover:text-white transition-all duration-300 p-2 hover:bg-black/20 rounded-full opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Next Slide"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Centered Content: Logo Only */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 text-white pointer-events-none">
        <div className="flex flex-col items-center leading-tight mb-10 animate-fade-in-up font-montserrat drop-shadow-2xl">
          {/* Responsive Typography: text-4xl on mobile, text-8xl on desktop */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-[0.2em] text-white">
            THE H
          </h1>
          <span className="text-lg sm:text-2xl md:text-4xl tracking-[0.4em] font-light mt-4 text-gray-100">
            BRAND
          </span>
        </div>
      </div>

      {/* --- Footer Area Layout --- */}

      {/* 1. Indicators: Bottom Left - Adjusted for mobile */}
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-30 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[1px] transition-all duration-300 ${
              index === currentSlide ? 'w-6 md:w-8 bg-white' : 'w-3 md:w-4 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 2. Slogan: Bottom Center - Responsive Font Size */}
      <div className="absolute bottom-20 md:bottom-12 left-0 w-full z-20 flex justify-center text-center px-6 pointer-events-none animate-fade-in-up delay-200">
        <p className="text-[10px] md:text-sm font-light tracking-wide text-gray-200 leading-relaxed opacity-90">
          프리미엄 공간, 그 시작과 완성.<br/>
          <span className="text-[8px] md:text-xs opacity-80 mt-2 block font-normal uppercase tracking-widest">
            Trust begets trust.
          </span>
        </p>
      </div>

      {/* 3. Button: Bottom Right - Adjusted Position */}
      <div className="absolute bottom-8 right-6 md:bottom-10 md:right-12 z-30 animate-fade-in-up delay-300">
        <Link 
          to="/portfolio" 
          className="group relative inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-white/30 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm"
        >
          <span>Explore Portfolio</span>
        </Link>
      </div>

    </div>
  );
};

export default Hero;