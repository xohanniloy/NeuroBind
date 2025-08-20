import { useEffect, useRef, useState, useCallback } from "react";
import { Brain, TrendingUp, Users, Magnet, Smartphone, Rocket } from "lucide-react";

interface BrainParticle {
  id: number;
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  size: number;
  glow: number;
  service: {
    icon: typeof Brain;
    title: string;
    description: string;
    sectionId: string;
  };
}



const services = [
  {
    icon: Brain,
    title: "Neuro Web Design",
    description: "Psychology-driven website layouts that guide user behavior and maximize conversions.",
    sectionId: "services"
  },
  {
    icon: TrendingUp,
    title: "Content Psychology",
    description: "Story-driven content strategies that create emotional connections and drive action.",
    sectionId: "services"
  },
  {
    icon: Users,
    title: "Behavioral Analytics",
    description: "Deep dive into user behavior patterns using heatmaps and advanced analytics.",
    sectionId: "services"
  },
  {
    icon: Magnet,
    title: "Lead Magnets",
    description: "Irresistible lead generation systems that capture high-quality prospects.",
    sectionId: "services"
  },
  {
    icon: Smartphone,
    title: "Mobile Psychology",
    description: "Mobile-first designs optimized for touch psychology and micro-interactions.",
    sectionId: "services"
  },
  {
    icon: Rocket,
    title: "Growth Optimization",
    description: "Continuous optimization strategies that scale your business using data-driven insights.",
    sectionId: "services"
  }
];

export default function BrainParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<BrainParticle[]>([]);
  const [hoveredParticle, setHoveredParticle] = useState<BrainParticle | null>(null);
  const [showService, setShowService] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(true);

  // Generate random scattered particles
  const generateRandomParticles = useCallback(() => {
    const newParticles: BrainParticle[] = [];
    const particleCount = 30; // Fewer particles for cleaner look
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 90 + 5; // Keep particles away from edges
      const y = Math.random() * 80 + 10;
      
      newParticles.push({
        id: i,
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * 3 + 4, // Smaller particles (4-7px)
        glow: 0,
        service: services[i % services.length]
      });
    }

    setParticles(newParticles);
  }, []);



  useEffect(() => {
    generateRandomParticles();
  }, [generateRandomParticles]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePos({ x: e.clientX, y: e.clientY });

    // Check for particle hover
    let foundHover = false;
    setParticles(prev => prev.map(particle => {
      const distance = Math.sqrt(
        Math.pow(mouseX - particle.x, 2) + Math.pow(mouseY - particle.y, 2)
      );
      
      if (distance < 8 && !foundHover) { // Increased hover area
        foundHover = true;
        if (hoveredParticle?.id !== particle.id) {
          setHoveredParticle(particle);
          setShowService(true);
          setShowHint(false); // Hide hint after first interaction
        }
        return { ...particle, glow: 1 };
      } else {
        return { ...particle, glow: Math.max(0, particle.glow - 0.1) };
      }
    }));

    if (!foundHover && hoveredParticle) {
      setHoveredParticle(null);
      setShowService(false);
    }
  }, [hoveredParticle]);

  const handleMouseLeave = useCallback(() => {
    setHoveredParticle(null);
    setShowService(false);
    setParticles(prev => prev.map(particle => ({ ...particle, glow: 0 })));
  }, []);

  const handleServiceClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setHoveredParticle(null);
      setShowService(false);
    }
  }, []);



  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Render particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute transition-all duration-300 ease-out ${
            particle.glow === 0 ? 'animate-particle-breathe' : ''
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.glow > 0 
              ? `radial-gradient(circle, rgba(0, 212, 255, ${0.8 + particle.glow * 0.2}) 0%, rgba(138, 43, 226, ${0.7 + particle.glow * 0.3}) 100%)`
              : 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, rgba(138, 43, 226, 0.2) 100%)',
            borderRadius: '50%',
            boxShadow: particle.glow > 0 
              ? `0 0 ${15 + particle.glow * 30}px rgba(0, 212, 255, ${0.6 + particle.glow * 0.4}), 
                 0 0 ${8 + particle.glow * 20}px rgba(138, 43, 226, ${0.5 + particle.glow * 0.5}),
                 0 0 ${4 + particle.glow * 10}px rgba(102, 255, 102, ${0.3 + particle.glow * 0.4})`
              : '0 0 6px rgba(0, 212, 255, 0.2), 0 0 3px rgba(138, 43, 226, 0.15)',
            transform: `scale(${1.2 + particle.glow * 1.0})`,
            zIndex: particle.glow > 0 ? 10 : 1,
            animationDelay: `${particle.id * 0.2}s`,
            cursor: 'pointer',
          }}
        />
      ))}







      {/* Enhanced Service popup */}
      {showService && hoveredParticle && (
        <div
          className="fixed z-50 bg-neural-bg-secondary border-2 border-neuro-purple rounded-xl p-5 max-w-sm shadow-2xl transform transition-all duration-300 ease-out animate-slide-up cursor-pointer hover:scale-105"
          style={{
            left: `${Math.min(mousePos.x + 20, window.innerWidth - 350)}px`,
            top: `${Math.max(mousePos.y - 60, 20)}px`,
            boxShadow: '0 25px 50px rgba(138, 43, 226, 0.4), 0 0 40px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            background: 'linear-gradient(135deg, rgba(34, 34, 47, 0.95) 0%, rgba(45, 45, 58, 0.95) 100%)',
          }}
          onClick={() => {
            handleServiceClick(hoveredParticle.service.sectionId);
          }}
        >
          <div className="flex items-start space-x-4">
            <div className="text-electric-blue text-3xl flex-shrink-0 p-2 bg-neural-bg rounded-lg">
              <hoveredParticle.service.icon size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-neuro-purple font-montserrat font-bold mb-2 text-lg">
                {hoveredParticle.service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {hoveredParticle.service.description}
              </p>
              <div className="flex items-center text-electric-blue text-xs font-semibold">
                <span>Click to explore</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Enhanced pointer arrow */}
          <div 
            className="absolute w-4 h-4 bg-neural-bg-secondary border-l-2 border-b-2 border-neuro-purple transform rotate-45"
            style={{
              left: '-8px',
              top: '25px',
            }}
          />
          
          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(138, 43, 226, 0.3) 100%)',
              filter: 'blur(1px)',
            }}
          />
        </div>
      )}

      {/* Hint indicator */}
      {showHint && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40 bg-neural-bg-secondary border border-electric-blue rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg animate-pulse">
          <div className="w-3 h-3 bg-electric-blue rounded-full animate-ping"></div>
          <span className="text-electric-blue text-sm font-medium">Hover over particles to explore services!</span>
          <svg className="w-4 h-4 text-electric-blue animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </div>
  );
}