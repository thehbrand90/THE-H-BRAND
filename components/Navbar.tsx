import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Dynamic text color based on scroll and menu state
  // On mobile, if menu is closed and we are on top of home, text is white. 
  // If menu is open, text should be dark.
  const isHomeTop = location.pathname === '/' && !isScrolled;
  
  const textColor = (isMenuOpen || !isHomeTop) ? 'text-[#222625]' : 'text-white';
  const logoColor = (isMenuOpen || !isHomeTop) ? 'text-[#222625]' : 'text-white';
  const bgColor = isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent';
  const borderColor = (isMenuOpen || !isHomeTop) ? 'border-gray-300' : 'border-white/20';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${bgColor} ${borderColor} ${isMenuOpen ? 'bg-[#f1f1f1] border-none' : ''}`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-20 md:h-24 flex justify-between items-center">
        
        {/* LEFT: Logo (Horizontal) */}
        <div className="flex items-center z-50 relative">
          <Link to="/" className="group flex items-baseline" onClick={() => setIsMenuOpen(false)}>
             <span className={`text-xl md:text-3xl font-bold tracking-widest transition-colors duration-300 ${logoColor}`}>
                THE H
             </span>
             <span className={`text-xl md:text-3xl font-light tracking-widest transition-colors duration-300 ${logoColor} ml-2`}>
                BRAND
             </span>
             <span className={`hidden md:inline-block text-xs md:text-sm font-light tracking-widest transition-colors duration-300 ${logoColor} ml-1`}>
                co.,Ltd
             </span>
          </Link>
        </div>

        {/* RIGHT: Desktop Menu & Mobile Button */}
        <div className="flex items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-semibold tracking-widest hover:opacity-60 transition-opacity ${textColor}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* User / Admin Icon */}
          <Link 
            to="/admin"
            className={`hidden md:block z-50 p-2 ml-4 md:ml-10 hover:opacity-60 transition-opacity ${textColor}`}
            aria-label="Admin Login"
          >
            <User size={24} strokeWidth={1.5} />
          </Link>

          {/* Mobile Menu Button - Hamburger */}
          <button 
            className={`md:hidden z-50 p-2 ml-2 transition-colors duration-300 ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-[#f1f1f1] z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ height: '100dvh' }} // Use dynamic viewport height for mobile browsers
        >
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-2xl font-light tracking-wider text-[#222625] hover:text-gray-500 transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
                to="/admin"
                className="text-lg font-light tracking-wider text-[#222625] hover:text-gray-500 transition-colors pt-8 border-t border-gray-300 w-20 mx-auto"
              >
                ADMIN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;