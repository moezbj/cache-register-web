export default function Testimonials() {
    const testimonials = [
      {
        rating: 5,
        text: "Ce système de point de vente a transformé notre petit magasin de détail. L'interface est incroyablement intuitive et la fonctionnalité hors ligne est une bouée de sauvetage !",
        name: "Wahid dridi",
        role: "Propriétaire d'un magasin de détail",
        gradient: "from-purple-50 to-blue-50",
        avatarGradient: "from-purple-400 to-pink-400"
      },
      {
        rating: 5,
        text: "Meilleur investissement pour notre café. Les fonctionnalités de reporting nous aident à comprendre nos modèles de ventes et à prendre de meilleures décisions.",
        name: "Anis",
        role: "Café Manager",
        gradient: "from-blue-50 to-cyan-50",
        avatarGradient: "from-blue-400 to-cyan-400"
      },
      {
        rating: 5,
        text: "La gestion des stocks est exceptionnelle. Nous avons réduit nos pertes de 30% grâce aux alertes de stock intelligent et au suivi en temps réel.",
        name: "Sarah Ben",
        role: "Gérante de Restaurant",
        gradient: "from-green-50 to-emerald-50",
        avatarGradient: "from-green-400 to-emerald-400"
      }
    ]
  
    const StarIcon = () => (
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    )
  
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apprécié des propriétaires d &apos entreprise
            </h2>
            <p className="text-xl text-gray-600">Découvrez ce que nos clients ont à dire</p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-gradient-to-br ${testimonial.gradient} rounded-2xl p-8 card-hover`}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatarGradient} rounded-full`}></div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }