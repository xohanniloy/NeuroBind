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
    const particleCount = 60; // More particles for richer glow effect
    
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








    </div>
  );
}