import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: '首页', href: '/', hash: '#home' },
  { name: '插画作品', href: '/', hash: '#illustration' },
  { name: 'UI/UX作品', href: '/', hash: '#uiux' },
  { name: '近期作品', href: '/', hash: '#recent' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/#home" 
          onClick={() => handleNavClick('#home')}
          className="font-display text-2xl font-semibold tracking-tighter hover:opacity-80 transition-opacity"
        >
          RUOXU
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-xs font-medium tracking-[0.2em] uppercase">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={`${item.href}${item.hash}`} 
                onClick={() => handleNavClick(item.hash)}
                className="text-text-muted hover:text-text-main transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-mint transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden transition-colors ${isMenuOpen ? 'text-accent-mint' : 'text-text-main'}`}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-100"
      >
        <ul className="px-6 py-8 space-y-6 text-sm font-medium tracking-[0.2em] uppercase text-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={`${item.href}${item.hash}`} 
                onClick={() => handleNavClick(item.hash)}
                className="text-text-muted hover:text-accent-mint transition-colors block"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}
