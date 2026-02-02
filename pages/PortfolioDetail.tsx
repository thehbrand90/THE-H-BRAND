import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockProjects, PortfolioItem } from './Portfolio';

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<PortfolioItem | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Effect to load project data
  useEffect(() => {
    if (id) {
      const foundProject = mockProjects.find(p => p.id === Number(id));
      setProject(foundProject);
    }
    setIsLoading(false);
  }, [id]);

  // Effect to reset refs when project changes
  useEffect(() => {
    if (project && project.images) {
      imageRefs.current = imageRefs.current.slice(0, project.images.length);
      thumbnailRefs.current = thumbnailRefs.current.slice(0, project.images.length);
    }
  }, [project]);

  // Intersection Observer to detect which image is in view
  useEffect(() => {
    if (!project?.images || project.images.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px', 
        threshold: 0
      }
    );

    imageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [project]);

  // Auto-scroll the thumbnail sidebar to keep the active thumbnail in view
  useEffect(() => {
    if (!project?.images) return;
    const activeThumb = thumbnailRefs.current[activeIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeIndex, project]);

  // Click handler to scroll to specific image
  const scrollToImage = (index: number) => {
    const target = imageRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-white">
        <div className="text-gray-400 animate-pulse">Loading project...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white pt-24">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">프로젝트를 찾을 수 없습니다.</h2>
        <Link to="/portfolio" className="text-sm border-b border-brand-dark pb-1 hover:text-brand-brown hover:border-brand-brown transition-colors">
          포트폴리오 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  // Ensure optional arrays are present for rendering
  const displayImages = project.images || [project.image];
  const displayMeta = project.meta || [
      { label: "YEAR", value: project.year },
      { label: "AREA", value: project.py },
      { label: "TYPE", value: "Interior" }
  ];

  return (
    <>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div 
        className="w-full min-h-screen bg-white select-none font-sans pt-24"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      >
        <div className="flex flex-col md:flex-row w-full max-w-[2000px] mx-auto">
          
          {/* 1. LEFT COLUMN: Project Info (20%) - Sticky */}
          <div className="hidden md:block w-[20%] h-[calc(100vh-6rem)] sticky top-24 pl-8 lg:pl-12 pr-4 overflow-y-auto hide-scrollbar">
              <div className="mb-12">
                 <Link 
                    to="/portfolio" 
                    className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-brand-dark transition-colors mb-8 group"
                  >
                    <ArrowLeft className="mr-2 w-3 h-3 transition-transform group-hover:-translate-x-1" /> Back
                  </Link>
                  <h1 className="text-xl lg:text-2xl font-bold text-brand-dark mb-8 leading-snug break-keep">
                      {project.title}
                  </h1>
                  
                  <div className="space-y-6">
                      {displayMeta.map((item, idx) => (
                          <div key={idx} className="flex flex-col border-b border-gray-100 pb-2">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                                  {item.label}
                              </span>
                              <span className="text-sm font-medium text-brand-dark">
                                  {item.value}
                              </span>
                          </div>
                      ))}
                  </div>

                  <div className="mt-12">
                      <p className="text-sm text-gray-600 font-light leading-relaxed whitespace-pre-wrap">
                          {project.description || "상세 설명이 준비 중입니다."}
                      </p>
                  </div>

                  <div className="mt-12 pt-6 border-t border-gray-100">
                      <p className="text-[10px] text-gray-300 font-medium tracking-wide">
                          &copy; THE H BRAND.
                      </p>
                  </div>
              </div>
          </div>

          {/* Mobile Header (Visible only on mobile) */}
          <div className="md:hidden px-6 mb-8">
              <Link to="/portfolio" className="inline-flex items-center text-xs text-gray-400 mb-4"><ArrowLeft size={14} className="mr-1"/> BACK</Link>
              <h1 className="text-2xl font-bold text-brand-dark mb-4">{project.title}</h1>
              <p className="text-sm text-gray-600 font-light leading-relaxed whitespace-pre-wrap mb-6">
                {project.description || "상세 설명이 준비 중입니다."}
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs border-t border-gray-100 pt-4">
                   {displayMeta.map((item, idx) => (
                      <div key={idx}>
                          <span className="text-gray-400 font-bold block text-[10px] tracking-wider mb-1">{item.label}</span>
                          <span className="font-medium">{item.value}</span>
                      </div>
                   ))}
              </div>
          </div>

          {/* 2. CENTER COLUMN: Images (65%) */}
          <div className="w-full md:w-[65%] px-0 md:px-4 flex flex-col gap-4 md:gap-32 pb-20">
              {displayImages.map((img, index) => (
                  <div 
                      key={index} 
                      ref={(el) => { imageRefs.current[index] = el; }}
                      data-index={index}
                      className="w-full"
                  >
                      <img 
                          src={img} 
                          alt={`Interior View ${index + 1}`} 
                          className="w-full h-auto object-contain block"
                          loading="lazy"
                      />
                  </div>
              ))}
              
              {/* Mobile Footer Area */}
              <div className="md:hidden px-6 py-12 text-center border-t border-gray-100 mt-8">
                  <p className="text-[10px] text-gray-400">&copy; THE H BRAND</p>
              </div>
          </div>

          {/* 3. RIGHT COLUMN: Thumbnails (15%) - Sticky */}
          {displayImages.length > 1 && (
            <div className="hidden md:flex w-[15%] h-[calc(100vh-6rem)] sticky top-24 flex-col items-center overflow-y-auto px-4 hide-scrollbar">
                <div className="flex flex-col gap-3 py-4 w-full max-w-[100px]">
                    {displayImages.map((img, index) => (
                        <button
                            key={index}
                            ref={(el) => { thumbnailRefs.current[index] = el; }}
                            onClick={() => scrollToImage(index)}
                            className={`relative w-full aspect-[3/4] overflow-hidden transition-all duration-300 group ${
                                activeIndex === index 
                                ? 'opacity-100 ring-1 ring-brand-brown shadow-md scale-105' 
                                : 'opacity-40 hover:opacity-80 grayscale hover:grayscale-0'
                            }`}
                        >
                            <img 
                                src={img} 
                                alt={`Thumbnail ${index + 1}`} 
                                className="w-full h-full object-cover"
                            />
                            {/* Active Indicator Overlay */}
                            {activeIndex === index && (
                                <div className="absolute inset-0 border-2 border-white/20 pointer-events-none"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default PortfolioDetail;