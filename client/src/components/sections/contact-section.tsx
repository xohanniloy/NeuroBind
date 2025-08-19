import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
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
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      form.reset();
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
            <div className="glassmorphism-dark rounded-2xl p-8">
              <h3 className="text-2xl font-montserrat font-semibold mb-6 text-neuro-purple">
                Get Your Free Consultation
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    className="w-full bg-gradient-neural py-4 rounded-xl text-lg font-semibold hover-lift animate-pulse-glow"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Start Building Your 24/7 Sales Machine"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glassmorphism-dark rounded-2xl p-8">
                <h3 className="text-2xl font-montserrat font-semibold mb-6 text-electric-blue">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neuro-purple rounded-full flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-lg">hello@neurobinding.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-lg">+880 1234 567890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-green rounded-full flex items-center justify-center">
                      <MapPin className="text-neural-bg" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-lg">Dhaka, Bangladesh</p>
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
