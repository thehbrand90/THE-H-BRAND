import React from 'react';
import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react';
import LazyImage from '../components/LazyImage';

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-brand-bg">
      
      {/* Top Section: Split Layout (Image Left / Content Right) */}
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* Left: Heavy Building Image */}
        <div className="relative w-full lg:w-[45%] xl:w-[50%] min-h-[50vh] lg:min-h-auto bg-[#2c2c2c]">
          <LazyImage 
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2574&auto=format&fit=crop" 
            alt="Office Building" 
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 contrast-125"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-brand-brown/10 mix-blend-multiply z-10 pointer-events-none"></div>
          
          <div className="absolute top-28 left-8 md:left-12 z-20">
            <h2 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-1 opacity-80">THE H BRAND</h2>
            <p className="text-white text-4xl font-bold tracking-tighter">OFFICE</p>
          </div>

          <div className="absolute bottom-8 right-8 z-20 text-right">
             <p className="text-white/60 text-[10px] font-mono tracking-widest">GWANGJU / JEONNAM</p>
          </div>
        </div>

        {/* Right: Contact Info & Map - Removed whitespace/gap by using flex and padding */}
        <div className="w-full lg:w-[55%] xl:w-[50%] bg-brand-bg flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-24">
          <div className="max-w-xl w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-16 text-brand-dark tracking-tighter">CONTACT</h1>
            
            <div className="space-y-12">
              {/* Office Info */}
              <div className="group">
                <h3 className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-brown mb-3 border-b border-brand-brown/20 pb-2 inline-block">
                  <MapPin className="w-3 h-3 mr-2" /> Address
                </h3>
                <p className="text-lg md:text-xl font-light leading-relaxed text-brand-dark">
                  광주광역시 광산구 풍영로 206, 3층<br />
                  주식회사 디에이치브랜드
                </p>
                <p className="text-xs text-gray-400 mt-2 font-light tracking-wide">THE H Brand co., Ltd</p>
              </div>

              {/* Inquiry Info */}
              <div>
                <h3 className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-brown mb-3 border-b border-brand-brown/20 pb-2 inline-block">
                  <Phone className="w-3 h-3 mr-2" /> Inquiry
                </h3>
                <p className="text-xl md:text-2xl font-light text-brand-dark mb-1">
                  010-5430-0452
                </p>
                <p className="text-base md:text-lg font-light text-gray-600 mb-6">
                  thehbrand@naver.com
                </p>
                <a 
                  href="https://form.naver.com/response/zXGA29pGSWUSGBoLSE8xPw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-dark border border-brand-dark px-6 py-3 hover:bg-brand-dark hover:text-white transition-all duration-300"
                >
                  사전질문지 작성하기 <ArrowRight className="ml-2 w-3 h-3" />
                </a>
              </div>

              {/* Hours */}
              <div>
                <h3 className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-brown mb-3 border-b border-brand-brown/20 pb-2 inline-block">
                  <Clock className="w-3 h-3 mr-2" /> Working Hours
                </h3>
                <p className="text-sm text-gray-600 font-light leading-loose">
                  Mon - Fri : 09:00 - 18:00<br />
                  Sat : By Appointment Only<br />
                  Sun : Closed
                </p>
              </div>

              {/* Map & Buttons */}
              <div className="pt-8 border-t border-gray-200">
                <a 
                   href="https://naver.me/GziclEJu" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block w-full h-48 relative group overflow-hidden bg-gray-200"
                >
                   <LazyImage 
                     src="https://i.postimg.cc/XqpY4cCR/image.png" 
                     alt="Location Map" 
                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                     containerClassName="w-full h-full"
                   />
                   <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                   <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 text-[10px] font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      VIEW MAP
                   </div>
                </a>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <a 
                    href="https://naver.me/GziclEJu"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-3 bg-[#03C75A] text-white text-[10px] font-bold tracking-widest hover:opacity-90 transition-opacity"
                  >
                    NAVER MAP
                  </a>
                  <a 
                    href="https://map.kakao.com/link/search/광주광역시 광산구 풍영로 206"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center py-3 bg-[#FAE100] text-[#3b1e1e] text-[10px] font-bold tracking-widest hover:opacity-90 transition-opacity"
                  >
                    KAKAO MAP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kakao Banner Section - Centered with max-width */}
      <div className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto">
          <a 
            href="https://pf.kakao.com/_xbAies/chat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group relative w-full bg-[#FAE100] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center justify-between px-8 py-8 md:px-12">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                 <div className="bg-[#3b1e1e] p-3 rounded text-[#FAE100]">
                   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 3C6.48 3 2 6.48 2 10.77C2 13.56 3.78 16.03 6.47 17.38L5.5 21L9.12 18.59C10.03 18.79 11 18.89 12 18.89C17.52 18.89 22 15.41 22 11.12C22 6.83 17.52 3 12 3Z"/></svg>
                 </div>
                 <div className="text-center md:text-left">
                    <p className="text-[#3b1e1e] font-sans font-bold text-xl mb-1">
                      "공간에 대한 고민, 편하게 이야기해요"
                    </p>
                    <p className="text-[#3b1e1e]/60 text-xs font-bold tracking-widest uppercase">
                      KakaoTalk Channel
                    </p>
                 </div>
              </div>
              <span className="inline-flex items-center text-[#3b1e1e] text-xs font-bold tracking-widest uppercase border-b-2 border-[#3b1e1e] pb-1 group-hover:border-opacity-50 transition-colors">
                 Start Chat <ArrowRight className="ml-2 w-3 h-3" />
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* AS Request Section */}
      <div className="bg-brand-bg py-20 px-6 md:px-20 border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-brand-dark">A/S REQUEST</h2>
          <div className="flex flex-col lg:flex-row shadow-2xl bg-white">
            
              <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[800px] bg-gray-800">
                <LazyImage 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop" 
                    alt="Interior Detail" 
                    className="absolute inset-0 w-full h-full object-cover"
                    containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white z-20">
                    <p className="text-xs font-bold tracking-widest uppercase mb-3 opacity-90 text-brand-stone">Customer Service</p>
                    <h3 className="text-2xl md:text-3xl font-light leading-tight mb-4">
                        책임지는 시공,<br/>
                        끝까지 함께합니다.
                    </h3>
                    <p className="text-xs md:text-sm text-gray-200 font-light max-w-sm leading-relaxed">
                        디에이치 브랜드는 시공 후 발생할 수 있는 문제에 대해 신속하고 정확한 처리를 약속드립니다.
                    </p>
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 p-8 md:p-16 bg-white">
                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-2 text-brand-dark">A/S 신청서</h3>
                    <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                        원활한 처리를 위해 아래 정보를 정확히 입력해 주세요.<br/>
                        접수 후 담당자가 24시간 이내(영업일 기준) 연락드립니다.
                    </p>
                </div>

                <form 
                    action="https://formspree.io/f/mykkgyee" 
                    method="POST" 
                    className="space-y-6"
                >
                    <div className="space-y-5">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-brown mb-2">이름 (Name)</label>
                          <input 
                            type="text" 
                            name="name" 
                            required
                            className="w-full bg-brand-bg border-b border-gray-300 p-3 text-sm focus:outline-none focus:border-brand-brown transition-colors" 
                            placeholder="성함을 입력해주세요" 
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-brown mb-2">연락처 (Phone)</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            required
                            className="w-full bg-brand-bg border-b border-gray-300 p-3 text-sm focus:outline-none focus:border-brand-brown transition-colors" 
                            placeholder="010-0000-0000" 
                          />
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-brown mb-2">주소 (Address)</label>
                        <input 
                          type="text" 
                          name="address" 
                          required
                          className="w-full bg-brand-bg border-b border-gray-300 p-3 text-sm focus:outline-none focus:border-brand-brown transition-colors" 
                          placeholder="시공 받으신 주소를 입력해주세요" 
                        />
                      </div>

                      {/* Construction Date */}
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-brown mb-2">시공 날짜 (Date)</label>
                        <input 
                          type="date" 
                          name="construction_date" 
                          required
                          className="w-full bg-brand-bg border-b border-gray-300 p-3 text-sm focus:outline-none focus:border-brand-brown transition-colors text-gray-600" 
                        />
                      </div>

                      {/* Request Content */}
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-brown mb-2">AS 요청내용 (Request)</label>
                        <textarea 
                          name="message"
                          rows={5} 
                          required
                          className="w-full bg-brand-bg border-b border-gray-300 p-3 text-sm focus:outline-none focus:border-brand-brown transition-colors resize-none leading-relaxed" 
                          placeholder="불편하신 사항이나 수리가 필요한 부분을 자세히 적어주세요."
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="w-full bg-brand-dark text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-brown transition-colors shadow-lg">
                        A/S 신청하기
                      </button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;