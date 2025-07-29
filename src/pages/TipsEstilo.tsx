import React from 'react';
import { Link } from 'react-router-dom';

// Datos placeholder para el blog - serán editables desde JSON
const tipsPlaceholder = [
  {
    id: '1',
    titulo: 'Cómo combinar cinturones con diferentes outfits',
    descripcion: 'Descubre las reglas básicas para elegir el cinturón perfecto según tu look y ocasión.',
    imagen: 'placeholder-tip-1.jpg',
    fecha: '2025-01-15',
    tags: ['Cinturones', 'Styling', 'Básicos'],
    contenido: 'El cinturón es uno de los accesorios más versátiles...'
  },
  {
    id: '2',
    titulo: 'Tendencias en bijouterie para esta temporada',
    descripcion: 'Las joyas que están marcando tendencia y cómo incorporarlas a tu estilo personal.',
    imagen: 'placeholder-tip-2.jpg',
    fecha: '2025-01-10',
    tags: ['Bijouterie', 'Tendencias', 'Temporada'],
    contenido: 'Esta temporada se caracteriza por...'
  },
  {
    id: '3',
    titulo: 'El arte de elegir la cartera perfecta',
    descripción: 'Guía completa para seleccionar carteras que complementen tu figura y estilo de vida.',
    imagen: 'placeholder-tip-3.jpg',
    fecha: '2025-01-05',
    tags: ['Carteras', 'Guía', 'Estilo Personal'],
    contenido: 'La cartera ideal debe equilibrar funcionalidad y estilo...'
  },
  {
    id: '4',
    titulo: 'Cuidados esenciales para tus accesorios',
    descripcion: 'Tips prácticos para mantener tus accesorios MARÉ como nuevos por más tiempo.',
    imagen: 'placeholder-tip-4.jpg',
    fecha: '2024-12-28',
    tags: ['Cuidados', 'Mantenimiento', 'Durabilidad'],
    contenido: 'Un buen cuidado prolonga la vida de tus accesorios...'
  },
  {
    id: '5',
    titulo: 'Accesorios para ocasiones especiales',
    descripcion: 'Cómo elegir los accesorios perfectos para bodas, fiestas y eventos importantes.',
    imagen: 'placeholder-tip-5.jpg',
    fecha: '2024-12-20',
    tags: ['Eventos', 'Ocasiones Especiales', 'Elegancia'],
    contenido: 'Las ocasiones especiales requieren un toque extra...'
  },
  {
    id: '6',
    titulo: 'Crear looks versátiles con pocos accesorios',
    descripcion: 'Maximiza tu guardarropa con accesorios clave que funcionan para múltiples ocasiones.',
    imagen: 'placeholder-tip-6.jpg',
    fecha: '2024-12-15',
    tags: ['Versatilidad', 'Minimalismo', 'Guardarropa'],
    contenido: 'La clave está en elegir piezas que se adapten...'
  }
];

const TipsEstilo: React.FC = () => {
  const formatearFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-mare-light to-mare-cream">
        <div className="container-mare">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-mare-dark mb-6 animate-slide-up">
              Tips & Estilo
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in">
              Descubre consejos de estilo, tendencias y secretos para sacar el máximo provecho 
              de tus accesorios MARÉ. Tu guía personal hacia la elegancia.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="container-mare">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-mare-brown to-mare-dark rounded-3xl overflow-hidden text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="p-8 lg:p-12">
                  <span className="inline-block bg-mare-accent text-mare-dark text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Destacado
                  </span>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
                    {tipsPlaceholder[0].titulo}
                  </h2>
                  <p className="text-mare-cream mb-6 leading-relaxed">
                    {tipsPlaceholder[0].descripcion}
                  </p>
                  <div className="flex items-center text-sm text-mare-cream mb-6">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatearFecha(tipsPlaceholder[0].fecha)}
                  </div>
                  <button className="btn-secondary bg-white text-mare-dark hover:bg-mare-cream">
                    Leer artículo completo
                  </button>
                </div>
                <div className="h-64 lg:h-96 bg-gradient-to-br from-mare-accent to-mare-warm flex items-center justify-center">
                  <span className="text-mare-dark font-medium">
                    {tipsPlaceholder[0].imagen}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-mare-light">
        <div className="container-mare">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-mare-dark mb-4">
              Todos los Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora nuestra colección completa de consejos de estilo y tendencias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tipsPlaceholder.slice(1).map((tip) => (
              <article key={tip.id} className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                
                {/* Imagen */}
                <div className="h-48 bg-gradient-to-br from-mare-cream to-mare-accent flex items-center justify-center relative overflow-hidden">
                  <span className="text-mare-dark font-medium">
                    {tip.imagen}
                  </span>
                  
                  {/* Overlay con tags */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 text-mare-dark text-xs font-medium px-2 py-1 rounded-full">
                      {tip.tags[0]}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatearFecha(tip.fecha)}
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-mare-dark mb-3 group-hover:text-mare-brown transition-colors duration-300">
                    {tip.titulo}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {tip.descripcion}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tip.tags.slice(1).map(tag => (
                      <span 
                        key={tag}
                        className="text-xs bg-mare-cream text-mare-dark px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-mare-brown font-medium hover:text-mare-dark transition-colors duration-300 text-sm">
                    Leer más →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Cargar más artículos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-mare-brown to-mare-dark text-white">
        <div className="container-mare">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Mantente al día con MARÉ
            </h2>
            <p className="text-xl text-mare-cream mb-8 leading-relaxed">
              Síguenos en Instagram para recibir los últimos tips de estilo, 
              lanzamientos de productos y inspiración diaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://instagram.com/mare.uy" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-mare-dark hover:bg-mare-cream text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300 inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Seguir en Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TipsEstilo;