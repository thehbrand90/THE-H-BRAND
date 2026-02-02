import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setLoaded(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="w-full min-h-screen bg-white select-none font-sans text-brand-dark"
      onContextMenu={(e) => e.preventDefault()} // Security: Disable Right Click
      onDragStart={(e) => e.preventDefault()}   // Security: Disable Dragging
    >
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://i.postimg.cc/dt4c5Pqd/tiles-1478505-1920.jpg')" }}
        />
        
        {/* Gradient Overlay Animation - Slides down to cover 50% */}
        <div 
            className={`absolute top-0 left-0 w-full bg-gradient-to-b from-black/90 via-black/60 to-transparent transition-all duration-[1500ms] ease-out z-10 ${
                loaded ? 'h-[55vh] opacity-100' : 'h-0 opacity-0'
            }`}
        ></div>

        {/* Title Animation - Slides down from top to center */}
        <div 
            className={`absolute inset-0 z-20 flex flex-col justify-center items-center transition-all duration-[1500ms] ease-out ${
                loaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
        >
            {/* Font changed to font-sans (Gothic style) */}
            <h1 className="text-4xl md:text-6xl font-sans text-white tracking-widest font-bold mb-6 drop-shadow-lg">
                이용약관
            </h1>
            <p className="text-white/70 text-[10px] md:text-xs tracking-[0.4em] font-sans font-bold uppercase">
                Terms of Use
            </p>
        </div>

        {/* Scroll Indicator */}
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
                    <h2 className="text-3xl font-bold text-brand-dark mb-10 tracking-tight font-sans">THE H BRAND 홈페이지 이용약관</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                        <p><span className="font-medium text-gray-900 mr-2">시행일자:</span> 2026. 01. 01</p>
                        <p><span className="font-medium text-gray-900 mr-2">회사:</span> 주식회사 디에이치브랜드</p>
                        <p><span className="font-medium text-gray-900 mr-2">브랜드:</span> THE H BRAND / THE H(디에이치)</p>
                        <p><span className="font-medium text-gray-900 mr-2">주소:</span> 광주광역시 광산구 풍영로 206, 3층</p>
                        <p className="md:col-span-2"><span className="font-medium text-gray-900 mr-2">이메일:</span> thehbrand@naver.com</p>
                    </div>
                </div>

                {/* Articles */}
                <div className="space-y-16 text-gray-800 leading-relaxed text-sm md:text-base font-light">
                    
                    {/* Article 1 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제1조 (목적)</h3>
                        <p>본 약관은 회사가 운영하는 공식 웹사이트(이하 “사이트”)의 이용과 관련하여 회사와 이용자 간 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                    </article>

                    {/* Article 2 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제2조 (정의)</h3>
                        <ul className="list-disc pl-5 space-y-3 marker:text-gray-300">
                            <li>“이용자”란 사이트에 접속하여 본 약관에 따라 사이트를 이용하는 자를 말합니다.</li>
                            <li>“콘텐츠”란 사이트에 게시된 사진, 영상, 텍스트, 그래픽, 로고, 편집물, 프로젝트 설명 자료 등 일체를 말합니다.</li>
                            <li>“상담”이란 이용자가 회사가 안내하는 채널(카카오 채널/네이버폼/전화/이메일 등)로 문의하고 회사가 이에 응답하는 행위를 말합니다.</li>
                        </ul>
                    </article>

                    {/* Article 3 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제3조 (약관의 게시 및 변경)</h3>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li>회사는 본 약관을 사이트에 게시함으로써 효력이 발생합니다.</li>
                            <li>회사는 법령에 위반되지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 사이트를 통해 공지합니다.</li>
                            <li>변경 약관은 공지한 시행일로부터 효력이 발생하며, 이용자가 변경 이후 사이트를 이용하는 경우 변경 약관에 동의한 것으로 봅니다.</li>
                        </ul>
                    </article>

                    {/* Article 4 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제4조 (서비스의 내용)</h3>
                        <p className="mb-3">회사는 사이트를 통해 다음 서비스를 제공합니다.</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300 mb-4">
                            <li>프로젝트(포트폴리오) 및 시공 사례 열람</li>
                            <li>회사 소개, 업무 범위, 진행 프로세스 안내</li>
                            <li>상담 접수 경로 안내 및 문의 접수(카카오 채널/네이버폼/전화/이메일 등)</li>
                            <li>기타 회사가 정하는 서비스</li>
                        </ul>
                        <p className="text-xs text-gray-500 bg-gray-50 p-3">※ 사이트는 원칙적으로 온라인 결제·상품 판매·회원가입 기능을 제공하지 않습니다(변경 시 별도 고지).</p>
                    </article>

                    {/* Article 5 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제5조 (상담, 견적 및 계약의 성립)</h3>
                        <ul className="list-disc pl-5 space-y-3 marker:text-gray-300">
                            <li>사이트 또는 상담 채널을 통한 문의·상담 신청은 계약의 청약 또는 승낙으로 보지 않으며, 계약이 즉시 성립하지 않습니다.</li>
                            <li>견적, 공사 범위, 일정, 비용, 자재 및 시공 조건은 현장 여건과 협의 결과에 따라 변경될 수 있습니다.</li>
                            <li>실제 계약은 회사와 이용자 간 <strong>별도의 서면/전자 계약서(공사계약서, 견적서, 발주서 등)</strong>로 체결되며, 해당 계약서가 본 약관보다 우선합니다.</li>
                        </ul>
                    </article>

                    {/* Article 6 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제6조 (이용자의 의무 및 금지행위)</h3>
                        <p className="mb-3">이용자는 다음 행위를 하여서는 안 됩니다.</p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li>회사 또는 제3자의 권리(저작권, 상표권 등)를 침해하는 행위</li>
                            <li>회사 콘텐츠를 무단으로 복제/배포/전송/전시하거나, 상업적으로 이용하는 행위</li>
                            <li>사이트의 정상 운영을 방해하는 행위(자동수집, 크롤링, 스크래핑, 무단 다운로드 시도, 해킹 등)</li>
                            <li>허위정보 기재, 타인 사칭, 반복적 스팸 문의, 불법·부당한 목적의 문의</li>
                            <li>기타 법령 또는 본 약관에 위반되는 행위</li>
                        </ul>
                    </article>

                    {/* Article 7 - Highlighted */}
                    <article className="relative bg-brand-stone/10 p-8 md:p-10 -mx-4 md:-mx-8 rounded-sm border-l-4 border-brand-brown">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                        </div>
                        <h3 className="text-sm font-bold text-brand-brown uppercase tracking-widest mb-6 font-sans">제7조 (콘텐츠 및 지식재산권 보호) [강화 핵심]</h3>
                        <div className="space-y-6 relative z-10">
                            <p className="font-medium text-brand-dark">사이트의 모든 콘텐츠(프로젝트 사진·영상·텍스트·도면 일부·편집물·로고·슬로건 등)에 관한 저작권 및 지식재산권은 회사 또는 정당한 권리자에게 귀속됩니다.</p>
                            
                            <div>
                                <p className="mb-2 font-medium">이용자는 회사의 사전 서면 동의 없이 다음 행위를 할 수 없습니다.</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                    <li>콘텐츠의 복제, 캡처, 저장, 재가공, 번역, 편집, 2차적 저작물 작성</li>
                                    <li>SNS/블로그/카페/커뮤니티/홍보물/광고/포트폴리오 등 외부 매체에 게시 또는 전송</li>
                                    <li>유사 사업자의 영업, 제안서, 입찰자료, 홍보자료 등에 활용</li>
                                    <li>워터마크 삭제, 크롭/필터 등으로 출처를 은폐하는 행위</li>
                                </ul>
                            </div>

                            <div className="border-t border-brand-brown/10 pt-4 mt-4">
                                <h4 className="text-xs font-bold text-brand-dark uppercase mb-2">Policy Highlights</h4>
                                <ul className="space-y-2 text-xs text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-brand-brown mr-2">●</span>
                                        <span><strong>Watermark Policy:</strong> 코너 워터마크 및 디지털 메타데이터 삭제 금지.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-brown mr-2">●</span>
                                        <span><strong>Resolution Policy:</strong> 웹 이미지는 2000px 이하 최적화 상태이며 원본 요구 불가.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-brown mr-2">●</span>
                                        <span><strong>Anti-Theft:</strong> 우클릭/드래그 방지 기술 적용. 우회 시도 금지.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="mb-2 font-medium">회사는 무단사용이 확인되는 경우, 사전 통지 없이 다음 조치를 취할 수 있습니다.</p>
                                <p className="text-sm text-gray-600">게시중단(삭제) 요청, 플랫폼 신고 및 권리침해 신고, 증거 보존(캡처·로그 등)</p>
                            </div>

                            <p className="text-sm bg-white/50 p-4 rounded-sm border border-brand-brown/10 text-brand-brown font-medium">
                                무단사용자는 관련 법령에 따른 민·형사상 책임을 부담할 수 있으며, 회사는 손해배상(실손해 및 합리적 비용 포함)을 청구할 수 있습니다.
                            </p>
                            
                            <p className="text-xs text-gray-400 mt-2">단, 이용자가 비상업적 목적의 단순 링크 공유(사이트 URL 공유)는 허용되나, 콘텐츠 자체의 재게시/복제는 금지됩니다.</p>
                        </div>
                    </article>

                    {/* Article 8 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제8조 (외부 서비스 및 상담 채널)</h3>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li>회사는 상담 편의를 위해 카카오 채널, 네이버폼 등 외부 서비스로 연결되는 링크를 제공할 수 있습니다.</li>
                            <li>이용자가 외부 서비스에서 제공하는 정보 및 그 처리에 대해서는 해당 서비스 제공자의 정책이 적용될 수 있습니다.</li>
                            <li>이용자는 전화/이메일/카카오 채팅/네이버폼 등을 통해 상담을 진행할 수 있으며, 상담 과정에서 제공한 정보는 회사의 개인정보처리방침에 따라 처리됩니다.</li>
                        </ul>
                    </article>

                    {/* Article 9 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제9조 (서비스 제공의 중단)</h3>
                        <p>회사는 시스템 점검, 장애, 천재지변 등 불가항력 사유가 있는 경우 사이트 제공을 일시 중단할 수 있습니다.</p>
                    </article>

                    {/* Article 10 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제10조 (면책 및 책임 제한)</h3>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li>회사는 사이트에 게시된 정보가 최신이 되도록 노력하나, 현장 조건 및 자재 수급 등 변동 요소로 인해 실제 결과와 차이가 있을 수 있습니다.</li>
                            <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
                            <li>사이트의 정보는 참고용이며, 실제 공사 결과는 현장 조건에 따라 달라질 수 있습니다.</li>
                        </ul>
                    </article>

                    {/* Article 11 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제11조 (분쟁해결 및 관할)</h3>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-300">
                            <li>회사와 이용자 간 분쟁은 상호 협의하여 해결하도록 노력합니다.</li>
                            <li>협의로 해결되지 않을 경우, 대한민국 법령을 준거법으로 하며, 회사 본점 소재지 관할 법원을 제1심 관할 법원으로 합니다.</li>
                        </ul>
                    </article>

                    {/* Article 12 */}
                    <article>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans">제12조 (기타)</h3>
                        <p>본 약관에 명시되지 않은 사항은 관련 법령 및 일반 상관례에 따릅니다.</p>
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
                                    <li className="text-brand-brown font-bold">Terms of Use</li>
                                    <li className="hover:text-brand-brown cursor-pointer transition-colors">
                                        <Link to="/privacy">Privacy Policy</Link>
                                    </li>
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

export default Terms;