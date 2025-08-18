"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black-dark/95 backdrop-blur-sm border-b border-gray-very-dark">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/Logos/Black-En-blanco.png"
              alt="Black Vinos & Bebidas"
              width={80}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-white hover:text-gray-light px-3 py-2 text-sm font-medium transition-colors font-aloevera"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("quienes-somos")}
                className="text-white hover:text-gray-light px-3 py-2 text-sm font-medium transition-colors font-aloevera"
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-white hover:text-gray-light px-3 py-2 text-sm font-medium transition-colors font-aloevera"
              >
                Contacto
              </button>
              <button
                className="p-2 text-sm rounded-md bg-gray-medium hover:bg-gray-light text-white font-medium cursor-pointer font-aloevera transition-colors"
                onClick={() => window.open("https://google.com", "_blank")}
              >
                Solicitud para Catálogo
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-very-light hover:text-gray-light p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black-dark border-t border-gray-very-dark">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-white hover:text-gray-light block px-3 py-2 text-base font-medium w-full text-left font-aloevera"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("quienes-somos")}
                className="text-white hover:text-gray-light block px-3 py-2 text-base font-medium w-full text-left font-aloevera"
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-white hover:text-gray-light block px-3 py-2 text-base font-medium w-full text-left font-aloevera"
              >
                Contacto
              </button>
              <button
                className="p-1 rounded-md bg-gray-light hover:bg-gray-light text-white w-full mt-2 font-aloevera transition-colors"
                onClick={() => window.open("https://google.com", "_blank")}
              >
                Solicitud para Catálogo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
