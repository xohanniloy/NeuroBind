import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, Zap, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isTyping, setIsTyping] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
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
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      form.reset();
      setFormProgress(0);
      setTimeout(() => setShowSuccess(false), 3000);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  // Calculate form progress
  useEffect(() => {
    const values = form.getValues();
    const filledFields = Object.values(values).filter(value => value && value.toString().trim() !== '').length;
    const totalFields = Object.keys(values).length;
    setFormProgress((filledFields / totalFields) * 100);
  }, [form.watch()]);

  // Detect typing
  useEffect(() => {
    const subscription = form.watch(() => {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timer);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <section id="contact" className="py-20 bg-neural-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
              Start Your
            </span> Neuro Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your website into a 24/7 sales machine? Let's talk about your project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative glassmorphism-dark rounded-2xl p-8 group overflow-hidden hover-lift">
              {/* Animated border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-neuro-purple/20 to-neon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl animate-shimmer"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-montserrat font-semibold mb-4 text-neuro-purple group-hover:text-electric-blue transition-colors duration-300">
                  Get Your Free Consultation
                </h3>
                
                {/* Form Progress Indicator */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>Form Progress</span>
                    <span>{Math.round(formProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-electric-blue to-neon-green h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${formProgress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex items-center space-x-2 text-electric-blue animate-pulse mb-4">
                    <Zap size={16} />
                    <span className="text-sm">Analyzing your input...</span>
                  </div>
                )}
              
                {/* Success Animation */}
                {showSuccess && (
                  <div className="absolute inset-0 bg-neural-bg/90 rounded-2xl flex items-center justify-center z-10">
                    <div className="text-center animate-bounce-gentle">
                      <CheckCircle className="text-neon-green mx-auto mb-4 animate-pulse" size={64} />
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-300">We'll get back to you within 24 hours</p>
                      <div className="flex justify-center mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-neon-green fill-current mx-1 animate-bounce-gentle" size={16} style={{animationDelay: `${i * 0.1}s`}} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Name"
                              className="bg-neural-bg-secondary border-gray-700 focus:border-electric-blue"
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
                              placeholder="Email Address"
                              className="bg-neural-bg-secondary border-gray-700 focus:border-electric-blue"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Company Name"
                              className="bg-neural-bg-secondary border-gray-700 focus:border-electric-blue"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-neural-bg-secondary border-gray-700 focus:border-electric-blue">
                                <SelectValue placeholder="Project Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="new-website">New Website</SelectItem>
                              <SelectItem value="website-redesign">Website Redesign</SelectItem>
                              <SelectItem value="conversion-optimization">Conversion Optimization</SelectItem>
                              <SelectItem value="neuro-marketing-audit">Neuro Marketing Audit</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Tell us about your project and goals..."
                            rows={5}
                            className="bg-neural-bg-secondary border-gray-700 focus:border-electric-blue resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                    <Button
                      type="submit"
                      className={`w-full bg-gradient-neural py-4 rounded-xl text-lg font-semibold hover-lift transform hover:scale-105 transition-all duration-300 group ${
                        formProgress >= 80 ? 'animate-pulse' : 'opacity-75'
                      }`}
                      disabled={contactMutation.isPending || formProgress < 80}
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                          {formProgress >= 80 ? 'Start Building Your 24/7 Sales Machine' : `Complete Form (${Math.round(formProgress)}%)`}
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glassmorphism-dark rounded-2xl p-8">
                <h3 className="text-2xl font-montserrat font-semibold mb-6 text-electric-blue">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group hover-lift cursor-pointer transition-all duration-300" onClick={() => window.open('mailto:hello@neurobinding.com')}>
                    <div className="w-12 h-12 bg-neuro-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white group-hover:animate-bounce-gentle" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Email</p>
                      <p className="text-lg group-hover:text-electric-blue transition-colors duration-300">hello@neurobinding.com</p>
                      <p className="text-xs text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to email →</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover-lift cursor-pointer transition-all duration-300" onClick={() => window.open('tel:+8801234567890')}>
                    <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white group-hover:animate-bounce-gentle" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Phone</p>
                      <p className="text-lg group-hover:text-neon-green transition-colors duration-300">+880 1234 567890</p>
                      <p className="text-xs text-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to call →</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover-lift transition-all duration-300">
                    <div className="w-12 h-12 bg-neon-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-neural-bg group-hover:animate-bounce-gentle" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Location</p>
                      <p className="text-lg group-hover:text-neuro-purple transition-colors duration-300">Dhaka, Bangladesh</p>
                      <p className="text-xs text-neuro-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300">Premium location →</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glassmorphism-dark rounded-2xl p-8">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-neon-green">
                  Follow Our Journey
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-neural-bg-secondary rounded-full flex items-center justify-center hover:bg-neuro-purple transition-colors duration-300"
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-neural-bg-secondary rounded-full flex items-center justify-center hover:bg-electric-blue transition-colors duration-300"
                  >
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-neural-bg-secondary rounded-full flex items-center justify-center hover:bg-neon-green transition-colors duration-300"
                  >
                    <i className="fab fa-linkedin-in text-neural-bg"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-neural-bg-secondary rounded-full flex items-center justify-center hover:bg-neuro-purple transition-colors duration-300"
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
