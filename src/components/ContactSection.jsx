"use client"

import { Mail, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-black-dark">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-akira">Contacto</h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-aloevera">
            Estamos aquí para ayudarte a descubrir el mundo de los vinos y bebidas premium. Contáctanos para conocer
            nuestra selección exclusiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-very-light rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-6 font-akira">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="p-3 h-full flex justify-center items-center gap-2">
                    <a className="text-black hover:text-white transition-colors font-aloevera">
                      contacto@blackvinos.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-whitet" />
                  </div>
                  <div className="px-3 text-left h-full">
                    <p className="text-black font-aloevera">Buenos Aires, Argentina</p>
                    <p className="text-black font-aloevera">Distribución Nacional</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="px-3 text-left h-full">
                    <p className="text-black font-aloevera">Lunes a Viernes: 9:00 - 19:00</p>
                    <p className="text-black font-aloevera">Sábados: 9:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-light rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4 font-akira">¿Necesitas nuestro catálogo?</h3>
              <p className="text-black t mb-6 font-aloevera">
                Solicita acceso a nuestro catálogo exclusivo de vinos y bebidas premium.
              </p>
              <button
                className="rounded-md bg-black text-white hover:bg-gray-medium font-semibold px-8 py-3 font-aloevera transition-colors"
                onClick={() => window.open("https://google.com", "_blank")}
              >
                Solicitar Catálogo
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-very-light rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6 font-akira">Envíanos un Mensaje</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-black mb-2 font-aloevera">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full px-4 py-3 bg-gray-very-light border border-black rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-aloevera"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-black mb-2 font-aloevera">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    className="w-full px-4 py-3 bg-gray-very-light border border-black rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-aloevera"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2 font-aloevera">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-very-light border border-black rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-aloevera"
                  placeholder="tu@email.com"
                />
              </div>

             <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-black mb-2 font-aloevera">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                className="w-full px-4 py-3 bg-gray-very-light border border-black rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-aloevera"
                placeholder="+54 9 11 1234-5678"
              />
            </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-black mb-2 font-aloevera">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-very-light border border-black rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none font-aloevera"
                  placeholder="Cuéntanos sobre tus preferencias o consulta..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-black hover:bg-gray-medium text-gray-very-light font-semibold py-3 font-aloevera transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
