import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const ripples = useRef<Array<{ x: number; y: number; radius: number; maxRadius: number; opacity: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse move handler with ripple creation
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      
      // Create ripple effect on significant mouse movement
      const distance = Math.sqrt(
        Math.pow(newX - mousePosRef.current.x, 2) + 
        Math.pow(newY - mousePosRef.current.y, 2)
      );
      
      if (distance > 10) {
        ripples.current.push({
          x: newX,
          y: newY,
          radius: 0,
          maxRadius: 80,
          opacity: 1
        });
      }
      
      mousePosRef.current = { x: newX, y: newY };
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Neural network nodes
    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const nodeCount = 120; // Increased for richer background

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Calculate interactive effects
        const nodeDistance = Math.sqrt(
          Math.pow(mousePosRef.current.x - node.x, 2) + Math.pow(mousePosRef.current.y - node.y, 2)
        );
        
        // Magnetic attraction effect
        const attractionRadius = 120;
        let nodeSize = 2;
        let nodeOpacity = 0.6;
        let attraction = 0;
        
        if (nodeDistance < attractionRadius) {
          attraction = 1 - nodeDistance / attractionRadius;
          nodeSize = 2 + attraction * 4;
          nodeOpacity = 0.6 + attraction * 0.4;
          
          // Gentle attraction towards mouse
          const attractionStrength = attraction * 0.3;
          const dx = (mousePosRef.current.x - node.x) * attractionStrength * 0.02;
          const dy = (mousePosRef.current.y - node.y) * attractionStrength * 0.02;
          node.x += dx;
          node.y += dy;
        }
        
        // Check ripple interactions
        let rippleEffect = 0;
        ripples.current.forEach(ripple => {
          const rippleDistance = Math.sqrt(
            Math.pow(ripple.x - node.x, 2) + Math.pow(ripple.y - node.y, 2)
          );
          if (rippleDistance < ripple.radius + 20 && rippleDistance > ripple.radius - 20) {
            rippleEffect = Math.max(rippleEffect, ripple.opacity * 0.8);
          }
        });
        
        // Draw node with enhanced interactive effects
        ctx.beginPath();
        const finalSize = nodeSize + rippleEffect * 3;
        ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);
        
        // Enhanced visual feedback
        if (attraction > 0.3 || rippleEffect > 0.2) {
          ctx.shadowColor = `rgba(0, 150, 255, ${Math.max(attraction, rippleEffect)})`;
          ctx.shadowBlur = 15 + (attraction + rippleEffect) * 20;
          ctx.fillStyle = `rgba(0, 200, 255, ${nodeOpacity + Math.max(attraction, rippleEffect) * 0.3})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(0, 150, 255, ${nodeOpacity})`;
        }
        
        ctx.fill();
        
        // Reset shadow for next elements
        ctx.shadowBlur = 0;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              // Calculate distance from mouse to line
              const lineLength = distance;
              const t = Math.max(0, Math.min(1, 
                ((mousePosRef.current.x - node.x) * dx + (mousePosRef.current.y - node.y) * dy) / (lineLength * lineLength)
              ));
              const closestX = node.x + t * dx;
              const closestY = node.y + t * dy;
              const mouseToLineDistance = Math.sqrt(
                Math.pow(mousePosRef.current.x - closestX, 2) + Math.pow(mousePosRef.current.y - closestY, 2)
              );

              // Apply glow effect if mouse is close to line
              const isHovered = mouseToLineDistance < 20;
              const baseOpacity = 0.3 * (1 - distance / 100);
              const glowIntensity = isHovered ? Math.max(0.8, 1 - mouseToLineDistance / 20) : 0;
              
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              
              // Check if either node is being attracted or affected by ripples
              const nodeADistance = Math.sqrt(
                Math.pow(mousePosRef.current.x - node.x, 2) + 
                Math.pow(mousePosRef.current.y - node.y, 2)
              );
              const nodeBDistance = Math.sqrt(
                Math.pow(mousePosRef.current.x - otherNode.x, 2) + 
                Math.pow(mousePosRef.current.y - otherNode.y, 2)
              );
              
              const connectionActivated = nodeADistance < 120 || nodeBDistance < 120 || isHovered;
              
              if (connectionActivated) {
                // Enhanced connection when nodes are interactive
                const intensity = Math.max(
                  Math.max(0, 1 - nodeADistance / 120),
                  Math.max(0, 1 - nodeBDistance / 120),
                  glowIntensity
                );
                
                ctx.shadowColor = `rgba(0, 180, 255, ${intensity * 0.8})`;
                ctx.shadowBlur = 8 + intensity * 12;
                ctx.strokeStyle = `rgba(0, 200, 255, ${baseOpacity + intensity * 0.6})`;
                ctx.lineWidth = 1 + intensity * 2;
              } else {
                ctx.shadowBlur = 0;
                ctx.strokeStyle = `rgba(100, 120, 160, ${baseOpacity})`;
                ctx.lineWidth = 1;
              }
              
              ctx.stroke();
              
              // Reset shadow for next elements
              ctx.shadowBlur = 0;
            }
          }
        });
      });

      // Update and draw ripples
      ripples.current = ripples.current.filter(ripple => {
        ripple.radius += 2;
        ripple.opacity -= 0.02;
        
        if (ripple.opacity > 0 && ripple.radius < ripple.maxRadius) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 180, 255, ${ripple.opacity * 0.5})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Inner ripple
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(100, 200, 255, ${ripple.opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          return true;
        }
        return false;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
