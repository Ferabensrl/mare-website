import React from 'react';

const SobreNosotros: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-mare-light to-mare-cream">
        <div className="container-mare">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-mare-dark mb-6 animate-slide-up">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in">
              Conoce la historia detrás de MARÉ, una marca que nació del amor por los detalles 
              y la pasión por crear accesorios que realcen la belleza natural de cada mujer.
            </p>
          </div>
        </div>
      </section>

      {/* Historia de MARÉ */}
      <section className="section-padding bg-white">
        <div className="container-mare">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl font-bold text-mare-dark mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  MARÉ nació como parte de la visión de <strong className="text-mare-brown">Feraben SRL</strong>, 
                  una empresa uruguaya especializada en la importación y distribución de accesorios de calidad premium.
                </p>
                <p>
                  Desde nuestros inicios, hemos creído que los accesorios no son solo complementos, 
                  sino expresiones de personalidad que definen y realzan el estilo único de cada persona.
                </p>
                <p>
                  Con años de experiencia en el mercado mayorista, decidimos crear MARÉ para acercar 
                  directamente a nuestros clientes finales la elegancia y calidad que siempre hemos ofrecido 
                  a través de nuestros distribuidores.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="h-96 relative overflow-hidden rounded-2xl shadow-soft">
                <img 
                  src="/sobre-mare.jpg" 
                  alt="Historia MARÉ - Tu estilo en cada detalle"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="section-padding bg-mare-light">
        <div className="container-mare">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Misión */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-mare-brown rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-mare-dark mb-4 text-center">
                Misión
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Ofrecer accesorios de calidad excepcional que permitan a cada mujer expresar 
                su estilo único con elegancia y confianza, mientras construimos relaciones 
                duraderas con nuestros clientes y distribuidores.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-mare-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-mare-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-mare-dark mb-4 text-center">
                Visión
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Ser la marca de accesorios de referencia en Uruguay, reconocida por nuestra 
                calidad, diseño y servicio excepcional, expandiendo nuestra presencia a nivel regional.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-mare-dark rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-mare-dark mb-4 text-center">
                Valores
              </h3>
              <ul className="text-gray-600 text-center space-y-2">
                <li><strong className="text-mare-brown">Calidad</strong> en cada producto</li>
                <li><strong className="text-mare-brown">Elegancia</strong> en el diseño</li>
                <li><strong className="text-mare-brown">Confianza</strong> en las relaciones</li>
                <li><strong className="text-mare-brown">Innovación</strong> constante</li>
                <li><strong className="text-mare-brown">Compromiso</strong> con el cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feraben SRL */}
      <section className="section-padding bg-white">
        <div className="container-mare">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-96 relative overflow-hidden rounded-2xl shadow-soft">
                <img 
                  src="/sobre-feraben.jpg" 
                  alt="Feraben SRL - Experiencia y tradición mayorista"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-mare-dark mb-6">
                Feraben SRL
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Detrás de MARÉ se encuentra <strong className="text-mare-brown">Feraben SRL</strong>, 
                  una empresa con sólida experiencia en el mercado uruguayo de accesorios y bijouterie.
                </p>
                <p>
                  Como empresa mayorista, hemos construido una red de distribuidores que confía en 
                  nuestra calidad y servicio. Trabajamos directamente con fabricantes especializados 
                  para asegurar que cada producto cumpla con nuestros estándares de excelencia.
                </p>
                <p>
                  Nuestra experiencia en el mercado B2B nos ha permitido entender profundamente 
                  las necesidades del mercado uruguayo, conocimiento que volcamos en cada producto MARÉ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orientación de Marca */}
      <section className="section-padding bg-gradient-to-r from-mare-brown to-mare-dark text-white">
        <div className="container-mare">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
              La Elegancia en Cada Detalle
            </h2>
            <p className="text-xl text-mare-cream mb-8 leading-relaxed">
              En MARÉ, creemos que los verdaderos detalles marcan la diferencia. 
              Cada pieza es cuidadosamente seleccionada y diseñada para complementar 
              la belleza natural de quien la porta.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-mare-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-mare-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Diseño</h3>
                <p className="text-mare-cream">Formas elegantes que trascienden tendencias</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-mare-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-mare-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Detalles</h3>
                <p className="text-mare-cream">Acabados perfectos en cada elemento</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-mare-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-mare-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Calidad</h3>
                <p className="text-mare-cream">Materiales premium para mayor durabilidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;