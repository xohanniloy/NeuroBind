import { Brain, TrendingUp, Users, Magnet, Smartphone, Rocket, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Neuro Web Design",
      description: "Psychology-driven website layouts that guide user behavior and maximize conversions through strategic placement and visual hierarchy.",
      features: [
        "Conversion-focused layouts",
        "Psychological trigger placement",
        "User behavior analysis"
      ]
    },
    {
      icon: TrendingUp,
      title: "Content Psychology",
      description: "Story-driven content strategies that create emotional connections and drive action using proven neuro marketing techniques.",
      features: [
        "Emotional storytelling",
        "Persuasive copywriting",
        "CTA optimization"
      ]
    },
    {
      icon: Users,
      title: "Behavioral Analytics",
      description: "Deep dive into user behavior patterns using heatmaps, session recordings, and advanced analytics to optimize performance.",
      features: [
        "Heatmap analysis",
        "User journey mapping",
        "A/B testing"
      ]
    },
    {
      icon: Magnet,
      title: "Lead Magnets",
      description: "Irresistible lead generation systems that capture high-quality prospects using psychological triggers and value-driven offers.",
      features: [
        "High-converting opt-ins",
        "Email automation",
        "Nurture sequences"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Psychology",
      description: "Mobile-first designs optimized for touch psychology and micro-interactions that enhance user engagement on all devices.",
      features: [
        "Touch-optimized UI",
        "Micro-interactions",
        "Progressive enhancement"
      ]
    },
    {
      icon: Rocket,
      title: "Growth Optimization",
      description: "Continuous optimization strategies that scale your business using data-driven insights and psychological principles.",
      features: [
        "Performance monitoring",
        "Conversion optimization",
        "Scaling strategies"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-neural-bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
              Neuro Marketing
            </span> Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your digital presence using psychological triggers and data-driven design 
            strategies that convert visitors into loyal customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative glassmorphism-dark rounded-2xl p-8 hover-lift group overflow-hidden transition-all duration-500 hover:scale-105 animate-shimmer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Animated border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-neuro-purple to-neon-green opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-electric-blue text-4xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-glow-pulse">
                  <service.icon size={48} />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold mb-4 text-neuro-purple group-hover:text-electric-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-400 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                      style={{transitionDelay: `${featureIndex * 0.1}s`}}
                    >
                      <Check className="text-neon-green mr-3 h-4 w-4 group-hover:scale-125 transition-transform duration-300" />
                      <span className="group-hover:text-gray-200 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neuro-purple to-transparent"></div>
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-green to-transparent"></div>
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
