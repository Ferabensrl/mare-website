import React from 'react';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const Contacto: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-mare-light to-mare-cream">
        <div className="container-mare">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-mare-dark mb-6 animate-slide-up">
              Contacto
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in">
              ¿Querés vender MARÉ en tu comercio? ¿Querés saber dónde encontrar nuestros productos? 
              ¡Estamos aquí para ayudarte!
            </p>
          </div>
        </div>
      </section>

      {/* Opciones de Contacto */}
      <section className="section-padding bg-white">
        <div className="container-mare">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Para Distribuidores */}
            <div className="bg-gradient-to-br from-mare-brown to-mare-dark rounded-3xl p-8 lg:p-12 text-white">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-mare-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-mare-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2M5 21m0 0H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="font-serif text-3xl font-bold mb-4">
                  Para Distribuidores
                </h2>
                <p className="text-mare-cream leading-relaxed">
                  ¿Tenés un comercio y querés vender productos MARÉ? 
                  Únete a nuestra red de distribuidores y ofrece elegancia a tus clientes.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-mare-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Productos de calidad premium</h3>
                    <p className="text-mare-cream text-sm">Accesorios cuidadosamente seleccionados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-mare-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Soporte comercial completo</h3>
                    <p className="text-mare-cream text-sm">Te acompañamos en todo el proceso</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-mare-accent flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Condiciones preferenciales</h3>
                    <p className="text-mare-cream text-sm">Precios mayoristas competitivos</p>
                  </div>
                </div>
              </div>

              <WhatsAppButton 
                message="Hola, tengo un comercio y me interesa vender productos MARÉ. ¿Podrían brindarme información sobre cómo ser distribuidor?"
                className="w-full bg-mare-accent hover:bg-mare-warm text-mare-dark"
              >
                Quiero ser distribuidor
              </WhatsAppButton>
            </div>

            {/* Para Consumidores */}
            <div className="bg-mare-light rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-mare-brown rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="font-serif text-3xl font-bold text-mare-dark mb-4">
                  Para Consumidores
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  ¿Querés encontrar productos MARÉ cerca de tu ubicación? 
                  Te ayudamos a conectar con nuestros puntos de venta.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-mare-brown flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-mare-dark mb-1">Encuentra puntos de venta</h3>
                    <p className="text-gray-600 text-sm">Ubicamos el comercio más cercano a ti</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-mare-brown flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-mare-dark mb-1">Consultas sobre productos</h3>
                    <p className="text-gray-600 text-sm">Información detallada de cada artículo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-mare-brown flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-mare-dark mb-1">Asesoramiento personalizado</h3>
                    <p className="text-gray-600 text-sm">Te ayudamos a encontrar tu estilo ideal</p>
                  </div>
                </div>
              </div>

              <WhatsAppButton 
                message="Hola, soy consumidor final y me interesan los productos MARÉ. ¿Podrían ayudarme a encontrar dónde comprarlos cerca de mi ubicación?"
                className="w-full"
              >
                Encontrar punto de venta
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="section-padding bg-mare-light">
        <div className="container-mare">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-mare-dark mb-4">
                Información de Contacto
              </h2>
              <p className="text-gray-600">
                Múltiples formas de conectar con nosotros
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-mare-dark mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Respuesta inmediata</p>
                <a 
                  href="https://wa.me/59897998999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mare-brown font-medium hover:text-mare-dark transition-colors duration-300"
                >
                  +598 97 998 999
                </a>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-16 h-16 bg-mare-brown rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-mare-dark mb-3">Email</h3>
                <p className="text-gray-600 mb-4">Consultas detalladas</p>
                <a 
                  href="mailto:mareuystore@gmail.com"
                  className="text-mare-brown font-medium hover:text-mare-dark transition-colors duration-300"
                >
                  mareuystore@gmail.com
                </a>
              </div>

              {/* Instagram */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-mare-dark mb-3">Instagram</h3>
                <p className="text-gray-600 mb-4">Inspiración diaria</p>
                <a 
                  href="https://instagram.com/mare_uy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mare-brown font-medium hover:text-mare-dark transition-colors duration-300"
                >
                  @mare_uy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-mare-brown to-mare-dark text-white">
        <div className="container-mare text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para conocer MARÉ?
          </h2>
          <p className="text-xl text-mare-cream mb-8 max-w-3xl mx-auto">
            No importa si eres distribuidor o consumidor final, 
            estamos aquí para ayudarte a descubrir la elegancia en cada detalle.
          </p>
          <WhatsAppButton 
            message="Hola, quiero conocer más sobre MARÉ y sus productos"
            className="bg-mare-accent hover:bg-mare-warm text-mare-dark text-lg px-8 py-4"
          >
            Contactar ahora
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
};

export default Contacto;