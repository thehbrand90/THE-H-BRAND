import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="w-full min-h-screen bg-white select-none font-sans text-brand-dark"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background Image - Updated to new URL */}
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://i.postimg.cc/KzvYs7dQ/luxury-suite-4720815-1920.jpg')" }}
        />
        
        {/* Gradient Overlay Animation */}
        <div 
            className={`absolute top-0 left-0 w-full bg-gradient-to-b from-black/90 via-black/60 to-transparent transition-all duration-[1500ms] ease-out z-10 ${
                loaded ? 'h-[55vh] opacity-100' : 'h-0 opacity-0'
            }`}
        ></div>

        {/* Title Animation */}
        <div 
            className={`absolute inset-0 z-20 flex flex-col justify-center items-center transition-all duration-[1500ms] ease-out ${
                loaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
        >
            <h1 className="text-4xl md:text-6xl font-sans text-white tracking-widest font-bold mb-6 drop-shadow-lg">
                개인정보처리방침
            </h1>
            <p className="text-white/70 text-[10px] md:text-xs tracking-[0.4em] font-sans font-bold uppercase">
                Privacy Policy
            </p>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50 z-20">
            <span className="text-[10px] tracking-widest uppercase mb-2">Scroll Down</span>
            <ChevronDown size={20} strokeWidth={1} />
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* Left Column: Content (75%) */}
            <div className="w-full lg:w-[75%]">
                
                {/* Intro Info */}
                <div className="mb-20 pb-12 border-b border-gray-100 text-sm font-light leading-loose text-gray-600">
                    <h2 className="text-3xl font-bold text-brand-dark mb-10 tracking-tight font-sans">THE H BRAND 개인정보처리방침</h2>
                    <p className="mb-6">
                        주식회사 디에이치브랜드(이하 “회사”)는 「개인정보 보호법」 등 관련 법령을 준수하며, 상담 및 프로젝트 수행에 필요한 최소한의 개인정보만 처리하고 안전하게 보호합니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                        <p><span className="font-medium text-gray-900 mr-2">시행일자:</span> 2026. 01. 01</p>
                        <p><span className="font-medium text-gray-900 mr-2">개인정보보호책임자:</span> 정고운</p>
                    </div>
                </div>

                {/* Articles */}
                <div className="space-y-16 text-gray-800 leading-relaxed text-sm md:text-base font-light">
                    
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">1. 개인정보의 처리 목적</h3>
                        <p className="mb-3">회사는 다음 목적을 위해 개인정보를 처리합니다.</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li><strong>상담 접수 및 회신:</strong> 카카오 채팅, 네이버폼, 전화, 이메일을 통한 문의 응대 및 일정 조율</li>
                            <li><strong>현장 방문/실측 및 견적 진행:</strong> 현장 정보 확인, 견적 산출, 설계/시공 범위 협의</li>
                            <li><strong>계약 체결 및 이행:</strong> 공사 계약, 공정 관리, 프로젝트 커뮤니케이션</li>
                            <li><strong>A/S 및 사후관리:</strong> 하자 접수, 방문 일정 조율, 이력 관리</li>
                            <li><strong>민원/분쟁 대응 및 고객 문의 처리</strong></li>
                        </ul>
                        <p className="mt-3 text-xs text-gray-500">※ 처리 목적이 변경되는 경우 관련 법령에 따라 필요한 절차(별도 동의 등)를 진행합니다.</p>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">2. 처리하는 개인정보 항목</h3>
                        <p className="mb-4">회사는 상담 및 서비스 제공을 위해 아래 항목을 처리할 수 있습니다.</p>
                        
                        <div className="bg-gray-50 p-6 rounded-sm space-y-4">
                            <div>
                                <h4 className="font-bold text-brand-dark mb-2 text-sm">(1) 상담 단계(계약 전)</h4>
                                <ul className="list-disc pl-5 space-y-1 marker:text-brand-brown text-sm">
                                    <li><strong>필수:</strong> 성명(또는 닉네임), 연락처(휴대전화번호), 상담 내용</li>
                                    <li><strong>선택:</strong> 공사 예정 주소/현장 위치, 공사 예정 시기, 예산 범위, 참고 이미지/도면/영상, 기타 요청사항</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-dark mb-2 text-sm">(2) 계약 및 공사 이행 단계(계약 체결 시)</h4>
                                <ul className="list-disc pl-5 space-y-1 marker:text-brand-brown text-sm">
                                    <li>계약서/견적서 작성 및 이행에 필요한 정보(계약 당사자 정보, 현장 정보, 정산 관련 정보 등)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-dark mb-2 text-sm">(3) A/S 단계</h4>
                                <ul className="list-disc pl-5 space-y-1 marker:text-brand-brown text-sm">
                                    <li>공사 이력 확인을 위한 정보(고객 식별, 현장 정보, 하자 접수 내용, 방문 일정 등)</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-3 text-xs text-gray-500">※ 회사는 원칙적으로 주민등록번호 등 고유식별정보를 수집·처리하지 않습니다.</p>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">3. 개인정보의 보유 및 이용기간</h3>
                        <p className="mb-3">회사는 개인정보를 목적 달성 시 지체 없이 파기합니다. 다만, 관계 법령에 따라 보관이 필요한 경우 아래 기간 동안 보관할 수 있습니다.</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li><strong>상담 기록(계약 전):</strong> 상담 목적 달성 후 [예: 6개월] 보관 후 파기</li>
                            <li><strong>계약/정산 관련 기록:</strong> 관련 법령에 따른 보관(세무·회계 등)</li>
                            <li><strong>소비자 불만/분쟁 처리 기록:</strong> 3년 보관(해당 시)</li>
                            <li><strong>계약 또는 청약철회 등에 관한 기록:</strong> 5년 보관(해당 시)</li>
                        </ul>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">4. 개인정보의 파기 절차 및 방법</h3>
                        <p className="mb-3">회사는 보유기간이 경과하거나 처리 목적이 달성된 개인정보를 지체 없이 파기합니다.</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li><strong>전자적 파일:</strong> 복구·재생이 불가능한 방법으로 영구 삭제</li>
                            <li><strong>출력물:</strong> 분쇄 또는 소각 등 물리적 방법으로 파기</li>
                        </ul>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">5. 개인정보의 제3자 제공</h3>
                        <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 법령에 근거가 있거나 정보주체의 별도 동의를 받은 경우에 한하여 제공할 수 있습니다.</p>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">6. 개인정보 처리업무의 위탁</h3>
                        <p>회사는 원칙적으로 개인정보 처리업무를 외부에 위탁하지 않습니다. 다만, 향후 홈페이지 유지보수/호스팅/문자 발송/상담 관리 도구 등을 이용하며 위탁이 발생하는 경우, 위탁받는 자와 위탁 업무 내용 등을 본 방침에 공개합니다.</p>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">7. 외부 서비스 이용 안내</h3>
                        <p className="mb-3">회사는 상담 편의를 위해 외부 플랫폼 및 통신 수단을 이용할 수 있습니다.</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li><strong>카카오 채널 채팅:</strong> 카카오 서비스 환경에서 상담이 이루어질 수 있으며, 카카오의 개인정보 처리에 대해서는 카카오의 정책이 적용될 수 있습니다.</li>
                            <li><strong>네이버폼:</strong> 네이버 서비스 환경에서 상담 신청이 이루어질 수 있으며, 네이버의 개인정보 처리에 대해서는 네이버의 정책이 적용될 수 있습니다.</li>
                            <li><strong>이메일/전화:</strong> 이용자가 제공한 정보는 상담 및 서비스 제공 목적 범위에서 처리됩니다.</li>
                        </ul>
                        <p className="mt-3 text-xs text-gray-500">※ 회사는 상담 과정에서 취득한 개인정보를 본 방침에 따라 안전하게 관리합니다.</p>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">8. 정보주체의 권리와 행사 방법</h3>
                        <p className="mb-3">이용자는 언제든지 회사에 대해 다음 권리를 행사할 수 있습니다.</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li>개인정보 열람, 정정·삭제, 처리정지 요구 등</li>
                            <li>권리 행사는 아래 “문의처”로 요청할 수 있으며, 회사는 관련 법령에 따라 지체 없이 조치합니다.</li>
                        </ul>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">9. 개인정보의 안전성 확보조치</h3>
                        <p className="mb-3">회사는 개인정보의 안전성을 확보하기 위해 다음과 같은 조치를 취합니다.</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li>접근권한 관리 및 내부관리계획 수립</li>
                            <li>개인정보 취급자 최소화 및 교육</li>
                            <li>개인정보가 포함된 자료의 보관·전송 시 보호조치(암호 설정, 접근 통제 등)</li>
                            <li>침해사고 대응을 위한 로그 관리 및 점검</li>
                        </ul>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">10. 자동 수집 장치(쿠키) 운영</h3>
                        <p className="mb-3">회사는 서비스 제공을 위해 쿠키(cookie)를 사용할 수 있습니다. 쿠키 사용 여부 및 거부 방법은 아래와 같습니다.</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li><strong>쿠키 사용 목적:</strong> 이용 환경 분석 및 서비스 개선(사용 시)</li>
                            <li><strong>거부 방법:</strong> 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
                        </ul>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">11. 개인정보 보호책임자 및 문의처</h3>
                        <p className="mb-4">회사는 개인정보 보호 관련 문의 및 불만 처리를 위해 아래와 같이 담당자를 지정합니다.</p>
                        <div className="border border-gray-200 p-6">
                            <ul className="space-y-2 text-sm">
                                <li><strong>성명:</strong> 정고운</li>
                                <li><strong>직책:</strong> 실무이사</li>
                                <li><strong>연락처:</strong> 010-5430-0452</li>
                                <li><strong>이메일:</strong> thehbrand@naver.com</li>
                                <li><strong>주소:</strong> 광주광역시 광산구 풍영로 206, 3층</li>
                            </ul>
                        </div>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">12. 권익침해 구제방법</h3>
                        <p>개인정보 침해에 대한 신고·상담이 필요할 경우, 관계 기관에 문의할 수 있습니다(예: 개인정보분쟁조정, 수사기관 등).</p>
                    </article>

                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">13. 개인정보처리방침의 변경</h3>
                        <p>본 방침은 2026년 1월 1일부터 적용됩니다. 내용 추가·삭제·수정이 있을 경우, 사이트를 통해 고지합니다.</p>
                    </article>

                </div>
            </div>

            {/* Right Column: Sticky Sidebar (25%) */}
            <div className="w-full lg:w-[25%] hidden lg:block">
                <div className="sticky top-32 flex flex-col justify-between h-[60vh] border-l border-gray-200 pl-10">
                    <div>
                        <h3 className="text-2xl font-bold tracking-widest text-brand-dark mb-8 font-sans">THE H BRAND</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-widest">Navigation</p>
                                <ul className="space-y-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    <li className="hover:text-brand-brown cursor-pointer transition-colors flex items-center" onClick={scrollToTop}>
                                        <ArrowUp size={12} className="mr-2" /> Back to Top
                                    </li>
                                    <li className="hover:text-brand-brown cursor-pointer transition-colors">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="hover:text-brand-brown cursor-pointer transition-colors">
                                        <Link to="/contact">Contact Support</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-widest">Legal</p>
                                <ul className="space-y-3 text-xs font-medium text-gray-600 uppercase tracking-wider">
                                    <li className="hover:text-brand-brown cursor-pointer transition-colors">
                                        <Link to="/terms">Terms of Use</Link>
                                    </li>
                                    <li className="text-brand-brown font-bold">Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-[10px] text-[#999] font-medium tracking-wide border-t border-gray-100 pt-6">
                        <p className="mb-2">© THE H BRAND.</p>
                        <p>Unauthorized use prohibited.</p>
                        <p className="mt-2 text-gray-300">Gwangju, Korea.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;