import { 
  Brain, 
  Lightbulb, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  Award, 
  Code2, 
  Eye, 
  Heart, 
  Rocket,
  CheckCircle,
  Star,
  Globe,
  Shield,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-neural-bg">
      {/* Hero Block */}
      <section className="relative py-32 bg-gradient-to-br from-neural-bg via-neural-bg-secondary to-neural-bg overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neuro-purple/20 to-electric-blue/20 rounded-full px-6 py-3 mb-8 animate-slide-up">
              <Brain className="w-5 h-5 text-electric-blue animate-neural-pulse" />
              <span className="text-electric-blue font-semibold" data-testid="tagline-text">Binding Minds, Building Brands</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-montserrat font-bold mb-8 animate-slide-up" style={{animationDelay: "0.2s"}} data-testid="hero-headline">
              <span className="bg-gradient-to-r from-neuro-purple via-electric-blue to-neon-green bg-clip-text text-transparent">
                আমরা ব্রেইন সাইন্স আর ডিজাইনের
              </span>
              <br />
              <span className="text-white">দক্ষতাকে একত্র করি</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: "0.4s"}} data-testid="hero-subtext">
              Neuro Binding শুধু একটি এজেন্সি নয়, এটি একধরনের complete solution যেখানে 
              <span className="text-electric-blue font-semibold"> psychology + design + strategy </span>
              মিলে গড়ে তোলে ব্র্যান্ড, যা শুধু দেখা যায় না, অনুভব করা যায়।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: "0.6s"}}>
              <Button className="bg-gradient-neural px-8 py-4 rounded-full text-lg font-semibold hover-lift" data-testid="button-learn-process">
                <Rocket className="w-5 h-5 mr-2" />
                আমাদের প্রসেস জানুন
              </Button>
              <Button variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift" data-testid="button-contact-us">
                <Heart className="w-5 h-5 mr-2" />
                যোগাযোগ করুন
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating stats */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 hidden lg:block animate-float">
          <Card className="glassmorphism-dark border-electric-blue/30" data-testid="stat-websites">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-electric-blue">200+</div>
              <div className="text-sm text-gray-400">ওয়েবসাইট তৈরি</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="absolute top-1/3 right-10 transform -translate-y-1/2 hidden lg:block animate-float" style={{animationDelay: "1s"}}>
          <Card className="glassmorphism-dark border-neon-green/30" data-testid="stat-experience">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-neon-green">10+</div>
              <div className="text-sm text-gray-400">বছর অভিজ্ঞতা</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Journey Block */}
      <section className="py-20 bg-neural-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-montserrat font-bold mb-6" data-testid="journey-title">
                <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
                  আমাদের যাত্রার
                </span> গল্প
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="journey-subtitle">
                আমরা বিশ্বাস করি, একটা ওয়েবসাইট শুধু সুন্দর হলেই হয় না, সেটি হতে হবে সাইকোলজি ড্রিভেন এবং রেজাল্ট ওরিয়েন্টেড।
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <Card className="glassmorphism-dark border-neuro-purple/30 hover-lift" data-testid="founder-card">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-neural flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">তারিকুল ইসলাম মিকাইল</h3>
                        <p className="text-electric-blue font-semibold">প্রতিষ্ঠাতা, Neuro Binding</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      আমার নিউরো মার্কেটিং শেখার যাত্রা শুরু হয় <span className="text-electric-blue font-semibold">Brave</span> থেকে, 
                      যেখানে আমি শিখেছি Advanced Neuro Marketing Techniques, যা ভিজিটরের অবচেতন মনকে 
                      প্রভাবিত করে সিদ্ধান্ত নিতে সাহায্য করে।
                    </p>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-2 gap-6">
                  <Card className="glassmorphism-dark border-neon-green/30 text-center hover-lift" data-testid="stat-websites-created">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-neon-green mb-2">200+</div>
                      <p className="text-gray-400">ওয়েবসাইট তৈরি করেছি</p>
                    </CardContent>
                  </Card>
                  <Card className="glassmorphism-dark border-electric-blue/30 text-center hover-lift" data-testid="stat-websites-visited">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-electric-blue mb-2">2000+</div>
                      <p className="text-gray-400">ওয়েবসাইট ভিজিট করেছি</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="glassmorphism-dark border-neuro-purple/30 hover-lift" data-testid="expertise-card">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Brain className="text-neuro-purple" />
                      আমাদের বিশেষত্ব
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3" data-testid="expertise-neuro-web">
                        <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Neuro Marketing ভিত্তিক ওয়েবসাইট ডেভেলপমেন্ট</span>
                      </div>
                      <div className="flex items-start gap-3" data-testid="expertise-neuro-content">
                        <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Neuro Marketing ভিত্তিক কনটেন্ট ও স্ক্রিপ্ট তৈরি</span>
                      </div>
                      <div className="flex items-start gap-3" data-testid="expertise-psychology">
                        <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                        <span className="text-gray-300">কাস্টমার সাইকোলজি বিশ্লেষণ করে রেজাল্ট আনা</span>
                      </div>
                      <div className="flex items-start gap-3" data-testid="expertise-conversion">
                        <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                        <span className="text-gray-300">ডিজাইন + Neuro Hacks প্রয়োগ করে কনভার্শন বাড়ানো</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glassmorphism-dark border-electric-blue/30 hover-lift" data-testid="philosophy-card">
                  <CardContent className="p-8 text-center">
                    <Target className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-4">আমাদের লক্ষ্য</h3>
                    <p className="text-gray-300 italic">
                      "আপনাকে শুধু ওয়েবসাইট নয়, বরং একটি <span className="text-electric-blue font-semibold">24/7 Sales Machine</span> উপহার দেওয়া।"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Block */}
      <section className="py-20 bg-neural-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-montserrat font-bold mb-8" data-testid="mission-title">
              <span className="bg-gradient-to-r from-neuro-purple to-neon-green bg-clip-text text-transparent">
                আমাদের মিশন
              </span>
            </h2>
            <p className="text-2xl text-gray-300 mb-12" data-testid="mission-subtitle">
              বাংলাদেশি ব্যবসাকে এমন ওয়েবসাইট ও ব্র্যান্ডিং সলিউশন দেওয়া যা—
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glassmorphism-dark border-neuro-purple/30 hover-lift group" data-testid="mission-emotion">
                <CardContent className="p-8 text-center">
                  <Heart className="w-12 h-12 text-neuro-purple mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-4">মানুষের আবেগ ছোঁবে</h3>
                  <p className="text-gray-400">গভীর সাইকোলজিকাল কানেকশন তৈরি করে</p>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism-dark border-electric-blue/30 hover-lift group" data-testid="mission-trust">
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 text-electric-blue mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-4">বিশ্বাস তৈরি করবে</h3>
                  <p className="text-gray-400">Trust এবং Authority বিল্ড করে</p>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism-dark border-neon-green/30 hover-lift group" data-testid="mission-sales">
                <CardContent className="p-8 text-center">
                  <BarChart3 className="w-12 h-12 text-neon-green mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-4">সেলস বৃদ্ধিতে সহযোগিতা করবে</h3>
                  <p className="text-gray-400">কনভার্শন রেট অপ্টিমাইজেশনের মাধ্যমে</p>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism-dark border-neuro-purple/30 hover-lift group" data-testid="mission-sustainable">
                <CardContent className="p-8 text-center">
                  <Globe className="w-12 h-12 text-neuro-purple mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-4">ব্যবসাকে দীর্ঘমেয়াদে টেকসই করবে</h3>
                  <p className="text-gray-400">স্থায়ী এবং লাভজনক সমাধানের মাধ্যমে</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Block */}
      <section className="py-20 bg-neural-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-montserrat font-bold mb-8" data-testid="why-us-title">
                কেন <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">Neuro Binding</span> আলাদা?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Advanced Neuro Marketing */}
              <Card className="glassmorphism-dark border-neuro-purple/30 hover-lift group" data-testid="feature-neuro-expertise">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Brain className="w-12 h-12 text-neuro-purple group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white">Advanced Neuro Marketing Expertise</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Brave থেকে শেখা advanced neuro marketing + international research → 
                    আমরা শুধু সুন্দর ওয়েবসাইট বানাই না, মানুষের মন জয় করা ওয়েবসাইট বিল্ড করি।
                  </p>
                </CardContent>
              </Card>
              
              {/* Experience */}
              <Card className="glassmorphism-dark border-electric-blue/30 hover-lift group" data-testid="feature-experience">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Award className="w-12 h-12 text-electric-blue group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white">১০+ বছরের অভিজ্ঞতা</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    ২০০+ ওয়েবসাইট তৈরি + ২০০০+ ওয়েবসাইট অডিট করে শিখেছি, 
                    সাফল্যের চাবিকাঠি হলো <span className="text-electric-blue">psychology + minimalism + trust</span>।
                  </p>
                </CardContent>
              </Card>
              
              {/* Custom Plugin Power */}
              <Card className="glassmorphism-dark border-neon-green/30 hover-lift group" data-testid="feature-custom-plugins">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Code2 className="w-12 h-12 text-neon-green group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white">Custom Plugin Power</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    আমাদের আছে <span className="text-neon-green font-semibold">১২০+ নিজস্ব প্লাগইন লাইব্রেরি</span> 
                    → কোন dependency নেই, মাত্র কয়েক লাইন কোডেই সমাধান।
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-neon-green" />
                      Zero Dependency
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-neon-green" />
                      Lightning Fast Loading
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Data-Driven Design */}
              <Card className="glassmorphism-dark border-neuro-purple/30 hover-lift group" data-testid="feature-data-driven">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <BarChart3 className="w-12 h-12 text-neuro-purple group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white">Data-Driven Content & Design</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    কনটেন্ট, স্ক্রিপ্ট, এবং লেআউটকে neuro hacks দিয়ে সাজাই → 
                    যাতে ভিজিটর "দেখে" না, বরং <span className="text-neuro-purple">"বিশ্বাস করে + কিনে ফেলে"</span>।
                  </p>
                </CardContent>
              </Card>
              
              {/* Content & Script Expertise */}
              <Card className="glassmorphism-dark border-electric-blue/30 hover-lift group" data-testid="feature-content-expertise">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Eye className="w-12 h-12 text-electric-blue group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white">Content + Script Expertise</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Lead magnet, ভিডিও স্ক্রিপ্ট, ওয়েবসাইট কপি → 
                    সবকিছুই আমরা <span className="text-electric-blue">নিউরো সাইকোলজি</span> দিয়ে অপ্টিমাইজ করি।
                  </p>
                </CardContent>
              </Card>
              
              {/* Latest Tools */}
              <Card className="glassmorphism-dark border-neon-green/30 hover-lift group" data-testid="feature-latest-tools">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Zap className="w-12 h-12 text-neon-green group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white">Latest Tools & Hacks</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Heatmap, eye-tracking, A/B testing, color psychology → 
                    প্রতিটি ওয়েবসাইটকে <span className="text-neon-green">২৪/৭ সেলসম্যান</span> এ পরিণত করি।
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-20 bg-neural-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-montserrat font-bold mb-12" data-testid="philosophy-title">
              <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
                আমাদের বিশ্বাস
              </span>
            </h2>
            
            <Card className="glassmorphism-dark border-neuro-purple/30 hover-lift" data-testid="philosophy-content">
              <CardContent className="p-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-neural flex items-center justify-center">
                    <Brain className="w-10 h-10 text-white animate-neural-pulse" />
                  </div>
                </div>
                
                <blockquote className="text-3xl font-medium text-white mb-8 italic leading-relaxed">
                  "ওয়েবসাইট শুধু কোড আর ডিজাইন নয়, বরং এটি মানুষের মস্তিষ্কে তৈরি হওয়া perception।"
                </blockquote>
                
                <div className="text-xl text-gray-300 leading-relaxed">
                  তাই আমরা প্রতিটি ওয়েবসাইটে এমন সাইকোলজিকাল হ্যাক ব্যবহার করি যা ভিজিটরের ব্রেইনকে বলে-
                  <br />
                  <span className="text-electric-blue font-semibold text-2xl mt-4 block">
                    "এখানে তুমি নিরাপদ, বিশ্বাস করতে পারো, কিনতে পারো।"
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Block */}
      <section className="py-20 bg-gradient-to-br from-neural-bg-secondary via-neural-bg to-neural-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-montserrat font-bold mb-8" data-testid="vision-title">
                <span className="bg-gradient-to-r from-electric-blue via-neon-green to-neuro-purple bg-clip-text text-transparent">
                  আমাদের ভিশন
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="glassmorphism-dark border-electric-blue/30 hover-lift" data-testid="vision-content">
                  <CardContent className="p-10">
                    <Globe className="w-16 h-16 text-electric-blue mb-6 animate-float" />
                    <h3 className="text-2xl font-bold text-white mb-6">গ্লোবাল ব্র্যান্ড তৈরি</h3>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                      বাংলাদেশি ব্যবসাগুলোকে এমন ব্র্যান্ডে রূপান্তরিত করা যা শুধু লোকাল না, 
                      বরং গ্লোবাল প্ল্যাটফর্মে <span className="text-electric-blue font-semibold">Trust + Loyalty + Growth</span> এর প্রতীক হয়ে দাঁড়াবে।
                    </p>
                    <div className="flex items-center gap-3 text-neon-green">
                      <Target className="w-6 h-6" />
                      <span className="font-semibold text-lg">আমরা চাই প্রতিটি ওয়েবসাইট হোক ব্যবসার ২৪/৭ সেলসম্যান।</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="glassmorphism-dark border-neuro-purple/30 text-center hover-lift" data-testid="vision-stat-trust">
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-neuro-purple mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Trust</h4>
                    <p className="text-gray-400 text-sm">বিশ্বাসযোগ্যতা তৈরি</p>
                  </CardContent>
                </Card>
                
                <Card className="glassmorphism-dark border-electric-blue/30 text-center hover-lift" data-testid="vision-stat-loyalty">
                  <CardContent className="p-6">
                    <Heart className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Loyalty</h4>
                    <p className="text-gray-400 text-sm">গ্রাহক আনুগত্য</p>
                  </CardContent>
                </Card>
                
                <Card className="glassmorphism-dark border-neon-green/30 text-center hover-lift" data-testid="vision-stat-growth">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-neon-green mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Growth</h4>
                    <p className="text-gray-400 text-sm">ব্যবসায়িক বৃদ্ধি</p>
                  </CardContent>
                </Card>
                
                <Card className="glassmorphism-dark border-neuro-purple/30 text-center hover-lift" data-testid="vision-stat-global">
                  <CardContent className="p-6">
                    <Globe className="w-12 h-12 text-neuro-purple mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Global</h4>
                    <p className="text-gray-400 text-sm">আন্তর্জাতিক মান</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Card className="glassmorphism-dark border-gradient-neural inline-block hover-lift" data-testid="cta-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <span className="text-electric-blue">Neuro Binding</span> = <span className="text-neon-green">Binding Minds, Building Brands</span>
                  </h3>
                  <Button className="bg-gradient-neural px-10 py-4 rounded-full text-lg font-semibold hover-lift" data-testid="button-start-journey">
                    <Rocket className="w-5 h-5 mr-2" />
                    আমাদের সাথে যাত্রা শুরু করুন
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
