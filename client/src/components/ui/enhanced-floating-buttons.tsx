import { useState, useEffect } from "react";
import { MessageCircle, Phone, Zap, ArrowUp, Menu, X } from "lucide-react";

export default function EnhancedFloatingButtons() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickContact = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickCall = () => {
    window.open('tel:+8801234567890', '_self');
  };

  const floatingButtons = [
    {
      icon: MessageCircle,
      label: "Quick Chat",
      action: handleQuickContact,
      color: "bg-electric-blue",
      hoverColor: "hover:bg-electric-blue/80"
    },
    {
      icon: Phone,
      label: "Call Now",
      action: handleQuickCall,
      color: "bg-neon-green",
      hoverColor: "hover:bg-neon-green/80"
    },
    {
      icon: Zap,
      label: "Free Audit",
      action: handleQuickContact,
      color: "bg-neuro-purple",
      hoverColor: "hover:bg-neuro-purple/80"
    }
  ];

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Main floating button container */}
        <div className="relative">
          {/* Individual action buttons */}
          <div className={`absolute bottom-16 right-0 transition-all duration-500 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}>
            {floatingButtons.map((button, index) => (
              <div
                key={button.label}
                className={`mb-3 transform transition-all duration-300 ${
                  isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={button.action}
                  className={`group flex items-center space-x-3 ${button.color} ${button.hoverColor} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  title={button.label}
                >
                  <button.icon size={20} className="group-hover:animate-bounce-gentle" />
                  <span className="text-sm font-medium whitespace-nowrap">{button.label}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Main toggle button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              isExpanded 
                ? 'bg-red-500 hover:bg-red-600 rotate-45' 
                : 'bg-gradient-to-r from-electric-blue to-neuro-purple hover:from-electric-blue/80 hover:to-neuro-purple/80'
            }`}
          >
            {isExpanded ? (
              <X className="text-white mx-auto" size={24} />
            ) : (
              <Menu className="text-white mx-auto" size={24} />
            )}
            
            {/* Pulsing ring effect */}
            {!isExpanded && (
              <div className="absolute inset-0 rounded-full border-2 border-electric-blue/30 animate-ping"></div>
            )}
          </button>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${
        showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-neon-green to-electric-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          title="Scroll to top"
        >
          <ArrowUp size={20} className="mx-auto group-hover:animate-bounce-gentle" />
          <div className="absolute inset-0 rounded-full border-2 border-neon-green/30 animate-pulse"></div>
        </button>
      </div>

      {/* Mouse follower effect */}
      <div
        className="fixed w-4 h-4 bg-electric-blue/20 rounded-full pointer-events-none z-40 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isExpanded ? 1.5 : 1})`
        }}
      />
    </>
  );
}