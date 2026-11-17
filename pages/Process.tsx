import React from 'react';
import Reveal from '../components/Reveal';

const steps = [
  {
    num: '01',
    title: '사전문의 & 상담',
    en: 'Inquiry',
    details: [
      '보안상의 이유로 구체적인 견적서는 미팅 후 제공됩니다.',
      '사전 질문지 작성 후 2~3일 이내 유선 안내 드립니다.',
      '전화/카톡/DM은 기본 안내만 가능합니다.',
      '예상 견적은 현장 상태·마감재·난이도에 따라 달라질 수 있습니다.',
    ],
  },
  {
    num: '02',
    title: '현장방문 & 실측',
    en: 'Site Survey',
    details: ['미팅은 1~2일 전 예약이 필수입니다.', '정확한 견적은 현장 실측 후 전달드립니다.'],
  },
  {
    num: '03',
    title: '견적 확정 & 계약',
    en: 'Estimate & Contract',
    details: [
      '실측 후, 고객 요청을 반영한 견적서를 전달합니다. (평균 2~3일 소요)',
      '2차 미팅을 통해 최종 견적 및 디자인을 반영하고 계약을 체결합니다.',
      '계약 후 공사 스케줄이 확정됩니다. (평균 공사 기간 3~5주, 협의 가능)',
      'THE H는 순차적·정확한 시공으로 퀄리티를 최우선으로 합니다.',
    ],
  },
  {
    num: '04',
    title: '디자인미팅 (2단계)',
    en: 'Design Meeting',
    details: [
      '1차: 공간 구조, 전반적 컨셉, 컬러 방향성 논의',
      '2차: 자재·마감재·디테일 확정',
      '고객님의 라이프스타일과 취향을 담은 맞춤 공간을 제안합니다.',
    ],
  },
  {
    num: '05',
    title: '공사준비',
    en: 'Preparation',
    details: [
      '공사 7일 전까지 계약 마감 및 자재 발주를 진행합니다.',
      '확정된 디자인 기준으로 전체 공정 스케줄을 구성합니다.',
      '관리사무소 허가서, 엘리베이터 사용 안내문 등 행정 절차를 대행합니다.',
      'THE H는 공사 전부터 체계적 준비를 약속드립니다.',
    ],
  },
  {
    num: '06',
    title: '공사진행',
    en: 'Construction',
    details: [
      '최종 확정된 디자인으로 공사를 진행합니다.',
      '불가피한 현장 변수 발생 시, 고객과 즉각 피드백 후 조율합니다.',
    ],
  },
];

const Process: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-brand-bg">
      {/* Header */}
      <div className="border-b border-brand-line/60">
        <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 pt-32 md:pt-40 pb-12 md:pb-16">
          <p className="font-montserrat text-[10px] tracking-[0.32em] text-brand-clay mb-6">
            PROCESS
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h1 className="lg:col-span-7 text-display-lg text-brand-ink break-keep-all">
              공간의 처음부터 끝까지,
              <br />
              완성도를 설계하는 시스템.
            </h1>
            <p className="lg:col-span-4 lg:col-start-9 text-sm font-light leading-relaxed text-brand-gray break-keep-all">
              상담부터 준공까지 6단계로 진행됩니다. 각 단계에서 필요한 기준과 일정을 투명하게
              안내드리며, THE H 공사 시스템은 순차적이고 정확한 시공을 원칙으로 합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 py-8 md:py-14">
        {steps.map((step, index) => (
          <Reveal key={step.num} delay={index * 40}>
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 border-b border-brand-line/70 py-9 md:py-12 transition-colors duration-500 hover:bg-brand-paper">
              <div className="lg:col-span-2 flex items-baseline gap-4">
                <span className="font-montserrat text-3xl md:text-4xl font-extralight text-brand-clay/80 group-hover:text-brand-clay transition-colors">
                  {step.num}
                </span>
                <span className="font-montserrat text-[9px] tracking-[0.22em] text-brand-gray lg:hidden">
                  {step.en.toUpperCase()}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h2 className="text-xl md:text-2xl font-light text-brand-ink break-keep-all">
                  {step.title}
                </h2>
                <p className="mt-2 hidden lg:block font-montserrat text-[9px] tracking-[0.24em] text-brand-gray/70">
                  {step.en.toUpperCase()}
                </p>
              </div>

              <ul className="lg:col-span-6 space-y-2.5">
                {step.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[13px] md:text-sm font-light leading-relaxed text-brand-gray break-keep-all"
                  >
                    <span className="mt-[0.6em] h-[3px] w-[3px] shrink-0 rounded-full bg-brand-clay/70" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Note */}
      <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 pb-24">
        <div className="bg-brand-dark text-brand-bg px-7 md:px-12 py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-sm md:text-base font-light leading-relaxed break-keep-all">
            평균 공사 기간은 3~5주이며, 현장 상황에 따라 협의로 조정됩니다.
            <br />
            <span className="text-white/50 text-[13px]">
              정확한 일정과 견적은 실측 후 안내드립니다.
            </span>
          </p>
          <a
            href="https://form.naver.com/response/zXGA29pGSWUSGBoLSE8xPw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light shrink-0"
          >
            사전질문지 작성
          </a>
        </div>
      </div>
    </div>
  );
};

export default Process;
