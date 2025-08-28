import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 8,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-particle-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Neural connections */}
      <div className="neural-connection" style={{ top: "25%", left: "15%", height: "200px", transform: "rotate(45deg)" }} />
      <div className="neural-connection" style={{ top: "45%", left: "60%", height: "150px", transform: "rotate(-30deg)" }} />
      
      {/* Neural nodes */}
      <div className="neural-node animate-neural-pulse" style={{ top: "30%", left: "20%" }} />
      <div className="neural-node animate-neural-pulse" style={{ top: "50%", left: "75%", animationDelay: "1s" }} />
      <div className="neural-node animate-neural-pulse" style={{ top: "70%", left: "40%", animationDelay: "2s" }} />
    </div>
  );
}
