import { useState } from "react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Fashion E-commerce Platform",
      description: "Increased conversions by 250% using neuro marketing triggers",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "E-commerce website design with neural psychology optimization"
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      description: "User engagement increased by 180% with behavioral insights",
      category: "saas",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "SaaS dashboard with growth analytics and neural behavior tracking"
    },
    {
      id: 3,
      title: "Fintech Startup Landing",
      description: "Achieved 95% increase in sign-ups with psychology-driven design",
      category: "startup",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Startup team collaborating on neural marketing strategy implementation"
    },
    {
      id: 4,
      title: "AI-Powered Marketplace",
      description: "Neural algorithms boosted sales by 320%",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Neural network visualization representing AI-powered e-commerce optimization"
    },
    {
      id: 5,
      title: "Project Management Tool",
      description: "User retention improved by 200% with neuro UX design",
      category: "saas",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Creative design process showing wireframes and psychological user journey mapping"
    },
    {
      id: 6,
      title: "Healthcare Platform",
      description: "Patient engagement increased by 150% through empathy-driven design",
      category: "startup",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Modern business meeting discussing growth strategies and neural marketing implementation"
    }
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "ecommerce", label: "E-commerce" },
    { key: "saas", label: "SaaS" },
    { key: "startup", label: "Startup" }
  ];

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-20 bg-neural-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
              Portfolio
            </span> Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've transformed businesses using neuro marketing principles and cutting-edge design.
          </p>
        </div>
        
        {/* Portfolio Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-neural-bg-secondary rounded-full p-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-neuro-purple text-white"
                    : "hover:bg-gray-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-neural-bg-secondary hover-lift">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neural-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
