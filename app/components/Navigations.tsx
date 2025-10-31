export default function Navigation() {
    return (
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">₵</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Cash Register</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
                Caractéristiques
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">
                Tarifs
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">
                Témoignages
              </a>
              <a
                href="#download"
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all"
              >
                Download Free
              </a>
            </div>
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    )
  }