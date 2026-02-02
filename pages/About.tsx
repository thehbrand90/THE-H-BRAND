import React, { useState } from 'react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'IDENTITY' | 'COMPANY' | 'TEAM'>('IDENTITY');

  const identityGridImages = [
    'https://i.postimg.cc/yNdj8MKn/identity3.png',
    'https://i.postimg.cc/Jh2qDp7P/identity4.png',
    'https://i.postimg.cc/634hdCyR/identity5.png',
    'https://i.postimg.cc/C5jH2YCp/identity6.png',
    'https://i.postimg.cc/PrjMwphp/identity7.png',
    'https://i.postimg.cc/Jz7cpfst/identity8.png',
    'https://i.postimg.cc/SKJLhcLv/identity9.png',
    'https://i.postimg.cc/9fKdFzJM/identity10.png',
  ];

  return (
    <div className="pt-24 md:pt-32 pb-0 px-0 min-h-screen bg-brand-bg">
      <div className="px-6 md:px-20 max-w-[1600px] mx-auto">
      
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-9xl font-bold tracking-tighter text-brand-dark mb-8 select-none">
            ABOUT
          </h1>
          <h2 className="text-lg md:text-3xl font-light leading-snug max-w-5xl text-brand-dark tracking-tight">
            저희 THE H는 단순히 인테리어를 '시공'하는 회사가 아니라, <br className="hidden md:block" />
            <span className="font-bold text-brand-brown">사람이 머무는 공간에 신뢰와 기준을 설계하는 브랜드</span>입니다.
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 md:space-x-12 mb-16 md:mb-24 border-b border-gray-300 overflow-x-auto">
          <button
            onClick={() => setActiveTab('IDENTITY')}
            className={`pb-4 text-sm md:text-base font-bold tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
              activeTab === 'IDENTITY' 
                ? 'text-brand-brown border-b-2 border-brand-brown' 
                : 'text-gray-400 hover:text-brand-dark'
            }`}
          >
            IDENTITY
          </button>
          <button
            onClick={() => setActiveTab('COMPANY')}
            className={`pb-4 text-sm md:text-base font-bold tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
              activeTab === 'COMPANY' 
                ? 'text-brand-brown border-b-2 border-brand-brown' 
                : 'text-gray-400 hover:text-brand-dark'
            }`}
          >
            COMPANY
          </button>
          <button
            onClick={() => setActiveTab('TEAM')}
            className={`pb-4 text-sm md:text-base font-bold tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
              activeTab === 'TEAM' 
                ? 'text-brand-brown border-b-2 border-brand-brown' 
                : 'text-gray-400 hover:text-brand-dark'
            }`}
          >
            TEAM
          </button>
        </div>
      </div>

      {/* IDENTITY Content */}
      {activeTab === 'IDENTITY' && (
        <div className="animate-fade-in-up space-y-20 md:space-y-32 px-6 md:px-20 max-w-[1600px] mx-auto pb-20">
          
          {/* Main Image & Story */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <img 
                src="https://i.postimg.cc/q7jcfjCz/identity1.jpg" 
                alt="Office Interior" 
                className="w-full h-auto object-cover shadow-md"
              />
            </div>
            <div className="hidden md:block md:col-span-1"></div>
            <div className="md:col-span-6 space-y-8 md:space-y-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-brown mb-6">Our Story</h3>
                <p className="text-gray-600 leading-loose mb-8 text-base md:text-lg font-light">
                  THE H(디에이치)는 THE H Brand가 운영하는 디자인·시공 전문 브랜드로,<br className="hidden md:block" />
                  설계부터 시공, 그리고 사후관리까지 책임지는<br className="hidden md:block" />
                  <strong>Design & Build 시스템</strong>을 기반으로<br className="hidden md:block" />
                  광주·전남 지역에서 프리미엄 주거 공간을 만들어갑니다.
                </p>
                <p className="text-gray-600 leading-loose text-base md:text-lg font-light">
                  10년의 현장 경험.<br className="hidden md:block" />
                  우리는 화려한 수식어보다 '기본'에 집중합니다.<br className="hidden md:block" />
                  정직한 시공은 특별한 것이 아닙니다.<br className="hidden md:block" />
                  그것은 우리가 지켜야 할 당연한 기준입니다.<br className="hidden md:block" />
                  법인 전환을 통해 공공 입찰과 더 큰 규모의 프로젝트에서도<br className="hidden md:block" />
                  우리의 철학을 증명해 보이겠습니다.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-brown mb-6">Brand Structure</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-brand-dark pl-6">
                    <h4 className="text-lg md:text-xl font-bold mb-2 text-brand-dark">THE H (디에이치)</h4>
                    <p className="text-gray-600 font-light text-sm md:text-base">고객이 만나는 브랜드</p>
                  </div>
                  <div className="border-l-2 border-brand-brown pl-6">
                    <h4 className="text-lg md:text-xl font-bold mb-2 text-brand-dark">THE H BRAND (디에이치 브랜드)</h4>
                    <p className="text-gray-600 font-light text-sm md:text-base">법인 정체성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THE H Meaning Section with Identity Images */}
          <div className="bg-brand-stone/30">
            {/* Top Row: Text Left / Image Right */}
            <div className="flex flex-col lg:flex-row items-center">
              
              {/* Left Side: Content */}
              <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-brand-brown tracking-tight">
                  What is THE H?
                </h3>
                
                <div className="space-y-8 md:space-y-10">
                  
                  <div className="group">
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-brand-brown mr-2">T</span>
                      <span className="text-lg md:text-xl font-bold text-brand-dark">ask force</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      단순한 시공팀이 아닌,<br/>
                      프로젝트마다 최적의 전문가들이 모여 <strong>태스크포스처럼 움직입니다.</strong>
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-brand-brown mr-2">H</span>
                      <span className="text-lg md:text-xl font-bold text-brand-dark">ouse/home</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      고객의 <strong>집과 공간</strong>을 가장 소중한 가치로 삼습니다.
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-brand-brown mr-2">E</span>
                      <span className="text-lg md:text-xl font-bold text-brand-dark">xhibit</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      완성된 공간은 하나의 <strong>전시작품(Exhibit)</strong>처럼 보여집니다.
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-brand-brown mr-2">H</span>
                      <span className="text-lg md:text-xl font-bold text-brand-dark">igh-end</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      언제나 <strong>프리미엄(HIGH-END) 퀄리티</strong>로 마무리합니다.
                    </p>
                  </div>

                </div>
              </div>

              {/* Right Side: Single Image (Identity 2) */}
              <div className="w-full lg:w-1/2 relative min-h-[300px] md:min-h-[600px] h-full overflow-hidden group">
                 <img 
                   src="https://i.postimg.cc/fTn8fq79/identity2.png" 
                   alt="Identity Main"
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-brand-brown/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>

            {/* Bottom Row: Image Grid (Identity 3-10) */}
            <div className="grid grid-cols-2 md:grid-cols-3">
               {identityGridImages.map((src, idx) => (
                 <div key={idx} className="relative aspect-square overflow-hidden group">
                   <img 
                     src={src} 
                     alt={`Identity Detail ${idx + 3}`}
                     className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                   />
                 </div>
               ))}
            </div>
          </div>
        </div>
      )}

      {/* COMPANY Content */}
      {activeTab === 'COMPANY' && (
        <div className="animate-fade-in-up">
          <div className="px-6 md:px-20 max-w-[1600px] mx-auto mb-20 md:mb-32">
            {/* About Us Intro - Modified Layout */}
            <div className="relative py-12 md:py-20">
              {/* Top Section: Split Text Left / Image Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 md:mb-32">
                  {/* Left Side: Text */}
                  <div className="flex flex-col justify-center">
                      <h3 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12 text-brand-dark">About us.</h3>
                      <div className="w-16 md:w-20 h-2 bg-brand-brown mb-8 md:mb-12"></div>
                      
                      <p className="text-xl md:text-3xl font-bold text-brand-dark mb-8 md:mb-12 leading-snug">
                        디자인은 누구나, 완성은 디에이치,<br/>
                        책임은 (주) 디에이치브랜드.
                      </p>
                      
                      <div className="space-y-6 text-gray-600 leading-loose text-base md:text-lg font-light">
                          <p>
                            개인의 감각만으로 완성되는 인테리어에는<br/>
                            프로젝트 규모가 커질수록 한계가 생깁니다.
                          </p>
                          <p>
                            (주)디에이치브랜드는 광주·전남을 기반으로<br/>
                            계약부터 공정관리, 준공, A/S까지<br/>
                            법인의 기준으로 책임지는 Design & Build 시공사입니다.
                          </p>
                          <p>
                            우리는 단순히 공간을 꾸미는 것을 넘어,<br/>
                            기록과 기준이 남는 투명한 공정으로<br/>
                            사후관리까지 이어지는 신뢰를 약속드립니다.
                          </p>
                          <p>
                            사라지는 이름이 아니라,<br/>
                            끝까지 남는 법인의 책임으로<br/>
                            당신의 공간을 완성합니다.
                          </p>
                      </div>
                  </div>

                  {/* Right Side: Image - Fixed cropping issue */}
                  <div className="w-full shadow-2xl rounded-sm overflow-hidden">
                       <img 
                          src="https://i.postimg.cc/CL5ntQCM/Kakao-Talk-20260112-175428559-02.jpg" 
                          alt="About Us Main" 
                          className="w-full h-auto object-contain transition-transform duration-1000 hover:scale-105"
                       />
                  </div>
              </div>

              {/* Second Section: Image Left / Text Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
                  {/* Left Side: Image - Fixed cropping issue */}
                  <div className="w-full shadow-2xl rounded-sm overflow-hidden order-2 lg:order-1">
                       <img 
                          src="https://i.postimg.cc/cJPc48WY/istockphoto-1394304269-612x612.jpg" 
                          alt="About Us Structure" 
                          className="w-full h-auto object-contain transition-transform duration-1000 hover:scale-105"
                       />
                  </div>

                  {/* Right Side: Second Text Block */}
                  <div className="flex flex-col justify-center order-1 lg:order-2">
                      <h4 className="text-2xl md:text-3xl font-bold mb-6 text-brand-dark">
                        프리미엄 공간의 시작과 완성
                      </h4>
                      <div className="space-y-6 text-gray-600 leading-loose text-base md:text-lg font-light">
                          <p>
                          THE H BRAND는<br/>
                          실내건축면허를 보유한 전문 시공 법인으로서,<br/>
                          각 프로젝트마다<br/>
                          기획·디자인·시공·관리까지 체계적으로 책임집니다.
                          </p>
                          <p>
                          눈에 띄는 연출보다<br/>
                          눈에 보이지 않는 구조와 공정을 중요하게 생각하며,<br/>
                          오늘의 만족을 넘어<br/>
                          내일에도 변치 않는 공간의 가치를 제안합니다.
                          </p>
                      </div>
                  </div>
              </div>

              {/* Closing Quote */}
              <div className="text-center py-12 md:py-20 border-t border-b border-brand-brown/20 bg-white/50">
                 <p className="text-xl md:text-3xl font-bold text-brand-dark mb-6 leading-normal">
                   "디자인은 선택의 문제지만,<br/>
                   완성은 기준의 문제입니다."
                 </p>
                 <p className="text-sm md:text-base tracking-[0.2em] font-light text-brand-brown">
                   THE H BRAND
                 </p>
              </div>
            </div>
          </div>

          {/* Core Values - Redesigned */}
          <div className="bg-brand-dark text-brand-bg py-24 md:py-32">
            <div className="max-w-[1600px] mx-auto px-6 md:px-20">
              <h3 className="text-4xl md:text-7xl font-bold mb-20 md:mb-32 text-center md:text-left tracking-tight">
                Our Core Values.
              </h3>
              
              <div className="flex flex-col gap-24">
                
                {/* Row 1: Image Left, Values Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className="order-2 lg:order-1 relative h-[500px] md:h-[600px] overflow-hidden group">
                    <img 
                      src="https://i.postimg.cc/65mrNYkJ/istockphoto-1344601965-612x612.jpg" 
                      alt="Interior Detail Texture" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  
                  <div className="order-1 lg:order-2 space-y-16 pl-0 lg:pl-10">
                     {/* Value 1 */}
                     <div className="group">
                        <div className="flex items-center mb-6">
                          <span className="text-3xl mr-4 text-[#C5A880]">📐</span>
                          <h4 className="text-2xl md:text-4xl font-bold">실용적 가치</h4>
                        </div>
                        <div className="w-full h-[1px] bg-gray-700 mb-6 group-hover:bg-[#C5A880] transition-colors duration-500"></div>
                        <p className="text-xl font-medium mb-3 text-[#C5A880]">
                          "보이는 디자인이 아닌, 사용하는 디자인"
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                          고객의 생활 방식에 맞춰 효율적인 동선과 맞춤 기능을 설계합니다.
                          디에이치디자인은 공간을 일상의 무대로 완성합니다.
                        </p>
                      </div>

                      {/* Value 2 */}
                      <div className="group">
                        <div className="flex items-center mb-6">
                          <span className="text-3xl mr-4 text-[#C5A880]">💰</span>
                          <h4 className="text-2xl md:text-4xl font-bold">경제적 가치</h4>
                        </div>
                        <div className="w-full h-[1px] bg-gray-700 mb-6 group-hover:bg-[#C5A880] transition-colors duration-500"></div>
                        <p className="text-xl font-medium mb-3 text-[#C5A880]">
                          "사는 집을 넘어, 가치가 오르는 집으로"
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                          프리미엄 디자인과 경제적 효율성을 함께 고려해,
                          공간의 자산 가치를 높이는 인테리어를 지향합니다.
                        </p>
                      </div>
                  </div>
                </div>

                {/* Row 2: Values Left, Image Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className="space-y-16 pr-0 lg:pr-10">
                      {/* Value 3 */}
                      <div className="group">
                        <div className="flex items-center mb-6">
                          <span className="text-3xl mr-4 text-[#C5A880]">🤝</span>
                          <h4 className="text-2xl md:text-4xl font-bold">신뢰적 가치</h4>
                        </div>
                        <div className="w-full h-[1px] bg-gray-700 mb-6 group-hover:bg-[#C5A880] transition-colors duration-500"></div>
                        <p className="text-xl font-medium mb-3 text-[#C5A880]">
                          "한 번의 계약이 아닌, 오래가는 관계"
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                          정직한 시공과 꼼꼼한 마감으로 고객과의 신뢰를 지켜갑니다.
                          디에이치디자인은 믿을 수 있는 동반자가 됩니다.
                        </p>
                      </div>

                      {/* Value 4 */}
                      <div className="group">
                        <div className="flex items-center mb-6">
                          <span className="text-3xl mr-4 text-[#C5A880]">🎨</span>
                          <h4 className="text-2xl md:text-4xl font-bold">미적 가치</h4>
                        </div>
                        <div className="w-full h-[1px] bg-gray-700 mb-6 group-hover:bg-[#C5A880] transition-colors duration-500"></div>
                        <p className="text-xl font-medium mb-3 text-[#C5A880]">
                          "시간이 지나도 질리지 않는 감각"
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                          빛, 재료, 균형이 어우러진 절제된 디자인으로,
                          단순한 장식이 아닌 예술적 경험을 전합니다.
                        </p>
                      </div>
                  </div>
                  
                  <div className="relative h-[500px] md:h-[600px] overflow-hidden group">
                     <img 
                       src="https://i.postimg.cc/Dy8G518S/istockphoto-1454303268-612x612.jpg" 
                       alt="Interior Detail Lighting" 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
                     />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* TEAM Content */}
      {activeTab === 'TEAM' && (
        <div className="animate-fade-in-up px-6 md:px-20 max-w-[1600px] mx-auto pb-20">
            
            {/* Team Intro Header */}
            <div className="text-center md:text-left mb-12 md:mb-20">
                <h3 className="text-4xl md:text-8xl font-bold text-brand-dark mb-4 md:mb-8 tracking-tighter">TEAM</h3>
                <p className="text-base md:text-xl text-gray-500 font-light tracking-[0.1em]">
                    각자의 역할로 하나의 기준을 만듭니다
                </p>
            </div>

            {/* Manifesto & Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                
                {/* Left: Text Content */}
                <div className="flex flex-col justify-center space-y-10 md:space-y-16 pt-10">
                    <div>
                        <h4 className="text-2xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                            사람보다 기준이 먼저인 팀.<br/>
                            완성은 언제나 <span className="text-brand-brown">THE H</span>.
                        </h4>
                        <div className="w-12 h-1 bg-brand-brown"></div>
                    </div>
                    
                    <div className="space-y-8 text-gray-600 font-light text-base md:text-lg leading-relaxed">
                        <p>
                            THE H BRAND는<br/>
                            각자의 역할은 다르지만<br/>
                            기준은 하나인 팀입니다.
                        </p>
                        <p>
                            설계자가 바뀌어도,<br/>
                            현장이 달라도,<br/>
                            완성의 기준은 달라지지 않습니다.
                        </p>
                        <p className="text-brand-dark font-medium">
                            그것이 우리가<br/>
                            팀으로 일하는 이유입니다.
                        </p>
                    </div>
                </div>

                {/* Right: Single Image - Full width/auto height to prevent cropping */}
                <div className="w-full shadow-2xl rounded-sm group overflow-hidden">
                     <img 
                        src="https://i.postimg.cc/x80TN3Mr/THE-H.png" 
                        alt="THE H Team" 
                        className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
                     />
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default About;