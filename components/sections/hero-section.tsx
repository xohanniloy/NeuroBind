import { ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import NeuralBackground from "../ui/neural-background";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neural-bg via-deep-purple to-neural-bg"
      onMouseMove={(e) => {
        // Pass mouse events to neural background
        const canvas = document.querySelector('#home canvas');
        if (canvas) {
          const rect = canvas.getBoundingClientRect();
          const mouseEvent = new MouseEvent('mousemove', {
            clientX: e.clientX,
            clientY: e.clientY,
          });
          canvas.dispatchEvent(mouseEvent);
        }
      }}
    >
      <NeuralBackground />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-neuro-purple via-electric-blue to-neon-green bg-clip-text text-transparent">
              Binding Minds,
            </span>
            <br />
            <span className="text-white">Building Brands</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{animationDelay: "0.2s"}}>
            We combine the science of the brain with the art of design to build websites that 
            think, feel, and sell — just like your best salesperson, but working 24/7xxx.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: "0.4s"}}>
            <Link href="/contact">
              <Button 
                size="lg"
                className="relative bg-gradient-neural px-8 py-4 rounded-full text-lg font-semibold hover-lift overflow-hidden group"
              >
                <span className="relative z-10">Get Your Free Neuro Marketing Audit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-green opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </Link>
            <Button 
              variant="outline"
              size="lg"
              className="relative border-2 border-electric-blue text-electric-blue px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-electric-blue hover:text-neural-bg hover:scale-105 hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] animate-shimmer group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <Link href="/services">
          <ChevronDown 
            className="text-2xl text-electric-blue cursor-pointer hover:text-neon-green hover:scale-110 transition-all duration-300" 
            size={32}
          />
        </Link>
      </div>
    </section>
  );
}
