import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import LazyImage from '../components/LazyImage';
import { mockProjects, responsiveImage } from './Portfolio';

const { Link } = ReactRouterDOM;

const pillars = [
  {
    num: '01',
    title: 'THE H',
    en: 'The standard we meet first',
    body: (
      <>
        고객이 만나는 첫 번째 기준.
        <br />
        그리고 우리의 첫 번째 시작.
        <br />
        <br />
        기본에 충실한 정직한 시공으로
        <br />
        우리는 공간을 꾸미기보다
        <br />
        삶에 맞게 정리합니다.
      </>
    ),
  },
  {
    num: '02',
    title: 'THE H BRAND',
    en: 'Trust built into structure',
    body: (
      <>
        신뢰를 구조로 만드는 법인.
        <br />
        설계부터 시공, 사후관리까지
        <br />
        Design &amp; Build 시스템으로 완성합니다.
      </>
    ),
  },
  {
    num: '03',
    title: 'PROMISE',
    en: 'The standard we keep',
    body: (
      <>
        신뢰는 정직에서 시작됩니다.
        <br />
        보이지 않는 곳까지
        <br />
        기준을 지키는 것이 우리의 약속입니다.
      </>
    ),
  },
];

const credentials = [
  { label: 'License', value: '실내건축공사업', note: '광주광산-26-나-03' },
  { label: 'Certified', value: '여성기업 인증업체', note: '중소벤처기업부' },
  { label: 'Scope', value: '광주 · 전남', note: 'Design & Build' },
];

