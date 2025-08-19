import { Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neural-bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-montserrat font-bold mb-8">
              <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
                About
              </span> Neuro Binding
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're a Bangladesh-based agency that combines cutting-edge neuro marketing research 
              with stunning web design to create digital experiences that don't just look good—they convert.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Our team of psychologists, designers, and developers work together to understand what 
              makes your audience tick, then we build websites that speak directly to their subconscious minds.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glassmorphism-dark rounded-xl p-6 text-center">
                <div className="text-3xl font-montserrat font-bold text-neon-green mb-2">
                  5+
                </div>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="glassmorphism-dark rounded-xl p-6 text-center">
                <div className="text-3xl font-montserrat font-bold text-electric-blue mb-2">
                  25+
                </div>
                <p className="text-gray-400">Team Members</p>
              </div>
            </div>
            
            <Button className="bg-gradient-neural px-8 py-4 rounded-full text-lg font-semibold hover-lift">
              Learn More About Our Process
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Diverse team of neuro marketing experts collaborating on innovative web design solutions"
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 glassmorphism-dark rounded-2xl p-6 animate-float">
              <div className="text-electric-blue text-3xl mb-2">
                <Lightbulb size={32} />
              </div>
              <p className="text-sm font-semibold">Innovative Ideas</p>
            </div>
            
            <div className="absolute -bottom-8 -left-8 glassmorphism-dark rounded-2xl p-6 animate-float" style={{animationDelay: "2s"}}>
              <div className="text-neon-green text-3xl mb-2">
                <TrendingUp size={32} />
              </div>
              <p className="text-sm font-semibold">Data-Driven Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
