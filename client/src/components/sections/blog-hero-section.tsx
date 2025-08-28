import { Search, Brain } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import NeuralBackground from "../ui/neural-background";

export default function BlogHeroSection() {
  return (
    <section 
      id="blog-hero" 
      className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-neural-bg via-deep-purple to-neural-bg"
    >
      <NeuralBackground />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 animate-slide-up">
            <div className="p-4 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full">
              <Brain className="text-electric-blue" size={48} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-neuro-purple via-electric-blue to-neon-green bg-clip-text text-transparent">
              নিউরো মার্কেটিং
            </span>
            <br />
            <span className="text-white">ব্লগ ও অন্তর্দৃষ্টি</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{animationDelay: "0.2s"}}>
            সাইকোলজি-চালিত ওয়েব ডিজাইন, নিউরো মার্কেটিং কৌশল এবং কনভার্শন অপটিমাইজেশনের 
            গোপন রহস্য আবিষ্কার করুন যা ভিজিটরদের গ্রাহকে রূপান্তরিত করে।
          </p>
          
          <div className="max-w-2xl mx-auto animate-slide-up" style={{animationDelay: "0.4s"}}>
            <div className="relative glassmorphism-dark rounded-full p-3">
              <div className="flex items-center gap-4">
                <Input 
                  type="text" 
                  placeholder="অন্তর্দৃষ্টি, কৌশল, কেস স্টাডি খুঁজুন..." 
                  className="bg-transparent border-none text-white placeholder-gray-400 pl-4 py-3 text-lg focus:ring-0 focus:outline-none flex-1"
                />
                <Button 
                  size="lg"
                  className="bg-gradient-neural px-6 py-3 rounded-full hover-lift shrink-0"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-slide-up" style={{animationDelay: "0.6s"}}>
            <span className="text-gray-400">জনপ্রিয় বিষয়:</span>
            {["নিউরো মার্কেটিং", "কনভার্শন সাইকোলজি", "ইউজার এক্সপেরিয়েন্স", "রঙের মনোবিজ্ঞান", "A/B টেস্টিং"].map((topic) => (
              <Button 
                key={topic}
                variant="outline" 
                size="sm"
                className="border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue rounded-full px-4 py-2 transition-all duration-300"
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}