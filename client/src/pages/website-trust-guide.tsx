import { useState } from "react";
import { Download, CheckCircle, Users, TrendingDown, Brain, Target, MessageCircle } from "lucide-react";
import Navigation from "../components/layout/navigation";
import Footer from "../components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function WebsiteTrustGuide() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "Website Trust Guide Download Request",
          message: `Lead Magnet Download: Website Trust Guide\nWebsite: ${formData.website || 'Not provided'}`
        }),
      });

      if (response.ok) {
        toast({
          title: "ধন্যবাদ!",
          description: "আপনার eBook ডাউনলোড লিংক শীঘ্রই পাঠানো হবে।"
        });
        
        // Reset form
        setFormData({ name: "", email: "", phone: "", website: "" });
        
        // Redirect to WhatsApp after successful submission
        const whatsappMessage = encodeURIComponent(
          `Hi! I just downloaded the Website Trust Guide. My details:\nName: ${formData.name}\nEmail: ${formData.email}\nWebsite: ${formData.website || 'Not provided'}`
        );
        setTimeout(() => {
          window.open(`https://wa.me/8801234567890?text=${whatsappMessage}`, '_blank');
        }, 2000);
        
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-neural-bg text-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-neuro-purple via-neural-bg to-neuro-purple flex items-center justify-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-8 animate-slide-up" data-testid="main-headline">
                <span className="text-white">আপনার ওয়েবসাইটে প্রতিদিন ভিজিটর</span>
                <br />
                <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                  আসছে, কিন্তু কেন তারা কিনছে না?
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: "0.2s"}} data-testid="intro-text">
                প্রতিদিন কতো মানুষ আপনার ওয়েবসাইটে ঢুকছে, কখনো কি ভেবে দেখেছেন? <span className="text-electric-blue font-semibold">Google Analytics</span> দেখলে বুঝতে পারবেন, শত শত বা হাজার হাজার ভিজিটর আসে, কিন্তু তারা কিছু না কিনেই চলে যায়।
              </p>
              
              <div className="text-lg text-gray-300 mb-12 animate-slide-up" style={{animationDelay: "0.4s"}}>
                আপনার ওয়েবসাইটের রূপান্তর হার ১০% এর কম কেন এবং
                <br />
                <div className="w-6 h-6 mx-auto my-4">
                  <svg className="animate-bounce text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <Button 
                onClick={() => document.getElementById('toolkit-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-neural px-8 py-4 rounded-full text-xl font-semibold hover-lift animate-bounce-gentle"
                data-testid="button-learn-solution"
              >
                আপনার ওয়েবসাইটের সমাধান জানুন Neuro Gap এর সাথে
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-20 bg-neural-bg">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Card className="glassmorphism-dark border-red-500/30 hover-lift" data-testid="problem-section">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-8">
                      <TrendingDown className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-8" data-testid="problem-title">
                      <span className="text-red-400">কেন এমন হচ্ছে?</span>
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-neural-bg-secondary rounded-2xl p-8 border border-red-500/20">
                      <div className="flex items-start gap-4" data-testid="problem-point-1">
                        <div className="w-8 h-8 rounded-full bg-electric-blue flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold">👉</span>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          তারা তো আপনার অ্যাড দেখে বা কনটেন্ট পড়ে ইন্টারেস্টেড হয়েই এসেছে।
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-neural-bg-secondary rounded-2xl p-8 border border-red-500/20">
                      <div className="flex items-start gap-4" data-testid="problem-point-2">
                        <div className="w-8 h-8 rounded-full bg-neon-green flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-black font-bold">👉</span>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          কিন্তু শেষমেশ কেন কাস্টমারে রূপান্তরিত হচ্ছে না?
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-neuro-purple/20 to-electric-blue/20 rounded-2xl p-8 border border-electric-blue/30">
                      <Brain className="w-16 h-16 text-electric-blue mx-auto mb-6 animate-neural-pulse" />
                      <h3 className="text-2xl font-bold text-white mb-4">এই অজানা সত্য জানতে হলে</h3>
                      <p className="text-xl text-gray-300 mb-6">
                        আপনাকে পড়তেই হবে আমাদের eBook:
                      </p>
                      <div className="text-3xl font-bold bg-gradient-to-r from-neuro-purple via-electric-blue to-neon-green bg-clip-text text-transparent">
                        "কেন ৯০% ভিজিটর আপনার ওয়েবসাইটকে বিশ্বাস করে না?"
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-20 bg-neural-bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-montserrat font-bold mb-8" data-testid="learning-title">
                  আপনি কী <span className="bg-gradient-to-r from-neuro-purple to-neon-green bg-clip-text text-transparent">শিখবেন</span> এই eBook থেকে:
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="glassmorphism-dark border-neuro-purple/30 hover-lift group" data-testid="learning-psychology">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-neon-green flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-black group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">ভিজিটরের সাইকোলজি</h3>
                        <p className="text-gray-300 leading-relaxed">
                          কেন তারা বিশ্বাস করে না - মানুষের মনের গভীরে কী চলে যখন তারা আপনার ওয়েবসাইট দেখে
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glassmorphism-dark border-electric-blue/30 hover-lift group" data-testid="learning-mistakes">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-neon-green flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-black group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">ওয়েবসাইটের ৭টি মারাত্মক ভুল</h3>
                        <p className="text-gray-300 leading-relaxed">
                          যা কনভার্শন মেরে ফেলে এবং কীভাবে সেগুলো এড়ানো যায়
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glassmorphism-dark border-neon-green/30 hover-lift group" data-testid="learning-hacks">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-neon-green flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-black group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">প্রুভেন Neuro Marketing Hacks</h3>
                        <p className="text-gray-300 leading-relaxed">
                          যা সেলস বাড়ায় - বৈজ্ঞানিকভাবে প্রমাণিত কৌশল যা কাজ করে
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glassmorphism-dark border-neuro-purple/30 hover-lift group" data-testid="learning-examples">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-neon-green flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-black group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">বাংলাদেশি ব্যবসার রিয়েল উদাহরণ</h3>
                        <p className="text-gray-300 leading-relaxed">
                          লিড ম্যাগনেটের উদাহরণ (ফুড, ফ্যাশন, গ্যাজেট, খেলনা)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-16">
                <Button 
                  onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-neural px-10 py-4 rounded-full text-xl font-semibold hover-lift animate-bounce-gentle"
                  data-testid="button-get-ebook"
                >
                  <Download className="w-6 h-6 mr-3" />
                  এখনই ফ্রি eBook পেয়ে যান!
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Download Form Section */}
        <section id="download-form" className="py-20 bg-neural-bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="glassmorphism-dark border-neon-green/30 hover-lift" data-testid="download-form">
                <CardContent className="p-12">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 rounded-full bg-gradient-neural flex items-center justify-center mx-auto mb-6">
                      <Download className="w-10 h-10 text-white animate-bounce" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">
                      এই অজানা সত্য জানতে হলে আপনাকে পড়তেই হবে আমাদের eBook:
                    </h2>
                    <div className="text-2xl font-bold bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent mb-8">
                      "কেন ৯০% ভিজিটর আপনার ওয়েবসাইটকে বিশ্বাস করে না?"
                    </div>
                    <p className="text-gray-300 mb-8">আপনার তথ্য দিয়ে eBook পেয়ে যান</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* What You'll Learn */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-8">আপনি কী শিখবেন এই eBook থেকে:</h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-start gap-4" data-testid="learning-psychology">
                          <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">ভিজিটরের সাইকোলজি</h4>
                            <p className="text-gray-300">কেন তারা বিশ্বাস করে না</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4" data-testid="learning-mistakes">
                          <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">ওয়েবসাইটের ৭টি মারাত্মক ভুল</h4>
                            <p className="text-gray-300">যা কনভার্শন মেরে ফেলে</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4" data-testid="learning-hacks">
                          <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">প্রুভেন Neuro Marketing Hacks</h4>
                            <p className="text-gray-300">যা সেলস বাড়ায়</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4" data-testid="learning-examples">
                          <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">বাংলাদেশি ব্যবসার রিয়েল উদাহরণ</h4>
                            <p className="text-gray-300">(ফুড, ফ্যাশন, গ্যাজেট, খেলনা)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Form */}
                    <div className="bg-neural-bg rounded-2xl p-8 border border-gray-600">
                      <form onSubmit={handleSubmit} className="space-y-6" data-testid="lead-form">
                        <div>
                          <Label htmlFor="name" className="text-gray-300">আপনার নাম *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-2 bg-neural-bg-secondary border-gray-600 text-white"
                            placeholder="আপনার পূর্ণ নাম"
                            data-testid="input-name"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-gray-300">ইমেইল ঠিকানা *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-2 bg-neural-bg-secondary border-gray-600 text-white"
                            placeholder="your@email.com"
                            data-testid="input-email"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone" className="text-gray-300">মোবাইল নম্বর *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-2 bg-neural-bg-secondary border-gray-600 text-white"
                            placeholder="+880 1XXX-XXXXXX"
                            data-testid="input-phone"
                          />
                        </div>

                        <div>
                          <Label htmlFor="website" className="text-gray-300">আপনার ওয়েবসাইট (ঐচ্ছিক)</Label>
                          <Input
                            id="website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleChange}
                            className="mt-2 bg-neural-bg-secondary border-gray-600 text-white"
                            placeholder="https://yourwebsite.com"
                            data-testid="input-website"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-gradient-neural px-8 py-4 rounded-full text-lg font-semibold hover-lift disabled:opacity-50"
                          data-testid="button-download"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              পাঠানো হচ্ছে...
                            </>
                          ) : (
                            <>
                              <Download className="w-5 h-5 mr-2" />
                              এখনই ফ্রি eBook ডাউনলোড করুন!
                            </>
                          )}
                        </Button>

                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                          <MessageCircle className="w-4 h-4 text-neon-green" />
                          <span>ডাউনলোড লিংক WhatsApp এ পাঠানো হবে</span>
                        </div>
                        
                        <div className="text-center text-sm text-gray-400">
                          <Users className="w-4 h-4 inline mr-2" />
                          ১০০০+ ব্যবসায়ী ইতিমধ্যে ডাউনলোড করেছেন
                        </div>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}