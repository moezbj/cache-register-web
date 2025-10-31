export default function Pricing() {
    const plans = [
      {
        name: "Basique",
        price: "799 Dt",
        popular: false,
        features: [
          "Produits illimités",
          "Transactions illimitées",
          "Rapports de base",
          "Utilisateur unique"
        ],
        buttonText: "Commencer",
        buttonStyle: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
      },
      {
        name: "Pro",
        price: "1500 Dt",
        popular: true,
        features: [
          "Tout est gratuit",
          "Analyses avancées",
          "Plusieurs utilisateurs",
          "Assistance prioritaire"
        ],
        buttonText: "Mettre à niveau maintenant",
        buttonStyle: "bg-white text-purple-600 hover:bg-gray-100 glow"
      }
    ]
  
    return (
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tarification simple et transparente
            </h2>
            <p className="text-xl text-gray-600">Choisissez le forfait qui convient à votre entreprise</p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative ${
                  plan.popular 
                    ? "bg-gradient-to-br from-purple-600 to-blue-500 text-white transform scale-105" 
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    POPULAIRE
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                
                <div className={`text-4xl font-bold mb-6 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg 
                        className={`w-6 h-6 flex-shrink-0 ${plan.popular ? "text-white" : "text-green-500"}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className={plan.popular ? "text-white" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }