"use client"

export default function Footer() {
  return (
    <footer className="bg-black-dark border-t border-gray-very-dark">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-left grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src="/Logos/Black-En-blanco.png"
              alt="Black Vinos & Bebidas"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-gray-medium leading-relaxed font-aloevera">
              Experiencias premium en vinos y bebidas artesanales. Descubre sabores únicos y momentos inolvidables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-very-light font-semibold mb-4 font-akira">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-medium hover:text-gray-light transition-colors font-aloevera"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("quienes-somos")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-medium hover:text-gray-light transition-colors font-aloevera"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-medium hover:text-gray-light transition-colors font-aloevera"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-very-light font-semibold mb-4 font-akira">Contacto</h3>
            <div className="space-y-2">
              <p className="text-gray-medium font-aloevera">contacto@blackvinos.com</p>
              <p className="text-gray-medium font-aloevera">Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-very-dark mt-8 pt-8 text-center">
          <p className="text-gray-medium font-aloevera">© 2025 Black Vinos & Bebidas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
