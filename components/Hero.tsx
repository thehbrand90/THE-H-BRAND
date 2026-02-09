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
    image: 'https://i.postimg.cc/RhB5WCrB/caroline-badran-9Bh5YYZMGv0-unsplash.jpg',
    alt: "Modern Beige Interior"
  },
  {
    id: 4,
    image: 'https://i.postimg.cc/FsT84VKr/darwin-interior-w-HAV8p9dd6Q-unsplash.jpg',
    alt: "Luxurious Living Space"
  },
  {
    id: 5,
    image: 'https://i.postimg.cc/13gCZxTc/istockphoto-1394304269-612x612.jpg',
    alt: "Minimalist Detail"
  },
  {
    id: 6,
    image: 'https://i.postimg.cc/4yL5rwQ8/istockphoto-1477604800-612x612.jpg',
    alt: "Architectural Elements"
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
      const particleCount = Math.floor(window.innerWidth / 20); // Reduced count for cleaner look
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.1,
          speed: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.4 + 0.05,
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
          {/* Darker overlay for text contrast */}
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
              index === currentSlide ? 'animate-subtle-zoom' : ''
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Particle Overlay Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 pointer-events-none opacity-30"
      />

      {/* Infinite Scrolling Typography - Moved to Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none overflow-hidden select-none pb-8 md:pb-16">
        <div className="w-full opacity-100">
          <div className="flex whitespace-nowrap animate-marquee">
             {/* Repeat content enough times to ensure seamless loop */}
             {[...Array(12)].map((_, i) => (
                <div key={i} className="flex items-center mx-6">
                  <span 
                    className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-black tracking-tighter text-white/10 transition-all duration-500"
                  >
                    THE H BRAND.
                  </span>
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* Center Static Content - Anchor Point */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center pointer-events-none">
          <p className="text-white/90 text-sm md:text-lg tracking-[0.4em] uppercase font-light mb-8 animate-fade-in-up font-sans">
            프리미엄 공간, 그 시작과 완성.
          </p>
          {/* Increased Center Line Size */}
          <div className="h-[2px] w-24 md:w-32 bg-white/70 mb-8 animate-fade-in-up delay-100"></div>
          <p className="text-white/70 text-xs md:text-sm font-light tracking-widest animate-fade-in-up delay-200">
            Design & Build Corporation
          </p>
      </div>

      {/* Slider Controls - Left */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-40 text-white/30 hover:text-white transition-all duration-300 p-2 rounded-full opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={48} strokeWidth={0.5} />
      </button>

      {/* Slider Controls - Right */}
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-40 text-white/30 hover:text-white transition-all duration-300 p-2 rounded-full opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Next Slide"
      >
        <ChevronRight size={48} strokeWidth={0.5} />
      </button>

      {/* --- Footer Area Layout --- */}

      {/* 1. Indicators */}
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-30 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[1px] transition-all duration-500 ${
              index === currentSlide ? 'w-8 md:w-12 bg-white' : 'w-4 md:w-6 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 2. Slogan - Small text with Bold Brand */}
      <div className="absolute bottom-24 md:bottom-20 left-0 w-full z-20 flex justify-center text-center px-6 pointer-events-none animate-fade-in-up delay-300">
        <p className="text-xs md:text-sm font-light tracking-widest text-white/60 leading-relaxed font-sans">
          공간의 가치를 높이는 기준, <span className="text-white font-bold ml-1">THE H BRAND</span>
        </p>
      </div>

      {/* 3. Button */}
      <div className="absolute bottom-8 right-6 md:bottom-10 md:right-12 z-40 animate-fade-in-up delay-500">
        <Link 
          to="/portfolio" 
          className="group relative inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:border-white transition-all duration-500 backdrop-blur-sm"
        >
          <span className="relative z-10">Explore Portfolio</span>
        </Link>
      </div>

    </div>
  );
};

export default Hero;