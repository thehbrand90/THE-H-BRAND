import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const { Link } = ReactRouterDOM;

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-bg">
      <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 pt-16 md:pt-24 pb-10">
        {/* Wordmark + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-b border-white/10 pb-12 md:pb-16">
          <div>
            <p className="font-montserrat text-[24px] md:text-[38px] font-light tracking-[0.14em] leading-none">
              THE H <span className="text-white/55">BRAND</span>
            </p>
            <p className="mt-5 text-[13px] font-light leading-relaxed text-white/50 break-keep-all max-w-md">
              공간을 설계하고 완성하는 법인.
              <br />
              고객은 디에이치를 기억하고, 계약은 디에이치브랜드가 책임집니다.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 self-start lg:self-auto"
          >
            <span className="font-montserrat text-[10px] tracking-[0.24em] text-white/70 group-hover:text-white transition-colors">
              PROJECT INQUIRY
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 group-hover:border-white group-hover:bg-white group-hover:text-brand-dark transition-all duration-400">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 py-12 md:py-16 text-[12.5px] leading-[1.9]">
          <div>
            <h3 className="font-montserrat text-[9px] tracking-[0.3em] text-brand-clay mb-5">
              OFFICE
            </h3>
            <p className="text-white/70 font-light">
              광주광역시 광산구 풍영로 206, 3층
              <br />
              주식회사 디에이치브랜드
            </p>
            <p className="mt-4 font-montserrat text-[11px] tracking-[0.1em] text-white/40">
              실내건축공사업 면허
              <br />
              광주광산-26-나-03
            </p>
          </div>

          <div>
            <h3 className="font-montserrat text-[9px] tracking-[0.3em] text-brand-clay mb-5">
              CONTACT
            </h3>
            <p className="text-white/70 font-light">
              <a href="tel:010-5430-0452" className="hover:text-white transition-colors">
                010-5430-0452
              </a>
              <br />
              <a href="mailto:thehbrand@naver.com" className="hover:text-white transition-colors">
                thehbrand@naver.com
              </a>
            </p>
            <p className="mt-4 font-montserrat text-[11px] tracking-[0.1em] text-white/40">
              여성기업 인증업체
            </p>
          </div>

          <div>
            <h3 className="font-montserrat text-[9px] tracking-[0.3em] text-brand-clay mb-5">
              MENU
            </h3>
            <ul className="space-y-2 font-montserrat text-[10px] tracking-[0.18em] text-white/60">
              {[
                { to: '/about', label: 'ABOUT' },
                { to: '/process', label: 'PROCESS' },
                { to: '/portfolio', label: 'PORTFOLIO' },
                { to: '/reviews', label: 'REVIEW' },
                { to: '/contact', label: 'CONTACT' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat text-[9px] tracking-[0.3em] text-brand-clay mb-5">
              SOCIAL
            </h3>
            <ul className="space-y-2 font-montserrat text-[10px] tracking-[0.18em] text-white/60">
              <li>
                <a
                  href="https://www.instagram.com/design_theh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  href="https://blog.naver.com/design_theh_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  NAVER BLOG
                </a>
              </li>
              <li>
                <a
                  href="https://ohou.se/experts/myhome/14990007?type=summaries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  OHOUSE
                </a>
              </li>
              <li>
                <a
                  href="https://pf.kakao.com/_xbAies/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  KAKAO TALK
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row md:items-center justify-between gap-4 font-montserrat text-[9.5px] tracking-[0.14em] text-white/35">
          <p>&copy; {new Date().getFullYear()} (주) THE H BRAND. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:pr-14">
            <Link to="/terms" className="hover:text-white/70 transition-colors">
              이용약관
            </Link>
            <Link to="/privacy" className="hover:text-white/70 transition-colors">
              개인정보처리방침
            </Link>
            <span className="hidden md:block h-3 w-px bg-white/15" />
            <span className="whitespace-nowrap">GWANGJU · JEONNAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
