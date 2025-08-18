"use client"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-black-dark via-gray-very-dark to-black-dark flex items-center"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight font-akira">
                <span className="text-white">BLACK</span>
                <br />
                <span className="text-white">Vinos & Bebidas</span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-light font-aloevera">Experiencias Premium</p>
            </div>

            <p className="text-lg text-white leading-relaxed max-w-lg font-aloevera">
              Descubre nuestra selección exclusiva de vinos premium y bebidas artesanales. Cada botella cuenta una
              historia única de tradición y excelencia.
            </p>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-medium/20 rounded-full blur-3xl"></div>
              <img
                src="/Logos/Black-En-blanco.png"
                alt="Black Vinos & Bebidas"
                width={400}
                height={200}
                className="relative z-10 w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
