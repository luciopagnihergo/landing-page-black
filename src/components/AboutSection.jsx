import { Wine, Award, Users, MapPin } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Selección Premium",
      description: "Cuidadosa selección de vinos y bebidas de las mejores bodegas y productores artesanales.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Calidad Excepcional",
      description: "Cada producto pasa por rigurosos controles de calidad para garantizar la mejor experiencia.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experiencia Personalizada",
      description: "Nuestros sommeliers expertos te guían para encontrar la bebida perfecta para cada ocasión.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Origen Auténtico",
      description: "Trabajamos directamente con productores para traerte lo mejor de cada región vitivinícola.",
    },
  ]

  return (
    <section id="quienes-somos" className="pt-20 pb-10 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-akira">¿Quiénes Somos?</h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed font-aloevera">
            Somos apasionados por los vinos y bebidas premium. Nos dedicamos a crear experiencias únicas a través de una
            cuidadosa selección de productos excepcionales que despiertan los sentidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-black"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3 font-akira">{feature.title}</h3>
              <p className="text-black leading-relaxed font-aloevera">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
