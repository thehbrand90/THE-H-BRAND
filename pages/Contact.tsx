import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-[1600px] mx-auto min-h-screen">
      
      {/* Top Section: Contact Info & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
        
        {/* Left: Contact Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-brand-dark">CONTACT</h1>
          
          <div className="space-y-10">
            <div className="group">
              <h3 className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-brown mb-3">
                <MapPin className="w-3 h-3 mr-2" /> Office
              </h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-brand-dark">
                광주광역시 광산구 풍영로 206, 3층<br />
                주식회사 디에이치 브랜드
              </p>
              <p className="text-xs text-gray-400 mt-2 font-light">THE H Brand co., Ltd</p>
            </div>

            <div>
              <h3 className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-brown mb-3">
                <Phone className="w-3 h-3 mr-2" /> Inquiry
              </h3>
              <p className="text-base md:text-lg font-light text-brand-dark">
                010-5430-0452<br />
                thehbrand@naver.com
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-brown mb-3">
                <Clock className="w-3 h-3 mr-2" /> Working Hours
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Mon - Fri : 09:00 - 18:00<br />
                Sat : By Appointment Only<br />
                Sun : Closed
              </p>
            </div>

            {/* Added Inquiry Button to left side since right side is now map */}
            <div className="pt-6">
               <a 
                  href="https://form.naver.com/response/zXGA29pGSWUSGBoLSE8xPw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-brown hover:border-brand-brown transition-colors"
                >
                  사전질문지 작성하기 <ArrowRight className="ml-2 w-3 h-3" />
                </a>
            </div>
          </div>
        </div>

        {/* Right: Map & Buttons */}
        <div className="flex flex-col h-full items-start lg:items-end">
          <div className="w-full max-w-md">
            {/* Map Image Link */}
            <a 
               href="https://naver.me/GziclEJu" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full relative group overflow-hidden border border-gray-200 shadow-sm mb-6 block"
            >
               <img 
                 src="https://i.postimg.cc/XqpY4cCR/image.png" 
                 alt="Location Map" 
                 className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
               <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 text-[10px] font-bold text-gray-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  CLICK TO OPEN MAP
               </div>
            </a>

            {/* Map Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://naver.me/GziclEJu"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center py-4 bg-[#03C75A] text-white text-xs md:text-sm font-bold tracking-widest hover:opacity-90 transition-opacity shadow-sm"
              >
                NAVER MAP
              </a>
              <a 
                href="https://map.kakao.com/link/search/광주광역시 광산구 풍영로 206"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center py-4 bg-[#FAE100] text-[#3b1e1e] text-xs md:text-sm font-bold tracking-widest hover:opacity-90 transition-opacity shadow-sm"
              >
                KAKAO MAP
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Kakao Channel Banner - Compact & Emotional (Moved Here) */}
      <div className="mb-32 flex justify-center">
        <a 
          href="https://pf.kakao.com/_xbAies/chat" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-full max-w-2xl bg-[#FAE100] shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between px-8 py-6">
            <div className="flex items-center space-x-5 mb-4 md:mb-0">
               <div className="bg-[#3b1e1e] p-2.5 rounded text-[#FAE100] shadow-sm">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 3C6.48 3 2 6.48 2 10.77C2 13.56 3.78 16.03 6.47 17.38L5.5 21L9.12 18.59C10.03 18.79 11 18.89 12 18.89C17.52 18.89 22 15.41 22 11.12C22 6.83 17.52 3 12 3Z"/></svg>
               </div>
               <div className="text-center md:text-left">
                  <p className="text-[#3b1e1e] font-sans font-bold text-lg mb-1">
                    "공간에 대한 고민, 편하게 이야기해요"
                  </p>
                  <p className="text-[#3b1e1e]/60 text-[10px] font-bold tracking-widest uppercase">
                    KakaoTalk Channel
                  </p>
               </div>
            </div>
            
            <div>
               <span className="inline-flex items-center text-[#3b1e1e] text-xs font-bold tracking-widest uppercase border-b border-[#3b1e1e] pb-1 group-hover:text-[#3b1e1e]/70 group-hover:border-[#3b1e1e]/70 transition-colors">
                 Start Chat <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
               </span>
            </div>
          </div>
          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-12 group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        </a>
      </div>

      {/* AS Request Section */}
      <div className="border-t border-gray-300 pt-24">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-brand-dark">A/S REQUEST</h2>
        
        <div className="flex flex-col lg:flex-row shadow-xl bg-white">
            
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[800px]">
                <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop" 
                    alt="Interior Detail" 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white">
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
  );
};

export default Contact;