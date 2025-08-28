import { BookOpen, TrendingUp, Users, Zap } from "lucide-react";

export default function BlogFeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "সাপ্তাহিক আর্টিকেল",
      description: "প্রতি সপ্তাহে নতুন নিউরো মার্কেটিং কৌশল এবং মনোবিজ্ঞানের অন্তর্দৃষ্টি",
      count: "২০+",
      label: "নতুন পোস্ট প্রতি মাসে"
    },
    {
      icon: TrendingUp,
      title: "ব্যবহারিক গাইড",
      description: "বাস্তব প্রয়োগযোগ্য কৌশল যা আপনার ব্যবসায়িক সাফল্য বৃদ্ধি করবে",
      count: "৮৫%",
      label: "সাফল্যের হার"
    },
    {
      icon: Users,
      title: "বিশেষজ্ঞ মতামত",
      description: "বাংলাদেশি এবং আন্তর্জাতিক বিশেষজ্ঞদের কাছ থেকে একচেটিয়া অন্তর্দৃষ্টি",
      count: "১৫+",
      label: "বিশেষজ্ঞ লেখক"
    },
    {
      icon: Zap,
      title: "তাৎক্ষণিক প্রভাব",
      description: "পড়ার সাথে সাথেই প্রয়োগ করতে পারবেন এমন কার্যকর কৌশল",
      count: "২৪ঘন্টা",
      label: "ফলাফল দেখার সময়"
    }
  ];

  return (
    <section className="py-20 bg-neural-bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
              কেন আমাদের
            </span> ব্লগ পড়বেন?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            বাংলাদেশের সবচেয়ে বিস্তৃত নিউরো মার্কেটিং ব্লগ যেখানে পাবেন বিজ্ঞানভিত্তিক মার্কেটিং কৌশল
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="glassmorphism-dark rounded-2xl p-8 hover-lift cursor-pointer group transition-all duration-500 animate-slide-up border border-electric-blue/10 hover:border-electric-blue/30 text-center"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-electric-blue" size={32} />
                </div>
                
                <div className="text-3xl font-montserrat font-bold text-neon-green mb-2 group-hover:scale-110 transition-transform duration-300">
                  {feature.count}
                </div>
                <p className="text-sm text-gray-400 mb-4">{feature.label}</p>
                
                <h3 className="text-xl font-montserrat font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}