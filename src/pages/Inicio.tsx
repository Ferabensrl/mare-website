import React from 'react';
import { Link } from 'react-router-dom';

const Inicio: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section con Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video-institucional.mp4" type="video/mp4" />
          {/* Fallback para navegadores que no soporten video */}
          <div className="absolute inset-0 bg-gradient-to-br from-mare-brown/80 to-mare-dark/90"></div>
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-mare-brown/60 to-mare-dark/70"></div>
        
        {/* Contenido superpuesto */}
        <div className="relative z-10 text-center text-white px-4">
          <div className="animate-fade-in">
            <img 
              src="/mareuy-logo.png" 
              alt="MARÉ" 
              className="h-24 w-auto mx-auto mb-8 animate-float"
            />
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-shadow">
              MARÉ
            </h1>
            <p className="text-xl md:text-2xl font-light mb-12 text-mare-cream">
              Tu estilo en cada detalle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/productos" 
                className="btn-primary text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300"
              >
                Descubrir Productos
              </Link>
              <Link 
                to="/sobre" 
                className="btn-secondary bg-white/20 text-white border-white hover:bg-white hover:text-mare-dark text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300"
              >
                Conocer MARÉ
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Sección de Destacados */}
      <section className="section-padding bg-mare-light">
        <div className="container-mare">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-mare-dark mb-6">
              Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre las últimas tendencias y promociones especiales de MARÉ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destacado 1 - Nueva Colección */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-elegant transition-all duration-300">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="/destacado-nueva-coleccion.jpg" 
                  alt="Nueva Colección MARÉ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-mare-dark mb-3">
                  Nueva Colección
                </h3>
                <p className="text-gray-600 mb-4">
                  Descubre los últimos diseños que complementarán tu estilo único con elegancia y sofisticación.
                </p>
                <Link 
                  to="/productos" 
                  className="text-mare-brown font-medium hover:text-mare-dark transition-colors duration-300"
                >
                  Ver Colección →
                </Link>
              </div>
            </div>

            {/* Destacado 2 - Catálogo Completo */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-elegant transition-all duration-300">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="/destacado-tips-estilo.jpg" 
                  alt="Catálogo Completo MARÉ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-mare-dark mb-3">
                  Catálogo Completo
                </h3>
                <p className="text-gray-600 mb-4">
                  Explora nuestra amplia gama de accesorios, bijouterie y marroquinería para encontrar tu estilo perfecto.
                </p>
                <Link 
                  to="/productos" 
                  className="text-mare-brown font-medium hover:text-mare-dark transition-colors duration-300"
                >
                  Ver Productos →
                </Link>
              </div>
            </div>

            {/* Destacado 3 - Distribuidores */}
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-elegant transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="/destacado-distribuidores.jpg" 
                  alt="Distribuidores MARÉ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-mare-dark mb-3">
                  Distribuidores
                </h3>
                <p className="text-gray-600 mb-4">
                  ¿Quieres vender MARÉ en tu comercio? Únete a nuestra red de distribuidores.
                </p>
                <Link 
                  to="/contacto" 
                  className="text-mare-brown font-medium hover:text-mare-dark transition-colors duration-300"
                >
                  Contactar →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Llamada a la Acción */}
      <section className="section-padding bg-gradient-to-r from-mare-brown to-mare-dark text-white">
        <div className="container-mare text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Encuentra MARÉ cerca de ti
          </h2>
          <p className="text-xl mb-8 text-mare-cream max-w-3xl mx-auto">
            ¿Buscas nuestros productos? ¿Quieres ser distribuidor? 
            Conectamos contigo para que puedas disfrutar de la elegancia MARÉ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/59897998999?text=Hola,%20quiero%20encontrar%20productos%20MARÉ%20cerca%20de%20mi%20ubicación"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-white text-mare-dark hover:bg-mare-cream text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300"
            >
              Encontrar Punto de Venta
            </a>
            <Link 
              to="/contacto" 
              className="btn-primary bg-mare-accent hover:bg-mare-warm text-mare-dark text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300"
            >
              Ser Distribuidor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;