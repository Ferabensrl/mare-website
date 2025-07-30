import React, { useState } from 'react';

interface ImageCarouselProps {
  imagenes: string[];
  imagenVariantes?: string;
  altText: string;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  imagenes, 
  imagenVariantes, 
  altText, 
  className = "" 
}) => {
  // Crear array con todas las imágenes disponibles
  const todasLasImagenes = [...(imagenes || [])];
  if (imagenVariantes) {
    todasLasImagenes.push(imagenVariantes);
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // Si no hay imágenes, mostrar placeholder
  if (todasLasImagenes.length === 0) {
    return (
      <div className={`aspect-square bg-gradient-to-br from-mare-cream to-mare-accent flex items-center justify-center ${className}`}>
        <span className="text-mare-dark font-medium">Sin imagen</span>
      </div>
    );
  }

  // Si solo hay una imagen, mostrar sin controles
  if (todasLasImagenes.length === 1) {
    return (
      <div className={`aspect-square bg-gradient-to-br from-mare-cream to-mare-accent flex items-center justify-center relative overflow-hidden ${className}`}>
        <img 
          src={`/imagenes/${todasLasImagenes[0]}`} 
          alt={altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
          }}
        />
        <div className="w-full h-full bg-gradient-to-br from-mare-cream to-mare-accent flex items-center justify-center" style={{display: 'none'}}>
          <span className="text-mare-dark font-medium">Error al cargar</span>
        </div>
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? todasLasImagenes.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === todasLasImagenes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch handlers para móvil
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div className={`aspect-square bg-gradient-to-br from-mare-cream to-mare-accent relative overflow-hidden group ${className}`}>
      {/* Carrusel de imágenes */}
      <div 
        className="w-full h-full flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {todasLasImagenes.map((imagen, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center">
            <img 
              src={`/imagenes/${imagen}`} 
              alt={`${altText} - Imagen ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-mare-cream to-mare-accent flex items-center justify-center" style={{display: 'none'}}>
              <span className="text-mare-dark font-medium">Error al cargar</span>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación - Solo visible en hover para desktop */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70 z-10"
        aria-label="Imagen anterior"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70 z-10"
        aria-label="Imagen siguiente"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores de imagen */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {todasLasImagenes.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${
              index === currentIndex 
                ? 'bg-white scale-110' 
                : 'bg-black bg-opacity-30 hover:bg-opacity-50'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador de imágenes */}
      <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
        {currentIndex + 1} / {todasLasImagenes.length}
      </div>
    </div>
  );
};

export default ImageCarousel;