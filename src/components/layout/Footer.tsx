import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mare-dark text-white">
      <div className="container-mare section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/mareuy-logo.png" 
                alt="MARÉ" 
                className="h-12 w-auto"
              />
              <div>
                <span className="font-serif text-2xl font-bold text-white">
                  MARÉ
                </span>
                <p className="text-sm text-mare-cream -mt-1">
                  Tu estilo en cada detalle
                </p>
              </div>
            </div>
            <p className="text-mare-cream mb-6 leading-relaxed max-w-md">
              Descubre la elegancia en cada accesorio. Accesorios, bijouterie y marroquinería 
              de calidad premium que complementan tu estilo único.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/mare_uy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-mare-brown hover:bg-mare-accent rounded-full transition-colors duration-300 group"
                aria-label="Síguenos en Instagram"
              >
                <svg className="w-5 h-5 text-white group-hover:text-mare-dark transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/59897998999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-mare-brown hover:bg-mare-accent rounded-full transition-colors duration-300 group"
                aria-label="Contáctanos por WhatsApp"
              >
                <svg className="w-5 h-5 text-white group-hover:text-mare-dark transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Enlaces</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-mare-cream hover:text-white transition-colors duration-300">
                Inicio
              </Link>
              <Link to="/sobre" className="block text-mare-cream hover:text-white transition-colors duration-300">
                Sobre Nosotros
              </Link>
              <Link to="/productos" className="block text-mare-cream hover:text-white transition-colors duration-300">
                Productos
              </Link>
              <Link to="/contacto" className="block text-mare-cream hover:text-white transition-colors duration-300">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-3 text-mare-cream">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-mare-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Uruguay</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-mare-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/59897998999" className="hover:text-white transition-colors duration-300">
                  +598 97 998 999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-mare-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <a href="mailto:mareuystore@gmail.com" className="hover:text-white transition-colors duration-300">
                  mareuystore@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-mare-brown/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-mare-cream text-sm">
              © {currentYear} MARÉ - Feraben SRL. Todos los derechos reservados.
            </p>
            <p className="text-mare-cream text-sm">
              Diseñado con ❤️ en Uruguay
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;