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

  // Dynamic text color based on scroll and menu state
  const textColor = isScrolled || isMenuOpen || location.pathname !== '/' ? 'text-[#222625]' : 'text-white';
  const logoColor = isScrolled || isMenuOpen || location.pathname !== '/' ? 'text-[#222625]' : 'text-white';
  const bgColor = isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent';
  
  // Update border logic: 
  // If scrolled, menu is open, OR NOT on homepage -> use visible gray border
  // If on homepage and at top -> use subtle white border
  const borderColor = isScrolled || isMenuOpen || location.pathname !== '/' ? 'border-gray-300' : 'border-white/20';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${bgColor} ${borderColor}`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
        
        {/* LEFT: Logo (Horizontal) */}
        <div className="flex items-center z-50">
          <Link to="/" className="group flex items-baseline">
             <span className={`text-2xl md:text-3xl font-bold tracking-widest transition-colors duration-300 ${logoColor}`}>
                THE H
             </span>
             <span className={`text-2xl md:text-3xl font-light tracking-widest transition-colors duration-300 ${logoColor} ml-2`}>
                BRAND
             </span>
             <span className={`text-xs md:text-sm font-light tracking-widest transition-colors duration-300 ${logoColor} ml-1`}>
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
          
          {/* User / Admin Icon (Changed from Login to Admin) */}
          <Link 
            to="/admin"
            className={`z-50 p-2 ml-4 md:ml-10 hover:opacity-60 transition-opacity ${textColor}`}
            aria-label="Admin Login"
          >
            <User size={24} strokeWidth={1.5} />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden z-50 p-2 ml-2 ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#f1f1f1] flex flex-col justify-center items-center transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-3xl font-light tracking-wider text-[#222625] hover:text-gray-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
                to="/admin"
                className="text-3xl font-light tracking-wider text-[#222625] hover:text-gray-500 transition-colors pt-8 border-t border-gray-300 w-20 mx-auto"
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