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
          <div className="flex space-x-4 bg-neural-bg-secondary rounded-full p-2 glassmorphism-dark animate-slide-up">
            {filters.map((filter, index) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`relative px-6 py-2 rounded-full transition-all duration-500 transform hover:scale-105 overflow-hidden group ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-neuro-purple to-electric-blue text-white animate-glow-pulse"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                } animate-bounce-gentle`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Ripple effect on click */}
                <div className="absolute inset-0 bg-white/10 rounded-full transform scale-0 group-active:scale-100 transition-transform duration-300"></div>
                
                <span className="relative z-10">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-neural-bg-secondary hover-lift glassmorphism-dark group-hover:border-electric-blue/50 transition-all duration-500">
                {/* Animated border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-neuro-purple/20 to-neon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl animate-shimmer"></div>
                
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                />
                
                {/* Glowing overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neural-bg via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Floating content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-montserrat font-semibold text-white mb-2 animate-bounce-gentle">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* View more button */}
                  <button className="mt-3 px-4 py-2 bg-gradient-to-r from-electric-blue to-neuro-purple text-white rounded-full text-sm font-medium transform scale-95 group-hover:scale-100 transition-transform duration-300 animate-glow-pulse">
                    View Details
                  </button>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-neon-green/80 text-neural-bg rounded-full text-xs font-semibold uppercase tracking-wider transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 animate-bounce-gentle">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
