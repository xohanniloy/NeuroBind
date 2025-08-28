import { Link } from "wouter";
import { Brain, TrendingUp, Users, ExternalLink, ChevronRight, Lightbulb, Smartphone, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PageSummarySection() {
  const sections = [
    {
      title: "About Us",
      icon: Lightbulb,
      summary: "Bangladesh-based neuro marketing agency with 5+ years experience. We combine psychology, design, and development to create websites that convert.",
      highlights: ["25+ Team Members", "Psychology-driven Design", "Data-Driven Results"],
      link: "/about",
      color: "from-neuro-purple to-electric-blue"
    },
    {
      title: "Our Services",
      icon: Brain,
      summary: "Complete neuro marketing solutions including web design, content psychology, behavioral analytics, and growth optimization.",
      highlights: ["250% Conversion Boost", "Psychology-driven Layouts", "Behavioral Analytics"],
      link: "/services",
      color: "from-electric-blue to-neon-green"
    },
    {
      title: "Portfolio",
      icon: TrendingUp,
      summary: "Proven results across e-commerce, SaaS, and startups. We've helped businesses achieve 250%+ conversion increases.",
      highlights: ["$2.5M+ Revenue Generated", "320% Sales Boost", "95%+ Retention Rates"],
      link: "/portfolio",
      color: "from-neon-green to-neuro-purple"
    },
    {
      title: "Contact",
      icon: Users,
      summary: "Ready to transform your business? Get in touch for a free consultation and see how neuro marketing can boost your conversions.",
      highlights: ["Free Consultation", "Custom Solutions", "Expert Team"],
      link: "/contact",
      color: "from-neuro-purple to-electric-blue"
    }
  ];

  return (
    <section className="py-20 bg-neural-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neuro-purple/5 via-transparent to-electric-blue/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-green/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-electric-blue/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
              Explore
            </span> Everything We Offer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a quick overview of our complete range of neuro marketing services and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.title}
                className="glassmorphism-dark rounded-2xl p-8 hover-lift group transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                data-testid={`summary-card-${section.title.toLowerCase().replace(' ', '-')}`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${section.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-montserrat font-bold mb-3 group-hover:text-electric-blue transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {section.summary}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {section.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: `${idx * 0.5}s` }}></div>
                          <span className="text-sm text-gray-400">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={section.link}>
                      <Button 
                        variant="outline" 
                        className="group/btn border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 w-full"
                        data-testid={`link-${section.title.toLowerCase().replace(' ', '-')}`}
                      >
                        Learn More
                        <ChevronRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "250%", label: "Avg Conversion Boost", icon: TrendingUp },
            { number: "25+", label: "Expert Team Members", icon: Users },
            { number: "100+", label: "Projects Completed", icon: Rocket },
            { number: "5+", label: "Years Experience", icon: Brain }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center glassmorphism-dark rounded-xl p-6 hover-lift group transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${(index + 4) * 0.2}s` }}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-electric-blue mb-3 group-hover:scale-125 transition-transform duration-300 flex justify-center">
                  <StatIcon size={32} />
                </div>
                <div className="text-3xl font-montserrat font-bold text-neon-green mb-2 group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}