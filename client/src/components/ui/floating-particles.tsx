import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

interface FloatingParticlesProps {
  count?: number;
  colors?: string[];
  speed?: number;
  size?: { min: number; max: number };
}

export default function FloatingParticles({ 
  count = 20, 
  colors = ["#00D4FF", "#8B5CF6", "#00FF94"], 
  speed = 0.5,
  size = { min: 1, max: 3 }
}: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    if (windowSize.width === 0 || windowSize.height === 0) return;

    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      size: Math.random() * (size.max - size.min) + size.min,
      speedX: (Math.random() - 0.5) * speed,
      speedY: (Math.random() - 0.5) * speed,
      opacity: Math.random() * 0.5 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    setParticles(newParticles);
  }, [count, speed, size.min, size.max, windowSize.width, windowSize.height]);

  useEffect(() => {
    if (particles.length === 0) return;

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;

        // Bounce off edges
        if (newX <= 0 || newX >= windowSize.width) {
          particle.speedX *= -1;
          newX = Math.max(0, Math.min(windowSize.width, newX));
        }
        if (newY <= 0 || newY >= windowSize.height) {
          particle.speedY *= -1;
          newY = Math.max(0, Math.min(windowSize.height, newY));
        }

        return {
          ...particle,
          x: newX,
          y: newY
        };
      }));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [windowSize.width, windowSize.height, particles.length]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  );
}