const features = [
  {
    title: "Point de vente",
    description: "Paiement ultra-rapide avec une interface intuitive. Prise en charge de plusieurs méthodes de paiement, notamment les paiements en espèces, par carte et mobiles.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500",
    border: "border-purple-100",
    items: ["Recherche rapide de produits", "Lecture de codes-barres", "Impression de reçus"],
    iconColor: "text-purple-500"
  },
  {
    title: "Gestion des stocks",
    description: "Gardez une trace de votre stock avec des mises à jour en temps réel. Recevez des alertes en cas de stock faible et gérez les produits sans effort.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
    border: "border-blue-100",
    items: ["Suivi des stocks en temps réel", "Alertes de stock faible", "Gestion des catégories"],
    iconColor: "text-blue-500"
  },
  {
    title: "Rapports et analyses",
    description: "Obtenez des informations sur votre entreprise grâce à des rapports complets et un tableau de bord d'analyse en temps réel",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
    ),
    gradient: "from-green-500 to-emerald-500",
    border: "border-green-100",
    items: ["Rapports de ventes", "Analyse des meilleurs produits", "Suivi des revenus"],
    iconColor: "text-green-500"
  },
  {
    title: "Sécurisé et fiable",
    description: "nos données sont en sécurité avec la base de données SQLite locale. Aucune dépendance au cloud, contrôle total sur vos informations.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
    ),
    gradient: "from-orange-500 to-red-500",
    border: "border-orange-100",
    items: ["Stockage de données local", "Authentification de l'utilisateur", "Accès basé sur les rôles"],
    iconColor: "text-orange-500"
  },
  {
    title: "Rapide comme l'éclair",
    description: "Construit avec Electron et React pour des performances maximales. Vitesse des applications de bureau avec une interface utilisateur moderne.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
    ),
    gradient: "from-indigo-500 to-purple-500",
    border: "border-indigo-100",
    items: ["Recherche instantanée", "Performances optimisées"],
    iconColor: "text-indigo-500"
  },
  {
    title: "Historique des transactions",
    description: "Journaux de transactions complets avec des ventilations détaillées. Recherchez et filtrez par date, mode de paiement, etc.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
    ),
    gradient: "from-teal-400 to-green-800",
    border: "border-teal-100",
    items: ["Historique complet", "Filtres avancés","Capacités d'exportation"],
    iconColor: "text-teal-400"
  },
  // Add other features similarly...
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Des fonctionnalités puissantes pour votre entreprise
          </h2>
          <p className="text-xl text-gray-600">Tout ce dont vous avez besoin pour gérer efficacement votre entreprise</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg card-hover border ${feature.border}`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <svg className={`w-4 h-4 ${feature.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}