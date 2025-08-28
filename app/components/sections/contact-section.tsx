"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, MessageCircle, User, Clock, HeadphonesIcon } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  email: z.string().email("সঠিক ইমেইল ঠিকানা দিন"),
  phone: z.string().optional(),
  subject: z.string().min(1, "বিষয় নির্বাচন করুন"),
  message: z.string().min(10, "বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Phone className="text-blue-400 mr-3 animate-pulse" size={40} />
            <h1 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                📞 Contact Us – Neuro Binding
              </span>
            </h1>
          </div>
          <h2 className="text-2xl text-green-400 mb-4 font-semibold">
            🧠 "মানুষের বিশ্বাস শুরু হয় যোগাযোগ থেকেই।"
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            আপনার যদি কোনো প্রশ্ন থাকে, অথবা আপনার ওয়েবসাইট/বিজনেসকে নিউরো মার্কেটিং দিয়ে আপগ্রেড করতে চান—আমরা আছি আপনার জন্য।
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information - Left Column */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
                  <Mail className="mr-3" size={24} />
                  📧 আমাদের সাথে যোগাযোগের উপায়
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4 group cursor-pointer transition-all duration-300 p-4 rounded-xl hover:bg-gray-700/50" onClick={() => window.open('mailto:info@neurobinding.com')}>
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="text-white" size={22} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-lg">✉️ Email</p>
                      <p className="text-blue-400 font-mono text-lg">info@neurobinding.com</p>
                      <p className="text-gray-400 text-sm mt-1">যেকোনো প্রশ্ন বা প্রোজেক্টের বিষয়ে আমাদের লিখুন, ২৪ ঘন্টার মধ্যে উত্তর পাবেন</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-4 group cursor-pointer transition-all duration-300 p-4 rounded-xl hover:bg-gray-700/50" onClick={() => window.open('https://wa.me/8801929100100')}>
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MessageCircle className="text-white" size={22} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-lg">💬 WhatsApp</p>
                      <p className="text-green-400 font-mono text-lg">+8801929100100</p>
                      <p className="text-gray-400 text-sm mt-1">Direct Chat – দ্রুত সাড়া পেতে WhatsApp এ মেসেজ করুন</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 group cursor-pointer transition-all duration-300 p-4 rounded-xl hover:bg-gray-700/50" onClick={() => window.open('tel:+8801929100100')}>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="text-white" size={22} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-lg">📞 Phone Number</p>
                      <p className="text-blue-400 font-mono text-lg">+8801929100100</p>
                      <p className="text-gray-400 text-sm mt-1">সকাল ১০টা – রাত ৮টা পর্যন্ত কল করতে পারেন</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4 group transition-all duration-300 p-4 rounded-xl hover:bg-gray-700/50">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="text-white" size={22} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-lg">📍 Office Address</p>
                      <p className="text-green-400 text-lg">2nd floor, House 10, Road 1/B</p>
                      <p className="text-gray-300">Sector 9, Uttara, Dhaka 1230</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-semibold mb-6 text-green-400 flex items-center">
                  <CheckCircle className="mr-3" size={20} />
                  ✅ কেন আমাদের সাথে যোগাযোগ করবেন?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-400" size={18} />
                    <span className="text-gray-300">দ্রুত উত্তর – ২৪ ঘন্টার মধ্যে</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HeadphonesIcon className="text-green-400" size={18} />
                    <span className="text-gray-300">প্রোজেক্ট ডিটেইল শোনার জন্য Friendly Discussion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="text-purple-400" size={18} />
                    <span className="text-gray-300">Free Initial Neuro Marketing Consultation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Column */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden border border-gray-700">
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-green-500/10 opacity-50 animate-pulse"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2 text-center">
                    <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                      📋 আপনার মেসেজ দিন – আমরা দ্রুত উত্তর দেব
                    </span>
                  </h3>
                  <p className="text-center text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
                  
                  {/* Success Animation */}
                  {showSuccess && (
                    <div className="absolute inset-0 bg-gray-900/95 rounded-2xl flex items-center justify-center z-20">
                      <div className="text-center">
                        <CheckCircle className="text-green-400 mx-auto mb-4 animate-pulse" size={80} />
                        <h3 className="text-3xl font-bold text-white mb-2">বার্তা পাঠানো হয়েছে! 🎉</h3>
                        <p className="text-gray-300 text-lg">আমরা ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করব</p>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white flex items-center mb-2">
                          <User className="mr-2 text-blue-400" size={16} />
                          Full Name *
                        </label>
                        <input
                          {...form.register("fullName")}
                          placeholder="আপনার পুরো নাম লিখুন"
                          className="w-full bg-gray-700 border border-gray-600 focus:border-blue-400 text-white placeholder-gray-400 h-12 px-4 rounded-lg transition-colors duration-300"
                        />
                        {form.formState.errors.fullName && (
                          <p className="text-red-400 text-sm mt-1">{form.formState.errors.fullName.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="text-white flex items-center mb-2">
                          <Mail className="mr-2 text-green-400" size={16} />
                          Email Address *
                        </label>
                        <input
                          {...form.register("email")}
                          type="email"
                          placeholder="your.email@example.com"
                          className="w-full bg-gray-700 border border-gray-600 focus:border-green-400 text-white placeholder-gray-400 h-12 px-4 rounded-lg transition-colors duration-300"
                        />
                        {form.formState.errors.email && (
                          <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white flex items-center mb-2">
                          <Phone className="mr-2 text-purple-400" size={16} />
                          Phone Number
                        </label>
                        <input
                          {...form.register("phone")}
                          placeholder="+880 1234 567890"
                          className="w-full bg-gray-700 border border-gray-600 focus:border-purple-400 text-white placeholder-gray-400 h-12 px-4 rounded-lg transition-colors duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="text-white flex items-center mb-2">
                          <MessageCircle className="mr-2 text-blue-400" size={16} />
                          Subject *
                        </label>
                        <input
                          {...form.register("subject")}
                          placeholder="বিষয় লিখুন (যেমন: ওয়েবসাইট ডিজাইন)"
                          className="w-full bg-gray-700 border border-gray-600 focus:border-blue-400 text-white placeholder-gray-400 h-12 px-4 rounded-lg transition-colors duration-300"
                        />
                        {form.formState.errors.subject && (
                          <p className="text-red-400 text-sm mt-1">{form.formState.errors.subject.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-white flex items-center mb-2">
                        <MessageCircle className="mr-2 text-green-400" size={16} />
                        Message Box *
                      </label>
                      <textarea
                        {...form.register("message")}
                        placeholder="আপনার প্রোজেক্ট সম্পর্কে বিস্তারিত লিখুন। কী ধরনের সাহায্য চান এবং আপনার লক্ষ্য কী - সব কিছু আমাদের জানান।"
                        rows={6}
                        className="w-full bg-gray-700 border border-gray-600 focus:border-green-400 text-white placeholder-gray-400 px-4 py-3 rounded-lg resize-none transition-colors duration-300"
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 text-white shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="mr-3 animate-spin" size={24} />
                          পাঠানো হচ্ছে...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="mr-3" size={24} />
                          📨 মেসেজ পাঠান
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-16 text-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                📌 "আপনার ব্যবসাকে পরবর্তী ধাপে নিতে এখনই যোগাযোগ করুন।"
              </span>
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              👉 যেকোনো মাধ্যম বেছে নিন, আমরা প্রস্তুত আপনার পাশে থাকার জন্য।
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => window.open('mailto:info@neurobinding.com')}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-lg text-white font-semibold flex items-center"
              >
                <Mail className="mr-2" size={20} />
                Email Us
              </button>
              <button 
                onClick={() => window.open('https://wa.me/8801929100100')}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-lg text-white font-semibold flex items-center"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp
              </button>
              <button 
                onClick={() => window.open('tel:+8801929100100')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-lg text-white font-semibold flex items-center"
              >
                <Phone className="mr-2" size={20} />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}