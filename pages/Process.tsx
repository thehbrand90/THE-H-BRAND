import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '사전문의 & 상담',
      details: [
        '보안상의 이유로 구체적인 견적서는 미팅 후 제공됩니다.',
        '사전 질문지 작성 후 2~3일 이내 유선 안내 드립니다.',
        '전화/카톡/DM은 기본 안내만 가능합니다.',
        '예상 견적은 현장 상태·마감재·난이도에 따라 달라질 수 있습니다.'
      ]
    },
    {
      num: '02',
      title: '현장방문 & 실측',
      details: [
        '미팅은 1~2일 전 예약이 필수입니다.',
        '정확한 견적은 현장 실측 후 전달드립니다.'
      ]
    },
    {
      num: '03',
      title: '견적 확정 & 계약',
      details: [
        '실측 후, 고객 요청을 반영한 견적서를 전달합니다. (평균 2~3일 소요)',
        '2차 미팅을 통해 최종 견적 및 디자인을 반영하고 계약을 체결합니다.',
        '계약 후 공사 스케줄이 확정됩니다. (평균 공사 기간 3~5주, 협의 가능)',
        'THE H는 순차적·정확한 시공으로 퀄리티를 최우선으로 합니다.'
      ]
    },
    {
      num: '04',
      title: '디자인미팅 (2단계)',
      details: [
        '1차: 공간 구조, 전반적 컨셉, 컬러 방향성 논의',
        '2차: 자재·마감재·디테일 확정',
        '고객님의 라이프스타일과 취향을 담은 맞춤 공간을 제안합니다.'
      ]
    },
    {
      num: '05',
      title: '공사준비',
      details: [
        '공사 7일 전까지 계약 마감 및 자재 발주를 진행합니다.',
        '확정된 디자인 기준으로 전체 공정 스케줄을 구성합니다.',
        '관리사무소 허가서, 엘리베이터 사용 안내문 등 행정 절차를 대행합니다.',
        'THE H는 공사 전부터 체계적 준비를 약속드립니다.'
      ]
    },
    {
      num: '06',
      title: '공사진행',
      details: [
        '최종 확정된 디자인으로 공사를 진행합니다.',
        '불가피한 현장 변수 발생 시, 고객과 즉각 피드백 후 조율합니다.'
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-[1600px] mx-auto min-h-screen">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-dark mb-6">
          PROCESS
        </h1>
        <p className="text-sm md:text-base font-light text-gray-600 max-w-2xl leading-relaxed">
          공간의 처음부터 끝까지,<br/>
          완성도를 설계하는 시스템.<br/>
          THE H 공사 시스템입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {steps.map((step) => (
          <div key={step.num} className="border-t border-brand-dark pt-8 group hover:bg-white hover:p-8 hover:shadow-xl transition-all duration-300 flex flex-col min-h-[300px] overflow-hidden">
            <div className="flex justify-between items-baseline mb-5">
               <span className="text-3xl md:text-4xl font-light text-gray-300 group-hover:text-brand-brown transition-colors font-montserrat">{step.num}</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-brand-dark">{step.title}</h3>
            <ul className="space-y-2 overflow-x-auto pb-2">
              {step.details.map((detail, index) => (
                <li key={index} className="text-gray-600 font-light text-[11px] md:text-xs leading-relaxed flex items-center whitespace-nowrap tracking-tight">
                  <span className="mr-2 w-1 h-1 bg-brand-brown rounded-full flex-shrink-0"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;