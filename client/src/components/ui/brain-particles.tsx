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
  };
}

const services = [
  {
    icon: Brain,
    title: "Neuro Web Design",
    description: "Psychology-driven website layouts that guide user behavior and maximize conversions."
  },
  {
    icon: TrendingUp,
    title: "Content Psychology",
    description: "Story-driven content strategies that create emotional connections and drive action."
  },
  {
    icon: Users,
    title: "Behavioral Analytics",
    description: "Deep dive into user behavior patterns using heatmaps and advanced analytics."
  },
  {
    icon: Magnet,
    title: "Lead Magnets",
    description: "Irresistible lead generation systems that capture high-quality prospects."
  },
  {
    icon: Smartphone,
    title: "Mobile Psychology",
    description: "Mobile-first designs optimized for touch psychology and micro-interactions."
  },
  {
    icon: Rocket,
    title: "Growth Optimization",
    description: "Continuous optimization strategies that scale your business using data-driven insights."
  }
];

export default function BrainParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<BrainParticle[]>([]);
  const [hoveredParticle, setHoveredParticle] = useState<BrainParticle | null>(null);
  const [showService, setShowService] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Generate brain-shaped particle positions
  const generateBrainParticles = useCallback(() => {
    const newParticles: BrainParticle[] = [];
    const centerX = 50;
    const centerY = 45;
    
    // Enhanced brain shape coordinates (more anatomically accurate)
    const brainPoints = [
      // Frontal lobe (left)
      { x: centerX - 22, y: centerY - 18 },
      { x: centerX - 25, y: centerY - 12 },
      { x: centerX - 28, y: centerY - 8 },
      { x: centerX - 30, y: centerY - 2 },
      
      // Temporal lobe (left)
      { x: centerX - 32, y: centerY + 4 },
      { x: centerX - 28, y: centerY + 8 },
      { x: centerX - 24, y: centerY + 12 },
      { x: centerX - 18, y: centerY + 16 },
      
      // Occipital lobe (left)
      { x: centerX - 12, y: centerY + 18 },
      { x: centerX - 8, y: centerY + 20 },
      
      // Brain stem and cerebellum
      { x: centerX - 4, y: centerY + 22 },
      { x: centerX, y: centerY + 24 },
      { x: centerX + 4, y: centerY + 22 },
      
      // Occipital lobe (right)
      { x: centerX + 8, y: centerY + 20 },
      { x: centerX + 12, y: centerY + 18 },
      
      // Temporal lobe (right)
      { x: centerX + 18, y: centerY + 16 },
      { x: centerX + 24, y: centerY + 12 },
      { x: centerX + 28, y: centerY + 8 },
      { x: centerX + 32, y: centerY + 4 },
      
      // Frontal lobe (right)
      { x: centerX + 30, y: centerY - 2 },
      { x: centerX + 28, y: centerY - 8 },
      { x: centerX + 25, y: centerY - 12 },
      { x: centerX + 22, y: centerY - 18 },
      
      // Parietal lobe connections
      { x: centerX + 18, y: centerY - 15 },
      { x: centerX + 12, y: centerY - 18 },
      { x: centerX + 6, y: centerY - 20 },
      { x: centerX, y: centerY - 22 },
      { x: centerX - 6, y: centerY - 20 },
      { x: centerX - 12, y: centerY - 18 },
      { x: centerX - 18, y: centerY - 15 },
      
      // Internal neural networks
      { x: centerX - 15, y: centerY - 5 },
      { x: centerX - 10, y: centerY - 8 },
      { x: centerX - 5, y: centerY - 10 },
      { x: centerX, y: centerY - 8 },
      { x: centerX + 5, y: centerY - 10 },
      { x: centerX + 10, y: centerY - 8 },
      { x: centerX + 15, y: centerY - 5 },
      
      // Deep brain structures
      { x: centerX - 8, y: centerY + 2 },
      { x: centerX - 4, y: centerY },
      { x: centerX, y: centerY + 2 },
      { x: centerX + 4, y: centerY },
      { x: centerX + 8, y: centerY + 2 },
      
      // Motor cortex region
      { x: centerX - 12, y: centerY - 2 },
      { x: centerX - 6, y: centerY + 4 },
      { x: centerX + 6, y: centerY + 4 },
      { x: centerX + 12, y: centerY - 2 },
    ];

    brainPoints.forEach((point, index) => {
      // Add some randomness to make it look more organic
      const offsetX = (Math.random() - 0.5) * 4;
      const offsetY = (Math.random() - 0.5) * 4;
      
      newParticles.push({
        id: index,
        x: point.x + offsetX,
        y: point.y + offsetY,
        originalX: point.x + offsetX,
        originalY: point.y + offsetY,
        size: Math.random() * 3 + 2,
        glow: 0,
        service: services[index % services.length]
      });
    });

    setParticles(newParticles);
  }, []);

  useEffect(() => {
    generateBrainParticles();
  }, [generateBrainParticles]);

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
      
      if (distance < 5 && !foundHover) {
        foundHover = true;
        if (hoveredParticle?.id !== particle.id) {
          setHoveredParticle(particle);
          setShowService(true);
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
          className="absolute transition-all duration-300 ease-out"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.glow > 0 
              ? `radial-gradient(circle, rgba(0, 212, 255, ${0.8 + particle.glow * 0.5}) 0%, rgba(138, 43, 226, ${0.6 + particle.glow * 0.4}) 100%)`
              : 'rgba(0, 212, 255, 0.6)',
            borderRadius: '50%',
            boxShadow: particle.glow > 0 
              ? `0 0 ${10 + particle.glow * 20}px rgba(0, 212, 255, ${0.4 + particle.glow * 0.6}), 0 0 ${5 + particle.glow * 10}px rgba(138, 43, 226, ${0.3 + particle.glow * 0.5})`
              : '0 0 4px rgba(0, 212, 255, 0.3)',
            transform: `scale(${1 + particle.glow * 0.8})`,
            zIndex: particle.glow > 0 ? 10 : 1,
          }}
        />
      ))}

      {/* Brain outline */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ opacity: 0.2 }}
      >
        <defs>
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(138, 43, 226, 0.6)" />
            <stop offset="50%" stopColor="rgba(0, 212, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(102, 255, 102, 0.3)" />
          </linearGradient>
        </defs>
        
        {/* Simplified brain outline path */}
        <path
          d="M20,35 Q15,25 25,20 Q35,15 45,20 Q55,15 65,20 Q75,25 70,35 Q75,45 65,50 Q55,55 50,60 Q45,55 35,50 Q25,45 20,35 Z"
          fill="none"
          stroke="url(#brainGradient)"
          strokeWidth="2"
          className="animate-brain-pulse"
        />
        
        {/* Central division */}
        <path
          d="M50,20 Q50,30 50,40 Q50,50 50,60"
          fill="none"
          stroke="rgba(0, 212, 255, 0.5)"
          strokeWidth="1"
          strokeDasharray="3,3"
          className="animate-synaptic-fire"
        />
      </svg>

      {/* Neural connections */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ opacity: 0.4 }}
      >
        {particles.map((particle, i) => 
          particles.slice(i + 1).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.originalX - otherParticle.originalX, 2) + 
              Math.pow(particle.originalY - otherParticle.originalY, 2)
            );
            
            if (distance < 15) {
              const maxGlow = Math.max(particle.glow, otherParticle.glow);
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${particle.x}%`}
                  y1={`${particle.y}%`}
                  x2={`${otherParticle.x}%`}
                  y2={`${otherParticle.y}%`}
                  stroke={maxGlow > 0 ? "rgba(0, 212, 255, 0.8)" : "rgba(138, 43, 226, 0.4)"}
                  strokeWidth={maxGlow > 0 ? "2" : "1"}
                  opacity={Math.max(maxGlow, 0.3)}
                  style={{
                    filter: maxGlow > 0 ? 'drop-shadow(0 0 4px rgba(0, 212, 255, 0.6))' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Service popup */}
      {showService && hoveredParticle && (
        <div
          className="fixed z-50 bg-neural-bg-secondary border border-neuro-purple rounded-xl p-4 max-w-xs shadow-2xl transform transition-all duration-300 ease-out animate-slide-up"
          style={{
            left: `${Math.min(mousePos.x + 20, window.innerWidth - 320)}px`,
            top: `${Math.max(mousePos.y - 50, 20)}px`,
            boxShadow: '0 20px 40px rgba(138, 43, 226, 0.3), 0 0 30px rgba(0, 212, 255, 0.2)',
          }}
        >
          <div className="flex items-start space-x-3">
            <div className="text-electric-blue text-2xl flex-shrink-0">
              <hoveredParticle.service.icon size={24} />
            </div>
            <div>
              <h3 className="text-neuro-purple font-montserrat font-semibold mb-1">
                {hoveredParticle.service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {hoveredParticle.service.description}
              </p>
            </div>
          </div>
          
          {/* Pointer arrow */}
          <div 
            className="absolute w-3 h-3 bg-neural-bg-secondary border-l border-b border-neuro-purple transform rotate-45"
            style={{
              left: '-6px',
              top: '20px',
            }}
          />
        </div>
      )}
    </div>
  );
}