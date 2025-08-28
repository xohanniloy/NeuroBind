import { useState } from "react";
import { ExternalLink, Play, Zap, TrendingUp, Eye } from "lucide-react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Fashion E-commerce Platform",
      description: "Increased conversions by 250% using neuro marketing triggers",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "E-commerce website design with neural psychology optimization",
      metrics: { conversion: "+250%", revenue: "$2.5M" },
      tech: ["React", "Node.js", "AI Analytics"]
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      description: "User engagement increased by 180% with behavioral insights",
      category: "saas",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "SaaS dashboard with growth analytics and neural behavior tracking",
      metrics: { engagement: "+180%", retention: "95%" },
      tech: ["TypeScript", "D3.js", "Machine Learning"]
    },
    {
      id: 3,
      title: "Fintech Startup Landing",
      description: "Achieved 95% increase in sign-ups with psychology-driven design",
      category: "startup",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Startup team collaborating on neural marketing strategy implementation",
      metrics: { signups: "+95%", funding: "$10M" },
      tech: ["Vue.js", "Python", "Behavioral AI"]
    },
    {
      id: 4,
      title: "AI-Powered Marketplace",
      description: "Neural algorithms boosted sales by 320%",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Neural network visualization representing AI-powered e-commerce optimization",
      metrics: { sales: "+320%", users: "1M+" },
      tech: ["Next.js", "TensorFlow", "Neural Networks"]
    },
    {
      id: 5,
      title: "Project Management Tool",
      description: "User retention improved by 200% with neuro UX design",
      category: "saas",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Creative design process showing wireframes and psychological user journey mapping",
      metrics: { retention: "+200%", satisfaction: "98%" },
      tech: ["Angular", "Firebase", "UX Psychology"]
    },
    {
      id: 6,
      title: "Healthcare Platform",
      description: "Patient engagement increased by 150% through empathy-driven design",
      category: "startup",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Modern business meeting discussing growth strategies and neural marketing implementation",
      metrics: { engagement: "+150%", appointments: "+80%" },
      tech: ["React Native", "AWS", "Empathy AI"]
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
                    ? "bg-gradient-to-r from-neuro-purple to-electric-blue text-white"
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
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-neural-bg-secondary hover-lift glassmorphism-dark group-hover:border-electric-blue/50 transition-all duration-500">
                {/* Animated border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-neuro-purple/20 to-neon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl animate-shimmer"></div>
                
                {/* Floating particles on hover */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-electric-blue rounded-full animate-bounce-gentle opacity-60"
                        style={{
                          left: `${10 + i * 12}%`,
                          top: `${5 + (i % 4) * 25}%`,
                          animationDelay: `${i * 0.15}s`,
                          animationDuration: '3s'
                        }}
                      />
                    ))}
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                  />
                  
                  {/* Interactive preview overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-neural-bg/90 via-transparent to-transparent transition-opacity duration-500 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`bg-electric-blue/20 backdrop-blur-sm rounded-full p-4 border border-electric-blue/50 transition-all duration-300 ${
                        hoveredItem === item.id ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                      }`}>
                        <Eye className="text-electric-blue" size={24} />
                      </div>
                    </div>
                    
                    {/* Tech stack display */}
                    <div className={`absolute top-4 left-4 flex flex-wrap gap-1 transition-all duration-500 ${
                      hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}>
                      {item.tech.map((tech, techIndex) => (
                        <span 
                          key={tech}
                          className="bg-neuro-purple/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-neuro-purple/50"
                          style={{transitionDelay: `${techIndex * 0.1}s`}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Metrics badges */}
                    <div className={`absolute bottom-20 left-4 right-4 flex justify-between transition-all duration-500 ${
                      hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {Object.entries(item.metrics).map(([key, value], metricIndex) => (
                        <div 
                          key={key}
                          className="bg-neon-green/20 backdrop-blur-sm rounded-lg p-2 border border-neon-green/50"
                          style={{transitionDelay: `${metricIndex * 0.1}s`}}
                        >
                          <div className="text-center">
                            <div className="text-neon-green text-sm font-bold">{value}</div>
                            <div className="text-gray-300 text-xs capitalize">{key}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                
                {/* Floating content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-montserrat font-semibold text-white mb-2 animate-bounce-gentle">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Enhanced action buttons */}
                  <div className="flex space-x-2 mt-3">
                    <button className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-electric-blue to-neuro-purple text-white rounded-full text-sm font-medium transform scale-95 group-hover:scale-100 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/25">
                      <Eye size={14} />
                      <span>View Details</span>
                    </button>
                    <button className="p-2 bg-neon-green/20 backdrop-blur-sm border border-neon-green/50 text-neon-green rounded-full transition-all duration-300 hover:bg-neon-green/30 hover:scale-110">
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-neon-green/80 text-neural-bg rounded-full text-xs font-semibold uppercase tracking-wider transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 animate-bounce-gentle">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Portfolio Impact Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-electric-blue/5 to-neon-green/5 rounded-3xl p-8 glassmorphism-dark border border-electric-blue/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-montserrat font-bold mb-4">
                <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                  Portfolio Impact
                </span>
              </h3>
              <p className="text-gray-300">Measurable results across all our projects</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500%", label: "Avg. Growth", icon: TrendingUp, color: "text-neon-green" },
                { value: "$50M+", label: "Revenue Generated", icon: Zap, color: "text-electric-blue" },
                { value: "98%", label: "Client Satisfaction", icon: Play, color: "text-neuro-purple" },
                { value: "24h", label: "Response Time", icon: ExternalLink, color: "text-neon-green" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center group hover-lift transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 bg-gradient-to-r from-electric-blue/10 to-neon-green/10 rounded-full border border-electric-blue/30 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className={`${stat.color} group-hover:animate-bounce-gentle`} size={24} />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
