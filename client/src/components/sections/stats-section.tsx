import { useEffect, useState } from "react";

export default function StatsSection() {
  const [counters, setCounters] = useState({
    conversions: 0,
    clients: 0,
    projects: 0,
    revenue: 0
  });

  const stats = [
    {
      key: "conversions",
      target: 300,
      suffix: "%",
      label: "Average Conversion Increase",
      color: "text-neon-green"
    },
    {
      key: "clients",
      target: 150,
      suffix: "+",
      label: "Happy Clients",
      color: "text-electric-blue"
    },
    {
      key: "projects",
      target: 500,
      suffix: "+",
      label: "Projects Completed",
      color: "text-neon-green"
    },
    {
      key: "revenue",
      target: 2,
      suffix: "M+",
      prefix: "$",
      label: "Revenue Generated",
      color: "text-electric-blue"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat) => {
            let start = 0;
            const increment = stat.target / 50;
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= stat.target) {
                start = stat.target;
                clearInterval(timer);
              }
              
              setCounters(prev => ({
                ...prev,
                [stat.key]: Math.floor(start)
              }));
            }, 40);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-gradient-neural relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold mb-4">
            Results That Speak
          </h2>
          <p className="text-xl text-gray-200">
            The power of neuro marketing in numbers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.key} 
              className="relative text-center group p-8 glassmorphism-dark rounded-2xl hover-lift transition-all duration-500 hover:scale-110"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-neuro-purple/10 to-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className={`text-6xl font-montserrat font-bold mb-4 ${stat.color} animate-glow-pulse group-hover:scale-125 transition-transform duration-300`}>
                  {stat.prefix || ""}{counters[stat.key as keyof typeof counters]}{stat.suffix}
                </div>
                <p className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
              
              {/* Animated border lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent group-hover:w-full transition-all duration-700"></div>
                <div className="absolute bottom-0 right-0 w-0 h-px bg-gradient-to-l from-transparent via-neuro-purple to-transparent group-hover:w-full transition-all duration-700 delay-200"></div>
              </div>
              
              {/* Pulsing dot indicator */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-green rounded-full opacity-0 group-hover:opacity-100 animate-bounce-gentle transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
