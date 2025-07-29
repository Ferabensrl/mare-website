import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Nosotros', path: '/sobre' },
    { name: 'Productos', path: '/productos' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-light shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-mare">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/mareuy-logo.png" 
              alt="MARÉ" 
              className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="font-serif text-2xl md:text-3xl font-bold text-mare-brown">
                MARÉ
              </span>
              <p className="text-xs md:text-sm text-mare-dark font-medium -mt-1">
                Tu estilo en cada detalle
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 font-medium transition-all duration-300 hover:text-mare-brown ${
                  isActivePath(item.path)
                    ? 'text-mare-brown'
                    : isScrolled 
                      ? 'text-mare-dark hover:text-mare-brown' 
                      : 'text-mare-accent hover:text-mare-cream'
                }`}
              >
                {item.name}
                {isActivePath(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-mare-brown"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-mare-cream' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-light shadow-soft animate-fade-in">
            <div className="container-mare py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 font-medium transition-colors duration-300 hover:bg-mare-cream hover:text-mare-brown rounded-lg ${
                    isActivePath(item.path) ? 'text-mare-brown bg-mare-cream' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;