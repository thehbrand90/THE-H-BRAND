import React, { useEffect, useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const { Link } = ReactRouterDOM;

/**
 * Home hero — five-slide cross-dissolve.
 *
 * Reference studied for this treatment: 일하다디자인(ilhada.com) keeps one fixed
 * wordmark over a rotating set of architectural photographs (4 slides, ~3s) and
 * 릴스퀘어(lilsquare.com) opens with one continuous full-bleed visual and a
 * single centred statement. Here the pace is borrowed from the first and the
 * calm from the second: each slide holds ~5.2s and dissolves into the next over
 * 1.6s, while a 26s Ken-Burns drift keeps the frame alive.
 *
 * Every layer is stacked and preloaded, so a transition never reveals the dark
 * background underneath: the outgoing and incoming slides cross at mid-opacity.
 * Each slide ships its own 9:16 portrait file for phones (~250 KB per device,
 * never both sets).
 */
type Slide = {
  id: string;
  src: string;
  srcMobile: string;
  alt: string;
  label: string;
  position: string;
};

const SLIDES: Slide[] = [
  {
    id: '01',
    src: '/media/hero/slide-01.webp',
    srcMobile: '/media/hero/slide-01-m.webp',
    alt: '자연광이 들어오는 따뜻한 베이지 톤의 거실 인테리어',
    label: 'LIVING',
    position: '50% 50%',
  },
  {
    id: '02',
    src: '/media/hero/slide-02.webp',
    srcMobile: '/media/hero/slide-02-m.webp',
    alt: '월넛 키큰장과 스톤 아일랜드로 마감한 주방 인테리어',
    label: 'KITCHEN',
    position: '50% 55%',
  },
  {
    id: '03',
    src: '/media/hero/slide-03.webp',
    srcMobile: '/media/hero/slide-03-m.webp',
    alt: '곡선 벽체와 월넛 테이블이 어우러진 다이닝 공간',
    label: 'DINING',
    position: '50% 50%',
  },
  {
    id: '04',
    src: '/media/hero/slide-04.webp',
    srcMobile: '/media/hero/slide-04-m.webp',
    alt: '간접조명과 월넛 헤드보드로 완성한 마스터 침실',
    label: 'SUITE',
    position: '50% 50%',
  },
  {
    id: '05',
    src: '/media/hero/slide-05.webp',
    srcMobile: '/media/hero/slide-05-m.webp',
    alt: '대형 포세린 타일과 플로팅 세면대로 마감한 욕실',
    label: 'BATH',
    position: '50% 50%',
  },
];

const HOLD_MS = 5200;
const pad = (n: number) => String(n).padStart(2, '0');

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  // Motion preference: no rotation and no drift for users who ask for less.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Warm only the set this device will actually show, then start rotating.
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)').matches;
    const sources = SLIDES.map((slide) => (mobile ? slide.srcMobile : slide.src));
    let cancelled = false;

    Promise.all(
      sources.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          }),
      ),
    ).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!ready || reduced) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, HOLD_MS);
    return () => window.clearInterval(timer);
  }, [ready, reduced]);

  const active = SLIDES[index];

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] max-h-[1080px] overflow-hidden bg-brand-dark">
      {/* Dissolve layers */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide${i === index ? ' is-active' : ''}`}
            aria-hidden={i === index ? undefined : true}
          >
            <picture>
              <source media="(max-width: 767px)" srcSet={slide.srcMobile} />
              <img
                src={slide.src}
                alt={i === index ? slide.alt : ''}
                style={{
                  objectPosition: slide.position,
                  animationDelay: `${-i * 6.5}s`,
                }}
                className="hero-drift absolute inset-0 w-full h-full object-cover"
                fetchPriority={i === 0 ? 'high' : 'low'}
                decoding="async"
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Legibility gradients — tuned for the bright, natural-light photo set:
          the mid band carries a little more weight so white copy keeps ≥3:1 over
          the brightest frames (living, suite) without flattening the interiors. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/32 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Frame hairlines */}
      <div className="pointer-events-none absolute inset-x-5 md:inset-x-10 lg:inset-x-14 top-[88px] bottom-8 border-x border-white/[0.08] hidden md:block" />

      <div className="relative z-10 h-full max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 flex flex-col justify-between">
        {/* Top meta row (sits below the fixed navbar) */}
        <div className="flex justify-between items-start pt-24 md:pt-36">
          <p className="kicker text-white/70 hidden sm:block">
            Interior Design &amp; Build — Gwangju · Jeonnam
          </p>
          <p className="kicker text-white/55 hidden md:block">10 Years of Field Experience</p>

          {/* Compact slide counter for phones */}
          <div className="flex sm:hidden items-center gap-2.5" aria-label="히어로 사진 순서">
            <span className="font-montserrat text-[9px] tracking-[0.28em] text-white/85">
              {pad(index + 1)}
            </span>
            <span className="relative block h-px w-9 bg-white/25 overflow-hidden">
              <span
                key={`m-${index}`}
                className="hero-progress absolute inset-y-0 left-0 bg-white/85"
                style={{
                  animationDuration: `${HOLD_MS}ms`,
                  animationPlayState: ready && !reduced ? 'running' : 'paused',
                }}
              />
            </span>
            <span className="font-montserrat text-[9px] tracking-[0.28em] text-white/40">
              {pad(SLIDES.length)}
            </span>
          </div>
        </div>

        {/* Main statement */}
        <div className="pb-16 md:pb-24 max-w-4xl">
          <p className="hero-fade kicker text-white/60 mb-6 md:mb-8" style={{ animationDelay: '0.15s' }}>
            THE H BRAND
          </p>

          <h1
            className="hero-fade text-white font-light leading-[1.06] tracking-[-0.02em]"
            style={{
              animationDelay: '0.3s',
              fontSize: 'clamp(2.4rem, 6.4vw, 5.2rem)',
            }}
          >
            프리미엄 공간,
            <br />
            <span className="text-white/80">그 시작과 완성.</span>
          </h1>

          <div
            className="hero-line h-px w-20 md:w-28 bg-white/50 my-7 md:my-9"
            aria-hidden="true"
          />

          <p
            className="hero-fade text-white/75 text-[13px] md:text-[15px] font-light leading-relaxed break-keep-all max-w-xl"
            style={{ animationDelay: '0.55s' }}
          >
            실내건축공사업 면허를 보유한 Design &amp; Build 시공 법인.{' '}
            <br className="hidden sm:block" />
            설계부터 시공, 사후관리까지 — 기본에 충실한 정직한 시공으로 공간의 기준을 만듭니다.
          </p>

          <div
            className="hero-fade mt-9 md:mt-12 grid grid-cols-2 gap-2 pr-12 md:flex md:flex-wrap md:items-center md:gap-4 md:pr-0"
            style={{ animationDelay: '0.7s' }}
          >
            <Link
              to="/portfolio"
              className="group inline-flex w-full md:w-auto items-center justify-center gap-2 md:gap-3 bg-white text-brand-dark px-4 md:px-9 py-3.5 md:py-[1.05rem] font-montserrat text-[9.5px] md:text-[11px] font-semibold tracking-[0.18em] md:tracking-[0.22em] hover:bg-brand-clay hover:text-white transition-all duration-400"
            >
              포트폴리오 보기
              <ArrowRight
                size={14}
                className="transition-transform duration-400 group-hover:translate-x-1"
              />
            </Link>
            <Link to="/contact" className="btn-ghost-light w-full md:w-auto !px-4 md:!px-9 !py-3.5 md:!py-4 !text-[9.5px] md:!text-[11px] !tracking-[0.18em] md:!tracking-[0.22em]">
              상담 문의하기
            </Link>
          </div>
        </div>

        {/* Bottom rail */}
        <div className="hidden md:grid grid-cols-3 items-end pb-8">
          <div className="flex items-center gap-6 text-white/35">
            <span className="font-montserrat text-[10px] tracking-[0.3em]">SCROLL</span>
            <span className="relative block h-px w-24 bg-white/20 overflow-hidden">
              <span className="absolute inset-y-0 left-0 w-1/3 bg-white/70 animate-[lineGrow_2.4s_ease-in-out_infinite]" />
            </span>
          </div>

          {/* Slide indicator: 01 ——— 05 + current room */}
          <div className="flex items-center justify-center gap-4 text-white">
            <span className="font-montserrat text-[10px] tracking-[0.3em] text-white/90 tabular-nums">
              {pad(index + 1)}
            </span>
            <span className="relative block h-px w-24 bg-white/22 overflow-hidden">
              <span
                key={index}
                className="hero-progress absolute inset-y-0 left-0 bg-white/85"
                style={{
                  animationDuration: `${HOLD_MS}ms`,
                  animationPlayState: ready && !reduced ? 'running' : 'paused',
                }}
              />
            </span>
            <span className="font-montserrat text-[10px] tracking-[0.3em] text-white/40 tabular-nums">
              {pad(SLIDES.length)}
            </span>
            <span className="ml-2 hidden lg:inline font-montserrat text-[9px] tracking-[0.3em] text-white/45 w-20">
              {active.label}
            </span>
          </div>

          <div className="flex justify-end pr-10">
            <Link
              to="/about"
              className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
            >
              <span className="font-montserrat text-[10px] tracking-[0.28em]">ABOUT THE H</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 group-hover:border-white/70">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
