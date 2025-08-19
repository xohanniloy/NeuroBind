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
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className={`text-5xl font-montserrat font-bold mb-2 ${stat.color}`}>
                {stat.prefix || ""}{counters[stat.key as keyof typeof counters]}{stat.suffix}
              </div>
              <p className="text-lg text-gray-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
