import { Brain, TrendingUp, Palette, Users, Target, Lightbulb } from "lucide-react";

export default function BlogCategoriesSection() {
  const categories = [
    {
      icon: Brain,
      title: "Neuro Marketing",
      description: "Psychology-driven marketing strategies that influence decision-making",
      count: 24,
      color: "from-neuro-purple to-electric-blue"
    },
    {
      icon: Palette,
      title: "Design Psychology",
      description: "How visual elements affect user behavior and emotions",
      count: 18,
      color: "from-electric-blue to-neon-green"
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "Data-driven techniques to boost website performance",
      count: 21,
      color: "from-neon-green to-neuro-purple"
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Creating intuitive and engaging digital experiences",
      count: 15,
      color: "from-electric-blue to-deep-purple"
    },
    {
      icon: Target,
      title: "Case Studies",
      description: "Real-world examples of successful neuro marketing campaigns",
      count: 12,
      color: "from-neuro-purple to-neon-green"
    },
    {
      icon: Lightbulb,
      title: "Industry Insights",
      description: "Latest trends and innovations in digital marketing",
      count: 19,
      color: "from-neon-green to-electric-blue"
    }
  ];

  return (
    <section className="py-20 bg-neural-bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
              Explore
            </span> Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into specific areas of neuro marketing and psychology-driven design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="glassmorphism-dark rounded-2xl p-8 hover-lift cursor-pointer group transition-all duration-500 animate-slide-up border border-electric-blue/10 hover:border-electric-blue/30"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`inline-flex p-4 bg-gradient-to-r ${category.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-electric-blue font-semibold">
                    {category.count} Articles
                  </span>
                  <div className="w-8 h-8 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-electric-blue/40 group-hover:to-neuro-purple/40 transition-all duration-300">
                    <span className="text-electric-blue">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}