const Home: React.FC = () => {
  const works = mockProjects.slice(0, 4);

  return (
    <div className="w-full bg-brand-bg">
      <Hero />

      {/* Ticker */}
      <div className="border-b border-brand-line/70 bg-brand-dark/[0.03] overflow-hidden">
        <div className="marquee py-4">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="flex items-center">
                  <span className="font-montserrat text-[10px] md:text-[11px] tracking-[0.34em] text-brand-ink/45 px-6 md:px-10 whitespace-nowrap">
                    {['THE H BRAND', 'DESIGN & BUILD', 'GWANGJU · JEONNAM', 'INTERIOR ARCHITECTURE'][i % 4]}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-brand-clay/50" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <section className="px-5 md:px-10 lg:px-14 max-w-[1800px] mx-auto py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-montserrat text-[10px] tracking-[0.32em] text-brand-clay mb-8">
                01 — PHILOSOPHY
              </p>
              <h2 className="text-display-lg text-brand-ink break-keep-all">
                정직한 시공은
                <br />
                기준이어야 합니다.
              </h2>
              <p className="mt-8 text-[15px] md:text-base font-light text-brand-gray leading-relaxed break-keep-all">
                특별해서가 아니라
                <br />
                당연해야 하기 때문에.
              </p>

              <div className="mt-16 hidden lg:block">
                <div className="h-px w-full bg-brand-line/70" />
                <p className="mt-5 font-montserrat text-[9px] tracking-[0.28em] text-brand-gray/70">
                  THE H BRAND — GWANGJU · JEONNAM
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={120}>
              <p className="font-serif italic text-2xl md:text-3xl text-brand-ink/90 mb-10">
                Trust begets trust.
              </p>

              <div className="space-y-7 text-[14px] md:text-[15px] leading-[1.95] text-brand-gray font-light break-keep-all">
                <p>
                  저희 THE H는 단순히 인테리어를 &lsquo;시공&rsquo;하는 회사가 아니라,{' '}
                  <span className="text-brand-ink font-normal">
                    사람이 머무는 공간에 신뢰와 기준을 설계하는 브랜드
                  </span>
                  입니다.
                </p>
                <p>
                  &ldquo;기본에 충실한 정직한 시공&rdquo;
                  <br />
                  그것이 우리가 생각하는 가장 강력한 디자인입니다.
                </p>
                <p>
                  우리는 광주·전남 지역에서 오랜 기간 쌓아온 신뢰를 바탕으로 개인 주거공간을 넘어
                  공공 입찰 및 대규모 프로젝트까지 확장하며 더 단단한 브랜드로 거듭나려고 합니다.
                </p>
              </div>

              <Link
                to="/about"
                className="group mt-12 inline-flex items-center gap-3 font-montserrat text-[10px] font-semibold tracking-[0.24em] text-brand-ink"
              >
                <span className="border-b border-brand-ink/40 pb-1 transition-colors group-hover:border-brand-clay group-hover:text-brand-clay">
                  READ OUR STORY
                </span>
                <ArrowRight
                  size={13}
                  className="transition-transform duration-400 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Selected works */}
      <section className="bg-brand-paper border-y border-brand-line/60">
        <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <Reveal>
              <p className="font-montserrat text-[10px] tracking-[0.32em] text-brand-clay mb-5">
                02 — PORTFOLIO
              </p>
              <h2 className="text-display-lg text-brand-ink">Selected Works</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 font-montserrat text-[10px] font-semibold tracking-[0.24em] text-brand-ink"
              >
                <span className="border-b border-brand-ink/30 pb-1 transition-colors group-hover:border-brand-clay group-hover:text-brand-clay">
                  VIEW ALL PROJECTS
                </span>
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
            {works.map((project, index) => {
              const img = responsiveImage(project.image);
              return (
                <Reveal key={project.id} delay={index * 90}>
                  <Link to={`/portfolio/${project.id}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-brand-stone/50">
                      <LazyImage
                        src={img.src}
                        srcSet={img.srcSet}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                        containerClassName="w-full h-full"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <span className="font-montserrat text-[9px] tracking-[0.24em] text-white/90">
                          VIEW PROJECT
                        </span>
                        <ArrowUpRight size={16} className="text-white" />
                      </div>
                      <span className="absolute top-4 left-4 font-montserrat text-[9px] tracking-[0.2em] text-white/70 mix-blend-difference">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-4 border-t border-brand-line/70 pt-4">
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-medium text-brand-ink leading-snug group-hover:text-brand-clay transition-colors truncate">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-montserrat text-[10px] tracking-[0.16em] text-brand-gray">
                          {project.year} · {project.py}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-bleed quote band (replaces the blank grey divider) */}
      <section className="relative w-full">
        <div className="relative h-[52vh] min-h-[320px] md:h-[64vh] md:max-h-[640px] overflow-hidden">
          <img
            src="/media/brand/band-1920.webp"
            srcSet="/media/brand/band-1280.webp 1280w, /media/brand/band-1920.webp 1920w"
            sizes="100vw"
            alt="우드 슬랫과 트래버틴으로 완성한 복도 공간"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <Reveal className="text-center">
              <p className="font-serif italic text-white/90 text-lg md:text-xl mb-4">
                Let&rsquo;s create something timeless together.
              </p>
              <p className="text-white text-xl md:text-3xl font-light leading-snug break-keep-all">
                시간이 지나도 변하지 않는 공간의 가치.
              </p>
              <div className="mx-auto mt-7 h-px w-16 bg-white/40" />
              <p className="mt-7 font-montserrat text-[9px] md:text-[10px] tracking-[0.34em] text-white/55">
                THE H BRAND — DESIGN &amp; BUILD
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Build with Honesty */}
      <section className="bg-brand-dark text-brand-bg">
        <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-montserrat text-[10px] tracking-[0.32em] text-brand-clay mb-7">
                  03 — OUR STANDARD
                </p>
                <h2 className="text-display-lg !text-brand-bg">Build with Honesty</h2>
                <p className="mt-8 text-sm font-light leading-relaxed text-white/55 break-keep-all max-w-sm">
                  눈에 보이는 마감보다 보이지 않는 구조를 먼저 생각합니다. 그 기준이 오래가는
                  공간을 만듭니다.
                </p>

                <Link
                  to="/process"
                  className="group mt-10 inline-flex items-center gap-3 font-montserrat text-[10px] font-semibold tracking-[0.24em] text-brand-bg/80 hover:text-brand-bg transition-colors"
                >
                  <span className="border-b border-white/30 pb-1 group-hover:border-white/70">
                    VIEW PROCESS
                  </span>
                  <ArrowRight size={13} className="transition-transform duration-400 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-white/10 border-t border-white/10">
                {pillars.map((p, i) => (
                  <Reveal key={p.num} delay={i * 90}>
                    <div className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 py-8 md:py-10 transition-colors duration-500">
                      <div className="sm:col-span-1">
                        <span className="font-montserrat text-[10px] tracking-[0.2em] text-brand-clay">
                          {p.num}
                        </span>
                      </div>
                      <div className="sm:col-span-4">
                        <h3 className="font-montserrat text-lg md:text-xl font-medium tracking-[0.06em] text-brand-bg group-hover:text-white transition-colors">
                          {p.title}
                        </h3>
                        <p className="mt-2 font-serif italic text-xs text-white/35">{p.en}</p>
                      </div>
                      <div className="sm:col-span-7">
                        <p className="text-[13.5px] md:text-sm leading-[1.9] text-white/60 font-light break-keep-all">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {credentials.map((c) => (
              <div key={c.label} className="bg-brand-dark p-7 md:p-9">
                <p className="font-montserrat text-[9px] tracking-[0.28em] text-brand-clay mb-3">
                  {c.label.toUpperCase()}
                </p>
                <p className="text-base md:text-lg font-light text-brand-bg">{c.value}</p>
                <p className="mt-1 font-montserrat text-[11px] tracking-[0.12em] text-white/35">
                  {c.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-10 lg:px-14 max-w-[1800px] mx-auto py-24 md:py-36 text-center">
        <Reveal>
          <p className="font-montserrat text-[10px] tracking-[0.32em] text-brand-clay mb-7">
            04 — CONTACT
          </p>
          <h2 className="text-display-lg text-brand-ink break-keep-all">
            상담은 사전 질문지에서
            <br className="hidden sm:block" /> 시작됩니다.
          </h2>
          <p className="mt-7 text-sm md:text-base font-light text-brand-gray leading-relaxed break-keep-all max-w-xl mx-auto">
            보안상 구체적인 견적은 미팅 후 제공됩니다. 사전 질문지를 남겨주시면 2~3일 이내에
            유선으로 안내드립니다.
          </p>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://form.naver.com/response/zXGA29pGSWUSGBoLSE8xPw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              THE H 사전질문지
              <ArrowUpRight size={14} />
            </a>
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-brand-dark/25 px-8 py-4 font-montserrat text-[10px] font-semibold tracking-[0.22em] text-brand-ink hover:border-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-400"
            >
              CONTACT
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-3 font-montserrat text-[10px] tracking-[0.22em] text-brand-gray">
            <span>010-5430-0452</span>
            <span className="hidden sm:block h-3 w-px bg-brand-line" />
            <span>THEHBRAND@NAVER.COM</span>
            <span className="hidden sm:block h-3 w-px bg-brand-line" />
            <span>광주광역시 광산구 풍영로 206, 3층</span>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
