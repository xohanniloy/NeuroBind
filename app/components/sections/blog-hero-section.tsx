import { Search, Brain } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import NeuralBackground from "../ui/neural-background";

export default function BlogHeroSection() {
  return (
    <section 
      id="blog-hero" 
      className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-neural-bg via-deep-purple to-neural-bg"
    >
      <NeuralBackground />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 animate-slide-up">
            <div className="p-4 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full">
              <Brain className="text-electric-blue" size={48} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-neuro-purple via-electric-blue to-neon-green bg-clip-text text-transparent">
              Neuro Insights
            </span>
            <br />
            <span className="text-white">& Design Wisdom</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{animationDelay: "0.2s"}}>
            Unlock the secrets of psychology-driven web design, neuro marketing strategies, 
            and conversion optimization techniques that turn visitors into customers.
          </p>
          
          <div className="max-w-2xl mx-auto animate-slide-up" style={{animationDelay: "0.4s"}}>
            <div className="relative glassmorphism-dark rounded-full p-2">
              <div className="flex items-center">
                <Input 
                  type="text" 
                  placeholder="Search for insights, strategies, case studies..." 
                  className="bg-transparent border-none text-white placeholder-gray-400 pl-6 pr-16 py-4 text-lg focus:ring-0 focus:outline-none"
                />
                <Button 
                  size="lg"
                  className="absolute right-2 bg-gradient-neural px-6 py-3 rounded-full hover-lift"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-slide-up" style={{animationDelay: "0.6s"}}>
            <span className="text-gray-400">Popular topics:</span>
            {["Neuro Marketing", "Conversion Psychology", "User Experience", "Color Psychology", "A/B Testing"].map((topic) => (
              <Button 
                key={topic}
                variant="outline" 
                size="sm"
                className="border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue rounded-full px-4 py-2 transition-all duration-300"
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}