import React from "react";
import { Calendar, Clock, User, ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function BlogPostsSection() {
  const featuredPost = {
    id: 9,
    title: "ল্যান্ডিং পেজের শুরুতেই কেন Problem/Pain Point হাইলাইট করা জরুরি?",
    subtitle: "Neuro Marketing এর আলোকে",
    excerpt: "Trust Gap কমানো এবং মানুষের ব্রেইনের survival instinct কে কাজে লাগিয়ে কিভাবে আপনার ল্যান্ডিং পেজে conversion বাড়াবেন। জানুন Problem/Pain Point হাইলাইট করার বৈজ্ঞানিক কৌশল।",
    author: "Neuro Binding Team",
    authorRole: "Neuro Marketing Specialists",
    date: "2025-01-31",
    readTime: "18 min read",
    category: "Neuro Marketing",
    tags: ["Landing Page", "Pain Point", "Conversion"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    likes: 89,
    comments: 12,
    featured: true,
    slug: "landing-page-pain-point-neuro-marketing"
  };

  const recentPosts = [
    {
      id: 8,
      title: "Why Neuro-Marketing Comes in?",
      subtitle: "কেন নিউরো মার্কেটিং দরকার হয়ে উঠলো?",
      excerpt: "আজকের ব্যবসার সবচেয়ে বড় চ্যালেঞ্জ হলো মানুষের মনোযোগ পাওয়া। প্রতিদিন একজন মানুষ ৫০০০+ বিজ্ঞাপন দেখে কিন্তু সময় দেয় মাত্র ৮ সেকেন্ড।",
      author: "Neuro Binding Team",
      date: "2025-01-28",
      readTime: "12 min read",
      category: "Neuro Marketing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      likes: 245,
      comments: 38,
      slug: "why-neuro-marketing-comes-in"
    },
    {
      id: 1,
      title: "Lead Magnet Ideas for Bangladeshi Businesses",
      excerpt: "বাংলাদেশি ব্যবসাগুলোর জন্য ৫৭টি অসাধারণ লিড ম্যাগনেট আইডিয়া যা আপনার কাস্টমারদের আকর্ষিত করবে এবং বিক্রয় বৃদ্ধি করবে।",
      author: "Neuro Binding Team",
      date: "2025-01-17",
      readTime: "15 min read",
      category: "Marketing Strategy",
      image: "https://images.unsplash.com/photo-1558655146-364adaf25c8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      likes: 127,
      comments: 23,
      slug: "lead-magnet-ideas-for-bangladeshi-businesses"
    },
    {
      id: 2,
      title: "5 Neuro Marketing Principles That Boosted Our Client's Sales by 150%",
      excerpt: "Real case study showing how we applied cognitive biases and behavioral triggers to transform a struggling e-commerce site.",
      author: "Ahmed Hassan",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      title: "The Neuroscience of User Experience: What Your Brain Reveals About Design",
      excerpt: "Eye-tracking studies and neuroimaging reveal surprising insights about how users actually interact with websites.",
      author: "Dr. Fatima Khan",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "User Experience",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      likes: 156,
      comments: 31
    },
    {
      id: 4,
      title: "A/B Testing Your Way to Neuro Marketing Success: Advanced Strategies",
      excerpt: "Go beyond basic A/B testing with neuroscience-backed methods that reveal deeper insights about user behavior.",
      author: "Rakib Ahmed",
      date: "2024-01-08",
      readTime: "5 min read",
      category: "Conversion Optimization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      likes: 94,
      comments: 18
    },
    {
      id: 5,
      title: "Typography That Converts: The Hidden Psychology of Fonts",
      excerpt: "How different fonts trigger specific emotional responses and influence purchasing decisions on websites.",
      author: "Nadia Islam",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Design Psychology",
      image: "https://images.unsplash.com/photo-1586281010493-53de1b9c5903?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      likes: 73,
      comments: 12
    },
    {
      id: 6,
      title: "Building Trust Through Micro-Interactions: A Neuro Marketing Approach",
      excerpt: "Small design details that create big impacts on user trust and engagement through psychological principles.",
      author: "Dr. Sarah Rahman",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "User Experience",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      likes: 112,
      comments: 27
    },
    {
      id: 7,
      title: "The Scarcity Principle: How Limited-Time Offers Trigger Brain Responses",
      excerpt: "Understanding the neurological basis of urgency and scarcity in marketing and how to apply it ethically.",
      author: "Ahmed Hassan",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Neuro Marketing",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      likes: 138,
      comments: 34
    }
  ];

  return (
    <section className="py-20 bg-neural-bg relative">
      <div className="container mx-auto px-6">
        {/* Featured Post */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              <span className="bg-gradient-to-r from-neuro-purple to-electric-blue bg-clip-text text-transparent">
                Featured
              </span> Article
            </h2>
          </div>
          
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="glassmorphism-dark rounded-3xl overflow-hidden hover-lift cursor-pointer group transition-all duration-500 border border-electric-blue/10 hover:border-electric-blue/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-gradient-neural text-white px-4 py-2 rounded-full">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="outline" className="border-electric-blue text-electric-blue">
                    {featuredPost.category}
                  </Badge>
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-neuro-purple/20 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-3xl font-montserrat font-bold text-white mb-6 group-hover:text-electric-blue transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-8 group-hover:text-gray-200 transition-colors duration-300">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-full flex items-center justify-center">
                      <User className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{featuredPost.author}</p>
                      <p className="text-sm text-gray-400">{featuredPost.authorRole}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="text-sm">{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Heart size={16} />
                      <span className="text-sm">{featuredPost.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle size={16} />
                      <span className="text-sm">{featuredPost.comments}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Share2 size={16} />
                      <span className="text-sm">Share</span>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-neural px-6 py-3 rounded-full hover-lift group/btn">
                    Read More
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        
        {/* Recent Posts */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                Latest
              </span> Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the newest trends in neuro marketing and psychology-driven design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Link key={post.id} href={
                post.slug ? `/blog/${post.slug}` : "/blog"
              }>
                <article 
                  className="glassmorphism-dark rounded-2xl overflow-hidden hover-lift cursor-pointer group transition-all duration-500 animate-slide-up border border-electric-blue/10 hover:border-electric-blue/30"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="border-electric-blue text-electric-blue bg-neural-bg/80">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-electric-blue transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-neuro-purple rounded-full flex items-center justify-center">
                        <User className="text-white" size={14} />
                      </div>
                      <span className="text-sm text-gray-300">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span className="text-xs">{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span className="text-xs">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span className="text-xs">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={14} />
                        <span className="text-xs">{post.comments}</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-electric-blue hover:text-white hover:bg-electric-blue/20 p-2 rounded-full group/btn"
                    >
                      <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" size={14} />
                    </Button>
                  </div>
                </div>
              </article>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-neural px-8 py-4 rounded-full text-lg font-semibold hover-lift"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}