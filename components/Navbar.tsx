import React, { useEffect, useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const { Link, useLocation } = ReactRouterDOM;

const navItems: NavItem[] = [
  { label: 'ABOUT', path: '/about' },
  { label: 'PROCESS', path: '/process' },
  { label: 'PORTFOLIO', path: '/portfolio' },
  { label: 'REVIEW', path: '/reviews' },
  { label: 'CONTACT', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isHome = location.pathname === '/';
  const overHero = isHome && !isScrolled && !isMenuOpen;

  const textColor = overHero ? 'text-white' : 'text-brand-ink';
  const surface = overHero
    ? 'bg-transparent border-white/10'
    : 'bg-brand-bg/90 backdrop-blur-xl border-brand-line/70 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${surface}`}
      >
        <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-14 h-[72px] md:h-[88px] flex justify-between items-center">
          {/* Wordmark */}
          <Link
            to="/"
            aria-label="THE H BRAND 홈으로"
            className="group flex items-baseline gap-1.5 relative z-[60]"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className={`font-montserrat text-[17px] md:text-[22px] font-semibold tracking-[0.16em] transition-colors duration-300 ${textColor}`}
            >
              THE H
            </span>
            <span
              className={`font-montserrat text-[17px] md:text-[22px] font-light tracking-[0.16em] transition-colors duration-300 ${textColor} group-hover:text-brand-clay`}
            >
              BRAND
            </span>
            <span
              className={`hidden sm:inline-block ml-1 font-montserrat text-[10px] md:text-[11px] font-light tracking-[0.08em] transition-colors duration-300 ${
                overHero ? 'text-white/50' : 'text-brand-gray'
              }`}
            >
              Co., Ltd.
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navItems.map((item) => {
              const active = location.pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-montserrat text-[11px] font-medium tracking-[0.24em] transition-colors duration-300 link-underline ${
                    active ? 'text-brand-clay' : textColor
                  } ${overHero && !active ? 'hover:text-white/70' : 'hover:text-brand-clay'}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className={`ml-2 inline-flex items-center font-montserrat text-[10px] font-semibold tracking-[0.22em] px-5 py-3 border transition-all duration-400 ${
                overHero
                  ? 'border-white/40 text-white hover:bg-white hover:text-brand-dark'
                  : 'border-brand-dark/25 text-brand-dark hover:bg-brand-dark hover:text-white'
              }`}
            >
              상담 문의
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden z-[60] p-2 -mr-2 transition-colors duration-300 ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-brand-bg transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ height: '100dvh' }}
      >
        <div className="h-full flex flex-col justify-between px-7 pt-28 pb-10">
          <div className="flex flex-col">
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                className="group flex items-baseline gap-4 py-4 border-b border-brand-line/60"
                style={{
                  transitionDelay: `${80 + i * 45}ms`,
                  transition: 'opacity 500ms, transform 500ms',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'none' : 'translateY(12px)',
                }}
              >
                <span className="font-montserrat text-[9px] tracking-[0.2em] text-brand-clay">
                  0{i + 1}
                </span>
                <span className="text-2xl font-light tracking-[0.06em] text-brand-ink group-hover:text-brand-clay transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
            <Link
              to="/admin"
              className="mt-6 font-montserrat text-[10px] tracking-[0.22em] text-brand-gray"
            >
              ADMIN LOGIN
            </Link>
          </div>

          <div className="text-[11px] leading-relaxed text-brand-gray">
            <p className="font-montserrat tracking-[0.2em] text-brand-ink mb-2">THE H BRAND</p>
            <p>광주광역시 광산구 풍영로 206, 3층</p>
            <p>010-5430-0452 · thehbrand@naver.com</p>
            <div className="flex gap-4 mt-4 font-montserrat tracking-[0.16em] text-[10px] text-brand-ink">
              <a href="https://www.instagram.com/design_theh" target="_blank" rel="noopener noreferrer">
                INSTAGRAM
              </a>
              <a href="https://blog.naver.com/design_theh_" target="_blank" rel="noopener noreferrer">
                BLOG
              </a>
              <a
                href="https://pf.kakao.com/_xbAies/chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                KAKAO
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
