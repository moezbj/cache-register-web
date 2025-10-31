export default function Stats() {
    const stats = [
      { value: "10K+", label: "Utilisateurs", delay: "0s" },
      { value: "500K+", label: "Transactions", delay: "0.1s" },
      { value: "24/7", label: "Support", delay: "0.3s" },
    ]
  
    return (
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="scale-in" 
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }