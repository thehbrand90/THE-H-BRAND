import React, { useState } from 'react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'IDENTITY' | 'COMPANY'>('IDENTITY');

  const identityGridImages = [
    '/myweb-images-identity3.jpg',
    '/myweb-images-identity4.jpg',
    '/myweb-images-identity5.jpg',
    '/myweb-images-identity6.jpg',
    '/myweb-images-identity7.jpg',
    '/myweb-images-identity8.jpg',
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-[1600px] mx-auto min-h-screen">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-[#222625] mb-8 select-none">
          ABOUT
        </h1>
        <h2 className="text-xl md:text-3xl font-light leading-snug max-w-5xl text-[#222625] tracking-tight">
          저희 THE H는 단순히 인테리어를 '시공'하는 회사가 아니라, <br className="hidden md:block" />
          <span className="font-bold">사람이 머무는 공간에 신뢰와 기준을 설계하는 브랜드</span>입니다.
        </h2>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-12 mb-24 border-b border-gray-300">
        <button
          onClick={() => setActiveTab('IDENTITY')}
          className={`pb-4 text-sm md:text-base font-bold tracking-[0.2em] transition-all duration-300 ${
            activeTab === 'IDENTITY' 
              ? 'text-[#222625] border-b-2 border-[#222625]' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          IDENTITY
        </button>
        <button
          onClick={() => setActiveTab('COMPANY')}
          className={`pb-4 text-sm md:text-base font-bold tracking-[0.2em] transition-all duration-300 ${
            activeTab === 'COMPANY' 
              ? 'text-[#222625] border-b-2 border-[#222625]' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          COMPANY
        </button>
      </div>

      {/* IDENTITY Content */}
      {activeTab === 'IDENTITY' && (
        <div className="animate-fade-in-up space-y-32">
          
          {/* Main Image & Story */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <img 
                src="/myweb-images-identity1.jpg" 
                alt="Office Interior" 
                className="w-full h-auto object-cover grayscale shadow-sm"
              />
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-6 space-y-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Our Story</h3>
                <p className="text-gray-600 leading-8 mb-6 text-lg font-light">
                  THE H(디에이치)는 THE H Brand가 운영하는 디자인·시공 전문 브랜드로, 
                  설계부터 시공, 그리고 사후관리까지 책임지는 <strong>Design & Build 시스템</strong>을 기반으로 
                  광주·전남 지역에서 프리미엄 주거 공간을 만들어갑니다.
                </p>
                <p className="text-gray-600 leading-8 text-lg font-light">
                  10년의 현장 경험. 우리는 화려한 수식어보다 '기본'에 집중합니다.
                  정직한 시공은 특별한 것이 아닙니다. 그것은 우리가 지켜야 할 당연한 기준입니다.
                  법인 전환을 통해 공공 입찰과 더 큰 규모의 프로젝트에서도 
                  우리의 철학을 증명해 보이겠습니다.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Brand Structure</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#222625] pl-6">
                    <h4 className="text-xl font-bold mb-2 text-[#222625]">THE H (디에이치)</h4>
                    <p className="text-gray-600 font-light">고객이 만나는 브랜드</p>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-6">
                    <h4 className="text-xl font-bold mb-2 text-[#222625]">THE H BRAND (디에이치 브랜드)</h4>
                    <p className="text-gray-600 font-light">법인 정체성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THE H Meaning Section with Identity Images */}
          <div className="bg-gray-50">
            {/* Top Row: Identity 2 + Text */}
            <div className="flex flex-col-reverse lg:flex-row">
              {/* Left Side: Single Image (Identity 2) */}
              <div className="lg:w-1/2 relative min-h-[500px] overflow-hidden group">
                 <img 
                   src="/myweb-images-identity2.jpg" 
                   alt="Identity Main"
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Right Side: Content */}
              <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-12 text-[#716E69] tracking-tight">
                  What is THE H?
                </h3>
                
                <div className="space-y-10">
                  
                  <div className="group">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-[#716E69] mr-2">T</span>
                      <span className="text-xl font-bold text-[#222625]">ask force</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      단순한 시공팀이 아닌,<br/>
                      프로젝트마다 최적의 전문가들이 모여 <strong>태스크포스처럼 움직입니다.</strong>
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-[#716E69] mr-2">H</span>
                      <span className="text-xl font-bold text-[#222625]">ouse/home</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      고객의 <strong>집과 공간</strong>을 가장 소중한 가치로 삼습니다.
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-[#716E69] mr-2">E</span>
                      <span className="text-xl font-bold text-[#222625]">xhibit</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      완성된 공간은 하나의 <strong>전시작품(Exhibit)</strong>처럼 보여집니다.
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-[#716E69] mr-2">H</span>
                      <span className="text-xl font-bold text-[#222625]">igh-end</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      언제나 <strong>프리미엄(HIGH-END) 퀄리티</strong>로 마무리합니다.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Row: 6 Image Grid (Identity 3-8) */}
            <div className="grid grid-cols-2 md:grid-cols-3">
               {identityGridImages.map((src, idx) => (
                 <div key={idx} className="relative aspect-square overflow-hidden group">
                   <img 
                     src={src} 
                     alt={`Identity Detail ${idx + 3}`}
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform transition-transform duration-700 ease-out group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      )}

      {/* COMPANY Content */}
      {activeTab === 'COMPANY' && (
        <div className="animate-fade-in-up space-y-32">
          
          {/* About Us Intro */}
          <div className="relative py-20 bg-white">
            <h3 className="text-5xl md:text-7xl font-bold mb-12 text-[#222625]">About us.</h3>
            <div className="w-20 h-2 bg-[#222625] mb-12"></div>
            
            <p className="text-2xl md:text-4xl font-bold text-[#222625] mb-10">
              디자인은 누구나, 완성은 디에이치.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-gray-600 leading-relaxed text-lg font-light">
              <div>
                <p className="mb-6">
                  디에이치디자인은<br/>
                  기본에 충실한 시공과 정직한 프로세스를 바탕으로,<br/>
                  믿을 수 있는 공간을 만들어갑니다.
                </p>
                <p>
                  우리는 단순히 공간을 꾸미는 것이 아니라,<br/>
                  생활과 가장 가까운 환경을 책임지는 전문가로서<br/>
                  고객의 신뢰를 최우선으로 합니다.
                </p>
              </div>
              <div>
                <p className="mb-6 font-bold text-[#222625]">
                  프리미엄 공간의 시작과 완성.
                </p>
                <p>
                  디에이치디자인은 실내건축면허를 보유한 전문 시공사로서,<br/>
                  감각적인 디자인과 정확한 시공을 통해<br/>
                  "내 집을 맡길 수 있는 확실한 선택"으로<br/>
                  오늘의 집을 넘어 내일에도 변치 않는 가치를 제안합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-[#1a1a1a] text-white p-10 md:p-20 -mx-6 md:-mx-20">
            <div className="max-w-[1600px] mx-auto">
              <h3 className="text-5xl md:text-7xl font-bold mb-20 text-center md:text-left">
                Our Core Values.
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                
                {/* Value 1 */}
                <div className="group">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">📐</span>
                    <h4 className="text-2xl md:text-3xl font-bold">실용적 가치</h4>
                  </div>
                  <div className="w-full h-[1px] bg-gray-600 mb-6 group-hover:bg-white transition-colors duration-500"></div>
                  <p className="text-xl font-medium mb-3 text-[#bfa079]">
                    "보이는 디자인이 아닌, 사용하는 디자인"
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed">
                    고객의 생활 방식에 맞춰 효율적인 동선과 맞춤 기능을 설계합니다.
                    디에이치디자인은 공간을 일상의 무대로 완성합니다.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="group">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">💰</span>
                    <h4 className="text-2xl md:text-3xl font-bold">경제적 가치</h4>
                  </div>
                  <div className="w-full h-[1px] bg-gray-600 mb-6 group-hover:bg-white transition-colors duration-500"></div>
                  <p className="text-xl font-medium mb-3 text-[#bfa079]">
                    "사는 집을 넘어, 가치가 오르는 집으로"
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed">
                    프리미엄 디자인과 경제적 효율성을 함께 고려해,
                    공간의 자산 가치를 높이는 인테리어를 지향합니다.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="group">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">🤝</span>
                    <h4 className="text-2xl md:text-3xl font-bold">신뢰적 가치</h4>
                  </div>
                  <div className="w-full h-[1px] bg-gray-600 mb-6 group-hover:bg-white transition-colors duration-500"></div>
                  <p className="text-xl font-medium mb-3 text-[#bfa079]">
                    "한 번의 계약이 아닌, 오래가는 관계"
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed">
                    정직한 시공과 꼼꼼한 마감으로 고객과의 신뢰를 지켜갑니다.
                    디에이치디자인은 믿을 수 있는 동반자가 됩니다.
                  </p>
                </div>

                {/* Value 4 */}
                <div className="group">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">🎨</span>
                    <h4 className="text-2xl md:text-3xl font-bold">미적 가치</h4>
                  </div>
                  <div className="w-full h-[1px] bg-gray-600 mb-6 group-hover:bg-white transition-colors duration-500"></div>
                  <p className="text-xl font-medium mb-3 text-[#bfa079]">
                    "시간이 지나도 질리지 않는 감각"
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed">
                    빛, 재료, 균형이 어우러진 절제된 디자인으로,
                    단순한 장식이 아닌 예술적 경험을 전합니다.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;