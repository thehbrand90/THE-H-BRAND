import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-[1600px] mx-auto min-h-screen">
      
      {/* Top Section: Contact Info & Inquiry Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#222625]">CONTACT</h1>
          
          <div className="space-y-10">
            <div className="group">
              <h3 className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                <MapPin className="w-3 h-3 mr-2" /> Office
              </h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-[#222625]">
                광주광역시 광산구 풍영로 206, 3층<br />
                주식회사 디에이치 브랜드
              </p>
              <p className="text-xs text-gray-400 mt-2 font-light">THE H Brand co., Ltd</p>
            </div>

            <div>
              <h3 className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                <Phone className="w-3 h-3 mr-2" /> Inquiry
              </h3>
              <p className="text-base md:text-lg font-light text-[#222625]">
                +82 062-000-0000<br />
                thehbrand@naver.com
              </p>
            </div>

            <div>
              <h3 className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                <Clock className="w-3 h-3 mr-2" /> Working Hours
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Mon - Fri : 09:00 - 18:00<br />
                Sat : By Appointment Only<br />
                Sun : Closed
              </p>
            </div>
          </div>
        </div>

        {/* Inquiry Banner with Image Background */}
        <div className="flex flex-col justify-center h-full">
          <div className="relative w-full h-full min-h-[400px] group overflow-hidden">
             {/* Background Image */}
             <img 
               src="/myweb-images-contact1.jpg" 
               alt="Contact Inquiry" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             {/* Dark Overlay */}
             <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>
             
             {/* Content */}
             <div className="relative z-10 flex flex-col justify-center items-center h-full p-10 md:p-12 text-center text-white">
                <h3 className="text-xl md:text-2xl font-light mb-4">Interior Design Inquiry</h3>
                <p className="text-sm text-gray-200 mb-8 font-light leading-relaxed">
                  새로운 공간을 계획 중이신가요?<br/>
                  사전 질문지를 작성해주시면 더 빠르고 정확한 상담이 가능합니다.
                </p>
                <a 
                  href="https://form.naver.com/response/zXGA29pGSWUSGBoLSE8xPw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                  THE H 사전질문지 바로가기 <ArrowRight className="ml-2 w-3 h-3" />
                </a>
             </div>
          </div>
        </div>
      </div>

      {/* AS Request Section */}
      <div className="border-t border-gray-300 pt-24">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-[#222625]">A/S REQUEST</h2>
        
        <div className="flex flex-col lg:flex-row shadow-xl bg-white">
            
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[800px]">
                <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop" 
                    alt="Interior Detail" 
                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white">
                    <p className="text-xs font-bold tracking-widest uppercase mb-3 opacity-80">Customer Service</p>
                    <h3 className="text-2xl md:text-3xl font-light leading-tight mb-4">
                        책임지는 시공,<br/>
                        끝까지 함께합니다.
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 font-light max-w-sm leading-relaxed">
                        디에이치 브랜드는 시공 후 발생할 수 있는 문제에 대해 신속하고 정확한 처리를 약속드립니다.
                    </p>
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 p-8 md:p-16 bg-white">
                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-2 text-[#222625]">A/S 신청서</h3>
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
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">이름 (Name)</label>
                          <input 
                            type="text" 
                            name="name" 
                            required
                            className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 text-sm focus:outline-none focus:border-black transition-colors" 
                            placeholder="성함을 입력해주세요" 
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">연락처 (Phone)</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            required
                            className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 text-sm focus:outline-none focus:border-black transition-colors" 
                            placeholder="010-0000-0000" 
                          />
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">주소 (Address)</label>
                        <input 
                          type="text" 
                          name="address" 
                          required
                          className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 text-sm focus:outline-none focus:border-black transition-colors" 
                          placeholder="시공 받으신 주소를 입력해주세요" 
                        />
                      </div>

                      {/* Construction Date */}
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">시공 날짜 (Date)</label>
                        <input 
                          type="date" 
                          name="construction_date" 
                          required
                          className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 text-sm focus:outline-none focus:border-black transition-colors text-gray-600" 
                        />
                      </div>

                      {/* Request Content */}
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">AS 요청내용 (Request)</label>
                        <textarea 
                          name="message"
                          rows={5} 
                          required
                          className="w-full bg-[#f9f9f9] border-b border-gray-300 p-3 text-sm focus:outline-none focus:border-black transition-colors resize-none leading-relaxed" 
                          placeholder="불편하신 사항이나 수리가 필요한 부분을 자세히 적어주세요."
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="w-full bg-[#222625] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg">
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