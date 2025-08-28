import { Mail, Bell, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function BlogNewsletterSection() {
  return (
    <section className="py-20 bg-neural-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neuro-purple/10 via-transparent to-electric-blue/10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8 animate-slide-up">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full animate-neural-pulse">
                <Mail className="text-electric-blue" size={32} />
              </div>
              <div className="p-4 bg-gradient-to-r from-neuro-purple/20 to-neon-green/20 rounded-full animate-neural-pulse" style={{animationDelay: "0.5s"}}>
                <Bell className="text-neon-green" size={32} />
              </div>
              <div className="p-4 bg-gradient-to-r from-neon-green/20 to-electric-blue/20 rounded-full animate-neural-pulse" style={{animationDelay: "1s"}}>
                <Zap className="text-electric-blue" size={32} />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-neuro-purple via-electric-blue to-neon-green bg-clip-text text-transparent">
              কোনো নিউরো
            </span>
            <br />
            <span className="text-white">অন্তর্দৃষ্টি মিস করবেন না</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.2s"}}>
            আত্যাধুনিক নিউরো মার্কেটিং গবেষণা, মনোবিজ্ঞান-চালিত ডিজাইন টিপস এবং বাস্তব 
            কেস স্টাডির একচেটিয়া অ্যাক্সেস পান প্রতি সপ্তাহে সরাসরি আপনার ইনবক্সে।
          </p>
          
          <div className="glassmorphism-dark rounded-2xl p-8 mb-12 animate-slide-up" style={{animationDelay: "0.4s"}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-electric-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  সাপ্তাহিক অন্তর্দৃষ্টি
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  সর্বশেষ নিউরো মার্কেটিং কৌশল এবং কেস স্টাডি
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-neuro-purple/20 to-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Bell className="text-neon-green" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
                  একচেটিয়া কন্টেন্ট
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  শুধুমাত্র সাবস্ক্রাইবারদের জন্য গবেষণা এবং পর্দার আড়ালের অন্তর্দৃষ্টি
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-green/20 to-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-electric-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  কোনো স্প্যাম নেই
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  পরিমাণের চেয়ে গুণমান, যেকোনো সময় আনসাবস্ক্রাইব করুন
                </p>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="নিউরো অন্তর্দৃষ্টির জন্য আপনার ইমেইল লিখুন..." 
                  className="bg-neural-bg border-electric-blue/30 text-white placeholder-gray-400 px-6 py-4 text-lg rounded-full focus:border-electric-blue focus:ring-electric-blue"
                />
                <Button 
                  size="lg"
                  className="bg-gradient-neural px-8 py-4 rounded-full text-lg font-semibold hover-lift whitespace-nowrap"
                >
                  এখনই সাবস্ক্রাইব করুন
                </Button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                ২,৫০০+ মার্কেটার এবং ডিজাইনার যারা আমাদের অন্তর্দৃষ্টি বিশ্বাস করেন তাদের সাথে যোগ দিন। 
                <span className="text-electric-blue"> কোনো স্প্যাম নেই, যেকোনো সময় আনসাবস্ক্রাইব করুন।</span>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-slide-up" style={{animationDelay: "0.6s"}}>
            <div>
              <div className="text-3xl font-montserrat font-bold text-neon-green mb-2 animate-bounce-gentle">
                ২,৫০০+
              </div>
              <p className="text-gray-400">সাবস্ক্রাইবার</p>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-electric-blue mb-2 animate-bounce-gentle" style={{animationDelay: "0.2s"}}>
                ৯৫%
              </div>
              <p className="text-gray-400">ওপেন রেট</p>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-neuro-purple mb-2 animate-bounce-gentle" style={{animationDelay: "0.4s"}}>
                ৫২
              </div>
              <p className="text-gray-400">সাপ্তাহিক ইস্যু</p>
            </div>
            <div>
              <div className="text-3xl font-montserrat font-bold text-neon-green mb-2 animate-bounce-gentle" style={{animationDelay: "0.6s"}}>
                ৪.৯/৫
              </div>
              <p className="text-gray-400">রেটিং</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}