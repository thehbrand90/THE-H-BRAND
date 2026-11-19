import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Link-in-bio landing page (thehbrand.com/bio).
 *
 * Rendered on its own, without the Navbar / Footer / FloatingContact rails, as
 * a single full-screen panel. Everything has to fit one viewport with no
 * scrolling on a 390×844 phone, so the three blocks (brand mark, main menu,
 * channels + CTA) are distributed with the menu centred between them.
 */
const Bio: React.FC = () => {
  React.useEffect(() => {
    const previous = document.title;
    document.title = 'THE H BRAND — 디자인 & 빌드';
    document.body.classList.add('bio-open');
    return () => {
      document.title = previous;
      document.body.classList.remove('bio-open');
    };
  }, []);

  return (
    <div className="bio-page">
      {/* Background photograph */}
      <img
        src="/media/brand/bio-bg.webp"
        alt=""
        aria-hidden="true"
        className="bio-bg"
        draggable={false}
      />
      <div className="bio-scrim" aria-hidden="true" />

      <div className="bio-inner">
        <header className="bio-head bio-enter" style={{ animationDelay: '120ms' }}>
          <Link to="/" className="bio-logo" aria-label="THE H BRAND 홈으로">
            THE H BRAND
          </Link>
        </header>

        <nav className="bio-menu bio-enter" aria-label="주요 메뉴" style={{ animationDelay: '260ms' }}>
          <Link to="/about" className="bio-menu-link">
            <span className="bio-bar" aria-hidden="true" />
            <span>About</span>
          </Link>
          <Link to="/portfolio" className="bio-menu-link">
            <span className="bio-bar" aria-hidden="true" />
            <span>Portfolio</span>
          </Link>
          <Link to="/reviews" className="bio-menu-link">
            <span className="bio-bar" aria-hidden="true" />
            <span>Reviews</span>
          </Link>
        </nav>

        <footer className="bio-foot bio-enter" style={{ animationDelay: '400ms' }}>
          <div className="bio-links">
            <a
              href="https://blog.naver.com/design_theh_"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-link"
            >
              <span className="bio-arrow" aria-hidden="true">
                →
              </span>
              Naver Blog
            </a>
            <a
              href="https://www.instagram.com/design_theh/"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-link"
            >
              <span className="bio-arrow" aria-hidden="true">
                →
              </span>
              Instagram
            </a>
            <a
              href="https://pf.kakao.com/_xbAies/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="bio-link"
            >
              <span className="bio-arrow" aria-hidden="true">
                →
              </span>
              KakaoTalk
            </a>
          </div>

          <a
            href="https://form.naver.com/response/zXGA29pGSWUSGBoLSE8xPw"
            target="_blank"
            rel="noopener noreferrer"
            className="bio-cta"
          >
            상담신청
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Bio;
