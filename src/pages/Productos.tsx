import React, { useState, useMemo } from 'react';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import ImageCarousel from '../components/ui/ImageCarousel';
import productosReales from '../data/productos-web.json';

// Extraer categorías únicas de los productos reales
const categoriasUnicas = ['Todas', ...Array.from(new Set(productosReales.map(p => p.categoria)))];

// Extraer colores únicos de los productos reales
const coloresUnicos = ['Todos', ...Array.from(new Set(
  productosReales.flatMap(p => Object.keys(p.colores || {}))
))];

const Productos: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [colorSeleccionado, setColorSeleccionado] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = useMemo(() => {
    return productosReales.filter(producto => {
      const matchCategoria = categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada;
      const matchColor = colorSeleccionado === 'Todos' || Object.keys(producto.colores).includes(colorSeleccionado);
      const matchBusqueda = busqueda === '' || 
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(busqueda.toLowerCase());
      
      return matchCategoria && matchColor && matchBusqueda;
    });
  }, [categoriaSeleccionada, colorSeleccionado, busqueda]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-mare-light to-mare-cream">
        <div className="container-mare">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-mare-dark mb-6 animate-slide-up">
              Nuestros Productos
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in">
              Descubre nuestra colección de accesorios diseñados para realzar tu estilo único. 
              Cada pieza ha sido cuidadosamente seleccionada para ofrecerte calidad y elegancia.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-3 md:py-4 bg-white sticky top-18 md:top-20 z-40 shadow-sm">
        <div className="container-mare">
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4 items-center justify-between">
            
            {/* Búsqueda */}
            <div className="w-full lg:w-80">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-mare-brown focus:border-transparent transition-all duration-300"
                />
                <svg className="absolute left-3 top-2.5 md:top-3.5 w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filtros de categoría y color */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full lg:w-auto">
              
              {/* Categorías */}
              <select
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                className="px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-mare-brown focus:border-transparent transition-all duration-300"
              >
                {categoriasUnicas.map(categoria => (
                  <option key={categoria} value={categoria}>{categoria}</option>
                ))}
              </select>

              {/* Colores */}
              <select
                value={colorSeleccionado}
                onChange={(e) => setColorSeleccionado(e.target.value)}
                className="px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-mare-brown focus:border-transparent transition-all duration-300"
              >
                <option value="Todos">Todos los colores</option>
                {coloresUnicos.slice(1).map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>

        </div>
      </section>

      {/* Grid de Productos */}
      <section className="section-padding bg-mare-light">
        <div className="container-mare">
          {productosFiltrados.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron productos</h3>
              <p className="text-gray-500">Intenta cambiar los filtros o la búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {productosFiltrados.map((producto) => (
                <div key={producto.codigo} className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                  
                  {/* Carrusel de imágenes */}
                  <div className="relative">
                    <ImageCarousel 
                      imagenes={producto.imagenes || []}
                      imagenVariantes={producto.imagenVariantes}
                      altText={producto.nombre}
                    />
                    
                    {/* Badge de categoría */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-mare-brown text-white text-xs font-medium px-2 py-1 rounded-full">
                        {producto.categoria}
                      </span>
                    </div>
                    
                    {/* Badge sin color */}
                    {producto.sinColor && (
                      <div className="absolute top-3 right-3 z-20">
                        <span className="bg-gray-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                          Sin color
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-serif text-lg font-semibold text-mare-dark mb-2 group-hover:text-mare-brown transition-colors duration-300">
                        {producto.nombre}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Código: <span className="font-medium text-mare-brown">{producto.codigo}</span>
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {producto.descripcion}
                      </p>
                    </div>

                    {/* Medidas */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500">
                        <span className="font-medium">Medidas:</span> {producto.medidas}
                      </p>
                    </div>

                    {/* Colores disponibles */}
                    {!producto.sinColor && Object.keys(producto.colores).length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2 font-medium">Colores disponibles:</p>
                        <div className="flex flex-wrap gap-1">
                          {Object.keys(producto.colores).map(color => (
                            <span 
                              key={color}
                              className="text-xs bg-mare-cream text-mare-dark px-2 py-1 rounded-full"
                            >
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Variantes */}
                    {Object.keys(producto.variantes).length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2 font-medium">Configuraciones:</p>
                        <div className="flex flex-wrap gap-1">
                          {Object.keys(producto.variantes).map(variante => (
                            <span 
                              key={variante}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {variante}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Surtido permitido */}
                    {producto.permitirSurtido && (
                      <div className="mb-4">
                        <span className="inline-flex items-center text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Permite surtido
                        </span>
                      </div>
                    )}

                    {/* Botón de interés */}
                    <WhatsAppButton 
                      productCode={producto.codigo}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="section-padding bg-gradient-to-r from-mare-brown to-mare-dark text-white">
        <div className="container-mare text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            ¿No encontraste lo que buscas?
          </h2>
          <p className="text-xl mb-8 text-mare-cream max-w-3xl mx-auto">
            Contáctanos para consultas sobre productos específicos o para conocer sobre próximos lanzamientos.
          </p>
          <WhatsAppButton 
            message="Hola, quiero consultar sobre productos MARÉ que no encuentro en la web"
            className="bg-green-500 hover:bg-green-600 text-lg px-8 py-4"
          >
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
};

export default Productos;