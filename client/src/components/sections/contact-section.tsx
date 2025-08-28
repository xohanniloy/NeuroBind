import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, MessageCircle, User, Clock, HeadphonesIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  fullName: z.string().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  email: z.string().email("সঠিক ইমেইল ঠিকানা দিন"),
  phone: z.string().optional(),
  subject: z.string().min(1, "বিষয় নির্বাচন করুন"),
  message: z.string().min(10, "বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setShowSuccess(true);
      toast({
        title: "বার্তা পাঠানো হয়েছে!",
        description: "ধন্যবাদ! আমরা ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করব।",
      });
      form.reset();
      setTimeout(() => setShowSuccess(false), 3000);
    },
    onError: () => {
      toast({
        title: "ত্রুটি",
        description: "বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-neural-bg">
      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center bg-gradient-to-br from-neural-bg via-purple-900/80 to-neural-bg neural-bg-pattern">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border border-neuro-purple rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-electric-blue rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-neon-green rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-montserrat font-bold mb-8 leading-tight">
            <span className="text-white">মানুষের </span>
            <span className="bg-gradient-neural bg-clip-text text-transparent">বিশ্বাস শুরু হয়</span>
            <br />
            <span className="text-neon-green">যোগাযোগ থেকেই</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed max-w-3xl mx-auto">
            আপনার যদি কোনো প্রশ্ন থাকে, অথবা আপনার ওয়েবসাইট/বিজনেসকে নিউরো মার্কেটিং দিয়ে আপগ্রেড করতে চান—আমরা আছি আপনার জন্য।
          </p>
          
          <p className="text-lg text-electric-blue mb-12 font-medium">
            আপনার ব্যবসায়ের যদি ২৪/৭ বিক্রি না হয়ে থাকে এখনই
          </p>

          {/* Scroll indicator */}
          <div className="animate-bounce mb-8">
            <ChevronDown className="text-neon-green mx-auto" size={40} />
          </div>

          <Button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-neural hover-lift px-12 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            এখনই যোগাযোগ করুন
          </Button>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-neural-bg via-neural-bg-secondary to-neural-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-neural bg-clip-text text-transparent">
                📧 আমাদের সাথে যোগাযোগের উপায়
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              আমরা সবসময় আপনার সেবায় প্রস্তুত - যেভাবে চান যোগাযোগ করুন
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Email */}
              <div className="glassmorphism-dark rounded-2xl p-6 border border-electric-blue/30 hover:border-electric-blue/50 group cursor-pointer transition-all duration-300 hover-lift" onClick={() => window.open('mailto:info@neurobinding.com')}>
                <div className="w-16 h-16 bg-gradient-neural rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-electric-blue font-semibold text-lg text-center mb-2">Email</h3>
                <p className="text-white text-center font-medium">info@neurobinding.com</p>
                <p className="text-gray-400 text-sm text-center mt-2">২৪ ঘন্টার মধ্যে উত্তর</p>
              </div>

              {/* WhatsApp */}
              <div className="glassmorphism-dark rounded-2xl p-6 border border-neon-green/30 hover:border-neon-green/50 group cursor-pointer transition-all duration-300 hover-lift" onClick={() => window.open('https://wa.me/8801929100100')}>
                <div className="w-16 h-16 bg-gradient-neural rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <h3 className="text-neon-green font-semibold text-lg text-center mb-2">WhatsApp</h3>
                <p className="text-white text-center font-medium">+8801929100100</p>
                <p className="text-gray-400 text-sm text-center mt-2">দ্রুত সাড়া পান</p>
              </div>

              {/* Phone */}
              <div className="glassmorphism-dark rounded-2xl p-6 border border-neuro-purple/30 hover:border-neuro-purple/50 group cursor-pointer transition-all duration-300 hover-lift" onClick={() => window.open('tel:+8801929100100')}>
                <div className="w-16 h-16 bg-gradient-neural rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-neuro-purple font-semibold text-lg text-center mb-2">Phone</h3>
                <p className="text-white text-center font-medium">+8801929100100</p>
                <p className="text-gray-400 text-sm text-center mt-2">সকাল ১০টা – রাত ৮টা</p>
              </div>

              {/* Address */}
              <div className="glassmorphism-dark rounded-2xl p-6 border border-electric-blue/30 hover:border-electric-blue/50 group transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-neural rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-electric-blue font-semibold text-lg text-center mb-2">Office</h3>
                <p className="text-white text-center font-medium text-sm">House 10, Road 1/B</p>
                <p className="text-gray-400 text-sm text-center mt-1">Sector 9, Uttara, Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section - Separate */}
      <section className="py-20 bg-gradient-to-br from-neural-bg-secondary via-neural-bg to-neural-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glassmorphism-dark rounded-3xl p-12 border border-electric-blue/30 hover:border-electric-blue/50 transition-all duration-300">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-12 text-center">
                <span className="bg-gradient-neural bg-clip-text text-transparent">
                  ✅ কেন আমাদের সাথে যোগাযোগ করবেন?
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center glassmorphism-card p-6 rounded-2xl border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 hover-lift group">
                  <div className="w-16 h-16 bg-gradient-neural rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h3 className="text-electric-blue font-semibold text-xl mb-3">দ্রুত উত্তর</h3>
                  <p className="text-white text-lg">২৪ ঘন্টার মধ্যে</p>
                </div>
                
                <div className="text-center glassmorphism-card p-6 rounded-2xl border border-neon-green/20 hover:border-neon-green/40 transition-all duration-300 hover-lift group">
                  <div className="w-16 h-16 bg-gradient-neural rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <HeadphonesIcon className="text-white" size={24} />
                  </div>
                  <h3 className="text-neon-green font-semibold text-xl mb-3">Friendly Discussion</h3>
                  <p className="text-white text-lg">প্রোজেক্ট ডিটেইল শুনি</p>
                </div>
                
                <div className="text-center glassmorphism-card p-6 rounded-2xl border border-neuro-purple/20 hover:border-neuro-purple/40 transition-all duration-300 hover-lift group">
                  <div className="w-16 h-16 bg-gradient-neural rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <User className="text-white" size={24} />
                  </div>
                  <h3 className="text-neuro-purple font-semibold text-xl mb-3">Free Consultation</h3>
                  <p className="text-white text-lg">Initial Neuro Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-neural-bg via-neural-bg-secondary to-neural-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="glassmorphism-dark rounded-3xl p-16 border border-electric-blue/30 hover:border-electric-blue/50 transition-all duration-300">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold leading-tight mb-8">
                <span className="bg-gradient-neural bg-clip-text text-transparent">
                  📌 "আপনার ব্যবসাকে পরবর্তী ধাপে নিতে<br />এখনই যোগাযোগ করুন।"
                </span>
              </h2>
              
              <p className="text-2xl text-gray-200 mb-12 font-medium">
                👉 <span className="text-neon-green">যেকোনো মাধ্যম বেছে নিন, আমরা প্রস্তুত আপনার পাশে থাকার জন্য।</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <Button 
                  onClick={() => window.open('mailto:info@neurobinding.com')}
                  className="group bg-gradient-neural hover-lift transform hover:scale-110 transition-all duration-300 px-8 py-6 rounded-2xl text-lg font-bold shadow-2xl border border-neuro-purple/30"
                >
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                      <Mail className="text-white" size={20} />
                    </div>
                    <span>Email Us</span>
                  </div>
                </Button>
                
                <Button 
                  onClick={() => window.open('https://wa.me/8801929100100')}
                  className="group bg-gradient-neural hover-lift transform hover:scale-110 transition-all duration-300 px-8 py-6 rounded-2xl text-lg font-bold shadow-2xl border border-neon-green/30"
                >
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                      <MessageCircle className="text-white" size={20} />
                    </div>
                    <span>WhatsApp</span>
                  </div>
                </Button>
                
                <Button 
                  onClick={() => window.open('tel:+8801929100100')}
                  className="group bg-gradient-neural hover-lift transform hover:scale-110 transition-all duration-300 px-8 py-6 rounded-2xl text-lg font-bold shadow-2xl border border-electric-blue/30"
                >
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
                      <Phone className="text-white" size={20} />
                    </div>
                    <span>Call Now</span>
                  </div>
                </Button>
              </div>
              
              <div className="p-6 glassmorphism-card rounded-2xl border border-neon-green/30">
                <p className="text-neon-green font-bold text-xl animate-pulse">
                  🚀 আজই শুরু করুন আপনার সফলতার যাত্রা!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Last Section before Footer */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-neural-bg-secondary via-neural-bg to-neural-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              <span className="bg-gradient-neural bg-clip-text text-transparent">
                আপনার মেসেজ দিন – আমরা দ্রুত উত্তর দেব
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              নিচের ফর্মটি পূরণ করুন এবং আমরা ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করব।
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glassmorphism-dark rounded-2xl p-8 border border-electric-blue/30">
              {/* Success Animation */}
              {showSuccess && (
                <div className="absolute inset-0 bg-neural-bg/95 rounded-2xl flex items-center justify-center z-20">
                  <div className="text-center">
                    <CheckCircle className="text-neon-green mx-auto mb-4 animate-pulse" size={80} />
                    <h3 className="text-3xl font-montserrat font-bold text-white mb-2">বার্তা পাঠানো হয়েছে! 🎉</h3>
                    <p className="text-gray-300 text-lg">আমরা ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করব</p>
                  </div>
                </div>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Name"
                            className="bg-gray-700/50 border-gray-600 focus:border-electric-blue text-white placeholder-gray-400 h-12 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Your Email"
                            className="bg-gray-700/50 border-gray-600 focus:border-electric-blue text-white placeholder-gray-400 h-12 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Phone"
                            className="bg-gray-700/50 border-gray-600 focus:border-electric-blue text-white placeholder-gray-400 h-12 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-700/50 border-gray-600 focus:border-electric-blue text-white h-12 rounded-lg">
                              <SelectValue placeholder="Neuro Marketing Audit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="new-website" className="text-white hover:bg-gray-700">New Website</SelectItem>
                            <SelectItem value="website-redesign" className="text-white hover:bg-gray-700">Website Redesign</SelectItem>
                            <SelectItem value="conversion-optimization" className="text-white hover:bg-gray-700">Conversion Optimization</SelectItem>
                            <SelectItem value="neuro-marketing-audit" className="text-white hover:bg-gray-700">Neuro Marketing Audit</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Your Message"
                            rows={6}
                            className="bg-gray-700/50 border-gray-600 focus:border-electric-blue text-white placeholder-gray-400 resize-none rounded-lg"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-neural hover-lift py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        পাঠানো হচ্ছে...
                      </div>
                    ) : (
                      "📨 মেসেজ পাঠান"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}