import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-stone pt-20 pb-10 px-6 md:px-20 border-t border-brand-dark/5">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-widest mb-4 text-brand-dark">(주) THE H BRAND</h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            THE H Brand는 공간을 설계하고 완성하는 법인입니다.<br/>
            고객은 디에이치를 기억하고, 계약은 디에이치브랜드가 책임집니다.
          </p>
        </div>
        
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-brown mb-4">Contact</h3>
          <p className="text-sm text-gray-600 mb-2">광주광역시 광산구 풍영로 206, 3층</p>
          <p className="text-sm text-gray-600 mb-2">010-5430-0452</p>
          <p className="text-sm text-gray-600">thehbrand@naver.com</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-brown mb-4">Social</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="http://instagram.com/design_theh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-600 hover:text-brand-dark transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="http://instagram.com/design_theh_" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-600 hover:text-brand-dark transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a 
                href="https://ohou.se/experts/myhome/14990007?type=summaries" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-gray-600 hover:text-brand-dark transition-colors"
              >
                OHouse
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-brand-dark/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <p>&copy; {new Date().getFullYear()} (주) THE H BRAND. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
                <Link to="/terms" className="hover:text-brand-dark transition-colors underline">
                    이용약관 (Terms of Use)
                </Link>
                <Link to="/privacy" className="hover:text-brand-dark transition-colors underline">
                    개인정보처리방침 (Privacy Policy)
                </Link>
            </div>
        </div>
        <p className="mt-4 md:mt-0">Design & Build in Gwangju/Jeonnam</p>
      </div>
    </footer>
  );
};

export default Footer;