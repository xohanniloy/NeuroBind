import { useState } from "react";
import { Brain, TrendingUp, Users, Magnet, Smartphone, Rocket, Check, ChevronDown, ChevronUp, Zap, Star } from "lucide-react";

export default function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const services = [
    {
      icon: Brain,
      title: "Neuro Web Design",
      description: "Psychology-driven website layouts that guide user behavior and maximize conversions through strategic placement and visual hierarchy.",
      features: [
        "Conversion-focused layouts",
        "Psychological trigger placement",
        "User behavior analysis"
      ],
      advanced: [
        "Eye-tracking heatmap integration",
        "Cognitive load optimization",
        "Subliminal messaging techniques",
        "Neuro-responsive design patterns"
      ],
      stats: { success: "250%", metric: "Conversion Boost" }
    },
    {
      icon: TrendingUp,
      title: "Content Psychology",
      description: "Story-driven content strategies that create emotional connections and drive action using proven neuro marketing techniques.",
      features: [
        "Emotional storytelling",
        "Persuasive copywriting",
        "CTA optimization"
      ],
      advanced: [
        "Neuro-linguistic programming",
        "Emotional trigger mapping",
        "Persuasion psychology frameworks",
        "Behavioral copywriting patterns"
      ],
      stats: { success: "180%", metric: "Engagement Rate" }
    },
    {
      icon: Users,
      title: "Behavioral Analytics",
      description: "Deep dive into user behavior patterns using heatmaps, session recordings, and advanced analytics to optimize performance.",
      features: [
        "Heatmap analysis",
        "User journey mapping",
        "A/B testing"
      ],
      advanced: [
        "Predictive behavior modeling",
        "Real-time user intent detection",
        "Advanced session replay analysis",
        "Conversion path optimization"
      ],
      stats: { success: "320%", metric: "Data Insights" }
    },
    {
      icon: Magnet,
      title: "Lead Magnets",
      description: "Irresistible lead generation systems that capture high-quality prospects using psychological triggers and value-driven offers.",
      features: [
        "High-converting opt-ins",
        "Email automation",
        "Nurture sequences"
      ],
      advanced: [
        "Dynamic personalization engines",
        "Behavioral trigger automation",
        "Micro-moment capture systems",
        "Psychology-based funnel design"
      ],
      stats: { success: "400%", metric: "Lead Quality" }
    },
    {
      icon: Smartphone,
      title: "Mobile Psychology",
      description: "Mobile-first designs optimized for touch psychology and micro-interactions that enhance user engagement on all devices.",
      features: [
        "Touch-optimized UI",
        "Micro-interactions",
        "Progressive enhancement"
      ],
      advanced: [
        "Haptic feedback integration",
        "Gesture-based navigation",
        "Mobile neuro-UX patterns",
        "Device-specific optimization"
      ],
      stats: { success: "275%", metric: "Mobile Conversion" }
    },
    {
      icon: Rocket,
      title: "Growth Optimization",
      description: "Continuous optimization strategies that scale your business using data-driven insights and psychological principles.",
      features: [
        "Performance monitoring",
        "Conversion optimization",
        "Scaling strategies"
      ],
      advanced: [
        "AI-powered optimization",
        "Predictive growth modeling",
        "Multi-variate testing frameworks",
        "Psychological scaling patterns"
      ],
      stats: { success: "500%", metric: "Growth Rate" }
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
              className={`relative glassmorphism-dark rounded-2xl p-8 hover-lift group overflow-hidden transition-all duration-500 cursor-pointer animate-shimmer ${
                expandedCard === index ? 'scale-105 z-10' : 'hover:scale-105'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-electric-blue via-neuro-purple to-neon-green transition-opacity duration-300 rounded-2xl ${
                hoveredCard === index || expandedCard === index ? 'opacity-20' : 'opacity-0'
              }`}></div>
              
              {/* Floating particles effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-electric-blue rounded-full animate-bounce-gentle opacity-60"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + (i % 3) * 30}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              )}
              
              <div className="relative z-10">
                {/* Stats Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-neon-green to-electric-blue text-white text-xs px-3 py-1 rounded-full font-bold animate-bounce-gentle">
                  +{service.stats.success}
                </div>
                
                <div className={`text-electric-blue text-4xl mb-6 transition-all duration-500 ${
                  hoveredCard === index ? 'scale-110 rotate-12' : ''
                }`}>
                  <service.icon size={48} />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-montserrat font-semibold text-neuro-purple transition-colors duration-300 ${
                    hoveredCard === index ? 'text-electric-blue' : ''
                  }`}>
                    {service.title}
                  </h3>
                  <div className={`transition-transform duration-300 ${
                    expandedCard === index ? 'rotate-180' : ''
                  }`}>
                    {expandedCard === index ? (
                      <ChevronUp className="text-electric-blue" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={20} />
                    )}
                  </div>
                </div>
                <p className={`text-gray-300 mb-6 transition-colors duration-300 ${
                  hoveredCard === index ? 'text-white' : ''
                }`}>
                  {service.description}
                </p>
                <ul className="text-sm text-gray-400 space-y-3 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={`flex items-center transition-transform duration-300 ${
                        hoveredCard === index ? 'translate-x-2' : ''
                      }`}
                      style={{transitionDelay: `${featureIndex * 0.1}s`}}
                    >
                      <Check className={`text-neon-green mr-3 h-4 w-4 transition-transform duration-300 ${
                        hoveredCard === index ? 'scale-125' : ''
                      }`} />
                      <span className={`transition-colors duration-300 ${
                        hoveredCard === index ? 'text-gray-200' : ''
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Expanded Content */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t border-electric-blue/30 pt-4 mt-4">
                    <div className="flex items-center mb-3">
                      <Zap className="text-neon-green mr-2" size={16} />
                      <span className="text-sm font-semibold text-electric-blue">Advanced Features</span>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-2 mb-4">
                      {service.advanced.map((feature, advIndex) => (
                        <li key={advIndex} className="flex items-center">
                          <Star className="text-yellow-400 mr-2 h-3 w-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gradient-to-r from-electric-blue/20 to-neon-green/20 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-neon-green">+{service.stats.success}</div>
                      <div className="text-xs text-gray-300">{service.stats.metric}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced hover glow effect */}
              <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                hoveredCard === index || expandedCard === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neuro-purple to-transparent"></div>
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-green to-transparent"></div>
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent"></div>
              </div>
              
              {/* Click indicator */}
              {expandedCard === index && (
                <div className="absolute inset-0 bg-electric-blue/5 rounded-2xl animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
