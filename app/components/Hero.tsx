export default function Hero() {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="blob absolute top-20 left-10 w-72 h-72 bg-purple-300 opacity-30"></div>
          <div className="blob absolute bottom-20 right-10 w-96 h-96 bg-blue-300 opacity-20" style={{ animationDelay: '2s' }}></div>
          <div className="blob absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300 opacity-25" style={{ animationDelay: '4s' }}></div>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Système de <span className="gradient-text">point de vente </span> moderne
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transformez votre entreprise avec notre système de point de vente de bureau puissant et
                intuitif. Gérez les ventes, les stocks et les analyses en un seul endroit.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#download"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all glow"
                >
                  Télécharger gratuitement
                </a>
                <a
                  href="#features"
                  className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
                >
                  Apprendre encore plus
                </a>
              </div>
              <div className="flex items-center gap-8 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Utilisation gratuite</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Pas de frais mensuels</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Offline Ready</span>
                </div>
              </div>
            </div>
            <div className="relative float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl transform rotate-6 opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                  alt="Cash Register Dashboard"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }