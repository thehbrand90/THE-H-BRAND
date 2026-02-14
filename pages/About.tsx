import React, { useState, useEffect, useRef } from 'react';
import { Layout, TrendingUp, ShieldCheck, Palette } from 'lucide-react';
import LazyImage from '../components/LazyImage';

// Reusable Fade-in Component for scroll animations
const FadeIn: React.FC<{ children: React.ReactNode; delay?: string }> = ({ children, delay = '0ms' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'IDENTITY' | 'COMPANY' | 'TEAM'>('IDENTITY');

  // Philosophy Data
  const philosophies = [
    {
      id: 1,
      title: "THE CONTEMPORARY",
      sub: "동시대의 호흡을 담다",
      desc: "지금의 생활 방식에 맞춘 설계 기준으로, 공간의 ‘온도’를 정확히 맞춥니다. 단순히 예쁜 공간이 아닌, 현재를 살아가는 사람들의 라이프스타일을 깊이 있게 관찰하고 반영하여 가장 편안하고 합리적인 공간을 제안합니다.",
      image: "https://i.postimg.cc/9fNRC8X8/a1.jpg",
      layout: "text-left" 
    },
    {
      id: 2,
      title: "BEYOND THE TREND",
      sub: "유행을 넘어 시대를 상징하다",
      desc: "찰나의 유행을 넘어, 시간이 흘러도 변치 않는 시대의 미감을 기록합니다. 자극적인 화려함보다는 재료 본연의 물성과 빛의 흐름을 살려, 오래 머물수록 깊이가 느껴지는 타임리스(Timeless) 디자인을 지향합니다.",
      image: "https://i.postimg.cc/CK6BSPM6/a3.jpg",
      layout: "image-left",
      floatingImage: "https://i.postimg.cc/YSyGMn2P/a3(1).jpg"
    },
    {
      id: 3,
      title: "ARCHITECTURE OF THE ERA",
      sub: "사람과 시대 사이의 디자인",
      desc: "시대가 요구하는 기능과 품질 기준으로, 공간의 가치를 구조화합니다. 우리는 인테리어를 넘어 건축적 관점에서 공간을 해석하며, 구조적인 완성도와 미학적인 밸런스를 동시에 추구합니다.",
      image: "https://i.postimg.cc/fbgtD2WF/a2.jpg",
      layout: "text-left"
    },
    {
      id: 4,
      title: "NEW STANDARDS",
      sub: "법인으로서 제안하는 새로운 가치",
      desc: "오늘의 기술 기준과 내일의 감각이 만나는, 새로운 주거 표준을 제시합니다. 체계적인 시공 프로세스와 투명한 견적 시스템, 그리고 철저한 사후관리까지. THE H BRAND는 인테리어 시장의 새로운 기준이 되겠습니다.",
      image: "https://i.postimg.cc/LXYqXthb/a4.jpg",
      layout: "image-left",
      floatingImage: "https://i.postimg.cc/KzkKzP4p/a4(1).jpg"
    }
  ];

  const brandDefinitions = [
    { char: 'T', word: 'ask force', desc: '프로젝트를 위한 최적의 전문가 팀' },
    { char: 'H', word: 'ouse/home', desc: '가장 편안하고 가치 있는 공간' },
    { char: 'E', word: 'xhibit', desc: '하나의 작품이 되는 공간' },
    { char: 'H', word: 'igh-end', desc: '타협하지 않는 프리미엄 퀄리티' },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-0 px-0 min-h-screen bg-brand-bg font-montserrat text-brand-dark">
      <div className="px-6 md:px-20 max-w-[1800px] mx-auto">
      
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-9xl font-bold tracking-tighter mb-8 select-none">
            ABOUT
          </h1>
          <h2 className="text-lg md:text-3xl font-light leading-snug max-w-5xl tracking-tight">
            저희 THE H는 단순히 인테리어를 '시공'하는 회사가 아니라, <br className="hidden md:block" />
            <span className="font-bold text-brand-brown">사람이 머무는 공간에 신뢰와 기준을 설계하는 브랜드</span>입니다.
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 md:space-x-12 mb-16 md:mb-24 border-b border-gray-300 overflow-x-auto">
          {['IDENTITY', 'COMPANY', 'TEAM'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-4 text-sm md:text-base font-bold tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                activeTab === tab 
                  ? 'text-brand-brown border-b-2 border-brand-brown' 
                  : 'text-gray-400 hover:text-brand-dark'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* IDENTITY Content - Editorial Design */}
      {activeTab === 'IDENTITY' && (
        <div className="animate-fade-in-up w-full pb-0">
          
          {/* Section 0: Brand Identity Definition (Beige/Gray Split) */}
          <section className="w-full flex flex-col md:flex-row min-h-[600px]">
            {/* Left: Definition List (Beige #F2F0EB) */}
            <div className="w-full md:w-1/2 bg-[#F2F0EB] p-10 md:p-24 flex flex-col justify-center">
              <FadeIn>
                <h3 className="text-3xl md:text-5xl font-bold text-brand-brown mb-12 md:mb-16 tracking-tight">
                  What is THE H?
                </h3>
                <div className="space-y-12">
                  {brandDefinitions.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl md:text-6xl font-bold text-brand-brown mr-3 transition-transform duration-300 group-hover:-translate-y-1">
                          {item.char}
                        </span>
                        <span className="text-xl md:text-3xl font-bold text-brand-dark tracking-wide">
                          {item.word}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 font-light pl-1 tracking-wide">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: Logo Center (Light Gray #F5F5F5) */}
            <div className="w-full md:w-1/2 bg-[#F5F5F5] flex items-center justify-center p-10 min-h-[300px] md:min-h-auto">
              <FadeIn delay="200ms">
                <div className="text-center">
                   <h2 className="text-4xl md:text-7xl font-bold tracking-[0.2em] text-brand-dark mb-4">THE H</h2>
                   <p className="text-xl md:text-3xl font-light tracking-[0.4em] text-brand-dark">BRAND</p>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Section 1: Our Story & Brand Structure (Image/White Split) */}
          <section className="w-full flex flex-col md:flex-row min-h-[700px]">
             {/* Left: Large Vertical Image */}
             <div className="w-full md:w-1/2 h-[500px] md:h-auto relative overflow-hidden bg-gray-200">
                <LazyImage 
                  src="https://i.postimg.cc/JzNvfvqp/6.jpg" 
                  alt="Interior Hallway" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  containerClassName="w-full h-full"
                />
             </div>

             {/* Right: Content (White Background) */}
             <div className="w-full md:w-1/2 bg-white p-10 md:p-24 flex flex-col justify-center">
                <FadeIn>
                  {/* Our Story Block */}
                  <div className="mb-20">
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-brown mb-8 border-b border-brand-brown/20 pb-4 inline-block">
                        Our Story
                      </h3>
                      <p className="text-brand-dark text-lg md:text-xl font-light leading-loose">
                        THE H(디에이치)는 THE H Brand가 운영하는 디자인·시공 전문 브랜드로, 
                        설계부터 시공, 그리고 사후관리까지 책임지는 
                        <span className="font-medium text-brand-brown mx-1">Design & Build 시스템</span>을 
                        기반으로 합니다.
                      </p>
                      <p className="text-gray-500 text-base md:text-lg font-light leading-loose mt-6">
                        10년의 현장 경험. 우리는 화려한 수식어보다 '기본'에 집중합니다. 
                        정직한 시공은 특별한 것이 아니라 우리가 지켜야 할 당연한 기준입니다.
                      </p>
                  </div>

                  {/* Brand Structure Block */}
                  <div>
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-brown mb-8 border-b border-brand-brown/20 pb-4 inline-block">
                        Brand Structure
                      </h3>
                      <div className="space-y-8 border-l-4 border-brand-dark pl-8 py-2">
                          <div>
                              <h4 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">THE H <span className="text-base font-normal text-gray-400 ml-2">(디에이치)</span></h4>
                              <p className="text-gray-500 font-light">고객이 만나는 브랜드</p>
                          </div>
                          <div>
                              <h4 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">THE H BRAND <span className="text-base font-normal text-gray-400 ml-2">(디에이치 브랜드)</span></h4>
                              <p className="text-gray-500 font-light">법인 정체성</p>
                          </div>
                      </div>
                  </div>
                </FadeIn>
             </div>
          </section>

          {/* Sections 2-5: Editorial Philosophies (Deep Taupe Background) */}
          <div className="w-full">
            {philosophies.map((section) => {
              const isTextLeft = section.layout === 'text-left';
              
              return (
                <section key={section.id} className="w-full flex flex-col md:flex-row min-h-[700px] md:h-[80vh] overflow-hidden">
                  
                  {/* Image Column */}
                  {/* Mobile: Always Top (order-1). Desktop: Alternates (order-1 or order-2) */}
                  <div className={`w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden order-1 bg-[#5d5646] ${isTextLeft ? 'md:order-2' : 'md:order-1'}`}>
                    <LazyImage 
                      src={section.image} 
                      alt={section.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
                  </div>

                  {/* Text Column (Deep Taupe Background #524c3e) */}
                  <div className={`w-full md:w-1/2 bg-[#524c3e] p-10 md:p-24 flex flex-col justify-center relative order-2 ${isTextLeft ? 'md:order-1' : 'md:order-2'}`}>
                    
                    <FadeIn>
                      <div className="relative z-10 max-w-xl mx-auto md:mx-0 w-full">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                          {section.title}
                        </h2>
                        
                        {/* Divider */}
                        <div className="w-20 h-[1px] bg-white/40 mb-12"></div>

                        <div className="relative clearfix">
                          {/* Subtitle */}
                          <p className="text-lg md:text-2xl text-white/90 font-medium mb-6 tracking-wide">
                            "{section.sub}"
                          </p>

                          {/* Floating Image (Embedded in text flow for editorial feel) */}
                          {section.floatingImage && (
                            <div className="hidden md:block float-right ml-8 mb-6 w-40 aspect-[3/4] shadow-2xl border border-white/10 relative z-20 overflow-hidden group bg-gray-700">
                               <LazyImage 
                                 src={section.floatingImage}
                                 alt="Detail"
                                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                 containerClassName="w-full h-full"
                               />
                            </div>
                          )}

                          {/* Description */}
                          <p className="text-base md:text-lg text-white/70 font-light leading-loose text-justify">
                            {section.desc}
                          </p>
                        </div>
                      </div>

                      {/* Section Footer */}
                      <div className="mt-16 md:absolute md:bottom-12 md:left-24 text-[10px] md:text-xs text-white/30 tracking-[0.2em] uppercase font-light">
                         Design & Build | THE H BRAND Co., Ltd.
                      </div>
                    </FadeIn>
                  </div>

                </section>
              );
            })}
          </div>

        </div>
      )}

      {/* COMPANY Content (Redesigned Editorial Style with No Cropping) */}
      {activeTab === 'COMPANY' && (
        <div className="animate-fade-in-up w-full pb-0 bg-white">
          
          {/* Section 1: About Us - White Background, Editorial Grid */}
          <section className="w-full py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24">
              
              {/* Text Content */}
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <FadeIn>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 block w-fit border-l-2 border-brand-brown pl-3">
                    About Us.
                  </span>
                  {/* Reduced font size for headline as requested */}
                  <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#1a1a1a] mb-12 leading-[1.4] tracking-tight">
                    디자인은 누구나, 완성은 디에이치,<br />
                    책임은 (주) 디에이치브랜드.
                  </h2>
                  
                  <div className="space-y-10 text-[#4a4a4a] font-light text-base md:text-lg leading-[1.8]">
                    <p>
                      개인의 감각만으로 완성되는 인테리어에는<br />
                      프로젝트 규모가 커질수록 한계가 생깁니다.
                    </p>
                    <p>
                      (주)디에이치브랜드는 광주·전남을 기반으로<br />
                      계약부터 공정관리, 준공, A/S까지<br />
                      법인의 기준으로 책임지는 Design & Build 시공사입니다.
                    </p>
                    <p>
                      우리는 단순히 공간을 꾸미는 것을 넘어,<br />
                      기록과 기준이 남는 투명한 공정으로<br />
                      사후관리까지 이어지는 신뢰를 약속드립니다.
                    </p>
                    <p>
                      사라지는 이름이 아니라,<br />
                      끝까지 남는 법인의 책임으로<br />
                      당신의 공간을 완성합니다.
                    </p>
                  </div>
                </FadeIn>
              </div>

              {/* Image Content - Natural Aspect Ratio (No cropping) */}
              <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
                <FadeIn delay="200ms">
                  <div className="relative w-full bg-gray-50">
                    <LazyImage 
                      src="https://i.postimg.cc/FHDPjLVj/Kakao-Talk-20260112-175428559-02.jpg" 
                      alt="About Us" 
                      className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl"
                      containerClassName="w-full h-auto"
                    />
                  </div>
                </FadeIn>
              </div>

            </div>
          </section>

          {/* Section 2: Premium Standard - Deep Taupe Background */}
          <section className="w-full bg-[#524c3e] py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24">
              
              {/* Image Content - Left */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <FadeIn>
                  <div className="relative w-full">
                    <LazyImage 
                      src="https://i.postimg.cc/gjWq9zKk/teaam.png" 
                      alt="Premium Standard" 
                      className="w-full h-auto object-contain shadow-2xl"
                      containerClassName="w-full h-auto"
                    />
                    {/* Decorative Element */}
                    <div className="absolute -top-10 -left-10 text-white/5 font-serif text-9xl font-bold select-none pointer-events-none z-0">
                      H
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Text Content - Right */}
              <div className="w-full md:w-1/2 text-white p-4 md:p-8">
                <FadeIn delay="200ms">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-6 block border-l-2 border-white/30 pl-3">
                      PREMIUM STANDARD
                  </span>
                  {/* Reduced font size and increased line height for headline */}
                  <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-10 leading-loose tracking-tight break-keep">
                    프리미엄 공간,<br/>그 시작과 완성
                  </h2>
                  <div className="w-12 h-[2px] bg-white/30 mb-10"></div>
                  
                  <div className="space-y-6 text-white/80 font-light text-sm md:text-base leading-8 break-keep text-justify relative z-10">
                    <p>
                      THE H BRAND는 실내건축면허를 보유한 전문 시공 법인으로서, 각 프로젝트마다 기획·디자인·시공·관리까지 체계적으로 책임집니다.
                    </p>
                    <p>
                      눈에 띄는 연출보다 눈에 보이지 않는 구조와 공정을 중요하게 생각하며, 오늘의 만족을 넘어 내일에도 변치 않는 공간의 가치를 제안합니다.
                    </p>
                    <p>
                      우리는 단순히 공간을 꾸미는 것을 넘어, 기록과 기준이 남는 투명한 공정으로 사후관리까지 이어지는 신뢰를 약속드립니다.
                    </p>
                  </div>

                  {/* Minimalist Badge */}
                  <div className="mt-12 inline-block">
                      <div className="pt-4 border-t border-white/20 flex justify-between items-center">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">The H Brand Standard</span>
                      </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          </section>

          {/* Section 3: The Quote Banner */}
          <section className="w-full bg-[#fcfbf9] py-32 px-6 text-center border-t border-gray-100">
            <FadeIn>
              <div className="max-w-4xl mx-auto relative">
                <h3 className="text-xl md:text-3xl font-sans font-bold text-brand-dark mb-12 leading-loose tracking-wide break-keep">
                  "디자인은 선택의 문제지만,<br />
                  완성은 기준의 문제입니다."
                </h3>
                
                <div className="w-px h-16 bg-brand-dark/20 mx-auto mb-8"></div>
                
                <p className="text-xs md:text-sm text-gray-500 font-medium tracking-[0.3em] uppercase">
                  THE H BRAND
                </p>
                <p className="text-[10px] text-gray-400 mt-2 tracking-widest font-light">
                  Premium Interior Design Group
                </p>
              </div>
            </FadeIn>
          </section>

          {/* Part 4: Our Core Values (Minimalist Beige) */}
          <section className="w-full bg-[#EAE8E4] py-24 px-6 md:px-20 border-t border-brand-dark/5">
            <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row gap-20 items-start">
               {/* Left: Minimalist Image */}
               <div className="w-full lg:w-[40%]">
                 <div className="sticky top-32 overflow-hidden bg-gray-200">
                   <LazyImage 
                      src="https://i.postimg.cc/6qQ9HRvx/20.jpg" 
                      alt="Minimalist Interior" 
                      className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-[2000ms]"
                      containerClassName="w-full h-full"
                   />
                 </div>
               </div>

               {/* Right: Values Content */}
               <div className="w-full lg:w-[60%] flex flex-col justify-center">
                  <FadeIn>
                      <h3 className="text-4xl md:text-6xl font-bold text-brand-dark mb-20 tracking-tighter">Our Core Values.</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                          {/* Value 1 */}
                          <div className="group">
                              <Layout className="w-8 h-8 text-brand-dark mb-6 stroke-1 group-hover:text-brand-brown transition-colors" />
                              <h4 className="text-xl font-bold text-brand-dark mb-3">실용적 가치</h4>
                              <p className="text-xs font-bold text-brand-brown mb-4 tracking-wide uppercase">"보이는 디자인이 아닌, 사용하는 디자인"</p>
                              <p className="text-gray-600 font-light text-sm leading-7 text-justify">
                                  고객의 생활 방식에 맞춰 효율적인 동선과 맞춤 기능을 설계합니다. 디에이치디자인은 공간을 일상의 무대로 완성합니다.
                              </p>
                          </div>

                          {/* Value 2 */}
                          <div className="group">
                              <TrendingUp className="w-8 h-8 text-brand-dark mb-6 stroke-1 group-hover:text-brand-brown transition-colors" />
                              <h4 className="text-xl font-bold text-brand-dark mb-3">경제적 가치</h4>
                              <p className="text-xs font-bold text-brand-brown mb-4 tracking-wide uppercase">"사는 집을 넘어, 가치가 오르는 집으로"</p>
                              <p className="text-gray-600 font-light text-sm leading-7 text-justify">
                                  프리미엄 디자인과 경제적 효율성을 함께 고려해, 공간의 자산 가치를 높이는 인테리어를 지향합니다.
                              </p>
                          </div>

                          {/* Value 3 */}
                          <div className="group">
                              <ShieldCheck className="w-8 h-8 text-brand-dark mb-6 stroke-1 group-hover:text-brand-brown transition-colors" />
                              <h4 className="text-xl font-bold text-brand-dark mb-3">신뢰적 가치</h4>
                              <p className="text-xs font-bold text-brand-brown mb-4 tracking-wide uppercase">"한 번의 계약이 아닌, 오래가는 관계"</p>
                              <p className="text-gray-600 font-light text-sm leading-7 text-justify">
                                  정직한 시공과 꼼꼼한 마감으로 고객과의 신뢰를 지킵니다. 디에이치디자인은 믿을 수 있는 동반자가 됩니다.
                              </p>
                          </div>

                          {/* Value 4 */}
                          <div className="group">
                              <Palette className="w-8 h-8 text-brand-dark mb-6 stroke-1 group-hover:text-brand-brown transition-colors" />
                              <h4 className="text-xl font-bold text-brand-dark mb-3">미적 가치</h4>
                              <p className="text-xs font-bold text-brand-brown mb-4 tracking-wide uppercase">"시간이 지나도 질리지 않는 감각"</p>
                              <p className="text-gray-600 font-light text-sm leading-7 text-justify">
                                  빛, 재료, 균형이 어우러진 절제된 디자인으로, 단순한 장식이 아닌 예술적 경험을 전합니다.
                              </p>
                          </div>
                      </div>
                  </FadeIn>
               </div>
            </div>
          </section>
  
        </div>
      )}

      {/* TEAM Content (Redesigned Editorial Style) */}
      {activeTab === 'TEAM' && (
        <div className="animate-fade-in-up w-full pb-0">
          
          <section className="w-full flex flex-col md:flex-row min-h-[80vh] bg-white border-b border-gray-100">
             
             {/* Left: Text Content */}
             <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center order-2 md:order-1">
               <FadeIn>
                  {/* Title & Sub */}
                  <div className="mb-10">
                    <h2 className="text-5xl md:text-7xl font-bold text-brand-dark tracking-tighter mb-4">
                      TEAM
                    </h2>
                    <p className="text-xs md:text-sm text-gray-400 font-light tracking-[0.1em] uppercase">
                      각자의 역할로 하나의 기준을 만듭니다
                    </p>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gray-200 mb-10"></div>

                  {/* Main Heading */}
                  <h3 className="text-2xl md:text-4xl font-bold text-brand-dark mb-10 leading-tight">
                    사람보다 기준이 먼저인 팀.<br />
                    완성은 언제나 THE H.
                  </h3>

                  {/* Body Text */}
                  <div className="space-y-8 text-gray-600 font-light leading-loose text-base md:text-lg text-justify max-w-xl">
                    <p>
                      설계자가 바뀌어도,<br/>
                      현장이 달라도,<br/>
                      완성의 기준과 결과물의 퀄리티는 변하지 않아야 합니다.
                    </p>
                    <p>
                      개인의 감각에 의존하는 것이 아니라,<br/>
                      법인이 정한 시스템과 매뉴얼 안에서 움직이기 때문입니다.
                    </p>
                    <p>
                      우리는 누군가의 이름을 남기기 위해 일하지 않습니다.<br/>
                      오직 '디에이치다운 완성'을 위해,<br/>
                      각자의 자리에서 최선을 다할 뿐입니다.
                    </p>
                    <p className="font-bold text-brand-dark">
                      그것이 우리가 팀으로 일하는 이유입니다.
                    </p>
                  </div>

               </FadeIn>
             </div>

             {/* Right: Team Image (Full Display) */}
             <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 md:p-0 relative order-1 md:order-2 overflow-hidden">
                <FadeIn delay="200ms">
                   <div className="relative w-full h-full flex items-center justify-center">
                      <LazyImage 
                        src="https://i.postimg.cc/NjKFyd2J/THE-H.png" 
                        alt="The H Team" 
                        className="w-full h-auto object-contain max-h-[80vh] grayscale transition-all duration-1000 ease-in-out hover:grayscale-0"
                        containerClassName="w-full h-full flex items-center justify-center"
                      />
                   </div>
                </FadeIn>
             </div>

          </section>

        </div>
      )}
    </div>
  );
};

export default About;