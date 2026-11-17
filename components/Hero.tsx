import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const { Link } = ReactRouterDOM;

/**
 * Home hero.
 *
 * The old version was a 7-slide carousel of ~870 KB images (≈6 MB before the
 * first paint) that rendered black whenever the first slide was slow. It is
 * now a single preloaded, locally optimised WebP (67 KB at 1920w, 56 KB
 * portrait for mobile) with the wordmark set as real text instead of baked
 * into the photo.
 */
const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] max-h-[1080px] overflow-hidden bg-brand-dark">
      {/* Background */}
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/media/brand/hero-mobile-600.webp 600w, /media/brand/hero-mobile-941.webp 941w"
          sizes="100vw"
        />
        <img
          src="/media/brand/hero-1920.webp"
          srcSet="/media/brand/hero-768.webp 768w, /media/brand/hero-1280.webp 1280w, /media/brand/hero-1920.webp 1920w"
          sizes="100vw"
          alt="따뜻한 우드와 스톤으로 완성한 THE H BRAND의 주방 인테리어"
          className="hero-zoom absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* Legibility gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Frame hairlines */}
      <div className="pointer-events-none absolute inset-x-5 md:inset-x-10 lg:inset-x-14 top-[88px] bottom-8 border-x border-white/[0.08] hidden md:block" />

      <div className="relative z-10 h-full max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 flex flex-col justify-between">
        {/* Top meta row (sits below the fixed navbar) */}
        <div className="flex justify-between items-start pt-24 md:pt-36">
          <p className="kicker text-white/55 hidden sm:block">
            Interior Design &amp; Build — Gwangju · Jeonnam
          </p>
          <p className="kicker text-white/40 hidden md:block">10 Years of Field Experience</p>
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
            실내건축공사업 면허를 보유한 Design &amp; Build 시공 법인.
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
        <div className="hidden md:flex items-end justify-between pb-8">
          <div className="flex items-center gap-6 text-white/35">
            <span className="font-montserrat text-[10px] tracking-[0.3em]">SCROLL</span>
            <span className="relative block h-px w-24 bg-white/20 overflow-hidden">
              <span className="absolute inset-y-0 left-0 w-1/3 bg-white/70 animate-[lineGrow_2.4s_ease-in-out_infinite]" />
            </span>
          </div>

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
    </section>
  );
};

export default Hero;
