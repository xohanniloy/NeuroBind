'use client'

import React, { useState } from 'react'
import { Calendar, Clock, User, ArrowRight, ChevronDown, ChevronUp, BookOpen } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import Link from 'next/link'

export default function LeadMagnetBlogSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const blogPost = {
    title: "Lead Magnet Ideas for Bangladeshi Businesses",
    excerpt: "বাংলাদেশি ব্যবসাগুলোর জন্য ৫৭টি অসাধারণ লিড ম্যাগনেট আইডিয়া যা আপনার কাস্টমারদের আকর্ষিত করবে এবং বিক্রয় বৃদ্ধি করবে। রেস্টুরেন্ট থেকে শুরু করে ফ্যাশন, শিক্ষা, স্বাস্থ্য - প্রতিটি ব্যবসার জন্য বিশেষভাবে তৈরি কৌশল।",
    author: "Neuro Binding Team",
    date: "2025-01-17",
    readTime: "15 min read",
    category: "Marketing Strategy",
    tags: ["Lead Generation", "Bangladesh Business", "Marketing"],
  }

  const fullContent = `🔥 ব্যবসা ১: রেস্টুরেন্ট ফুড নিয়ে আগ্রহী করার ১০টি লিড ম্যাগনেট আইডিয়া

"ঢাকার সবচেয়ে জনপ্রিয় রেস্টুরেন্টগুলোর ১০টি সিক্রেট রেসিপি"
"শেফদের মুখে শোনা—কেন রেস্টুরেন্ট খাবারের টেস্ট আলাদা হয়?"
"৫টি রেস্টুরেন্ট ফুড হ্যাক যা আপনি জানলে ঘরে টেস্ট পাবেন না"
"বাংলাদেশের বিখ্যাত ৭টি রেস্টুরেন্ট ডিশ—যা একবার খেলেই মনে থাকবে"
"রেস্টুরেন্ট স্টাইলে পরিবেশনের ১০টি সিক্রেট আইডিয়া"
"কেন রেস্টুরেন্ট ফুড বন্ধু-বান্ধবদের সাথে আড্ডার মুডকে বদলে দেয়?"
"বিশ্বের ১০টি খাবার যা শুধু রেস্টুরেন্টে খাওয়ার আনন্দ পাওয়া যায়"
"রেস্টুরেন্ট বনাম ঘরের রান্না—কেন টেস্টে এত পার্থক্য?"
"শেফদের টপ ৫ সিক্রেট স্পাইস—যা শুধু রেস্টুরেন্টেই পাওয়া যায়"
"রেস্টুরেন্ট খাবারের সেরা কম্বিনেশন গাইড—কোন খাবারের সাথে কোনটা খেলে টেস্ট দ্বিগুণ?"

🔥 ব্যবসা ২: ই-কমার্স শপিং-এ আগ্রহ বাড়ানোর ১০টি লিড ম্যাগনেট আইডিয়া

"বাংলাদেশের অনলাইন শপিংয়ে সবচেয়ে বেশি সেল হওয়া ১০টি পণ্যের তালিকা"
"শুধু ই-কমার্সেই পাওয়া যায়—৫টি এক্সক্লুসিভ গ্যাজেট"
"অনলাইন ডিসকাউন্টের লুকানো সিক্রেট—কিভাবে অর্ধেক দামে পছন্দের জিনিস কিনবেন"
"রিভিউ দেখে কিভাবে ১০০% আসল প্রোডাক্ট বেছে নেবেন?"
"শুধু অনলাইন প্ল্যাটফর্মে পাওয়া যায় এমন ৭টি ফ্যাশন ট্রেন্ড"
"বছরের সেরা ই-কমার্স ডিল গাইড—যা দোকানে কখনোই পাবেন না"
"অনলাইনে অর্ডার করলে ডেলিভারি চার্জ বাঁচানোর ৫টি উপায়"
"মোবাইল দিয়ে কিভাবে মাত্র ৩ মিনিটে শপিং করবেন—এক্সপার্ট টিপস"
"কেন অনলাইন শপিং ব্যস্ত মানুষদের জন্য সময় বাঁচানোর ম্যাজিক?"
"ই-কমার্স শপিং-এর সেরা কম্বো অফার—একসাথে কিনলে দ্বিগুণ সাশ্রয়"

🔥 ব্যবসা ৩: ফ্যাশন / বুটিক

"বাংলাদেশের ট্রেন্ডিং ১০টি ফ্যাশন কালেকশন"
"এখনকার সিজনের সবচেয়ে হট ৭টি পোশাক"
"পার্টির জন্য অবশ্যই লাগবে এমন ৫টি ড্রেস"
"শুধু বুটিকে পাওয়া যায়—এক্সক্লুসিভ ১০টি ফ্যাশন আইটেম"
"শাড়ি ও জুতার পারফেক্ট কম্বিনেশন গাইড"
"কেন এই ৭টি ফ্যাশন ট্রেন্ড তরুণদের মধ্যে ভাইরাল হচ্ছে?"
"অফিসে পরার জন্য সেরা ৫টি আউটফিট আইডিয়া"
"কোন রঙ কোন অনুষ্ঠানের জন্য পারফেক্ট?"
"ফ্যাশন আইকনদের ফলো করা ১০টি পোশাক ডিজাইন"
"বুটিক পোশাকের সেরা এক্সেসরিজ কম্বো লিস্ট"

🔥 ব্যবসা ৪: কোচিং সেন্টার / শিক্ষা

"বাংলাদেশের সবচেয়ে বেশি স্টুডেন্ট জয়ী হওয়া ১০টি কোচিং"
"কেন এই ৫টি পড়ার টেকনিক আপনাকে টপার বানাতে পারে?"
"ভর্তি পরীক্ষায় সাফল্যের জন্য সবচেয়ে হেল্পফুল ৭টি বই"
"শুধু এই কোচিং সেন্টারেই শিখতে পাবেন এমন সিক্রেট ট্রিক"
"এই ১০টি স্টাডি হ্যাক ব্যবহার করলে মার্কস দ্বিগুণ হবে"
"কেন এই ৫টি কোচিং সেন্টার বিশ্ববিদ্যালয় ভর্তি পরীক্ষায় নাম্বার ওয়ান?"
"প্রতিদিন মাত্র ২ ঘণ্টা পড়েই কিভাবে ভালো রেজাল্ট করবেন"
"শিক্ষকের টপ ৫ সাজেশন—যা পরীক্ষার আগে অবশ্যই পড়তে হবে"
"বাংলাদেশের টপাররা কোন কোচিং এ পড়েছে?"
"অ্যাডমিশন টেস্টে সাফল্যের জন্য ৭টি প্রমাণিত টেকনিক"

... এবং আরও ৫৩টি ব্যবসার জন্য বিশেষভাবে তৈরি লিড ম্যাগনেট আইডিয়া!`

  return (
    <section className="py-20 bg-neural-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neuro-purple/5 via-transparent to-electric-blue/5"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-electric-blue/10 to-neuro-purple/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-neon-green/10 to-electric-blue/10 rounded-full blur-2xl opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6 animate-slide-up">
            <div className="p-4 bg-gradient-to-r from-electric-blue/20 to-neuro-purple/20 rounded-full">
              <BookOpen className="text-electric-blue" size={48} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
              Latest
            </span>{" "}
            <span className="text-white">Blog Post</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: "0.2s"}}>
            Discover powerful marketing strategies specifically designed for Bangladeshi businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <article className="glassmorphism-dark rounded-2xl p-8 hover-lift animate-slide-up" style={{animationDelay: "0.4s"}}>
            {/* Blog Header */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className="bg-gradient-neural text-white px-4 py-2">
                {blogPost.category}
              </Badge>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
            </div>

            {/* Blog Title */}
            <Link href="/blog/lead-magnet-ideas-for-bangladeshi-businesses">
              <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6 leading-tight hover:text-electric-blue transition-colors cursor-pointer">
                {blogPost.title}
              </h3>
            </Link>

            {/* Blog Excerpt */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-neuro-purple/20 to-electric-blue/20 border border-electric-blue/30 rounded-full text-sm text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Expandable Content */}
            <div className="border-t border-gray-700 pt-8">
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full bg-gradient-neural hover:bg-gradient-to-r hover:from-neuro-purple hover:to-electric-blue transition-all duration-300 py-4 text-lg font-semibold mb-6"
              >
                <span className="flex items-center justify-center gap-2">
                  {isExpanded ? (
                    <>
                      Hide Content <ChevronUp size={20} />
                    </>
                  ) : (
                    <>
                      Read Full Article <ChevronDown size={20} />
                    </>
                  )}
                </span>
              </Button>

              {isExpanded && (
                <div className="animate-slide-up">
                  <div className="prose prose-lg max-w-none text-gray-300">
                    <div className="whitespace-pre-line text-gray-300 leading-relaxed">
                      {fullContent}
                    </div>
                  </div>
                  
                  <div className="mt-12 p-6 bg-gradient-to-r from-neuro-purple/10 to-electric-blue/10 border border-electric-blue/20 rounded-xl">
                    <h4 className="text-xl font-montserrat font-bold text-white mb-4">
                      Ready to Implement These Strategies?
                    </h4>
                    <p className="text-gray-300 mb-6">
                      আপনার ব্যবসার জন্য কাস্টমাইজড লিড ম্যাগনেট তৈরি করতে চান? আমাদের এক্সপার্ট টিমের সাথে যোগাযোগ করুন।
                    </p>
                    <Button className="bg-gradient-neural hover:bg-gradient-to-r hover:from-electric-blue hover:to-neuro-purple transition-all duration-300">
                      <span className="flex items-center gap-2">
                        Contact Our Team <ArrowRight size={16} />
                      </span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}